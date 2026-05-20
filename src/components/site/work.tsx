import Link from "next/link";
import { projects } from "@/content/projects";
import EyebrowLine from "./eyebrow";

function ProjectRow({ p }: { p: (typeof projects)[number] }) {
    const linked = p.href.length > 0 && p.href !== "#";
    const inner = (
        <>
            <span className="year">{p.year}</span>
            <span className="proj-mark" aria-hidden>
                {p.mark}
            </span>
            <span className="title">{p.title}</span>
            <span className="meta">{p.stack}</span>
            {linked ? <span className="arrow">↗</span> : null}
        </>
    );

    return (
        <li className="proj-row" key={p.slug}>
            {linked ? (
                <Link
                    className="proj-link"
                    href={p.href}
                    aria-label={p.title}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                    {inner}
                </Link>
            ) : (
                <div className="proj-link proj-link-static" aria-label={p.title}>
                    {inner}
                </div>
            )}
        </li>
    );
}

export default function Work() {
    return (
        <section className="block" id="work">
            <EyebrowLine
                label="02 · Selected work"
                count={`${projects.length} / ${projects.length}`}
            />
            <p className="lede" style={{ margin: "0 0 18px" }}>
                Things I built end-to-end. Live demos where possible — full walkthroughs on request.
            </p>

            <ul className="proj-list">
                {projects.map((p) => (
                    <ProjectRow key={p.slug} p={p} />
                ))}
            </ul>
        </section>
    );
}
