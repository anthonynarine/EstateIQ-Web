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

## Homepage UI Handoff (2026-07-13)

Work is in progress on the homepage visual refresh. Preserve the existing dirty worktree and continue from the files on disk; do not reset unrelated changes.

### Current stopping point

The latest work is the **"Why the AI is different"** section immediately after `AiCopilotSection` on the homepage.

- The old comparison table was replaced with `components/marketing/AiDifferenceDiagram.tsx`.
- EstateIQ appears first and "Bolt-on AI" appears second.
- EstateIQ sources are Ledger, Documents, and Reports, connected to a compact "EstateIQ AI" chip.
- Each source follows a dashed guide path with a color-matched signal ball:
  - Ledger: cyan ball travels down, then inward from the left.
  - Documents: violet ball travels straight down.
  - Reports: emerald ball travels down, then inward from the right.
- When all three balls arrive, the EstateIQ AI chip must light **immediately** and the green output ball must begin dropping to "Grounded answer" in the same frame.
- The shared animation rhythm is 5.8 seconds and reduced-motion preferences disable the motion.
- The most recent adjustment restored the original input travel speed and removed the slow easing delay from the AI chip activation. Continue visual tuning from this exact behavior.

Relevant animation CSS is in `app/globals.css` under the `ai-chip-thread`, `ai-input-signal-*`, `ai-difference-core`, and `ai-difference-signal` selectors/keyframes.

### Earlier homepage changes in the same worktree

- `FinancialTruthSection` now demonstrates `$3,200` charges minus `$1,400` payments equals a `$1,800` remaining balance. The minus and equals operators use a restrained sequential glow with no scaling.
- `DocumentIntelligenceSection` uses "AI extract," a neutral draft-review card, a compact outlined "Needs approval" status, and orbiting dots on workflow-number hover. Its outer background slab was removed and its top spacing was tightened to sit closer to the ledger.
- `AiCopilotSection` currently uses:
  - Eyebrow: "Your business’s personal AI assistant"
  - Title: "Your entire portfolio. One question away."
  - Description ending: "It’s the tool you won’t want to manage without."

### Verification

Production builds have been passing with Next.js 16.2.10. After any further visual or timing edits, run:

```powershell
Set-Location 'D:\react-django\EstateIQ-Web'
npm run build
git diff --check
```
