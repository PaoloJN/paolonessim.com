import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/site/status-bar";
import Dock from "@/components/site/dock";

export const metadata: Metadata = {
    title: "Not found",
};

export default function NotFound() {
    return (
        <>
            <StatusBar />
            <Dock />
            <main className="mx-auto max-w-[760px] px-6">
                <section className="pt-28 pb-20 min-h-[60vh] flex flex-col">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-fg-subtle mb-6">
                        404 · Not found
                    </span>

                    <h1 className="font-serif italic font-normal text-[88px] max-[580px]:text-[64px] leading-[0.95] tracking-[-0.045em] m-0 mb-6 text-fg">
                        Wrong
                        <br />
                        turn.
                    </h1>

                    <p className="m-0 mb-10 max-w-[52ch] text-base leading-[1.6] text-fg-muted tracking-[-0.005em]">
                        Nothing lives at this URL. Probably a typo, a stale link, or a draft I
                        never shipped.
                    </p>

                    <p className="m-0 flex flex-row flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-fg-subtle tracking-[0.04em]">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-1.5 text-fg-muted hover:text-fg transition-colors duration-150"
                        >
                            <span
                                aria-hidden
                                className="transition-transform duration-200 ease-editorial group-hover:-translate-x-0.5"
                            >
                                ←
                            </span>
                            <span>Back to index</span>
                        </Link>
                        <span className="text-fg-ghost" aria-hidden>
                            ·
                        </span>
                        <Link
                            href="/writing"
                            className="text-fg-muted hover:text-fg transition-colors duration-150"
                        >
                            Read something instead
                        </Link>
                    </p>
                </section>
            </main>
        </>
    );
}
