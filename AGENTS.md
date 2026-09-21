# Portfolio Project Guidance

## Overview

- This is a single-page Next.js 16 App Router portfolio using React 19, TypeScript, Tailwind CSS, and custom CSS tokens.
- The page composition lives in [app/page.tsx](app/page.tsx); the main UI sections are separate components in [components/](components/).
- [app/layout.tsx](app/layout.tsx) owns metadata, fonts, global CSS, theme setup, and the client wrapper.
- The contact form is split between the client UI in [components/Contact.tsx](components/Contact.tsx) and the Node.js route at [app/api/contact/route.ts](app/api/contact/route.ts).

## Commands

- Install dependencies with `npm install`.
- Start local development with `npm run dev` and open `http://localhost:3000`.
- Run lint with `npm run lint`.
- Create a production build with `npm run build`; serve it with `npm run start`.
- There is currently no test script or dedicated test suite in [package.json](package.json).

## Implementation Conventions

- Prefer the existing App Router and component boundaries. Keep page sections in `components/` and compose them from `app/page.tsx`.
- Use TypeScript and preserve the existing path alias imports such as `@/components/...`.
- Treat components using state, effects, browser APIs, event handlers, or context as client components and keep the `'use client'` directive at the top.
- Reuse the design tokens and utilities in [app/globals.css](app/globals.css), especially `horizon-panel`, `telemetry-pill`, theme variables, and accent classes, before adding new global styles.
- Keep the visual language consistent: dark/light theme support, responsive Tailwind utilities, technical telemetry labels, restrained motion, and accessible interactive states.
- Preserve keyboard access and semantic labels for interactive elements. Modal and navigation changes should retain Escape handling, focus clarity, and responsive behavior.
- Put static project images and downloadable assets under `public/`; reference them with root-relative URLs such as `/projects/example.jpg`.

## Data and Environment

- Project metadata is currently defined locally in [components/Projects.tsx](components/Projects.tsx); update its `Project` type and object data together when adding a project.
- The contact route uses `RESEND_API_KEY` and sends email through Resend. Do not hard-code new secrets or expose server-only environment values to client components.
- Preserve the route's validation, spam filtering, honeypot/timing checks, and rate limiting when changing contact behavior.

## Change Validation

- Run `npm run lint` after code changes and `npm run build` for changes affecting routing, metadata, CSS, or production behavior.
- For visual changes, also inspect the page at desktop and mobile widths in the local dev server, including both themes when applicable.
- Avoid unrelated formatting or content rewrites. Review the diff and leave existing user changes intact.

## Reference

- The generated setup notes and standard Next.js links remain in [README.md](README.md).