"use client";

import { useState } from "react";

const cards = [
  { tag: "Spreadsheet", val: "Maple Court — rent?" },
  { tag: "Bank app", val: "+$1,450.00 — Zelle" },
  { tag: "Phone photo", val: "receipt_img_final2.jpg" },
  { tag: "Memory", val: '"did unit 4 pay in June?"' },
];

const chaos = [
  { top: "6%",  left: "2%",  rotate: "-9deg" },
  { top: "18%", left: "44%", rotate: "6deg"  },
  { top: "52%", left: "8%",  rotate: "4deg"  },
  { top: "44%", left: "52%", rotate: "-5deg" },
];

// 0, 88, 176, 264 out of 360px
const snappedTop = ["0%", "24.4%", "48.9%", "73.3%"];

export function ChaosToLedger() {
  const [snapped, setSnapped] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-label={snapped ? "Reset to chaos" : "Snap records into order"}
        onClick={() => setSnapped((s) => !s)}
        className="relative block w-full cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/60"
        style={{ height: 360 }}
      >
        {cards.map((card, i) => (
          <div
            key={card.tag}
            style={{
              position: "absolute",
              top: snapped ? snappedTop[i] : chaos[i].top,
              left: snapped ? "0%" : chaos[i].left,
              width: snapped ? "100%" : 210,
              transform: snapped ? "rotate(0deg)" : `rotate(${chaos[i].rotate})`,
              transition:
                "top 1s cubic-bezier(.16,.9,.28,1), left 0.8s cubic-bezier(.16,.9,.28,1), transform 1s cubic-bezier(.16,.9,.28,1), border-color 0.6s ease, box-shadow 0.6s ease",
              padding: 16,
              borderRadius: 16,
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${snapped ? "rgba(52,211,153,0.35)" : "rgba(255,255,255,0.12)"}`,
              boxShadow: snapped
                ? "0 0 0 1px rgba(52,211,153,0.12), 0 18px 40px rgba(0,0,0,0.4)"
                : "0 18px 40px rgba(0,0,0,0.4)",
              textAlign: "left",
              pointerEvents: "none",
            }}
          >
            <p
              style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
              className="text-[10px] uppercase tracking-[0.05em] text-text-muted"
            >
              {card.tag}
            </p>
            <p
              style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
              className="mt-2 text-sm text-text-primary"
            >
              {card.val}
            </p>
          </div>
        ))}
      </button>

      <p
        style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
        className="mt-4 text-center text-xs text-text-faint transition-colors duration-300"
      >
        {snapped
          ? "// click to reset"
          : "// click to see what EstateIQ does"}
      </p>
    </div>
  );
}
