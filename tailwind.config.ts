/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/markdown/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/mdx-components.tsx",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                // New
                kbd: {
                    background: "var(--kbd-background)",
                    foreground: "var(--kbd-foreground)",
                    border: "var(--kbd-border)",
                },
                selection: {
                    background: "var(--selection-background)",
                    foreground: "var(--selection-foreground)",
                },
                scrollbar: {
                    thumb: "var(--scrollbar-thumb)",
                    track: "var(--scrollbar-track)",
                },
                highlight: {
                    background: "var(--highlight-background)",
                    foreground: "var(--highlight-foreground)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                ".text-small": {
                    fontSize: "12px",
                    letterSpacing: "0.01px",
                },
                ".text-default": {
                    fontSize: "14px",
                    lineHeight: "21px",
                    letterSpacing: "-0.09px",
                },
            });
        }),
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
    ],
} satisfies Config;
