"use client";

import { useState } from "react";
import { degree, courses, type Course } from "@/content/education";
import EyebrowLine from "./eyebrow";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { editorialTabsList, editorialTabsTriggerCompact } from "./tabs-style";

type Cat = "all" | Course["cat"];

const TABS: { label: string; value: Cat }[] = [
    { label: "All", value: "all" },
    { label: "EE", value: "ee" },
    { label: "CS", value: "cs" },
    { label: "Math", value: "math" },
    { label: "Physics", value: "phys" },
];

const CAT_BAR: Record<Course["cat"], string> = {
    ee: "bg-[oklch(0.58_0.14_25)]",
    cs: "bg-[oklch(0.56_0.13_245)]",
    math: "bg-[oklch(0.58_0.13_145)]",
    phys: "bg-[oklch(0.58_0.13_295)]",
};

function StatusDot({ status }: { status: Course["status"] }) {
    if (status === "current") {
        return (
            <span
                className="w-[5px] h-[5px] rounded-full bg-success animate-pulse-soft"
                style={{ boxShadow: "0 0 0 3px color-mix(in oklab, var(--success) 22%, transparent)" }}
                aria-hidden
            />
        );
    }
    if (status === "done") {
        return <span className="w-[5px] h-[5px] rounded-full bg-fg" aria-hidden />;
    }
    return (
        <span
            className="w-[5px] h-[5px] rounded-full bg-transparent"
            style={{ boxShadow: "inset 0 0 0 1px var(--fg-faint)" }}
            aria-hidden
        />
    );
}

const STATUS_TEXT: Record<Course["status"], string> = {
    done: "text-fg-muted",
    current: "text-fg",
    planned: "text-fg-subtle",
};

export default function Education() {
    const [cat, setCat] = useState<Cat>("all");
    const visible = cat === "all" ? courses : courses.filter((c) => c.cat === cat);
    const total = visible.length;
    const current = visible.filter((c) => c.status === "current").length;
    const done = visible.filter((c) => c.status === "done").length;

    return (
        <section className="py-10" id="edu">
            <EyebrowLine label="05 · Education" />

            <div className="flex flex-col">
                <div className="grid grid-cols-[1fr_auto] max-[580px]:grid-cols-1 gap-x-5 py-[14px] first:pt-1 items-baseline">
                    <div className="order-1 max-[580px]:order-none">
                        <h4 className="m-0 mb-0.5 text-sm font-medium tracking-[-0.01em] text-fg">
                            {degree.title}{" "}
                            <span className="text-fg-muted font-normal">
                                at{" "}
                                <b className="text-fg font-medium border-b border-dotted border-rule-strong">
                                    {degree.org}
                                </b>
                                {degree.orgSuffix}
                            </span>
                        </h4>
                        <p className="mt-1 mb-0 text-fg-muted text-[12.5px] leading-[1.5]">
                            {degree.body}
                        </p>
                    </div>
                    <div className="order-2 max-[580px]:order-none text-right max-[580px]:text-left font-mono text-[11px] text-fg-subtle tracking-[0.02em] whitespace-nowrap pt-0.5">
                        {degree.when}
                    </div>
                </div>
            </div>

            <div className="mt-[22px] border border-rule-subtle rounded-md bg-bg-elevated overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-3 py-2.5 border-b border-rule-subtle">
                    <Tabs value={cat} onValueChange={(v) => setCat(v as Cat)}>
                        <TabsList className={editorialTabsList}>
                            {TABS.map((t) => (
                                <TabsTrigger
                                    key={t.value}
                                    value={t.value}
                                    className={editorialTabsTriggerCompact}
                                >
                                    {t.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                    <span className="font-mono text-[10.5px] tracking-[0.06em] uppercase text-fg-subtle">
                        {done} done · {current} current · {total} total
                    </span>
                </div>
                <div className="grid grid-cols-2 max-[580px]:grid-cols-1">
                    {visible.map((c, i) => (
                        <div
                            className={`group grid grid-cols-[6px_1fr_auto] gap-2.5 items-center px-3.5 py-[9px] border-b border-rule-subtle ${
                                i % 2 === 1
                                    ? "max-[580px]:border-l-0 border-l border-rule-subtle"
                                    : ""
                            } text-sm text-fg transition-colors duration-150 min-w-0 hover:bg-bg-overlay`}
                            key={c.code}
                        >
                            <span
                                className={`w-0.5 h-[22px] rounded-[1px] ${CAT_BAR[c.cat]}`}
                                aria-hidden
                            />
                            <div className="min-w-0 flex flex-col gap-0.5">
                                <span className="font-mono text-[11px] text-fg-subtle tracking-[0.02em]">
                                    {c.code}
                                </span>
                                <span
                                    className={`text-[12.5px] whitespace-nowrap overflow-hidden text-ellipsis ${
                                        c.status === "planned" ? "text-fg-muted" : "text-fg"
                                    }`}
                                >
                                    {c.name}
                                </span>
                            </div>
                            <span
                                className={`font-mono text-[9.5px] tracking-[0.08em] uppercase inline-flex items-center gap-1.5 ${STATUS_TEXT[c.status]}`}
                            >
                                <StatusDot status={c.status} />
                                {c.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
