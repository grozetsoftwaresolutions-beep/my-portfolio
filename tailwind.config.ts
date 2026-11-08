import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070B14",
        surface: "#0E1424",
        card: "#121A30",
        border: "rgba(255, 255, 255, 0.08)",
        primary: {
          DEFAULT: "#6366F1", // Indigo
          glow: "rgba(99, 102, 241, 0.25)",
        },
        secondary: {
          DEFAULT: "#22D3EE", // Cyan
          glow: "rgba(34, 211, 238, 0.25)",
        },
        success: {
          DEFAULT: "#34D399", // Soft Green - PASS states only
          glow: "rgba(52, 211, 153, 0.25)",
        },
        danger: {
          DEFAULT: "#F43F5E", // Rose/Crimson - Defect tags only
          glow: "rgba(244, 63, 94, 0.25)",
        },
        text: {
          DEFAULT: "#E6EAF2",
          muted: "#8B95A9",
        },
        // Lab tokens mapped to the new color system
        lab: {
          bg: "#070B14",
          surface: "#0E1424",
          card: "#121A30",
          border: "rgba(255, 255, 255, 0.08)",
          "border-bright": "rgba(99, 102, 241, 0.25)",
          primary: "#6366F1",
          secondary: "#22D3EE",
          pass: "#34D399", // Soft Green
          bug: "#F43F5E", // Rose/Crimson
          accent: "#22D3EE", // Cyan
          muted: "#8B95A9",
          dim: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
