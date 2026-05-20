import Link from "next/link";
import { projects } from "@/content/projects";
import EyebrowLine from "./eyebrow";

const linkBase =
    "grid grid-cols-[64px_22px_1fr_auto_auto] max-[580px]:grid-cols-[56px_20px_1fr_auto] gap-[14px] max-[580px]:gap-3 items-center px-1 py-4 max-[580px]:px-0 max-[580px]:py-[14px] text-fg-muted transition-[color,padding] duration-200 ease-editorial";

const titleClass =
    "text-sm font-normal tracking-[-0.01em] text-fg transition-colors duration-200 ease-editorial whitespace-nowrap overflow-hidden text-ellipsis group-hover/list:text-fg-faint group-hover/row:!text-accent-ink";

const markClass =
    "inline-flex items-center justify-center min-w-[28px] h-[22px] px-1.5 font-mono text-[10px] font-semibold tracking-[0.05em] text-fg-muted bg-bg-elevated border border-rule-subtle rounded-[3px] transition-[color,border-color,background] duration-200 ease-editorial group-hover/list:text-fg-ghost group-hover/row:!text-accent-ink group-hover/row:border-rule-strong group-hover/row:bg-bg";

const yearClass = "font-mono text-[11px] tracking-[0.04em] text-fg-subtle whitespace-nowrap";

const metaClass =
    "font-mono text-[10.5px] tracking-[0.04em] text-fg-subtle text-right whitespace-nowrap max-[580px]:hidden";

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
            <span className={titleClass}>{p.title}</span>
            <span className={metaClass}>{p.stack}</span>
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
                    aria-label={p.title}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                    {inner}
                </Link>
            ) : (
                <div className={`${linkBase} cursor-default`} aria-label={p.title}>
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
                Things I built end-to-end. Live demos where possible — full walkthroughs on request.
            </p>

            <ProjectGroup
                label="Products · Shipping"
                items={products}
                count={`${products.length} live`}
            />
            <ProjectGroup
                label="Portfolio · Side projects"
                items={portfolio}
                count={`${portfolio.length}`}
            />
        </section>
    );
}
