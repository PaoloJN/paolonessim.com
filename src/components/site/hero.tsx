export default function Hero() {
    return (
        <section className="py-14">
            <h1 className="font-serif italic font-normal text-[88px] max-[580px]:text-[64px] leading-[0.95] tracking-[-0.045em] m-0 mb-8 text-fg">
                Paolo
                <br />
                Nessim
                <span className="text-accent-ink font-mono not-italic text-[0.4em] align-[0.9em] -ml-[0.05em]">
                    .
                </span>
            </h1>

            <p className="m-0 mb-7 max-w-[56ch] text-base leading-[1.6] text-fg tracking-[-0.005em]">
                I&apos;m a computer engineer in College Park. I like building things that touch the
                physical world — cameras, robots, satellites, the occasional Chrome extension.{" "}
                <span className="text-fg-muted">
                    Right now I&apos;m doing computer-vision research at UMD and helping design a
                    NASA mission concept with the L&apos;SPACE academy.
                </span>
            </p>

            <p className="flex flex-row flex-wrap items-center gap-y-1.5 gap-x-[14px] mt-[18px] mb-0 mx-0 font-mono text-[11px] text-fg-subtle tracking-[0.02em]">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span>Press</span>
                    <kbd className="inline-flex items-center justify-center min-w-[18px] h-[19px] px-[5px] font-mono text-[11px] font-medium rounded-[4px] bg-bg-elevated border border-rule-subtle text-fg-muted align-middle">
                        R
                    </kbd>
                    <span>for résumé</span>
                </span>
                <span className="inline-flex items-center text-fg-ghost">·</span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <kbd className="inline-flex items-center justify-center min-w-[18px] h-[19px] px-[5px] font-mono text-[11px] font-medium rounded-[4px] bg-bg-elevated border border-rule-subtle text-fg-muted align-middle">
                        ⌘ + K
                    </kbd>
                    <span>for everything</span>
                </span>
            </p>
        </section>
    );
}
