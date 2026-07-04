# Component Guidelines

## Buttons

Buttons should be clear, direct, and restrained. Use the primary button for the main action on a surface. Use secondary or outline buttons for supporting actions. Use ghost buttons for low-emphasis navigation and utility actions.

Button copy should be short and action-oriented. Avoid vague labels such as "Learn More" when a more specific action is available.

Primary actions should generally use cyan. Destructive actions should use rose only when the action is truly risky or irreversible.

## Cards

Cards should use the EstateIQ glass aesthetic when they represent premium surfaces, product modules, or grouped financial concepts. Use outline cards for quieter supporting content and solid cards for grounded product-like areas.

Cards should not become decorative clutter. Each card should communicate a distinct idea, metric, workflow, or decision point.

## Sections

Sections should have a clear narrative role. A section should introduce one concept and support it with concise copy, UI, or structured proof.

Use consistent vertical rhythm. Marketing sections may breathe more than product surfaces, but spacing should still feel intentional and controlled.

## Containers

Containers define the website's content width and horizontal rhythm. All pages should use the shared Container component instead of local max-width and padding rules.

This keeps page composition consistent across breakpoints and prevents each page from inventing its own layout system.

## Navigation

Navigation should be stable, minimal, and predictable. It should help visitors understand the product areas without overwhelming them.

Desktop navigation should prioritize product understanding. Mobile navigation should feel polished and deliberate, not like a default dropdown.

Active states should be visible and accessible.

## Footer

The footer should feel like a premium SaaS footer: organized, quiet, and useful. It should include product links, resources, company links, legal links, brand statement, social links, and a newsletter placeholder when appropriate.

The footer should not become a second homepage.

## Icons

Icons should clarify function or category. Use them sparingly. Avoid cartoonish, overly playful, or decorative icons.

When icons are interactive, they need accessible labels or adjacent text.

## Spacing

Use shared spacing patterns from the layout primitives. Avoid hardcoding one-off spacing unless the component has a specific layout need.

Financial interfaces require scanability. Do not compress critical information, but avoid excessive whitespace that makes the product feel abstract.

## Consistency Rules

Use semantic color classes rather than raw color values when possible.

Use shared components before creating new local patterns.

Do not duplicate page shell code.

Do not introduce a new visual style for a single section.

Do not use any legacy placeholder name as a brand or product name.

Do not use AI language that implies ungrounded or unsupported automation.
