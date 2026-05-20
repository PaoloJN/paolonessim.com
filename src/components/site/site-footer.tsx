import Link from "next/link";
import { siteConfig } from "@/config/site";

function PinIcon() {
    return (
        <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z" />
            <circle cx="12" cy="9" r="3" />
        </svg>
    );
}

export default function SiteFooter() {
    const year = new Date().getUTCFullYear();
    return (
        <footer>
            <div
                className="text-center font-serif italic font-normal text-[76px] leading-none text-fg tracking-[-0.03em] mt-8 mb-2.5 select-none"
                aria-hidden
            >
                Paolo
                <span className="text-accent-ink not-italic font-mono font-normal text-[0.5em] align-[0.5em] ml-0.5">
                    .
                </span>
            </div>
            <div className="text-center font-mono text-[11px] text-fg-subtle tracking-[0.16em] uppercase mb-3.5">
                Model <span className="text-fg-faint mx-1.5">·</span> Build{" "}
                <span className="text-fg-faint mx-1.5">·</span> Iterate
            </div>
            <div className="text-center font-mono text-[11px] text-fg-faint pb-6">
                © {year} — by {siteConfig.fullName} \w ❤️{" "}
                <span className="text-fg-ghost mx-1.5">·</span>
                <span
                    className="inline-block w-1.5 h-2.5 bg-fg align-[-1px] ml-0.5 animate-caret-blink"
                    aria-hidden
                />
            </div>

            <div className="flex justify-between items-center pt-5 pb-8 font-mono text-[11px] text-fg-subtle border-t border-rule-subtle mt-6 gap-4">
                <span className="inline-flex items-center gap-1.5">
                    <PinIcon />
                    {siteConfig.location.city}
                </span>
                <nav
                    className="inline-flex flex-wrap items-center gap-y-1 gap-x-2.5 font-mono text-[11px] text-fg-muted"
                    id="contact"
                    aria-label="Elsewhere"
                >
                    <Link
                        href={siteConfig.links.email}
                        className="text-fg-muted py-0.5 border-b border-transparent hover:text-fg hover:border-rule-strong"
                    >
                        Email
                    </Link>
                    <span className="text-fg-ghost">·</span>
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg-muted py-0.5 border-b border-transparent hover:text-fg hover:border-rule-strong"
                    >
                        GitHub
                    </Link>
                    <span className="text-fg-ghost">·</span>
                    <Link
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg-muted py-0.5 border-b border-transparent hover:text-fg hover:border-rule-strong"
                    >
                        LinkedIn
                    </Link>
                    <span className="text-fg-ghost">·</span>
                    <Link
                        href={siteConfig.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg-muted py-0.5 border-b border-transparent hover:text-fg hover:border-rule-strong"
                    >
                        X
                    </Link>
                    <span className="text-fg-ghost">·</span>
                    <Link
                        href={siteConfig.links.resume}
                        className="text-fg-muted py-0.5 border-b border-transparent hover:text-fg hover:border-rule-strong"
                    >
                        Résumé
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
