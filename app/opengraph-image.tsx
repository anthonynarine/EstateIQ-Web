import { ImageResponse } from "next/og";

export const alt =
  "EstateIQ financial operating system for property owners";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #030607 0%, #071011 48%, #090D0F 100%)",
          color: "#F8FAFC",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 36,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "rgba(34, 211, 238, 0.12)",
                border: "1px solid rgba(34, 211, 238, 0.36)",
                borderRadius: 22,
                color: "#22D3EE",
                display: "flex",
                fontSize: 34,
                fontWeight: 800,
                height: 72,
                justifyContent: "center",
                width: 72,
              }}
            >
              ei
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 36, fontWeight: 800 }}>EstateIQ</div>
              <div
                style={{
                  color: "#A1A1AA",
                  fontSize: 22,
                  fontWeight: 500,
                }}
              >
                The Financial Operating System for Property Owners
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 66,
                fontWeight: 800,
                letterSpacing: -1,
                lineHeight: 1.02,
                maxWidth: 860,
              }}
            >
              Records, documents, reports, and AI in one operating layer.
            </div>
            <div
              style={{
                color: "#A1A1AA",
                fontSize: 27,
                lineHeight: 1.35,
                maxWidth: 880,
              }}
            >
              Built for owners who manage property like a business asset.
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {["Ledger-first", "Document-backed", "AI-grounded"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.045)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#A1A1AA",
                  fontSize: 20,
                  fontWeight: 700,
                  padding: "12px 18px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
