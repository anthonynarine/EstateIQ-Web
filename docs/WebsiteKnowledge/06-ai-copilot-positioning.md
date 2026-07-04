# 06 AI Copilot Positioning

## Positioning

EstateIQ Copilot is a grounded financial assistant for small landlords.

It should be positioned as an intelligence layer over verified portfolio records, not as a free-roaming chatbot.

## Architecture Truth

The main app uses a deterministic-core AI architecture:

```text
Deterministic truth layer
-> conversation control and routing
-> deterministic analyst tools
-> optional LLM explanation layer
-> safety and logging
```

Financial facts come from selectors, services, and registered analyst tools.

The LLM, when enabled, presents verified facts. It does not invent balances, classify financial truth, or mutate records.

## Current Modes

### Product Guide

Answers workflow and navigation questions such as how to upload a receipt, where to post rent, or what a page is for.

### Portfolio Analyst

Answers data questions through registered deterministic tools. Current tool coverage includes domains such as onboarding, portfolio health, monthly executive summary, revenue health, collections, balances, charge gaps, unallocated payments, lease health, building health, property finance summary, expense health and comparisons, NOI, and tax readiness.

If no registered tool can answer, the system fails closed instead of guessing.

## Current Frontend Experience

The Copilot drawer is mounted globally in the dashboard layout.

It uses:

- Current page context.
- Organization context.
- Onboarding status.
- Suggested prompts.
- Source and confidence metadata.
- Actions returned by the backend.

Suggested prompts adapt to onboarding until setup is complete, then become page-aware.

## Website-Ready Language

Use:

"Ask questions about your portfolio and get answers grounded in your records."

"EstateIQ Copilot explains ledger, expense, document, and reporting data without becoming the system of record."

"When the product cannot answer safely, it does not guess."

"AI is layered over deterministic financial records."

Avoid:

"AI does your accounting."

"Ask anything and get a perfect answer."

"Fully autonomous property management."

"No need to review financial records."

## Current vs Future

Current:

- Copilot drawer.
- Product Guide mode.
- Portfolio Analyst mode.
- Deterministic tool registry.
- Source/confidence metadata.
- Daily AI limits by plan.

Planned / in progress:

- Per-tenant balance analyst tool.
- LLM streaming.
- Building-scoped expense AI queries.
- Expanded analyst coverage from logged gaps.

Future:

- Decision briefs.
- Scenario interpretation.
- Predictive risk support.
- Portfolio recommendations.

## Key Website Message

EstateIQ is AI-native because the product creates structured financial truth first. That makes AI useful, constrained, and trustworthy.
