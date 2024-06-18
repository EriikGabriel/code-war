import { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cinder: {
          50: "#f3f3fc",
          100: "#e6e6f8",
          200: "#c7c9f0",
          300: "#959ce4",
          400: "#5c67d4",
          500: "#3743c0",
          600: "#272ea2",
          700: "#212583",
          800: "#1f236d",
          900: "#1e205c",
          950: "#070715",
        },
        "torch-red": {
          50: "#fef2f3",
          100: "#ffe1e3",
          200: "#ffc9cc",
          300: "#fea3a8",
          400: "#fc6d75",
          500: "#f33641",
          600: "#e1212c",
          700: "#bd1822",
          800: "#9c1820",
          900: "#821a20",
          950: "#47080c",
        },
        "lighting-yellow": {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fee789",
          300: "#fed44b",
          400: "#fdc228",
          500: "#f79f09",
          600: "#db7704",
          700: "#b65307",
          800: "#93400d",
          900: "#79350e",
          950: "#461a02",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        squada: "var(--font-squada-one)",
        "pt-sans": "var(--font-pt-sans-caption)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
