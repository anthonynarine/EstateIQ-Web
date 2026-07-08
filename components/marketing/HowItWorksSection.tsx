import { Section } from "@/components/ui/Section";
import { SystemFlowSvg } from "@/components/visualizations/SystemFlowSvg";

export function HowItWorksSection() {
  return (
    <Section
      description="One structure, from the property down to the answer your AI gives you. Nothing floats on its own."
      eyebrow="How it connects"
      id="how-it-works"
      title="Every number traces back to a real record."
    >
      <div className="overflow-x-auto">
        <div className="min-w-[680px]">
          <div className="relative rounded-2xl border border-border bg-gradient-to-b from-background-app-panel to-background-app-soft px-8 py-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl bg-dot-grid opacity-[0.06]"
            />
            <SystemFlowSvg />
            <p className="relative mt-6 text-center text-sm leading-6 text-text-secondary">
              Reports and AI are downstream. The ledger stays upstream.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
