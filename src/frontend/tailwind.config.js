import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Cabinet Grotesk", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Satoshi", "system-ui", "sans-serif"],
      },
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        gold: {
          50: "oklch(0.97 0.03 75)",
          100: "oklch(0.94 0.06 72)",
          200: "oklch(0.88 0.10 70)",
          300: "oklch(0.80 0.14 68)",
          400: "oklch(0.72 0.18 65)",
          500: "oklch(0.62 0.14 68)",
          600: "oklch(0.54 0.13 60)",
          700: "oklch(0.44 0.11 55)",
          800: "oklch(0.34 0.08 50)",
          900: "oklch(0.24 0.05 45)",
        },
        charcoal: {
          50: "oklch(0.96 0.005 60)",
          100: "oklch(0.92 0.008 60)",
          200: "oklch(0.84 0.01 60)",
          300: "oklch(0.68 0.012 60)",
          400: "oklch(0.50 0.012 58)",
          500: "oklch(0.38 0.014 58)",
          600: "oklch(0.28 0.016 58)",
          700: "oklch(0.20 0.016 58)",
          800: "oklch(0.15 0.015 58)",
          900: "oklch(0.10 0.012 55)",
          950: "oklch(0.07 0.008 50)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 oklch(0 0 0 / 0.05)",
        sm: "0 1px 3px 0 oklch(0 0 0 / 0.1), 0 1px 2px -1px oklch(0 0 0 / 0.1)",
        DEFAULT: "0 4px 6px -1px oklch(0 0 0 / 0.1), 0 2px 4px -2px oklch(0 0 0 / 0.08)",
        md: "0 8px 25px -3px oklch(0 0 0 / 0.12), 0 4px 10px -4px oklch(0 0 0 / 0.08)",
        lg: "0 16px 40px -5px oklch(0 0 0 / 0.15), 0 8px 16px -6px oklch(0 0 0 / 0.1)",
        gold: "0 8px 30px oklch(0.62 0.14 68 / 0.35)",
        "gold-sm": "0 4px 16px oklch(0.62 0.14 68 / 0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delay": "float 5s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
