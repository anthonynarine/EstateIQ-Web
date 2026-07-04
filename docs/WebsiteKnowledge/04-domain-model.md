# 04 Domain Model

## Mental Model

EstateIQ is built around a clean financial spine:

```text
Organization
  -> Building
    -> Unit
      -> Lease
        -> Charge / Payment / Allocation

Organization
  -> Expense
  -> Document
  -> Subscription
  -> Reports
  -> AI Copilot
```

The system separates physical portfolio structure, lease obligations, receivables, owner expenses, evidence, reporting, and AI interpretation.

## Core Entities

### Organization

The organization is the hard tenancy boundary. Every meaningful record belongs to one organization directly or through a documented ownership chain.

Website meaning:

EstateIQ gives each portfolio a private workspace.

### Building

A building is a property in the portfolio. It is a major reporting and financial analysis dimension.

Website meaning:

See performance and obligations by property.

### Unit

A unit is a rentable space inside a building. Unit occupancy is derived from leases.

Website meaning:

Tie tenants, leases, expenses, and occupancy back to the right rentable space.

### Tenant

A tenant is a person or business associated with the organization. Tenants attach to leases through lease parties.

Website meaning:

Keep tenant context connected to lease and ledger records.

### Lease

A lease connects unit, tenant participants, dates, rent terms, and financial obligations. Lease intervals are the basis for occupancy and expected rent.

Website meaning:

Treat the lease as the contract that explains occupancy and rent obligations.

### Charge

A charge represents money owed on a lease.

Examples:

- Rent.
- Late fee.
- Miscellaneous charge.

### Payment

A payment represents money received and recorded by the owner.

Examples:

- ACH.
- Check.
- Cash.
- Zelle.
- Venmo.

### Allocation

An allocation explains how a payment was applied to one or more charges.

This is what supports partial payments, unapplied credits, and accurate delinquency.

### Expense

An expense represents owner-side spend. It can be organization-scoped, building-scoped, unit-scoped, or lease-scoped.

### Document

A document is supporting evidence. It can relate to buildings, units, leases, expenses, vendors, and tax workflows.

Documents support financial records; they are not automatically financial truth.

### Tax Documents

Tax documents synthesize structured income, expenses, documents, and property finance context into accountant-readiness views.

### Property Finance

Property finance owns building-level asset finance context:

- Mortgage profiles.
- Property tax profiles.
- Insurance profiles.
- Recurring obligations.
- Building financial snapshots.

### Reports

Reports are deterministic read models over leases, billing, expenses, buildings, and units.

Reports do not own source records.

### AI Copilot

AI explains verified records. It uses deterministic selectors and registered analyst tools. It does not become the accounting engine.

## Website Page Implication

Future website diagrams should show EstateIQ as a layered financial system:

1. Portfolio structure.
2. Lease and ledger truth.
3. Expenses and documents.
4. Reports and tax readiness.
5. AI interpretation.

This is more accurate than showing EstateIQ as a generic dashboard with disconnected widgets.
