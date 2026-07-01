/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial FluxFlow (brandbook)
        flux: {
          purple: "#B08EEF", // roxo primário
          deep: "#8B5FD6", // roxo profundo / CTA
          soft: "#C9B2F4", // roxo claro / accent
        },
        ink: {
          DEFAULT: "#13181C", // dark primário (seção alternada)
          bg: "#0D1115", // dark fundo (base)
          deep: "#0A0D10", // dark-3
          surface: "#1A2128", // cards / superfície
        },
        body: "#D7DCE2", // corpo de texto
        dim: "#8A949E", // texto secundário
        line: "rgba(176,142,239,0.18)", // bordas / divisores
      },
      fontFamily: {
        display: ['"DM Sans"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        brand: "16px",
      },
      boxShadow: {
        glow: "0 30px 80px -30px rgba(176,142,239,0.45)",
        "glow-sm": "0 18px 50px -24px rgba(176,142,239,0.55)",
        "glow-ring": "0 0 0 1px rgba(176,142,239,0.35), 0 24px 60px -28px rgba(176,142,239,0.6)",
        // Sombra suave da topbar suspensa (efeito de vitrificação flutuante)
        float: "0 16px 50px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(176,142,239,0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(176,142,239,0)" },
        },
        "drift-a": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-30px) scale(1.08)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-50px,30px) scale(1.12)" },
        },
        "flow-dash": {
          to: { strokeDashoffset: "-400" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.4s ease-out infinite",
        "drift-a": "drift-a 16s ease-in-out infinite",
        "drift-b": "drift-b 20s ease-in-out infinite",
        "flow-dash": "flow-dash 6s linear infinite",
        float: "float 7s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};
