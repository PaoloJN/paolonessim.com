"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { siteConfig } from "@/config/site";

function ThemeIcon({ dark }: { dark: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            width="13"
            height="13"
            fill="currentColor"
            aria-hidden
            style={{ transform: dark ? "rotate(180deg)" : "none", transition: "transform 200ms" }}
        >
            <path d="M924.8 337.6a449.344 449.344 0 1 0-828.288 348.8 449.344 449.344 0 0 0 828.288-348.8z m-448.768 544.64A368.768 368.768 0 0 1 248.96 775.04a371.968 371.968 0 0 1 0-525.952 369.152 369.152 0 0 1 226.944-107.264v740.48z m298.944-633.216c10.112 10.048 19.584 20.672 28.416 31.808l-255.36 255.36V457.088l217.344-217.344c3.264 3.008 6.464 6.144 9.6 9.344z m60.48 78.976c9.856 17.28 18.304 35.328 25.216 54.016l-312.704 312.576V615.424l287.488-287.424z m42.304 116.032c4.16 22.4 6.208 45.184 6.272 67.968l-0.064 5.12-336 335.872v-79.168l329.792-329.792z m-156.352-239.616l-173.44 173.44V298.624l123.136-123.072c17.536 8.32 34.304 17.92 50.304 28.864z m-107.904-50.432L547.968 219.52V141.696c22.208 2.176 44.16 6.272 65.536 12.288z m161.472 620.992a369.664 369.664 0 0 1-166.08 96.256l262.4-262.336a369.728 369.728 0 0 1-96.32 166.08z" />
        </svg>
    );
}

function GhIcon() {
    return (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden>
            <path d="M18.244 2H21l-6.52 7.45L22 22h-6.18l-4.84-6.32L5.5 22H2.74l6.97-7.97L2 2h6.32l4.38 5.78L18.24 2Zm-2.17 18.2h1.7L7.99 3.7H6.2l9.87 16.5Z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.55v14H.22V8Zm7.34 0h4.36v1.92h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.49 3.05 5.49 7v7.44h-4.55v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.56V8Z" />
        </svg>
    );
}

const btn =
    "inline-flex items-center justify-center w-7 h-7 rounded-[4px] text-fg-subtle hover:text-fg hover:bg-bg-elevated transition-colors duration-150";

export default function Dock() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const current = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
    const next = current === "dark" ? "light" : "dark";

    return (
        <nav
            aria-label="Quick links"
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-[2px] p-[3px] rounded-[var(--radius-md)] border border-rule-subtle bg-[color:color-mix(in_oklab,var(--bg)_78%,transparent)] backdrop-blur-[14px] shadow-[0_2px_6px_rgb(0_0_0/0.04)]"
        >
            <button
                type="button"
                onClick={() => setTheme(next)}
                className={btn}
                aria-label={`Switch to ${next} mode`}
                title={`Switch to ${next} mode`}
            >
                <ThemeIcon dark={mounted && current === "dark"} />
            </button>

            <span className="w-px h-3.5 bg-rule-subtle mx-[3px]" aria-hidden />

            <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className={btn}
            >
                <GhIcon />
            </Link>
            <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className={btn}
            >
                <XIcon />
            </Link>
            <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={btn}
            >
                <LinkedInIcon />
            </Link>
        </nav>
    );
}
