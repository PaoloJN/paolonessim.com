"use client";

import { useMemo } from "react";
import type { DayCell } from "@/lib/heatmap";

type EmptyDay = { date: ""; count: 0; level: 0 };

export type HeatmapTheme = "ink" | "claude";

export const HEATMAP_THEMES: Record<HeatmapTheme, string[]> = {
    ink: [
        "var(--bg-inset)",
        "oklch(0.78 0.004 250)",
        "oklch(0.54 0.004 250)",
        "oklch(0.34 0.004 250)",
        "oklch(0.18 0.004 250)",
    ],
    claude: [
        "var(--bg-inset)",
        "oklch(0.88 0.04 35)",
        "oklch(0.78 0.10 35)",
        "oklch(0.66 0.14 35)",
        "oklch(0.56 0.17 35)",
    ],
};

function groupByWeek(days: DayCell[]): (DayCell | EmptyDay)[][] {
    if (!days.length) return [];
    const weeks: (DayCell | EmptyDay)[][] = [];
    const first = new Date(days[0].date);
    const startPad = first.getDay();
    const empty: EmptyDay = { date: "", count: 0, level: 0 };

    let week: (DayCell | EmptyDay)[] = startPad > 0 ? Array(startPad).fill(empty) : [];
    for (const d of days) {
        week.push(d);
        if (week.length === 7) {
            weeks.push(week);
            week = [];
        }
    }
    if (week.length) weeks.push(week);
    return weeks;
}

export default function Heatmap({
    days,
    theme = "ink",
}: {
    days: DayCell[];
    theme?: HeatmapTheme;
}) {
    const weeks = useMemo(() => groupByWeek(days), [days]);
    const scale = HEATMAP_THEMES[theme];

    return (
        <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-[3px] min-w-[580px]">
                {weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-[3px]">
                        {Array.from({ length: 7 }).map((_, j) => {
                            const day = week[j];
                            if (!day || day.date === "") {
                                return (
                                    <div key={j} className="w-[12px] h-[12px] bg-transparent" />
                                );
                            }
                            return (
                                <div
                                    key={j}
                                    className="w-[12px] h-[12px] rounded-[2px] border border-[color:color-mix(in_oklab,var(--fg)_4%,transparent)]"
                                    style={{ background: scale[day.level] ?? scale[0] }}
                                    title={`${day.count} on ${day.date}`}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
