import { Section } from "@/components/ui/Section";
import { SystemFlowSvg } from "@/components/visualizations/SystemFlowSvg";

export function HowItWorksSection() {
  return (
    <Section
      description="EstateIQ connects every layer of your rental business—from the properties you manage to the money you earn and spend."
      eyebrow="A system built to solve it"
      id="how-it-works"
      title="Everything works together, so nothing gets lost."
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
              Your records create the reports. AI helps you understand them.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
