import { TourCard, type TourCardData } from "@/components/tour/TourCard";

type FeatureWalkthroughProps = {
  tours: TourCardData[];
};

export function FeatureWalkthrough({ tours }: FeatureWalkthroughProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {tours.map((tour) => (
        <TourCard
          description={tour.description}
          key={tour.title}
          steps={tour.steps}
          title={tour.title}
        />
      ))}
    </div>
  );
}
