"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

const TAG_ORDER: Bookmark["tag"][] = ["design", "engineering", "writing", "weird"];

export default function Bookmarks() {
    const [tag, setTag] = useState<Tag>("all");

    const visible = useMemo(() => {
        const filtered = tag === "all" ? bookmarks : bookmarks.filter((b) => b.tag === tag);
        return [...filtered].sort(
            (a, b) => TAG_ORDER.indexOf(a.tag) - TAG_ORDER.indexOf(b.tag),
        );
    }, [tag]);

    return (
        <section className="py-10" id="bm">
            <EyebrowLine label="08 · Bookmarks" count={`${visible.length}`} />
            <p className="text-sm leading-[1.65] text-fg-muted tracking-[-0.005em] m-0 mb-[18px]">
                Things I revisit. People doing better work than me.
            </p>

            <Tabs value={tag} onValueChange={(v) => setTag(v as Tag)}>
                <TabsList className={`${editorialTabsList} mb-5`}>
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

            <ul className="group/list list-none m-0 p-0 border-t border-rule-subtle">
                {visible.map((b) => (
                    <li
                        key={b.href}
                        className="group/row relative border-b border-rule-subtle"
                    >
                        <Link
                            href={b.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid grid-cols-[110px_1fr_18px] max-[580px]:grid-cols-[1fr_18px] gap-x-5 max-[580px]:gap-x-3 gap-y-1 items-baseline py-4 max-[580px]:py-3.5 px-1 max-[580px]:px-0 transition-[padding] duration-200 ease-editorial hover:pl-2.5"
                        >
                            <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.12em] text-fg-faint pt-1 max-[580px]:hidden transition-colors duration-200 ease-editorial group-hover/list:text-fg-ghost group-hover/row:!text-fg-subtle">
                                {b.tag}
                            </span>

                            <div className="min-w-0 flex flex-col gap-1">
                                <div className="flex items-center gap-2 min-w-0">
                                    <span className="font-mono text-[12.5px] font-medium text-fg truncate transition-colors duration-200 ease-editorial group-hover/list:text-fg-faint group-hover/row:!text-accent-ink">
                                        {b.domain}
                                    </span>
                                    <span
                                        className="hidden max-[580px]:inline-flex items-center h-[14px] px-1 rounded-[3px] bg-bg-elevated border border-rule-subtle text-fg-muted font-mono text-[8.5px] font-medium tracking-[0.1em] uppercase leading-none shrink-0 ml-auto"
                                        aria-hidden
                                    >
                                        {b.tag}
                                    </span>
                                </div>
                                <p className="text-[12.5px] leading-[1.55] text-fg-muted m-0 transition-colors duration-200 ease-editorial group-hover/list:text-fg-faint group-hover/row:!text-fg">
                                    {b.note}
                                </p>
                            </div>

                            <span
                                className="font-mono text-[13px] text-fg-faint leading-none self-start pt-1.5 transition-[transform,color] duration-200 ease-editorial group-hover/row:text-accent-ink group-hover/row:translate-x-[3px] group-hover/row:-translate-y-[3px]"
                                aria-hidden
                            >
                                ↗
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
