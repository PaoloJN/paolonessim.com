import data from "@/data/contributions.json";

export type DayCell = {
    date: string;
    count: number;
    level: number; // 0-5
};

const pad = (n: number) => n.toString().padStart(2, "0");
const isoDay = (d: Date) =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function lcg(seed: number) {
    let s = seed >>> 0;
    return () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}

function levelFor(count: number): number {
    if (count <= 0) return 0;
    if (count <= 1) return 1;
    if (count <= 3) return 2;
    if (count <= 6) return 3;
    if (count <= 9) return 4;
    return 5;
}

export function githubYearDays(year: string): DayCell[] {
    return (data.contributions as DayCell[]).filter((c) => c.date.startsWith(year));
}

export function githubYears(): string[] {
    return Object.keys(data.total).sort((a, b) => parseInt(b) - parseInt(a));
}

export function claudeYearDays(yearStr: string): DayCell[] {
    const year = parseInt(yearStr);
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    const epoch = +new Date(2024, 5, 1); // Claude Code public launch — mid-2024
    const rand = lcg(year * 113 + 7);
    const out: DayCell[] = [];

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const date = new Date(d);
        const t = +date;
        const days = (t - epoch) / 86_400_000;

        // Probability density for a session that day
        let p: number;
        if (days < 0) p = 0.04; // pre-launch trickle
        else if (days < 60) p = 0.18;
        else p = Math.min(0.85, 0.4 + days / 720);

        const r = rand();
        let count = 0;
        if (r < p) {
            // 1..9 sessions skewed to lower
            count = Math.max(1, Math.floor(rand() * rand() * 9) + 1);
        }
        out.push({ date: isoDay(date), count, level: levelFor(count) });
    }
    return out;
}

export function totalCount(days: DayCell[]): number {
    return days.reduce((a, d) => a + d.count, 0);
}
