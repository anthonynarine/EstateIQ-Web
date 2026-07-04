# 08 Security and Trust

## Trust Positioning

EstateIQ handles financial records, tenant context, lease data, payment records, expenses, receipts, reports, and documents. Security should be part of the product story, but public copy must avoid unsupported compliance claims.

Use concrete architecture language. Do not imply certifications, audits, or guarantees unless confirmed.

## Core Trust Principles

Organization isolation is the highest-priority control.

Authentication and authorization are separate.

Financial facts are deterministic and auditable.

Private files are not public by default.

Stripe handles payment collection and card data.

AI does not mutate financial records or invent financial values.

## Multi-Tenant Boundary

The organization is the tenant boundary. The main app enforces this through:

- `X-Org-Slug` organization context.
- Organization resolution middleware.
- Active membership checks.
- Org-scoped selectors and services.
- Cross-organization blocking tests in sensitive domains.

Website-ready language:

"Every portfolio workspace is organization-scoped, and sensitive reads and writes are filtered through that boundary."

## Authentication Model

The documented production direction uses:

- SimpleJWT as the token engine.
- Refresh tokens in HttpOnly Secure cookies.
- Access tokens in frontend memory.
- CSRF protection for cookie-authenticated unsafe requests.
- Explicit production CORS origins.

Website-ready language:

"EstateIQ is designed around secure session handling and explicit organization membership checks."

## File Handling

Documents and receipts may contain financial, tenant, legal, or property information. The security docs specify:

- Private object storage.
- Permission-checked downloads.
- Short-lived signed URLs or backend streaming.
- File type and size validation.
- Organization-owned file metadata.
- No public buckets by default.

Website-ready language:

"Files are stored privately and accessed through permission-checked download flows."

## Payments

EstateIQ uses Stripe-hosted Checkout and Stripe Customer Portal for subscription payments and plan management.

The app does not handle card data directly.

Website-ready language:

"Subscription payments are handled through Stripe-hosted flows."

## AI Trust

AI trust comes from constraints:

- Selector-backed facts.
- Registered tools.
- Source/confidence metadata.
- Fail-closed behavior when coverage is missing.
- No AI financial mutations.

Website-ready language:

"Copilot explains verified records; it does not become the ledger."

## Avoid These Claims

Do not claim:

- SOC 2 compliance.
- HIPAA compliance.
- Bank-grade security.
- End-to-end encryption.
- Automated tax compliance.
- Guaranteed accuracy.
- Production penetration testing.
- Malware scanning in current product.

These may become true later, but they need human confirmation before appearing on the website.
