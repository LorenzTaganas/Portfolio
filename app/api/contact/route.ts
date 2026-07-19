import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

// Instantiate once at module level (not per-request)
const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiter: 1 successful send per IP per 5 minutes
const RATE_LIMIT_MS = 5 * 60 * 1000
const ipLastSent = new Map<string, number>()

// --- Blocklist of common disposable / throwaway email domains ---
const BLOCKED_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org',
  'trashmail.com', 'trashmail.net', 'trashmail.at', 'trashmail.io',
  'tempmail.com', 'temp-mail.org', 'temp-mail.io', 'fakeinbox.com',
  'throwam.com', 'throwaway.email', 'dispostable.com', 'yopmail.com',
  'yopmail.fr', 'maildrop.cc', 'sharklasers.com', 'guerrillamailblock.com',
  'grr.la', 'guerrillamail.info', 'spam4.me', 'spamgourmet.com', 'spamgourmet.net',
  'mailnull.com', 'spamthisplease.com', 'binkmail.com', 'bob.email',
  'clrmail.com', 'discard.email', 'discardmail.com', 'garbagemail.org',
  'getairmail.com', 'getonemail.net', 'hotmail-junk.com', 'ieatspam.eu',
  'jetable.fr.nf', 'kasmail.com', 'klassmaster.com', 'loadby.us',
  'mailbidon.com', 'mailexpire.com', 'mailfreeonline.com', 'mailnew.com',
  'mailscrap.com', 'mailzilla.com', 'mega.zik.dj', 'mintemail.com',
  'noclickemail.com', 'nospamfor.us', 'objectmail.com', 'ownmail.net',
  'pookmail.com', 'shiftmail.com', 'smellfear.com', 'spamfree24.org',
  'spamgourmet.org', 'spamherelots.com', 'spamhereplease.com', 'spamspot.com',
  '10minutemail.com', '10minutemail.net', 'mohmal.com', 'drdrb.net',
  'drdrb.com', 'sofimail.com', 'sofort-mail.de', 'spam.la', 'spamavert.com',
  'tempr.email', 'throwam.com', 'throwawayemailaddress.com',
])

// Patterns that typically indicate spam content
const SPAM_PATTERNS = [
  /\b(buy now|click here|free money|guaranteed|no risk|act now|limited time)\b/i,
  /\b(casino|poker|gambling|lottery|prize|winner|congratulations)\b/i,
  /\b(cheap meds|weight loss|make money fast|work from home|earn \$)\b/i,
  /https?:\/\/[^\s]+/gi, // URLs in messages are suspicious
  /\b(seo|backlink|link building|guest post|sponsored post)\b/i,
]

function getIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase()
  return domain ? BLOCKED_DOMAINS.has(domain) : false
}

function isSpamContent(text: string): boolean {
  return SPAM_PATTERNS.some((pattern) => pattern.test(text))
}

