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

export default function Education() {
    const [cat, setCat] = useState<Cat>("all");
    const visible = cat === "all" ? courses : courses.filter((c) => c.cat === cat);
    const total = visible.length;
    const current = visible.filter((c) => c.status === "current").length;
    const done = visible.filter((c) => c.status === "done").length;

    return (
        <section className="block" id="edu">
            <EyebrowLine label="05 · Education" />

            <div className="xp">
                <div className="row dates-right">
                    <div className="what">
                        <h4>
                            {degree.title}{" "}
                            <span className="at">
                                at <b>{degree.org}</b>
                                {degree.orgSuffix}
                            </span>
                        </h4>
                        <p>{degree.body}</p>
                    </div>
                    <div className="when">{degree.when}</div>
                </div>
            </div>

            <div className="course-board">
                <div className="course-head">
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
                    <span className="course-meta">
                        {done} done · {current} current · {total} total
                    </span>
                </div>
                <div className="course-grid">
                    {visible.map((c) => (
                        <div
                            className="course-chip"
                            data-cat={c.cat}
                            data-status={c.status}
                            key={c.code}
                        >
                            <span className="bar" aria-hidden />
                            <div className="body">
                                <span className="code">{c.code}</span>
                                <span className="name">{c.name}</span>
                            </div>
                            <span className="status">{c.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
