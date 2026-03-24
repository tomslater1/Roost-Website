import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Semantic tokens — all CSS variable-based so they respond to .dark
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        // Raw palette values — static, for explicit use
        terracotta: "#d4795e",
        sage: "#9db19f",
        cream: "#f2ebe0",
        "warm-brown": "#3d3229",
        amber: "#e6a563",
        "clay-pink": "#b88b7e",
        "forest-green": "#7fa087",

        // Chart palette
        chart: {
          "1": "#d4795e",
          "2": "#9db19f",
          "3": "#e6a563",
          "4": "#b88b7e",
          "5": "#7fa087",
        },
      },

      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "-apple-system", "sans-serif"],
      },

      borderRadius: {
        sm: "0.625rem",
        md: "0.75rem",
        lg: "0.875rem",
        xl: "1.125rem",
        "2xl": "1.5rem",
      },

      fontSize: {
        base: ["1rem", { lineHeight: "1.5" }],
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
        snappy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
