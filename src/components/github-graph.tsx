"use client";

import { useState, useMemo } from "react";
import data from "@/data/contributions.json";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Contribution {
    date: string;
    count: number;
    level: number;
}

type EmptyDay = {
    count: 0;
    level: 0;
};

const levels = [
    "dark:bg-[#000000] bg-[#EFF1F3]", // level 0
    "dark:bg-[#333333] bg-[#9be9a8]", // level 1
    "dark:bg-[#666666] bg-[#40c463]", // level 2
    "dark:bg-[#999999] bg-[#30a14e]", // level 3
    "dark:bg-[#cccccc] bg-[#216e39]", // level 4
];

function groupByWeek(contributions: Contribution[]): (Contribution | EmptyDay)[][] {
    const weeks: (Contribution | EmptyDay)[][] = [];
    let currentWeek: (Contribution | EmptyDay)[] = [];

    // Add padding at start if needed
    const firstDate = new Date(contributions[0].date);
    const startPadding = firstDate.getDay();
    if (startPadding > 0) {
        currentWeek = Array(startPadding).fill({ count: 0, level: 0 });
    }

    // Group contributions into weeks
    for (const contribution of contributions) {
        currentWeek.push(contribution);

        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    }

    // Add remaining days as final week if any
    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    return weeks;
}

export default function GithubGraph() {
    const years = Object.keys(data.total).sort((a, b) => parseInt(b) - parseInt(a));
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const [showSelect, setShowSelect] = useState(false);

    const contributionsForYear = useMemo(() => {
        return data.contributions.filter((c) => c.date.startsWith(selectedYear));
    }, [selectedYear]);

    const weeks = useMemo(() => groupByWeek(contributionsForYear), [contributionsForYear]);

    return (
        <div
            className="relative p-3 rounded-md border-[0.5px] border-border overflow-hidden no-scrollbar"
            onMouseEnter={() => setShowSelect(true)}
            onMouseLeave={() => setShowSelect(false)}
        >
            <div
                className={`absolute right-3 top-3 bg-background z-10 transition-opacity ${
                    showSelect ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        {years.map((year) => (
                            <SelectItem key={year} value={year}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex gap-[4px] overflow-x-auto">
                {weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-[4px]">
                        {week.map((day, j) =>
                            day ? (
                                <div
                                    key={j}
                                    className={`w-[12.5px] h-[12.5px] ${
                                        levels[day.level]
                                    } rounded-sm ${
                                        day.level === 0 ? "border-[0.5px] border-border/70" : ""
                                    }`}
                                    title={`${day.count} contributions on ${
                                        "date" in day ? day.date : ""
                                    }`}
                                />
                            ) : (
                                <div key={j} className="w-[12.5px] h-[12.5px] bg-transparent" />
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
