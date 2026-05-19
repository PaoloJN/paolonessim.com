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
        <section className="block" id="bm">
            <EyebrowLine label="08 · Bookmarks" count={`${visible.length}`} />
            <p className="lede" style={{ margin: "0 0 18px" }}>
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

            <div className="bm-grid">
                {visible.map((b) => (
                    <Link
                        key={b.domain}
                        className="bm-card"
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-tag={b.tag}
                    >
                        <div className="head">
                            <span className="domain">{b.domain}</span>
                            <span className="arrow">↗</span>
                        </div>
                        <p className="note">{b.note}</p>
                        <span className="tag-chip">{b.tag}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
