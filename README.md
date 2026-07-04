# EstateIQ-Web

EstateIQ-Web is the public marketing website for EstateIQ.

EstateIQ is the official product name. The public positioning is:

> The Financial Operating System for Small Landlords.

This repository is separate from the main EstateIQ application. It uses the product, brand, and architecture knowledge from the main app to build a focused public website without editing the production application codebase.

## Purpose

EstateIQ-Web exists to communicate what EstateIQ is, who it serves, and why its financial operating system model is different from traditional property management software.

The website should consistently reinforce:

- EstateIQ organizes financial truth first.
- Independent landlords with 1-50 units are the primary audience.
- Ledger-first records are a trust differentiator.
- Documents support financial records.
- Reports are deterministic read models.
- AI explains verified information and never replaces financial records.

## Relationship To The Main EstateIQ App

The main EstateIQ application lives outside this repository and is used as read-only product reference.

EstateIQ-Web should not edit the main app. Public website work should use local documentation in this repository as the source of truth:

- [Brand Handbook](./docs/Brand/README.md)
- [Website Knowledge Pack](./docs/WebsiteKnowledge/README.md)

The website is a Next.js App Router project. The main EstateIQ app is a separate Django/React product application.

## Technology Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Geist fonts through `next/font`
- ESLint with `eslint-config-next`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Development Commands

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run build
```

Creates a production build and type-checks the application.

```bash
npm run start
```

Starts the production server after a successful build.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  product/
  ledger/
  ai-copilot/
  security/
  ...

components/
  ai/
  layout/
  marketing/
  product/
  security/
  ui/

docs/
  Brand/
  WebsiteKnowledge/

lib/
  cn.ts
  design-tokens.ts
  navigation.ts
  site.ts

tailwind.config.ts
```

## Folder Overview

`app/`

Next.js App Router pages and root layout. The root layout owns the shared site shell.

`components/layout/`

Site header, footer, navigation items, and mobile navigation.

`components/ui/`

Reusable UI primitives such as `Button`, `Card`, `Container`, `Section`, and `Badge`.

`components/marketing/`

Homepage section components.

`components/product/`

Reusable product-page components used by product, ledger, and related pages.

`components/ai/`

AI Copilot page-specific components.

`components/security/`

Security page-specific components.

`lib/`

Site config, navigation config, design tokens, and class name utilities.

`docs/`

Brand and product knowledge documentation used to guide website development.

## Documentation Links

- [Brand Philosophy](./docs/Brand/01-brand-philosophy.md)
- [Brand Voice](./docs/Brand/02-brand-voice.md)
- [Design Language](./docs/Brand/03-design-language.md)
- [Marketing Messaging](./docs/Brand/04-marketing-messaging.md)
- [Page Guidelines](./docs/Brand/05-page-guidelines.md)
- [Component Guidelines](./docs/Brand/06-component-guidelines.md)
- [Product Overview](./docs/WebsiteKnowledge/01-product-overview.md)
- [Ideal Customer](./docs/WebsiteKnowledge/02-ideal-customer.md)
- [Feature Inventory](./docs/WebsiteKnowledge/03-feature-inventory.md)
- [Domain Model](./docs/WebsiteKnowledge/04-domain-model.md)
- [Ledger-First Accounting](./docs/WebsiteKnowledge/05-ledger-first-accounting.md)
- [AI Copilot Positioning](./docs/WebsiteKnowledge/06-ai-copilot-positioning.md)
- [Document Intelligence](./docs/WebsiteKnowledge/07-document-intelligence.md)
- [Security and Trust](./docs/WebsiteKnowledge/08-security-and-trust.md)
- [Website Page Map](./docs/WebsiteKnowledge/09-website-page-map.md)
- [Homepage Content Brief](./docs/WebsiteKnowledge/10-homepage-content-brief.md)
- [Product Page Content Briefs](./docs/WebsiteKnowledge/11-product-page-content-briefs.md)

## Current Project Phases

Phase 0: Design system foundation.

Status: Complete.

Includes Tailwind theme, semantic colors, radius, shadows, background utilities, global CSS utilities, and design tokens.

Phase 0.5: EstateIQ brand foundation.

Status: Complete.

Includes brand philosophy, voice, design language, marketing messaging, page guidelines, and component guidelines.

Website Knowledge Pack.

Status: Complete.

Documents product model, customer, feature inventory, ledger-first accounting, AI positioning, document intelligence, security, page map, and content briefs.

Phase 1: Site shell and layout system.

Status: Complete.

Includes site config, navigation config, header, mobile navigation, footer, reusable UI primitives, placeholder routes, and root layout.

Phase 2: Homepage.

Status: Complete.

Includes the complete homepage narrative built from reusable marketing sections.

Phase 3A: Product and Ledger pages.

Status: Complete.

Includes focused public pages for the product overview and ledger-first accounting model.

Phase 3B: AI Copilot, Security, and README.

Status: Complete.

Includes the AI Copilot marketing page, Security & Trust marketing page, and this repository README.

## Architecture Overview

EstateIQ-Web uses a server-first App Router architecture.

Pages compose reusable section components. Components are grouped by purpose:

- `layout` for global shell.
- `ui` for primitives.
- `marketing` for homepage sections.
- `product` for reusable product-page patterns.
- `ai` and `security` for page-specific components.

Client components are used only where interaction requires browser state, such as mobile navigation.

## Design System Overview

The site uses the EstateIQ dark-first visual system:

- Dark canvas.
- Frosted glass surfaces.
- Thin borders.
- Cyan as the primary brand color.
- Emerald for financial health and success.
- Violet for AI and intelligence.
- Amber for review or attention states.
- Rose for risk or error states.
- Rounded card surfaces.
- Strong, calm typography.

Design tokens live in [lib/design-tokens.ts](./lib/design-tokens.ts). Tailwind configuration lives in [tailwind.config.ts](./tailwind.config.ts), with Tailwind 4 theme tokens also declared in [app/globals.css](./app/globals.css).

## Website Organization

Current public routes:

- `/`
- `/product`
- `/features`
- `/ledger`
- `/ai-copilot`
- `/docs`
- `/blog`
- `/about`
- `/security`
- `/contact`

Built pages:

- Homepage.
- Product.
- Ledger.
- AI Copilot.
- Security.

Placeholder pages:

- Features.
- Docs.
- Blog.
- About.
- Contact.

## Copy And Claim Rules

Do not use the old placeholder product name in public copy.

Do not publish exact pricing until confirmed.

Do not use fake testimonials, fake customer logos, fabricated metrics, or unsupported claims.

Do not describe EstateIQ as traditional property management software.

Do not claim AI performs autonomous accounting, knows everything, or replaces financial records.

AI should always be described as grounded, deterministic, traceable, and source-backed.

## Roadmap

Near-term website work:

- Phase 3C: Features, Documents, and Reports pages.
- Phase 3D: About and Contact pages.
- Phase 3E: Docs and Blog foundations.
- Phase 4: SEO metadata, sitemap, robots, structured content, and conversion polish.
- Phase 5: Visual QA, accessibility QA, content review, and launch hardening.

Future website work should continue to use `docs/Brand/` and `docs/WebsiteKnowledge/` as the source of truth.
