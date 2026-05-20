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
        <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden>
            <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z" />
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
                <Heatmap
                    days={days}
                    theme={theme}
                    unit={source === "github" ? "contribution" : "session"}
                />
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
