import { DashboardPreview } from "@/components/showcase/DashboardPreview";
import { ProductScreenshot } from "@/components/showcase/ProductScreenshot";

export function FeatureShowcase() {
  return (
    <ProductScreenshot
      description="The preview shows the kind of structured financial view EstateIQ is designed around: portfolio context, ledger-derived totals, expenses, documents, reports, and grounded AI explanation."
      title="A calm command center for portfolio financial records."
    >
      <DashboardPreview />
    </ProductScreenshot>
  );
}
