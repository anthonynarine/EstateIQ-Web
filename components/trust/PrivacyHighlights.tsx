import { TrustGrid } from "@/components/trust/TrustGrid";

const highlights = [
  {
    title: "Scoped portfolio access",
    description:
      "The product is designed so organization context matters when reading or writing portfolio records.",
  },
  {
    title: "Private document posture",
    description:
      "Files should be handled through permission-aware flows rather than public document assumptions.",
  },
  {
    title: "Plain-language boundaries",
    description:
      "EstateIQ avoids unsupported compliance claims and explains the practical trust model clearly.",
  },
];

export function PrivacyHighlights() {
  return <TrustGrid items={highlights} />;
}
