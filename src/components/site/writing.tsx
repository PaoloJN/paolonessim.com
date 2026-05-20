import Link from "next/link";
import { getAllWritings, formatWritingDate } from "@/lib/writing";
import EyebrowLine from "./eyebrow";

export default function Writing() {
    const all = getAllWritings();
    const writings = all.slice(0, 5);
    const hasMore = all.length > writings.length;

    return (
        <section className="py-10" id="writing">
            <EyebrowLine label="07 · Writing" count={`${all.length}`} />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[18px]">
                Notes from building. Mostly engineering-flavored.
            </p>

            {writings.length === 0 ? (
                <p className="text-sm text-fg-subtle tracking-[-0.005em] italic font-serif border-t border-rule-subtle pt-5">
                    Nothing published yet. Drafts in progress.
                </p>
            ) : (
                <ul className="group/list list-none m-0 p-0 border-t border-rule-subtle">
                    {writings.map((w) => (
                        <li
                            key={w.slug}
                            className="group/row relative border-b border-rule-subtle"
                        >
                            <Link
                                href={`/writing/${w.slug}`}
                                className="grid grid-cols-[96px_1fr_auto_18px] max-[580px]:grid-cols-[1fr_auto_18px] gap-x-5 max-[580px]:gap-x-3 items-baseline py-4 max-[580px]:py-3.5 px-1 max-[580px]:px-0 transition-[padding] duration-200 ease-editorial hover:pl-2.5"
                            >
                                <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-fg-faint max-[580px]:hidden transition-colors duration-200 ease-editorial group-hover/list:text-fg-ghost group-hover/row:!text-fg-subtle">
                                    {formatWritingDate(w.date)}
                                </span>

                                <span className="text-sm tracking-[-0.005em] text-fg truncate transition-colors duration-200 ease-editorial group-hover/list:text-fg-faint group-hover/row:!text-accent-ink">
                                    {w.title}
                                </span>

                                <span className="font-mono text-[10.5px] tracking-[0.04em] text-fg-subtle whitespace-nowrap transition-colors duration-200 ease-editorial group-hover/list:text-fg-ghost group-hover/row:!text-fg-muted">
                                    {w.readMinutes} min
                                </span>

                                <span
                                    className="font-mono text-[13px] text-fg-faint leading-none transition-[transform,color] duration-200 ease-editorial group-hover/row:text-accent-ink group-hover/row:translate-x-[3px] group-hover/row:-translate-y-[3px]"
                                    aria-hidden
                                >
                                    ↗
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {hasMore ? (
                <div className="mt-4">
                    <Link
                        href="/writing"
                        className="group inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-fg-subtle hover:text-fg transition-colors duration-150"
                    >
                        <span>All writing</span>
                        <span
                            aria-hidden
                            className="transition-transform duration-200 ease-editorial group-hover:translate-x-0.5"
                        >
                            →
                        </span>
                    </Link>
                </div>
            ) : null}
        </section>
    );
}
