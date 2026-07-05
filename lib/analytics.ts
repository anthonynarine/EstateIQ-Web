export type AnalyticsProvider = "none" | "custom" | "ga4" | "plausible" | "posthog";

const configuredProvider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
const configuredKey = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export const analyticsConfig = {
  provider: (configuredProvider ?? "none") as AnalyticsProvider,
  key: configuredKey ?? "",
  enabled: Boolean(configuredProvider && configuredKey),
} as const;

export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean | null>;
};

export function trackAnalyticsEvent(event: AnalyticsEvent) {
  void event;

  if (!analyticsConfig.enabled) {
    return;
  }

  // Provider wiring is intentionally deferred until a real analytics vendor is selected.
}
