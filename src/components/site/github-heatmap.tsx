"use client";

import { useMemo, useRef, useState } from "react";
import type { DayCell } from "@/lib/heatmap";

type EmptyDay = { date: ""; count: 0; level: 0 };
type Cell = DayCell | EmptyDay;

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

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Mon", "Wed", "Fri"];

const FULL_DATE = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
});

function groupByWeek(days: DayCell[]): Cell[][] {
    if (!days.length) return [];
    const weeks: Cell[][] = [];
    const first = new Date(days[0].date);
    const startPad = first.getUTCDay();
    const empty: EmptyDay = { date: "", count: 0, level: 0 };

    let week: Cell[] = startPad > 0 ? Array(startPad).fill(empty) : [];
    for (const d of days) {
        week.push(d);
        if (week.length === 7) {
            weeks.push(week);
            week = [];
        }
    }
    if (week.length) {
        while (week.length < 7) week.push(empty);
        weeks.push(week);
    }
    return weeks;
}

function monthLabels(weeks: Cell[][]): { idx: number; label: string }[] {
    const out: { idx: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((week, i) => {
        const realDay = week.find((d) => d.date !== "") as DayCell | undefined;
        if (!realDay) return;
        const m = new Date(realDay.date).getUTCMonth();
        if (m !== lastMonth) {
            const daysInMonth = week.filter(
                (d) => d.date !== "" && new Date(d.date).getUTCMonth() === m,
            ).length;
            if (daysInMonth >= 3 || lastMonth === -1) {
                out.push({ idx: i, label: MONTHS[m] });
                lastMonth = m;
            }
        }
    });
    return out;
}

type Hover = { day: DayCell; left: number; top: number };

export default function Heatmap({
    days,
    theme = "ink",
    unit = "contribution",
}: {
    days: DayCell[];
    theme?: HeatmapTheme;
    unit?: string;
}) {
    const weeks = useMemo(() => groupByWeek(days), [days]);
    const labels = useMemo(() => monthLabels(weeks), [weeks]);
    const scale = HEATMAP_THEMES[theme];

    const containerRef = useRef<HTMLDivElement>(null);
    const [hover, setHover] = useState<Hover | null>(null);

    const CELL = 12;
    const GAP = 3;
    const STRIDE = CELL + GAP;

    function onEnter(e: React.MouseEvent<HTMLDivElement>, day: DayCell) {
        const root = containerRef.current;
        if (!root) return;
        const cell = e.currentTarget.getBoundingClientRect();
        const wrap = root.getBoundingClientRect();
        setHover({
            day,
            left: cell.left - wrap.left + cell.width / 2,
            top: cell.top - wrap.top,
        });
    }

    return (
        <div ref={containerRef} className="relative overflow-x-auto no-scrollbar">
            <div className="inline-block min-w-[580px]" onMouseLeave={() => setHover(null)}>
                <div className="flex pl-[28px] mb-1 h-[12px] relative">
                    {labels.map((l) => (
                        <span
                            key={l.idx}
                            className="absolute font-mono text-[9.5px] tracking-[0.04em] text-fg-subtle leading-none"
                            style={{ left: 28 + l.idx * STRIDE }}
                        >
                            {l.label}
                        </span>
                    ))}
                </div>
                <div className="flex gap-[3px]">
                    <div
                        className="flex flex-col gap-[3px] mr-1 font-mono text-[9.5px] tracking-[0.04em] text-fg-subtle leading-none w-[20px]"
                        aria-hidden
                    >
                        {Array.from({ length: 7 }).map((_, i) => {
                            const idx = [1, 3, 5].indexOf(i);
                            return (
                                <span
                                    key={i}
                                    className="h-[12px] flex items-center"
                                    style={{ visibility: idx === -1 ? "hidden" : "visible" }}
                                >
                                    {idx >= 0 ? DAYS[idx] : ""}
                                </span>
                            );
                        })}
                    </div>
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
                                        className="w-[12px] h-[12px] rounded-[2px] border border-[color:color-mix(in_oklab,var(--fg)_4%,transparent)] transition-colors duration-150 hover:border-fg"
                                        style={{ background: scale[day.level] ?? scale[0] }}
                                        onMouseEnter={(e) => onEnter(e, day)}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {hover && (
                <div
                    role="tooltip"
                    className="absolute -translate-x-1/2 -translate-y-full pointer-events-none z-10"
                    style={{ left: hover.left, top: hover.top - 6 }}
                >
                    <div className="px-2 py-1.5 rounded-md bg-fg shadow-[0_4px_12px_rgb(0_0_0/0.18)] font-mono text-[10.5px] text-bg whitespace-nowrap leading-tight">
                        <span className="font-semibold">
                            {hover.day.count === 0
                                ? `No ${unit}s`
                                : `${hover.day.count} ${unit}${hover.day.count === 1 ? "" : "s"}`}
                        </span>
                        <span className="opacity-70"> on </span>
                        <span>{FULL_DATE.format(new Date(hover.day.date))}</span>
                    </div>
                    <span
                        className="block w-2 h-2 rotate-45 bg-fg mx-auto -mt-1"
                        aria-hidden
                    />
                </div>
            )}
        </div>
    );
}
