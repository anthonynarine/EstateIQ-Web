import { SystemNode, type SystemNodeTone } from "@/components/visualizations/SystemNode";
import { VisualizationShell } from "@/components/visualizations/VisualizationShell";

type Layer = {
  description?: string;
  title: string;
  tone?: SystemNodeTone;
};

type LayerDiagramProps = {
  "aria-label": string;
  description?: string;
  layers: Layer[];
  title?: string;
};

export function LayerDiagram({
  "aria-label": ariaLabel,
  description,
  layers,
  title,
}: LayerDiagramProps) {
  return (
    <VisualizationShell
      aria-label={ariaLabel}
      description={description}
      title={title}
      tone="neutral"
    >
      <ol className="grid gap-3">
        {layers.map((layer, index) => (
          <li key={layer.title}>
            <SystemNode
              description={layer.description}
              eyebrow={`Layer ${index + 1}`}
              title={layer.title}
              tone={layer.tone}
            />
          </li>
        ))}
      </ol>
    </VisualizationShell>
  );
}