export async function POST(request: NextRequest) {
  try {
    // 1. Parse body
    const body = await request.json()
    const { name, email, message, _honeypot, _formLoadedAt } = body

    // 2. Honeypot check — real users leave this blank, bots fill it
    if (_honeypot && _honeypot.trim() !== '') {
      // Silently reject but return 200 to not tip off bots
      return NextResponse.json({ success: true })
    }

    // 3. Timing check — if submitted in < 3 seconds, it's likely a bot
    const formLoadedAt = typeof _formLoadedAt === 'number' ? _formLoadedAt : 0
    const timeTaken = Date.now() - formLoadedAt
    if (formLoadedAt > 0 && timeTaken < 3000) {
      return NextResponse.json({ success: true }) // Silent reject
    }

    // 4. Required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // 5. Field length limits
    if (name.trim().length > 100) {
      return NextResponse.json({ error: 'Name is too long.' }, { status: 400 })
    }
    if (email.trim().length > 254) {
      return NextResponse.json({ error: 'Email address is too long.' }, { status: 400 })
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: 'Message is too short. Please write at least 10 characters.' }, { status: 400 })
    }
    if (message.trim().length > 3000) {
      return NextResponse.json({ error: 'Message is too long (max 3000 characters).' }, { status: 400 })
    }

    // 6. Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    // 7. Disposable / fake email check
    if (isDisposableEmail(email.trim())) {
      return NextResponse.json(
        { error: 'Disposable or temporary email addresses are not allowed. Please use your real email.' },
        { status: 400 }
      )
    }

    // 8. Spam content check
    if (isSpamContent(message.trim()) || isSpamContent(name.trim())) {
      return NextResponse.json(
        { error: 'Your message was flagged as spam. Please remove any links or promotional content.' },
        { status: 400 }
      )
    }

    // 9. Rate limit (per IP, 5 min cooldown)
    const ip = getIP(request)
    const now = Date.now()
    const lastSent = ipLastSent.get(ip) ?? 0
    const elapsed = now - lastSent

    if (elapsed < RATE_LIMIT_MS) {
      const minutesLeft = Math.ceil((RATE_LIMIT_MS - elapsed) / 60000)
      const secondsLeft = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000)
      const waitMsg = minutesLeft >= 1
        ? `${minutesLeft} minute${minutesLeft !== 1 ? 's' : ''}`
        : `${secondsLeft} second${secondsLeft !== 1 ? 's' : ''}`
      return NextResponse.json(
        { error: `Please wait ${waitMsg} before sending another message.` },
        { status: 429 }
      )
    }

    // 10. Send via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'taganaslorenz81@gmail.com',
      replyTo: email.trim(),
      subject: `New message from ${name.trim()} — Portfolio Contact`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0; padding:0; background:#f4f4f5; font-family: 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:540px; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #e4e4e7;">

          <!-- Header -->
          <tr>
            <td style="background:#18181b; padding:24px 32px;">
              <p style="margin:0; font-size:13px; color:#a1a1aa; letter-spacing:0.05em; text-transform:uppercase;">Portfolio Contact</p>
              <h1 style="margin:6px 0 0; font-size:20px; color:#ffffff; font-weight:600;">New Message Received</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">

              <!-- Sender Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 16px; background:#f4f4f5; border-radius:6px;">
                    <p style="margin:0 0 4px; font-size:11px; color:#71717a; text-transform:uppercase; letter-spacing:0.05em;">From</p>
                    <p style="margin:0; font-size:15px; color:#18181b; font-weight:600;">${name.trim()}</p>
                    <p style="margin:4px 0 0; font-size:13px; color:#3f3f46;">
                      <a href="mailto:${email.trim()}" style="color:#6366f1; text-decoration:none;">${email.trim()}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none; border-top:1px solid #e4e4e7; margin:0 0 24px;" />

              <!-- Message -->
              <p style="margin:0 0 8px; font-size:11px; color:#71717a; text-transform:uppercase; letter-spacing:0.05em;">Message</p>
              <p style="margin:0; font-size:15px; color:#27272a; line-height:1.7; white-space:pre-wrap;">${message.trim()}</p>

              <!-- Divider -->
              <hr style="border:none; border-top:1px solid #e4e4e7; margin:24px 0;" />

              <!-- Reply hint -->
              <p style="margin:0; font-size:13px; color:#71717a;">
                Hit <strong>Reply</strong> to respond directly to ${name.trim()}.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px; background:#f4f4f5; border-top:1px solid #e4e4e7;">
              <p style="margin:0; font-size:11px; color:#a1a1aa; text-align:center;">
                Sent via lorenztaganas.dev · Portfolio Contact Form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    // 11. Record send time only after confirmed success
    ipLastSent.set(ip, now)

    // Prune stale entries (keep map lean)
    if (ipLastSent.size > 500) {
      const cutoff = now - RATE_LIMIT_MS
      for (const [key, ts] of ipLastSent) {
        if (ts < cutoff) ipLastSent.delete(key)
      }
    }

    console.log('[contact] Email sent, id:', data?.id)
    return NextResponse.json({ success: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[contact] Unexpected error:', msg)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
