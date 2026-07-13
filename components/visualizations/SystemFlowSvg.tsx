/**
 * SVG horizontal system flow diagram.
 *
 * Arrow contract: paths end at the exact left edge of each target node.
 * markerWidth=8, refX=8 - places the arrowhead tip precisely at the path
 * endpoint. Nothing crosses the node border.
 */
export function SystemFlowSvg() {
  return (
    <svg
      aria-label="EstateIQ connects your rental business to properties, leases, money, reports, and an AI assistant"
      fill="none"
      role="img"
      style={{ fontFamily: "var(--font-mono, ui-monospace, monospace)" }}
      viewBox="0 0 1080 260"
      width="100%"
    >
      <defs>
        {/*
         * refX="8" = markerWidth - the tip of the triangle (at local x=8)
         * aligns exactly with the path endpoint.
         * Nothing extends past the endpoint into the target node.
         */}
        <marker
          id="sfArrCyan"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="8"
          refY="4"
        >
          <path d="M0,0 L8,4 L0,8 z" fill="rgba(103,232,249,0.42)" />
        </marker>
        <marker
          id="sfArrViolet"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="8"
          refY="4"
        >
          <path d="M0,0 L8,4 L0,8 z" fill="rgba(196,181,253,0.42)" />
        </marker>
      </defs>

      <g strokeLinecap="butt" strokeWidth="1.5">
        <g stroke="rgba(103,232,249,0.28)">
          <path d="M122,138 L220,138" markerEnd="url(#sfArrCyan)" />
          <path d="M368,138 L464,138" markerEnd="url(#sfArrCyan)" />
          <path d="M604,138 L700,138" markerEnd="url(#sfArrCyan)" />
          <path d="M848,128 L904,56" markerEnd="url(#sfArrCyan)" />
        </g>
        <path
          d="M848,148 L904,196"
          markerEnd="url(#sfArrViolet)"
          stroke="rgba(196,181,253,0.30)"
        />
      </g>
      <g
        className="system-flow-trace"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M122,138 L220,138" pathLength="1" stroke="#67E8F9" />
        <path d="M368,138 L464,138" pathLength="1" stroke="#67E8F9" />
        <path d="M604,138 L700,138" pathLength="1" stroke="#67E8F9" />
        <path d="M848,128 L904,56" pathLength="1" stroke="#67E8F9" />
        <path d="M848,148 L904,196" pathLength="1" stroke="#C4B5FD" />
      </g>

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
        y="124"
      >
        Your business
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="64"
        y="145"
      >
        one connected
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="64"
        y="159"
      >
        place
      </text>

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
        Properties
      </text>
      <text
        fill="#67E8F9"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        x="294"
        y="141"
      >
        + units
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="294"
        y="158"
      >
        what you manage
      </text>

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
        y="124"
      >
        Leases
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="534"
        y="143"
      >
        who rents
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="534"
        y="158"
      >
        what is owed
      </text>

      <rect
        className="system-flow-ledger"
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
        Money
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="774"
        y="139"
      >
        revenue · expenses
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="774"
        y="155"
      >
        payments · balances
      </text>

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
        clear financial view
      </text>

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
        AI assistant
      </text>
      <text
        fill="#71717A"
        fontSize="10"
        textAnchor="middle"
        x="988"
        y="208"
      >
        answers from your records
      </text>
    </svg>
  );
}
