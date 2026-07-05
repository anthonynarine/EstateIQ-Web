type CodeDiagramProps = {
  children: string;
};

export function CodeDiagram({ children }: CodeDiagramProps) {
  return (
    <pre className="my-8 overflow-x-auto rounded-card border border-border-soft bg-background-app-panel p-4 text-sm leading-6 text-brand-cyan sm:p-5">
      <code>{children}</code>
    </pre>
  );
}
