@AGENTS.md

# Trust Fix Checklist

These tasks were identified to improve site trustworthiness on estateiq.me.

- [x] Fix social links — correct GitHub/LinkedIn, remove X
- [x] Remove broken Privacy and Terms footer links (pages don't exist yet)
- [x] Fix `propertyledger.org` CTA fallback — all buttons now stay on estateiq.me
- [ ] Set up email forwarding — `hello@estateiq.me` → personal Gmail via ImprovMX + Netlify DNS
- [ ] Update email in code from `hello@estateiq.com` to `hello@estateiq.me` (do after forwarder is live)
- [ ] Remove newsletter placeholder text from footer ("No form is active in Phase 1")
- [ ] Create Privacy Policy page at `/privacy` and re-add to footer Legal section
- [ ] Create Terms of Service page at `/terms` and re-add to footer Legal section
- [ ] Add founder info to About page — name, brief story, LinkedIn link

# Page Cleanup Checklist

UI/content improvements identified during review.

- [x] Remove `ProductPillarsSection` from home page — redundant with `HowItWorksSection` and Features page
- [x] Ledger page — replaced old components with `FlowDiagram` + `FeatureGrid`, trimmed to 3 sections
- [x] AI Copilot page — replaced custom hero/diagram/examples with standard components, trimmed to 3 sections
- [x] Docs page — removed redundant `ComingSoonCard` section
- [x] Blog page — removed DANA intro card, upcoming placeholders, and categories grid; 10 real articles lead
- [x] AI chat demo on home page — replaced static mock with animated typewriter demo (`AiChatDemo`)
- [ ] Review remaining pages: learn, changelog, faq, why-estateiq, reports, documents, security
- [ ] About page — add real founder info (name, story, LinkedIn)
