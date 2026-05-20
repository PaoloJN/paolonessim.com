export type DayCell = {
    date: string;
    count: number;
    level: number; // 0-4 from GitHub API
};

export type Contributions = {
    total: Record<string, number>;
    contributions: DayCell[];
};

export async function fetchGithubContributions(username: string): Promise<Contributions> {
    try {
        const res = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=all`,
            { next: { revalidate: 3600 } },
        );
        if (!res.ok) return { total: {}, contributions: [] };
        return (await res.json()) as Contributions;
    } catch {
        return { total: {}, contributions: [] };
    }
}

export function yearDays(data: Contributions, year: string): DayCell[] {
    return data.contributions.filter((c) => c.date.startsWith(year));
}

export function years(data: Contributions): string[] {
    return Object.keys(data.total).sort((a, b) => parseInt(b) - parseInt(a));
}

export function totalCount(days: DayCell[]): number {
    return days.reduce((a, d) => a + d.count, 0);
}
