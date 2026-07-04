# 05 Ledger-First Accounting

## Core Principle

EstateIQ uses ledger-first accounting for lease receivables.

The ledger is built from:

- Charges: what is owed.
- Payments: money received.
- Allocations: how payments are applied to charges.

The lease balance is derived:

```text
Lease balance = sum(charges) - sum(allocations)
```

The app does not treat a mutable balance field or a simple paid/unpaid flag as accounting truth.

## Why This Matters

Small landlords often need to understand situations that simple rent trackers handle poorly:

- Partial payments.
- One payment applied across multiple charges.
- Multiple payments applied to one charge.
- Unapplied payments.
- Delinquency aging.
- Open balances as of a specific date.

Allocations make these answers deterministic.

## Product Boundaries

Billing owns:

- Charges.
- Payments.
- Allocations.
- Lease ledger.
- Rent posting.
- Payment recording.
- Delinquency primitives.

Revenue reads from the billing ledger. It does not own money records.

Reports synthesize from billing, leases, expenses, and buildings. They do not create financial truth.

AI explains ledger-backed outputs. It does not calculate balances from scratch or mutate financial records.

## Current User-Facing Surfaces

Current app surfaces include:

- Lease ledger page.
- Ledger summary cards.
- Post monthly rent charge action.
- Record payment modal.
- Allocation tables/surfaces.
- Delinquency report.
- Revenue workspace.
- Dashboard attention states for open balances, overdue charges, and unapplied payments.

## Website-Ready Language

Use:

"See what was charged, what was paid, and how each payment was applied."

"EstateIQ derives balances from ledger records instead of relying on manually edited totals."

"Track open balances and delinquency from the same records that power reports and AI explanations."

Avoid:

"Automatically handles all accounting."

"Guaranteed accurate books."

"Replaces your accountant."

"Collects rent for you."

## Trust Message

Ledger-first architecture is a key differentiator. It supports a premium, serious message:

EstateIQ is built to preserve financial history, not overwrite it.
