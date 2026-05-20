import EyebrowLine from "./eyebrow";

// NOTE: this is a new section so the content is still being worked on, but the idea is to have a more personal section about what I do outside of work and school .. music, hobbies, etc
export default function OffTheClock() {
    return (
        <section className="py-10" id="off">
            <EyebrowLine label="09 · Off the clock" />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-1.5">
                Music, working out, and riding my bike around the DMV.
            </p>

            <div className="grid grid-cols-1 gap-3 mt-3.5">
                <div className="flex items-center gap-3.5 p-3 border border-rule-subtle rounded-lg bg-bg-elevated">
                    <div
                        className="w-[52px] h-[52px] rounded-md bg-bg-inset flex-none border border-rule-subtle flex items-center justify-center font-mono text-[10px] text-fg-faint"
                        aria-hidden
                    >
                        Kid A
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <span className="text-[13px] text-fg">Everything In Its Right Place</span>
                        <span className="text-xs text-fg-muted">Radiohead · Kid A</span>
                        <span className="flex justify-between font-mono text-[10.5px] text-fg-subtle mt-0.5">
                            <span>Most replayed this month</span>
                            <span className="inline-flex items-center gap-1 text-fg-muted">
                                <span
                                    className="flex items-end gap-[2px] w-[18px] h-4"
                                    aria-hidden
                                >
                                    <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[60%]" />
                                    <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[90%] [animation-delay:0.2s]" />
                                    <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[50%] [animation-delay:0.4s]" />
                                    <span className="w-[3px] bg-fg-muted rounded-[1px] animate-bars h-[80%] [animation-delay:0.1s]" />
                                </span>
                                Spotify
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
