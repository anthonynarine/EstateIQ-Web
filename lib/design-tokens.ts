export const designTokens = {
  colors: {
    background: {
      app: "#030607",
      appSoft: "#071011",
      appPanel: "#090D0F",
    },
    surface: {
      default: "rgba(255,255,255,0.03)",
      elevated: "rgba(255,255,255,0.06)",
      strong: "rgba(255,255,255,0.09)",
    },
    border: {
      soft: "rgba(255,255,255,0.08)",
      default: "rgba(255,255,255,0.12)",
      strong: "rgba(255,255,255,0.18)",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#A1A1AA",
      muted: "#71717A",
      faint: "#52525B",
    },
    brand: {
      cyan: "#22D3EE",
      emerald: "#34D399",
      violet: "#A78BFA",
      amber: "#FBBF24",
      rose: "#FB7185",
    },
  },
  meanings: {
    cyan: "Primary brand color for financial clarity, focus states, and main calls to action.",
    emerald: "Financial health, success, positive movement, and reconciled states.",
    violet: "AI Copilot, intelligence layer, automation, and model-assisted insights.",
    amber: "Attention, pending work, incomplete setup, and review states.",
    rose: "Error, risk, failed syncs, destructive outcomes, and urgent exceptions.",
  },
  radius: {
    card: "1.5rem",
    panel: "2rem",
    button: "9999px",
  },
  shadows: {
    glowCyan: "0 0 36px rgba(34, 211, 238, 0.22)",
    glowEmerald: "0 0 36px rgba(52, 211, 153, 0.2)",
    glowViolet: "0 0 36px rgba(167, 139, 250, 0.22)",
    cardSoft:
      "0 24px 80px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
  },
  usageGuidance: {
    appShell:
      "Use for the page-level marketing canvas and command-center dashboards.",
    glassCard:
      "Use for premium SaaS surfaces, feature panels, pricing cards, and compact proof blocks.",
    heroGrid:
      "Use behind first-viewport compositions where subtle structure should support the dark canvas.",
    textGradientCyan:
      "Use sparingly for high-value financial clarity phrases and primary hero emphasis.",
    textGradientAi:
      "Use for AI Copilot and intelligence messaging, especially when paired with violet glow.",
  },
} as const;
