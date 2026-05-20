import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/site/status-bar";
import Dock from "@/components/site/dock";
import EyebrowLine from "@/components/site/eyebrow";
import { getAllWritings, formatWritingDate } from "@/lib/writing";

export const metadata: Metadata = {
    title: "Writing",
    description: "Notes from building. Mostly engineering-flavored.",
};

export default function WritingIndexPage() {
    const items = getAllWritings();

    return (
        <>
            <StatusBar />
            <Dock />
            <main className="mx-auto max-w-[760px] px-6">
                <section className="pt-14 pb-8">
                    <p className="font-mono text-[11px] tracking-[0.04em] text-fg-subtle mb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-1.5 hover:text-fg transition-colors duration-150"
                        >
                            <span aria-hidden>←</span>
                            <span>Index</span>
                        </Link>
                    </p>

                    <h1 className="font-serif italic font-normal text-[56px] max-[580px]:text-[40px] leading-[0.98] tracking-[-0.04em] m-0 mb-4 text-fg">
                        Writing
                    </h1>
                    <p className="m-0 mb-10 max-w-[56ch] text-base leading-[1.6] text-fg-muted tracking-[-0.005em]">
                        Notes from building. Mostly engineering-flavored. No schedule, no
                        newsletter — just the things I figured out the hard way.
                    </p>
                </section>

                <section className="pb-20">
                    <EyebrowLine label="All posts" count={`${items.length}`} />

                    <ul className="group/list list-none m-0 p-0 border-t border-rule-subtle">
                        {items.map((w) => (
                            <li
                                key={w.slug}
                                className="group/row relative border-b border-rule-subtle"
                            >
                                <Link
                                    href={`/writing/${w.slug}`}
                                    className="grid grid-cols-[96px_1fr_auto_18px] max-[580px]:grid-cols-[1fr_auto_18px] gap-x-5 max-[580px]:gap-x-3 items-baseline py-5 max-[580px]:py-4 px-1 max-[580px]:px-0 transition-[padding] duration-200 ease-editorial hover:pl-2.5"
                                >
                                    <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-fg-faint max-[580px]:hidden transition-colors duration-200 ease-editorial group-hover/list:text-fg-ghost group-hover/row:!text-fg-subtle">
                                        {formatWritingDate(w.date)}
                                    </span>

                                    <span className="min-w-0">
                                        <span className="block text-sm tracking-[-0.005em] text-fg transition-colors duration-200 ease-editorial group-hover/list:text-fg-faint group-hover/row:!text-accent-ink">
                                            {w.title}
                                            {w.draft ? (
                                                <span className="ml-2 inline-flex items-center h-[14px] px-1 rounded-[3px] bg-bg-elevated border border-rule-subtle text-fg-muted font-mono text-[8.5px] font-semibold tracking-[0.1em] uppercase align-[2px]">
                                                    Draft
                                                </span>
                                            ) : null}
                                        </span>
                                        {w.summary ? (
                                            <span className="block mt-1 text-[12.5px] leading-snug tracking-[-0.005em] text-fg-subtle transition-colors duration-200 ease-editorial group-hover/list:text-fg-ghost group-hover/row:!text-fg-muted">
                                                {w.summary}
                                            </span>
                                        ) : null}
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
                </section>
            </main>
        </>
    );
}
