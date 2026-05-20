import Link from "next/link";
import { projects } from "@/content/projects";
import EyebrowLine from "./eyebrow";

const linkBase =
    "grid grid-cols-[64px_22px_1fr_auto] max-[580px]:grid-cols-[56px_20px_1fr_auto] gap-[14px] max-[580px]:gap-3 items-center px-1 py-4 max-[580px]:px-0 max-[580px]:py-[14px] text-fg-muted transition-[color,padding] duration-200 ease-editorial";

const titleClass =
    "text-sm font-normal tracking-[-0.01em] text-fg transition-colors duration-200 ease-editorial whitespace-nowrap overflow-hidden text-ellipsis group-hover/list:text-fg-faint group-hover/row:!text-accent-ink";

const taglineClass =
    "text-[12.5px] leading-tight tracking-[-0.005em] text-fg-subtle transition-colors duration-200 ease-editorial whitespace-nowrap overflow-hidden text-ellipsis group-hover/list:text-fg-ghost group-hover/row:!text-fg-muted max-[580px]:hidden";

const markClass =
    "inline-flex items-center justify-center min-w-[28px] h-[22px] px-1.5 font-mono text-[10px] font-semibold tracking-[0.05em] text-fg-muted bg-bg-elevated border border-rule-subtle rounded-[3px] transition-[color,border-color,background] duration-200 ease-editorial group-hover/list:text-fg-ghost group-hover/row:!text-accent-ink group-hover/row:border-rule-strong group-hover/row:bg-bg";

const yearClass = "font-mono text-[11px] tracking-[0.04em] text-fg-subtle whitespace-nowrap";

const arrowClass =
    "font-mono text-[13px] text-fg-faint inline-block leading-none transition-[transform,color] duration-200 ease-editorial group-hover/row:text-accent-ink group-hover/row:translate-x-[3px] group-hover/row:-translate-y-[3px]";

function ProjectRow({ p }: { p: (typeof projects)[number] }) {
    const linked = p.href.length > 0 && p.href !== "#";
    const inner = (
        <>
            <span className={yearClass}>{p.year}</span>
            <span className={markClass} aria-hidden>
                {p.mark}
            </span>
            <span className="min-w-0 flex items-baseline gap-3 overflow-hidden">
                <span className={`${titleClass} shrink-0 max-w-[55%]`}>{p.title}</span>
                <span className={taglineClass}>{p.tagline}</span>
            </span>
            {linked ? <span className={arrowClass}>↗</span> : null}
        </>
    );

    return (
        <li
            className="group/row relative border-b border-rule-subtle hover:[&_a]:pl-2.5"
            key={p.slug}
        >
            {linked ? (
                <Link
                    className={linkBase}
                    href={p.href}
                    aria-label={`${p.title} — ${p.tagline}`}
                    title={p.stack}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                    {inner}
                </Link>
            ) : (
                <div
                    className={`${linkBase} cursor-default`}
                    aria-label={`${p.title} — ${p.tagline}`}
                    title={p.stack}
                >
                    {inner}
                </div>
            )}
        </li>
    );
}

function ProjectGroup({
    label,
    items,
    count,
}: {
    label: string;
    items: typeof projects;
    count: string;
}) {
    if (items.length === 0) return null;
    return (
        <div className="mt-7 first:mt-0">
            <EyebrowLine label={label} count={count} />
            <ul className="group/list list-none m-0 p-0 border-t border-rule-subtle">
                {items.map((p) => (
                    <ProjectRow key={p.slug} p={p} />
                ))}
            </ul>
        </div>
    );
}

export default function Work() {
    const products = projects.filter((p) => p.kind === "product");
    const portfolio = projects.filter((p) => p.kind === "portfolio");

    return (
        <section className="py-10" id="work">
            <EyebrowLine
                label="02 · Selected work"
                count={`${projects.length} / ${projects.length}`}
            />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[18px]">
                Two products people pay for. The rest are things I wanted to see exist.
            </p>

            <ProjectGroup
                label="In market"
                items={products}
                count={`${products.length} paid`}
            />
            <ProjectGroup label="Side projects" items={portfolio} count={`${portfolio.length}`} />
        </section>
    );
}
