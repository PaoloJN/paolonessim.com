import Link from "next/link";
import { writings } from "@/content/writing-list";
import EyebrowLine from "./eyebrow";

function ClockIcon() {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

export default function Writing() {
    return (
        <section className="py-10" id="writing">
            <EyebrowLine label="07 · Writing" />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[14px]">
                Notes from building, mostly engineering-flavored.
            </p>
            <nav className="flex flex-col">
                {writings.map((w) => (
                    <Link
                        key={w.slug}
                        href={w.href}
                        className="group grid grid-cols-[96px_1fr_auto] gap-4 py-[11px] border-t border-dashed border-rule-subtle first:border-t-0 items-center text-fg text-[13px] transition-colors duration-150"
                    >
                        <span className="font-mono text-[11px] text-fg-subtle">{w.date}</span>
                        <span className="transition-colors duration-150 group-hover:text-accent-ink">
                            {w.title}
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-fg-subtle">
                            <ClockIcon /> {w.readMinutes}m
                        </span>
                    </Link>
                ))}
            </nav>
        </section>
    );
}
