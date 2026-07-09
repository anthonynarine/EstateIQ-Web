<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project Role

This is the **EstateIQ marketing website** (`estateiq.me`). It is a pure Next.js static/SSR site — it has **no API routes** and makes **no calls to the Django backend**. It links to the Vite/React app at `http://localhost:5173` (dev) or the production app URL via `NEXT_PUBLIC_APP_URL`.

The three-project setup in local dev:

| Project | Port | Role |
|---|---|---|
| This repo (EstateIQ-Web) | 3000 | Marketing site |
| `D:\react-django\EstateIQ\frontend` | 5173 | Vite/React app |
| `D:\react-django\EstateIQ\backend` | 8000 | Django API |

## Hydration Warning Suppressed (2026-07-08)

`app/layout.tsx` `<body>` has `suppressHydrationWarning`. This is intentional — browser extensions (e.g. ColorZilla) inject `cz-shortcut-listen="true"` into the body after SSR, causing a React hydration mismatch. The suppression is scoped to the body tag only and does not affect child content.

## Environment Files

`.env.local` — local dev, not committed to git:
```
NEXT_PUBLIC_APP_URL=http://localhost:5173
NEXT_PUBLIC_APP_DEMO_URL=http://localhost:5173/demo
NEXT_PUBLIC_APP_REGISTER_URL=http://localhost:5173/register
NEXT_PUBLIC_APP_LOGIN_URL=http://localhost:5173/login
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENVIRONMENT=development
```

`.env.staging` and `.env.production` point to live URLs. Do not commit real API keys to either.
