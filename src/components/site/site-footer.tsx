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
        <>
            <div className="footer-mark" aria-hidden>
                Paolo<span className="amp">.</span>
            </div>
            <div className="footer-tagline">
                Model <span className="sep">·</span> Build <span className="sep">·</span> Iterate
            </div>
            <div className="footer-meta">
                © {year} — by {siteConfig.fullName} \w ❤️ <span className="sep">·</span>
                <span className="caret" aria-hidden />
            </div>

            <div className="footer-row">
                <span className="pill">
                    <PinIcon />
                    {siteConfig.location.city}
                </span>
                <nav className="footer-links" id="contact" aria-label="Elsewhere">
                    <Link href={siteConfig.links.email}>Email</Link>
                    <span className="sep">·</span>
                    <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Link>
                    <span className="sep">·</span>
                    <Link
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Link>
                    <span className="sep">·</span>
                    <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                        X
                    </Link>
                    <span className="sep">·</span>
                    <Link href={siteConfig.links.resume}>Résumé</Link>
                </nav>
            </div>
        </>
    );
}
