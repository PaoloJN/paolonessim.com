"use client";

import Link from "next/link";
import { useState } from "react";
import { bookmarks, type Bookmark } from "@/content/bookmarks";
import EyebrowLine from "./eyebrow";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { editorialTabsList, editorialTabsTrigger } from "./tabs-style";

type Tag = "all" | Bookmark["tag"];

const TAGS: { label: string; value: Tag }[] = [
    { label: "All", value: "all" },
    { label: "Design", value: "design" },
    { label: "Engineering", value: "engineering" },
    { label: "Writing", value: "writing" },
    { label: "Weird", value: "weird" },
];

export default function Bookmarks() {
    const [tag, setTag] = useState<Tag>("all");
    const visible = tag === "all" ? bookmarks : bookmarks.filter((b) => b.tag === tag);

    return (
        <section className="py-10" id="bm">
            <EyebrowLine label="08 · Bookmarks" count={`${visible.length}`} />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[18px]">
                Things I revisit. People doing better work than me.
            </p>

            <Tabs value={tag} onValueChange={(v) => setTag(v as Tag)}>
                <TabsList className={`${editorialTabsList} mb-[18px]`}>
                    {TAGS.map((t) => (
                        <TabsTrigger
                            key={t.value}
                            value={t.value}
                            className={editorialTabsTrigger}
                        >
                            {t.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="grid grid-cols-2 max-[580px]:grid-cols-1 gap-px bg-rule-subtle border border-rule-subtle rounded-md overflow-hidden">
                {visible.map((b) => (
                    <Link
                        key={b.domain}
                        className="group relative flex flex-col gap-1 px-4 py-3.5 bg-bg text-fg transition-colors duration-200 min-w-0 hover:bg-bg-elevated"
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center justify-between gap-2.5">
                            <span className="font-mono text-xs font-medium text-fg whitespace-nowrap overflow-hidden text-ellipsis">
                                {b.domain}
                            </span>
                            <span className="font-mono text-xs text-fg-faint transition-[transform,color] duration-200 group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>
                        </div>
                        <p className="text-[12.5px] leading-[1.5] text-fg-muted">{b.note}</p>
                        <span className="absolute bottom-3 right-3.5 max-[580px]:static max-[580px]:self-start max-[580px]:mt-1 font-mono text-[9.5px] font-medium tracking-[0.08em] uppercase text-fg-subtle bg-bg-inset border border-rule-subtle px-1.5 py-0.5 rounded-[3px]">
                            {b.tag}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
