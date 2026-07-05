# System Visualization Language

EstateIQ System Visualization Language, or SVL, defines how the public website explains systems, flows, dependencies, and intelligence layers.

## Purpose

EstateIQ diagrams should explain how portfolio records become financial truth, documents become evidence, reports become insight, and AI becomes explanation.

The website should feel like a premium operating-system blueprint, not a collection of disconnected feature cards.

## Core Idea

Every visual should answer:

"How does this system work?"

not just:

"What features exist?"

## Visual Principles

SVL visuals should feel:

- premium
- minimal
- architectural
- dark-first
- calm
- technical
- information-first
- system-oriented
- human-readable in 3 seconds

## Avoid

Avoid:

- generic card walls
- repeated disconnected feature boxes
- stock illustrations
- cartoon artwork
- over-animated visuals
- diagrams that are decorative but do not explain a system

## Diagram Types

### SystemMap

Use when showing how major product domains connect. A SystemMap is best for whole-product views such as portfolio structure, ledger, documents, reports, and AI.

### FlowDiagram

Use when explaining a sequence of steps. A FlowDiagram should make order and responsibility clear.

### LayerDiagram

Use when explaining architecture or trust boundaries. A LayerDiagram should show what sits below or above another layer.

### PipelineDiagram

Use when records move through processing stages. Pipeline diagrams are useful for intake, review, reporting, and AI explanation.

### EvidenceChain

Use when showing how documents support records. Evidence chains should distinguish evidence from confirmed financial truth.

### FinancialFlow

Use when showing deterministic money logic, especially charges, payments, allocations, balances, reports, and AI explanations.

### RelationshipMap

Use when explaining relationships between entities such as organizations, buildings, units, leases, tenants, expenses, and documents.

### CapabilityFlow

Use when showing how a user question maps to a deterministic capability, structured output, and AI explanation.

### GapLifecycle

Use when explaining unsupported questions, gap events, review, implementation, testing, and release.

### ReportGenerationFlow

Use when showing how source records become metrics, summaries, dashboards, and AI explanations.

### DocumentIntelligenceFlow

Use when showing upload, review, confirmation, connected records, reports, and AI explanation for supported documents.

### TrustBoundaryDiagram

Use when explaining organization isolation, private files, authentication, permissions, and AI guardrails.

## Color Mapping

Use the existing EstateIQ semantic color system:

- Cyan: product, system, navigation, and data movement
- Emerald: ledger, financial truth, and confirmed records
- Violet: AI, document intelligence, and interpretation
- Amber: attention, review, gaps, and unresolved state
- Rose: errors, blocked states, and destructive outcomes

Color should reinforce meaning. Do not rely on color alone.

## Node Rules

Nodes should be:

- rounded
- spacious
- readable
- high contrast
- optionally supported by an icon
- labeled clearly
- focused on one idea

Do not overload nodes with paragraphs. Use short descriptions only when they clarify responsibility.

## Connector Rules

Use:

- solid arrows for deterministic flow
- dotted lines for context or evidence
- glowing accent lines for AI interpretation
- amber connectors for review or gap states

Connectors should clarify direction without making the diagram busy.

## Motion Rules

Motion should be subtle only:

- soft pulse
- line flow
- hover glow
- fade-in

Respect reduced motion. Do not use flashy animation, playful movement, or motion that distracts from the system explanation.

## Mobile Rules

On smaller screens:

- diagrams stack vertically
- connectors remain understandable
- horizontal scroll is reserved only for complex architecture maps
- text remains readable
- node order remains logical

## Accessibility Rules

SVL diagrams must include text labels.

No meaning should be communicated by color alone.

Reduced motion must be supported when motion is introduced.

Semantic sections should remain present around diagrams.

If a diagram is complex, include a short plain-English explanation nearby.

