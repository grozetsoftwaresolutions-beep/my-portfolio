import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mahadeer Mohamed | Software Tester & Front-End Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#070B14",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#22D3EE",
            fontSize: 24,
            fontWeight: 700,
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              backgroundColor: "#6366F1",
            }}
          />
          <span>THE TEST LAB // PORTFOLIO</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            Mahadeer Mohamed
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#22D3EE",
              fontFamily: "monospace",
            }}
          >
            Software Tester | Front-End Developer
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#8B95A9",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Bridging front-end architecture and bulletproof QA precision — turning defect chaos into green passes.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 18,
            color: "#64748B",
            fontFamily: "monospace",
          }}
        >
          <span>100% SUITE PASS</span>
          <span>•</span>
          <span>SELENIUM / JAVA</span>
          <span>•</span>
          <span>NEXT.JS / REACT</span>
          <span>•</span>
          <span>0 UNHANDLED EXCEPTIONS</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
