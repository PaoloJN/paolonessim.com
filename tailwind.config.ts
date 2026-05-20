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
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
                serif: ["var(--font-serif)"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
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
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",

                /* editorial palette */
                bg: {
                    DEFAULT: "var(--bg)",
                    elevated: "var(--bg-elevated)",
                    overlay: "var(--bg-overlay)",
                    inset: "var(--bg-inset)",
                },
                fg: {
                    DEFAULT: "var(--fg)",
                    muted: "var(--fg-muted)",
                    subtle: "var(--fg-subtle)",
                    faint: "var(--fg-faint)",
                    ghost: "var(--fg-ghost)",
                },
                rule: {
                    DEFAULT: "var(--rule)",
                    strong: "var(--rule-strong)",
                    subtle: "var(--rule-subtle)",
                },
                "accent-ink": "var(--accent-ink)",
                "accent-soft": "var(--accent-soft)",
                "accent-fg": "var(--accent-fg)",
                success: "var(--success)",
            },
            transitionTimingFunction: {
                editorial: "cubic-bezier(0.2,0,0,1)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "caret-blink": {
                    "0%, 49%": { opacity: "1" },
                    "50%, 100%": { opacity: "0" },
                },
                "pulse-soft": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.35" },
                },
                "ping-soft": {
                    "0%": { transform: "scale(0.9)", opacity: "0.8" },
                    "100%": { transform: "scale(2.4)", opacity: "0" },
                },
                bars: {
                    "0%, 100%": { transform: "scaleY(1)" },
                    "50%": { transform: "scaleY(0.4)" },
                },
            },
            animation: {
                "caret-blink": "caret-blink 1.05s steps(1) infinite",
                "pulse-soft": "pulse-soft 1.5s ease-in-out infinite",
                "ping-soft": "ping-soft 1.8s cubic-bezier(0.2,0,0,1) infinite",
                bars: "bars 1.4s ease-in-out infinite",
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
