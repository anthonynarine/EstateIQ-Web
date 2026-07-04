# 07 Document Intelligence

## Positioning

EstateIQ treats documents as evidence. Receipts, bills, statements, leases, tax bills, insurance policies, and legal records become more useful when they are connected to the right financial and property context.

Document intelligence should be described carefully: the current system supports a document vault, intake workflow, private storage, reviewable drafts, and confirmed document-to-expense workflows. It should not be described as fully autonomous OCR accounting unless confirmed later.

## Document Vault / Records

Current document capabilities include:

- First-class document records.
- Metadata and relationship links.
- Private file storage.
- Canonical PDF storage design.
- Accepted upload types such as PDF and common image formats.
- Download through permission-checked backend flow.
- Links to expenses and other portfolio context.

Documents can represent:

- Receipts.
- Contractor invoices.
- Utility bills.
- Lease PDFs.
- Insurance policies.
- Mortgage statements.
- Property tax bills.
- Legal notices.
- Inspection reports.
- Permits.
- Warranties.

## Document Intake

The Document Inbox is the visible surface of the Document Intake Engine.

Current capabilities include:

- Organization-specific intake email address.
- Inbound item tracking.
- Staged artifacts.
- Processing status.
- Permanent document creation from staged artifacts.
- Expense draft review workflow.
- User confirmation before financial truth is created.

Current statuses include queued, processing, awaiting review, completed, failed, and discarded.

## Expense Drafts

Expense drafts are review objects, not financial records.

They can hold candidate fields such as:

- Amount.
- Vendor.
- Date.
- Category.
- Building hint.
- Description.

Confirmed financial truth is created only after required fields are reviewed and confirmed through the backend workflow.

Required confirmation fields include:

- Scope.
- Amount.
- Expense date.
- Category.
- Linked permanent document.

## Document-To-Expense Rule

Document metadata can prefill a workflow.

Document metadata is not financial truth.

A confirmed expense becomes financial truth only after backend validation and user confirmation.

## Current vs Future

Current:

- Document vault.
- Private storage.
- Document intake inbox.
- Forwarding address surface.
- Intake item and artifact status.
- Expense draft review.
- Confirmation into real expenses.

Deferred / future:

- Deeper OCR extraction.
- AI classification.
- Virus scanning.
- Malware quarantine.
- File versioning.
- Retention and deletion workflows.
- Accountant export packages.
- Document Q&A expansion.

## Website-Ready Language

Use:

"Keep financial evidence connected to the records it supports."

"Forward bills and receipts into EstateIQ, review the details, and confirm them before they become expenses."

"Documents support financial truth; confirmed records remain the source of truth."

Avoid:

"Automatic bookkeeping from every document."

"Never review receipts again."

"AI extracts everything perfectly."

"Tax documents are compliance-ready."
