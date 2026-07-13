import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <ProductHero
        badge="Talk to EstateIQ"
        description="Have a product question, want to see EstateIQ in action, or need to discuss security? Send a note and reach the right conversation directly."
        eyebrow="Contact"
        previewItems={[
          { label: "Ask a product question", href: "#send-a-message" },
          { label: "Request a demo", href: "#send-a-message" },
          { label: "Explore early access", href: "#send-a-message" },
          {
            label: "Security or trust question",
            href: `mailto:${siteConfig.securityEmail}`,
          },
        ]}
        previewTitle="How can we help?"
        title="Let’s talk about your portfolio."
      />

      <ProductSection
        background="soft"
        description="Tell us what you are trying to solve. No generic sales queue and no pretend submission flow."
        eyebrow="Send a message"
        id="send-a-message"
        tabIndex={-1}
        title="Start the conversation."
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-start">
          <Card className="p-5 sm:p-7" variant="glass">
            <ContactForm />
          </Card>

          <div className="grid gap-4">
            <Card className="p-6" variant="outline">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                General inquiries
              </p>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                Prefer email?
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Product questions, demos, early access, partnerships, and press.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-medium text-brand-cyan transition hover:text-brand-cyan-300"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </Card>

            <Card className="p-6" variant="outline">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
                Security &amp; trust
              </p>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                A dedicated security path.
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Ask directly about access, documents, data boundaries, or AI.
              </p>
              <a
                className="mt-4 inline-flex text-sm font-medium text-brand-violet transition hover:text-brand-violet-300"
                href={`mailto:${siteConfig.securityEmail}`}
              >
                {siteConfig.securityEmail}
              </a>
            </Card>

            <p className="px-2 text-xs leading-5 text-text-muted">
              EstateIQ will use your details only to respond to your inquiry.
              Please do not send tenant records, financial documents, or account
              credentials through this form.
            </p>
          </div>
        </div>
      </ProductSection>
    </>
  );
}
