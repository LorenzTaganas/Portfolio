import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

// Instantiate once at module level (not per-request)
const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiter: 1 successful send per IP per 60 seconds
const RATE_LIMIT_MS = 60 * 1000
const ipLastSent = new Map<string, number>()

function getIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

export async function POST(request: NextRequest) {
  try {
    // 1. Parse body first
    const body = await request.json()
    const { name, email, message } = body

    // 2. Validate fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    // 3. Rate limit check (per IP, 60s cooldown)
    const ip = getIP(request)
    const now = Date.now()
    const lastSent = ipLastSent.get(ip) ?? 0
    const elapsed = now - lastSent

    if (elapsed < RATE_LIMIT_MS) {
      const secondsLeft = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000)
      return NextResponse.json(
        {
          error: `Please wait ${secondsLeft} second${secondsLeft !== 1 ? 's' : ''} before sending another message.`,
        },
        { status: 429 }
      )
    }

    // 4. Send via Resend (v3+ uses `replyTo`, not `reply_to`)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'taganaslorenz81@gmail.com',
      replyTo: email.trim(),
      subject: `New message from ${name.trim()} — Portfolio Contact`,
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; color: #111;">
          <p style="font-size: 13px; color: #888; margin: 0 0 24px;">New message from your portfolio</p>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name.trim()}</p>
          <p style="margin: 0 0 24px;"><strong>Email:</strong> ${email.trim()}</p>
          <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
          <p style="margin: 0; white-space: pre-wrap; color: #333; line-height: 1.6;">${message.trim()}</p>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    // 5. Record send time only after confirmed success
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
