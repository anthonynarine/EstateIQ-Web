# 03 Feature Inventory

This inventory separates current product surfaces from planned and future work. Website copy should only present current features as available.

## Current Product Surfaces

### Portfolio Structure

Buildings and units establish the physical portfolio structure. Buildings belong to an organization. Units belong to buildings. This creates the reporting spine for occupancy, expenses, and building-level rollups.

Website-ready language:

EstateIQ organizes each property and unit so financial records can be tied back to the right part of the portfolio.

### Tenants and Leases

The leases domain models tenants, leases, and lease parties. Occupancy is lease-driven, not a loose boolean flag. Lease intervals use a start-inclusive, end-exclusive model.

Website-ready language:

Connect tenants and leases to the units they occupy so rent obligations, occupancy, and history stay grounded in real lease records.

### Billing Ledger

The billing domain owns charges, payments, and allocations. Lease balances are derived from charges minus allocations. The frontend includes a lease ledger page, rent posting, payment recording, allocation surfaces, and delinquency reporting.

Website-ready language:

Track what was charged, what was paid, and how each payment was applied.

### Revenue

Revenue is a read model over the billing ledger. It surfaces expected rent, applied collections, outstanding balances, collection status rows, and workflows back to ledger actions.

Website-ready language:

See rent performance from ledger-backed records instead of manually maintained balances.

### Expenses

Expenses model owner-side outflows, including categories, vendors, scopes, attachments, archive/unarchive behavior, and reporting by month, category, and building.

Website-ready language:

Capture operating expenses with the property, unit, lease, category, vendor, and document context needed for reliable reporting.

### Reports Dashboard

Reports are derived read models. Current dashboard data includes monthly cash flow, expected rent, charges due, payments collected, expenses, net cash flow, outstanding balance, delinquent lease count, unapplied payment balance, occupancy, attention summaries, and building rollups.

Website-ready language:

Understand what you expected to collect, what came in, what went out, and what still needs attention.

### Document Vault / Records

Documents are a first-class evidence domain. The app stores metadata in PostgreSQL and files in private storage. Accepted uploads are converted to canonical PDF where applicable. Documents can relate to buildings, units, leases, expenses, vendors, and tax workflows.

Website-ready language:

Keep receipts, lease PDFs, statements, insurance documents, tax bills, and property records connected to the financial records they support.

### Document Inbox / Intake

Document Intake provides an inbound document workflow with an org-specific forwarding address, intake items, artifacts, statuses, and reviewable expense drafts. Current processing moves staged artifacts into permanent documents. Expense draft confirmation creates real expenses only after user-confirmed fields.

Website-ready language:

Forward bills and receipts into EstateIQ, review what arrived, and confirm expense details before they become financial records.

### Tax Documents

The tax documents workspace builds deterministic readiness output. It checks income records, expenses, categorized expenses, missing documents, and property finance context. It should be described as accountant-readiness support, not tax compliance.

Website-ready language:

See what is ready for accountant review and what records still need attention.

### Building Financials

The property finance domain is user-facing as Building Financials. Backend v1 includes mortgage profiles, property tax profiles, insurance profiles, recurring obligations, and a combined building financial snapshot endpoint.

Website-ready language:

Model the ownership obligations behind each building, including debt, taxes, insurance, and recurring costs.

### AI Copilot

Copilot has Product Guide and Portfolio Analyst modes. Product Guide answers workflow questions. Portfolio Analyst uses registered deterministic analyst tools over org-scoped selectors. The LLM, when enabled, presents verified facts; it does not create financial truth or mutate records.

Website-ready language:

Ask questions about your portfolio and get answers grounded in your records, ledger, documents, and reports.

### Subscriptions

The app includes SaaS subscription plans, Stripe-hosted Checkout, Stripe Customer Portal, webhooks, org-level feature gates, unit limits, AI daily limits, document Q&A entitlement, and storage limits.

Pricing needs human confirmation before public launch because the product docs contain conflicting pricing hypotheses and implemented plan copy.

## Planned / In Progress

- Per-tenant balance analyst tool.
- LLM streaming.
- Building-scoped expense AI queries.
- Invoice history in subscription billing.
- Annual billing toggle UI.
- Billing workbench and review queues.
- Richer reporting outputs.

## Future Roadmap

- Scenario simulator.
- Portfolio health score expansion.
- Executive summary PDF.
- Operational reminders.
- Integrations.
- Anomaly detection.
- Portfolio recommendations.
- Acquisition comparison tools.

## Do Not Claim Yet

Do not claim bank sync, automated rent collection, tenant portals, automated tax filing, CPA approval, production SOC 2, live OCR extraction, autonomous accounting, market value integrations, predictive risk scoring, or guaranteed financial savings unless the product owner confirms current support.
