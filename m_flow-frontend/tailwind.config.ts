import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // x.ai inspired high-end gray palette
        "xai-black": "#0a0a0a",
        "xai-dark": "#111111",
        "xai-surface": "#1a1a1a",
        "xai-card": "#222222",
        "xai-border": "#2a2a2a",
        "xai-muted": "#3a3a3a",
        "xai-gray": "#666666",
        "xai-text": "#a0a0a0",
        "xai-light": "#e0e0e0",
        "xai-white": "#f5f5f5",
        "xai-accent": "#4a9eff",
        "xai-accent-hover": "#3d8ce8",
        "xai-success": "#22c55e",
        "xai-warning": "#eab308",
        "xai-error": "#ef4444",
      },
      fontFamily: {
        sans: ["SF Pro Display", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["SF Mono", "JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
