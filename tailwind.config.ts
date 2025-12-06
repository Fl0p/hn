import plugin from "tailwindcss/plugin";
import { type Config } from "tailwindcss";

const CommonColors = {
  transparent: "transparent",
  white: "rgb(var(--color-white) / <alpha-value>)",
  black: "rgb(var(--color-black) / <alpha-value>)",
  gradient_bg: "hsl(var(--color-gradient-bg))",
  always_secondary: "hsl(var(--color-always-secondary))",
  error: "rgb(var(--color-error) / <alpha-value>)",
  success: "rgb(var(--color-success) / <alpha-value>)",
  info: "rgb(var(--color-info) / <alpha-value>)",
  warning: "rgb(var(--color-warning) / <alpha-value>)",
};

// /** @type {import('tailwindcss').Config} */

export default {
  /* Paths are relative to your PROJECT ROOT, not your tailwind.config.js file, so if your
  tailwind.config.js file is in a custom location, you should still write your paths
  relative to the root of your project. */
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // shadcn start
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1600px",
      },
    },
    // shadcn end
    colors: {
      ...CommonColors,
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1100px",
      lgl: "1150px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      // shadcn start
      colors: {
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fade: "fadeIn .5s ease-in-out",
      },
      // shadcn end
      fontFamily: {
        notoSans: ["var(--noto-sans)"],
        openSans: ["var(--open-sans)"],
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 6px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      boxShadow: {
        clerkbtn:
          "rgba(255, 255, 255, 0.07) 0px 1px 1px 0px inset, rgba(34, 42, 53, 0.2) 0px 2px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 1px 0px",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionDuration: {
        DEFAULT: "500ms",
      },
      opacity: {
        15: ".15",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        "2k": "2000",
        "3k": "3000",
        max: "9999",
      },
      spacing: {
        3.5: "14px",
        4.5: "18px",
        5.5: "22px",
        9.5: "38px",
      },
    },
  },
  important: true,
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    plugin((utils) => {
      utils.addUtilities({
        ".translate-50": {
          transform: "translate(-50%, -50%)",
        },
        ".shadow-pressed": {
          boxShadow:
            "inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)",
        },
        ".grid_1-1": { gridArea: "1/1" },
      });
      utils.addComponents({
        ".body": {
          fontFamily: "var(--open-sans)",
          fontSize: "0.875rem",
          fontWeight: "400",
          lineHeight: "150%",
        },
        ".body-bold": {
          fontFamily: "var(--open-sans)",
          fontSize: "0.875rem",
          fontWeight: "700",
          lineHeight: "150%",
        },
        ".body-lg": {
          fontFamily: "var(--open-sans)",
          fontSize: "1rem",
          fontWeight: "400",
          lineHeight: "150%",
        },
        ".body-lg-bold": {
          fontFamily: "var(--open-sans)",
          fontSize: "1rem",
          fontWeight: "700",
          lineHeight: "150%",
        },
        ".body-sm": {
          fontFamily: "var(--open-sans)",
          fontSize: "0.75rem",
          fontWeight: "400",
          lineHeight: "150%",
        },
        ".body-sm-bold": {
          fontFamily: "var(--open-sans)",
          fontSize: "0.75rem",
          fontWeight: "700",
          lineHeight: "150%",
        },
        ".headline1": {
          fontFamily: "var(--noto-sans)",
          fontSize: "2.374rem",
          fontWeight: "800",
          lineHeight: "123%",
        },
        ".headline2": {
          fontFamily: "var(--noto-sans)",
          fontSize: "1.875rem",
          fontWeight: "800",
          lineHeight: "135%",
        },
        ".headline3": {
          fontFamily: "var(--noto-sans)",
          fontSize: "1.5rem",
          fontWeight: "600",
          lineHeight: "135%",
        },
        ".headline4": {
          fontFamily: "var(--noto-sans)",
          fontSize: "1.25rem",
          fontWeight: "600",
          lineHeight: "140%",
        },
      });
    }),
  ],
} satisfies Config;
