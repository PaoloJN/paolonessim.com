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
        <section className="block" id="writing">
            <EyebrowLine label="07 · Writing" />
            <p className="lede" style={{ margin: "0 0 14px" }}>
                Notes from building, mostly engineering-flavored.
            </p>
            <nav className="writing">
                {writings.map((w) => (
                    <Link key={w.slug} href={w.href}>
                        <span className="date">{w.date}</span>
                        <span className="title">{w.title}</span>
                        <span className="time">
                            <ClockIcon /> {w.readMinutes}m
                        </span>
                    </Link>
                ))}
            </nav>
        </section>
    );
}
