import Link from "next/link";
import { projects } from "@/content/projects";
import EyebrowLine from "./eyebrow";

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
                    <li className="proj-row" key={p.slug}>
                        <Link
                            className="proj-link"
                            href={p.href}
                            aria-label={p.title}
                            target={p.href.startsWith("http") ? "_blank" : undefined}
                            rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            <span className="year">{p.year}</span>
                            <span className="proj-mark" aria-hidden>
                                {p.mark}
                            </span>
                            <span className="title">{p.title}</span>
                            <span className="meta">{p.stack}</span>
                            <span className="arrow">↗</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
