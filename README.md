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
  documents/
  reports/
  ai-copilot/
  security/
  why-estateiq/
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

`components/about/`

About page-specific components.

`components/contact/`

Contact page-specific components, including the static beta-interest placeholder.

`components/why/`

Why EstateIQ page-specific components.

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

Phase 3C: Features, Documents, and Reports pages.

Status: Complete.

Includes the capability overview page, document intelligence page, and deterministic reporting page.

Phase 3D: About, Contact, and Why EstateIQ pages.

Status: Complete.

Includes the About page, Contact page, Why EstateIQ philosophy page, and a static beta-interest placeholder. No backend submission flow was added.

Phase 5A: AI Academy.

Status: Complete.

Includes the AI Academy overview, Grounded AI page, Analyst Tools page, Gap Tool page, and Financial Truth page. SEO metadata was added for every AI Academy route, the sitemap route list was updated through shared SEO configuration, and the footer Resources links now include AI Academy.

Phase 5B: Documentation, Learn Center, Blog, and Changelog Foundation.

Status: Complete.

Includes reusable content platform components, a Learn Center, a Documentation hub, a Blog foundation, and a Changelog timeline. SEO metadata was added for `/learn`, `/docs`, `/blog`, and `/changelog`; sitemap coverage is handled through the shared public route configuration; and footer Resources now includes Documentation, Learn, AI Academy, Blog, Changelog, and Security.

Phase 6: Launch Readiness & Product Experience.

Status: Complete.

Includes the FAQ page, product showcase framework, feature walkthrough framework, trust component system, beta messaging components, reusable CTA components, and launch polish across product, features, security, contact, and homepage trust sections. SEO metadata was added for `/faq`, and sitemap coverage is handled through the shared public route configuration.

Phase 6B: DANA Blog Series Foundation.

Status: Complete.

Includes the first DANA architecture articles, reusable blog article components, shared blog article metadata, and a blog index that lists real published articles. SEO metadata was added for each article route, sitemap coverage is handled through the shared public route configuration, and upcoming DANA articles are shown as coming soon without fabricated content.

## Architecture Overview

EstateIQ-Web uses a server-first App Router architecture.

Pages compose reusable section components. Components are grouped by purpose:

- `layout` for global shell.
- `ui` for primitives.
- `marketing` for homepage sections.
- `product` for reusable product-page patterns.
- `ai` and `security` for page-specific components.
- `academy` for AI Academy education components.
- `content` for reusable publishing, documentation, learning, blog, and changelog components.
- `blog` for article layout, article cards, code diagrams, and series navigation.
- `showcase` for illustrative product screenshot and dashboard preview frameworks.
- `tour` for reusable product walkthrough components.
- `trust` for reusable trust, privacy, engineering principle, and data ownership components.
- `beta` for early-access and beta messaging components.
- `cta` for standardized primary, secondary, and final CTA components.

Client components are used only where interaction requires browser state, such as mobile navigation.

## Content Architecture

EstateIQ now has four public publishing surfaces:

- Learn: educational content for landlords, organized around financial foundations, ledger accounting, operations, documents, AI, reporting, tax preparation, and portfolio growth.
- Documentation: product and technical documentation hub for getting started, product guides, financial system notes, AI Academy paths, security, architecture, and release notes.
- Blog: editorial surface for future product updates, finance education, engineering notes, AI writing, and announcements.
- Changelog: transparent release history for completed website and product education milestones.

These surfaces are intentionally index-first. They are ready for future MDX content, search, tags, RSS, author pages, release filtering, versioned documentation, tutorials, demos, architecture articles, API documentation, and case studies without restructuring the public routes.

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
- `/documents`
- `/reports`
- `/ai-copilot`
- `/ai-academy`
- `/ai-academy/grounded-ai`
- `/ai-academy/analyst-tools`
- `/ai-academy/gap-tool`
- `/ai-academy/financial-truth`
- `/learn`
- `/docs`
- `/blog`
- `/blog/why-ai-wrappers-arent-enough`
- `/blog/biggest-mistake-building-ai-native-application`
- `/blog/ai-should-explain-your-software`
- `/changelog`
- `/about`
- `/security`
- `/contact`
- `/faq`
- `/why-estateiq`

Built pages:

- Homepage.
- Product.
- Ledger.
- Features.
- Documents.
- Reports.
- AI Copilot.
- AI Academy.
- Grounded AI.
- Analyst Tools.
- Gap Tool.
- Financial Truth.
- Learn Center.
- Documentation.
- Blog.
- DANA architecture articles.
- Changelog.
- Security.
- About.
- Contact.
- FAQ.
- Why EstateIQ.

Placeholder pages:

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

- Phase 5: Visual QA, accessibility QA, content review, and launch hardening.

Future website work should continue to use `docs/Brand/` and `docs/WebsiteKnowledge/` as the source of truth.
