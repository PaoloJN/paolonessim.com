"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => n.toString().padStart(2, "0");

function formatTime(d: Date, tz: string) {
    try {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).formatToParts(d);
        const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "00";
        return `${get("hour")}:${get("minute")}:${get("second")}`;
    } catch {
        return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }
}

export default function Clock({ tz = "America/New_York" }: { tz?: string }) {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const tick = () => setTime(formatTime(new Date(), tz));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [tz]);

    return (
        <>
            <b className="text-fg font-medium" suppressHydrationWarning>
                {time ?? "--:--:--"}
            </b>{" "}
            EDT
        </>
    );
}
