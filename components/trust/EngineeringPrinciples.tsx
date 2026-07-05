import { TrustGrid } from "@/components/trust/TrustGrid";

const principles = [
  {
    title: "Organization isolation",
    description:
      "Portfolio data is modeled around organization boundaries and scoped access patterns.",
  },
  {
    title: "Deterministic financial records",
    description:
      "Financial facts come from structured records and deterministic calculation paths.",
  },
  {
    title: "Ledger-first accounting",
    description:
      "Balances are explained through charges, payments, allocations, and traceable ledger history.",
  },
  {
    title: "Source-backed AI",
    description:
      "AI is positioned as an explanation layer over verified records, reports, and analyst tools.",
  },
  {
    title: "Document confirmation",
    description:
      "Documents support records as evidence and should not silently create financial truth.",
  },
  {
    title: "Security philosophy",
    description:
      "Trust depends on clear boundaries, careful defaults, scoped data access, and honest claims.",
  },
];

export function EngineeringPrinciples() {
  return <TrustGrid items={principles} />;
}
