/**
 * SVG horizontal system flow diagram.
 *
 * Arrow contract: paths end at the exact left edge of each target node.
 * markerWidth=8, refX=8 — places the arrowhead tip precisely at the path
 * endpoint. Nothing crosses the node border.
 */
export function SystemFlowSvg() {
  return (
    <svg
      aria-label="EstateIQ system flow: Organization connects to Building and Unit, then Lease, then Ledger, then branching to Reports and AI Copilot"
      fill="none"
      role="img"
      style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
      viewBox="0 0 1080 260"
      width="100%"
    >
      <defs>
        {/*
         * refX="8" = markerWidth — the tip of the triangle (at local x=8)
         * aligns exactly with the path endpoint.
         * Nothing extends past the endpoint into the target node.
         */}
        <marker
          id="sfArr"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="8"
          refY="4"
        >
          <path d="M0,0 L8,4 L0,8 z" fill="rgba(255,255,255,0.24)" />
        </marker>
      </defs>

      {/* ── Connector lines ──────────────────────────────────────────────── */}
      {/*
       * Each path starts at the right edge of the source node and ends at
       * the left edge of the target node — matching the arrowhead tip
       * exactly to the border.
       */}
      <g stroke="rgba(255,255,255,0.18)" strokeLinecap="butt" strokeWidth="1.5">
        {/* Org → Building / Unit */}
        <path d="M122,138 L220,138" markerEnd="url(#sfArr)" />
        {/* Building / Unit → Lease */}
        <path d="M368,138 L464,138" markerEnd="url(#sfArr)" />
        {/* Lease → Ledger */}
        <path d="M604,138 L700,138" markerEnd="url(#sfArr)" />
        {/* Ledger → Reports  (fork upper) */}
        <path d="M848,128 L904,56" markerEnd="url(#sfArr)" />
        {/* Ledger → AI Copilot (fork lower) */}
        <path d="M848,148 L904,196" markerEnd="url(#sfArr)" />
      </g>

      {/* ── Org ─────────────────────────────────────────────────────────── */}
      {/* x=6  y=98  w=116  h=80  right-edge=122  center-y=138 */}
      <rect
        fill="rgba(34,211,238,0.10)"
        height="80"
        rx="14"
        stroke="rgba(34,211,238,0.38)"
        strokeWidth="1"
        width="116"
        x="6"
        y="98"
      />
      <text
        fill="#67E8F9"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="64"
        y="132"
      >
        Org
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="64"
        y="150"
      >
        workspace
      </text>

      {/* ── Building / Unit ─────────────────────────────────────────────── */}
      {/* x=220  y=98  w=148  h=80  left-edge=220  right-edge=368 */}
      <rect
        fill="rgba(34,211,238,0.08)"
        height="80"
        rx="14"
        stroke="rgba(34,211,238,0.30)"
        strokeWidth="1"
        width="148"
        x="220"
        y="98"
      />
      <text
        fill="#67E8F9"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="294"
        y="124"
      >
        Building
      </text>
      <text
        fill="#67E8F9"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="294"
        y="141"
      >
        + Unit
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="294"
        y="158"
      >
        property structure
      </text>

      {/* ── Lease ───────────────────────────────────────────────────────── */}
      {/* x=464  y=98  w=140  h=80  left-edge=464  right-edge=604 */}
      <rect
        fill="rgba(34,211,238,0.08)"
        height="80"
        rx="14"
        stroke="rgba(34,211,238,0.30)"
        strokeWidth="1"
        width="140"
        x="464"
        y="98"
      />
      <text
        fill="#67E8F9"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="534"
        y="132"
      >
        Lease
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="534"
        y="150"
      >
        occupancy · rent
      </text>

      {/* ── Ledger ──────────────────────────────────────────────────────── */}
      {/* x=700  y=90  w=148  h=96  left-edge=700  right-edge=848  center-y=138 */}
      <rect
        fill="rgba(52,211,153,0.10)"
        height="96"
        rx="14"
        stroke="rgba(52,211,153,0.45)"
        strokeWidth="1"
        width="148"
        x="700"
        y="90"
      />
      <text
        fill="#6EE7B7"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="774"
        y="120"
      >
        Ledger
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="774"
        y="139"
      >
        charge · payment
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="774"
        y="155"
      >
        → allocation
      </text>

      {/* ── Reports ─────────────────────────────────────────────────────── */}
      {/* x=904  y=18  w=168  h=76  left-edge=904  center-y=56 */}
      <rect
        fill="rgba(34,211,238,0.08)"
        height="76"
        rx="14"
        stroke="rgba(34,211,238,0.30)"
        strokeWidth="1"
        width="168"
        x="904"
        y="18"
      />
      <text
        fill="#67E8F9"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="988"
        y="51"
      >
        Reports
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="988"
        y="68"
      >
        derived · read-only
      </text>

      {/* ── AI Copilot ──────────────────────────────────────────────────── */}
      {/* x=904  y=158  w=168  h=76  left-edge=904  center-y=196 */}
      <rect
        fill="rgba(167,139,250,0.10)"
        height="76"
        rx="14"
        stroke="rgba(167,139,250,0.40)"
        strokeWidth="1"
        width="168"
        x="904"
        y="158"
      />
      <text
        fill="#C4B5FD"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="988"
        y="191"
      >
        AI Copilot
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="988"
        y="208"
      >
        explains · doesn&apos;t invent
      </text>
    </svg>
  );
}
