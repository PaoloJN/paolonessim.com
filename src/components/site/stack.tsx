"use client";

import { useState } from "react";
import { uses } from "@/content/uses";
import EyebrowLine from "./eyebrow";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { terminalTabsList, terminalTabsTrigger } from "./tabs-style";

const TABS = ["editor", "shell", "web", "vision", "hardware"] as const;
type Tab = (typeof TABS)[number];

export default function Stack() {
    const [active, setActive] = useState<Tab>("editor");
    const entries = uses[active];

    return (
        <section className="py-10" id="uses">
            <EyebrowLine label="06 · Stack & uses" />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[18px]">
                What&apos;s on the laptop. Built up over a few years — mostly stable. I switch
                slowly and only when something is clearly better.
            </p>

            <div className="mt-2 border border-rule-subtle rounded-md bg-bg-elevated overflow-hidden">
                <div className="flex items-center gap-3 px-3 py-2 bg-bg-overlay border-b border-rule-subtle">
                    <span className="inline-flex gap-1.5" aria-hidden>
                        <i className="w-[9px] h-[9px] rounded-full inline-block bg-fg-faint border border-fg-faint" />
                        <i className="w-[9px] h-[9px] rounded-full inline-block bg-rule-strong border border-rule-strong" />
                        <i className="w-[9px] h-[9px] rounded-full inline-block bg-rule border border-rule" />
                    </span>
                    <span className="flex-1 text-center font-mono text-[11px] text-fg-subtle">
                        paolo@dmv — zsh
                    </span>
                    <span className="font-mono text-[10.5px] text-fg-faint">81×24</span>
                </div>
                <div className="px-4 pt-3.5 pb-4 font-mono text-[12.5px] leading-[1.7] text-fg">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-fg-muted font-semibold">$</span>
                        <span>
                            paolo --uses{" "}
                            <span className="text-accent-ink font-medium border-b border-dotted border-rule-strong pb-px">
                                {active}
                            </span>
                        </span>
                        <span
                            className="inline-block w-[7px] h-3 bg-fg align-[-2px] ml-0.5 animate-caret-blink"
                            aria-hidden
                        />
                    </div>
                    <Tabs value={active} onValueChange={(v) => setActive(v as Tab)}>
                        <TabsList className={terminalTabsList}>
                            {TABS.map((t) => (
                                <TabsTrigger
                                    key={t}
                                    value={t}
                                    className={terminalTabsTrigger}
                                >
                                    {t}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                    <pre className="m-0 font-mono text-[12px] leading-[1.85] text-fg-muted whitespace-pre-wrap">
                        {entries.map((e) => (
                            <div key={e.key}>
                                <span className="text-fg font-medium">{e.key.padEnd(12)}</span>
                                <span className="text-fg-subtle">{e.value}</span>
                            </div>
                        ))}
                    </pre>
                </div>
            </div>
        </section>
    );
}
