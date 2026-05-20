"use client";

import { useMemo, useState } from "react";
import EyebrowLine from "./eyebrow";
import Heatmap, { HEATMAP_THEMES, type HeatmapTheme } from "./github-heatmap";
import { yearDays, years as listYears, totalCount, type Contributions } from "@/lib/heatmap";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { editorialTabsList, editorialTabsTrigger } from "./tabs-style";

function GhIcon() {
    return (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

function ClaudeIcon() {
    return (
        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" aria-hidden>
            <path d="M12 1.5 13.2 10.8 22.5 12 13.2 13.2 12 22.5 10.8 13.2 1.5 12 10.8 10.8Z" />
        </svg>
    );
}

type Source = "github" | "claude";

export default function ActivityClient({ data }: { data: Contributions }) {
    const YEARS = useMemo(() => {
        const fromData = listYears(data);
        if (fromData.length) return fromData;
        const now = new Date().getUTCFullYear();
        return [String(now), String(now - 1), String(now - 2)];
    }, [data]);

    const [source, setSource] = useState<Source>("github");
    const [year, setYear] = useState<string>(YEARS[0]);

    const days = useMemo(() => yearDays(data, year), [data, year]);
    const total = useMemo(() => totalCount(days), [days]);
    const unit =
        source === "github"
            ? total === 1
                ? "contribution"
                : "contributions"
            : total === 1
              ? "session"
              : "Claude Code sessions";

    const theme: HeatmapTheme = source === "github" ? "ink" : "claude";

    return (
        <section className="py-10" id="activity">
            <EyebrowLine label="04 · Activity" />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[18px]">
                What I&apos;ve been shipping lately — pulled from GitHub and Claude Code.
            </p>

            <div className="flex flex-nowrap items-center gap-3 w-full mb-3">
                <Tabs
                    value={source}
                    onValueChange={(v) => setSource(v as Source)}
                    className="flex-none"
                >
                    <TabsList className={editorialTabsList}>
                        <TabsTrigger value="github" className={editorialTabsTrigger}>
                            <GhIcon />
                            <span>GitHub</span>
                        </TabsTrigger>
                        <TabsTrigger value="claude" className={editorialTabsTrigger}>
                            <ClaudeIcon />
                            <span>Claude Code</span>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="inline-flex items-center gap-2 ml-auto flex-shrink-0 font-mono text-[10.5px] uppercase tracking-[0.08em] text-fg-subtle">
                    <span className="leading-none">Year</span>
                    <Select value={year} onValueChange={setYear}>
                        <SelectTrigger className="font-mono text-[11px] font-medium tracking-[0.02em] h-[26px] px-2 text-fg bg-bg border border-rule-subtle rounded-sm min-w-[72px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {YEARS.map((y) => (
                                <SelectItem key={y} value={y}>
                                    {y}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="border border-rule-subtle rounded-md bg-bg-elevated px-3.5 py-3.5">
                <Heatmap days={days} theme={theme} />
            </div>

            <div className="flex justify-between items-center mt-2 font-mono text-[10.5px] text-fg-subtle tracking-[0.04em]">
                <span>
                    {total} {unit} in {year}
                </span>
                <span className="flex items-center gap-1.5">
                    less
                    {HEATMAP_THEMES[theme].map((c, i) => (
                        <span
                            key={i}
                            className="w-[9px] h-[9px] rounded-[2px]"
                            style={{ background: c }}
                        />
                    ))}
                    more
                </span>
            </div>
        </section>
    );
}
