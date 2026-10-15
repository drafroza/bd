/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1F17",
        soft: { DEFAULT: "#E8F5EE", dark: "#D1EBDD" },
        brand: { DEFAULT: "#16A34A", dark: "#116B35", light: "#4ADE80", glow: "#22C55E" },
        surface: { DEFAULT: "#F8FAF9", elevated: "#FFFFFF" },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: { wrap: "1200px" },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(15,31,23,0.08)",
        medium: "0 8px 30px -4px rgba(15,31,23,0.12)",
        glow: "0 0 40px -10px rgba(22,163,74,0.3)",
        card: "0 2px 12px rgba(15,31,23,0.06), 0 0 1px rgba(15,31,23,0.12)",
        "card-hover": "0 12px 40px -8px rgba(15,31,23,0.15), 0 0 1px rgba(15,31,23,0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        pulseSoft: { "0%,100%": { opacity: "0.6" }, "50%": { opacity: "1" } },
      },
    },
  },
  plugins: [],
};