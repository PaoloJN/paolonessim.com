import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import StatusBar from "@/components/site/status-bar";
import Dock from "@/components/site/dock";
import { proseComponents } from "@/components/mdx/prose-components";
import {
    getAllSlugs,
    getAllWritings,
    getWritingBySlug,
    formatWritingDate,
} from "@/lib/writing";

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

type Params = { slug: string };

export async function generateMetadata({
    params,
}: {
    params: Promise<Params> | Params;
}): Promise<Metadata> {
    const resolved = await Promise.resolve(params);
    const post = getWritingBySlug(resolved.slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function WritingPostPage({
    params,
}: {
    params: Promise<Params> | Params;
}) {
    const { slug } = await Promise.resolve(params);
    const post = getWritingBySlug(slug);
    if (!post) notFound();

    const all = getAllWritings({ includeDrafts: true });
    const idx = all.findIndex((w) => w.slug === slug);
    const next = idx > 0 ? all[idx - 1] : null;
    const prev = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;

    return (
        <>
            <StatusBar />
            <Dock />
            <main className="mx-auto max-w-[760px] px-6">
                <article className="pt-14 pb-20">
                    <p className="font-mono text-[11px] tracking-[0.04em] text-fg-subtle mb-8">
                        <Link
                            href="/writing"
                            className="inline-flex items-center gap-1.5 hover:text-fg transition-colors duration-150"
                        >
                            <span aria-hidden>←</span>
                            <span>Writing</span>
                        </Link>
                    </p>

                    <header className="mb-10">
                        {post.draft ? (
                            <span className="inline-flex items-center h-[16px] px-1.5 mb-4 rounded-[3px] bg-bg-elevated border border-rule-subtle text-fg-muted font-mono text-[9px] font-semibold tracking-[0.1em] uppercase leading-none">
                                Draft
                            </span>
                        ) : null}
                        <h1 className="font-serif italic font-normal text-[52px] max-[580px]:text-[36px] leading-[1] tracking-[-0.035em] m-0 mb-5 text-fg">
                            {post.title}
                        </h1>
                        {post.summary ? (
                            <p className="m-0 mb-6 max-w-[60ch] text-[16px] leading-[1.55] text-fg-muted tracking-[-0.005em]">
                                {post.summary}
                            </p>
                        ) : null}
                        <p className="flex flex-row flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-fg-subtle tracking-[0.04em]">
                            <span className="uppercase tracking-[0.08em] text-fg-faint">
                                {formatWritingDate(post.date)}
                            </span>
                            <span className="text-fg-ghost" aria-hidden>
                                ·
                            </span>
                            <span>{post.readMinutes} min read</span>
                        </p>
                    </header>

                    <div className="border-t border-rule-subtle" aria-hidden />

                    <div className="writing-prose">
                        <MDXRemote
                            source={post.content}
                            components={proseComponents}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                },
                            }}
                        />
                    </div>

                    {prev || next ? (
                        <nav
                            aria-label="More writing"
                            className="mt-20 pt-6 border-t border-rule-subtle grid grid-cols-2 gap-4"
                        >
                            <div>
                                {prev ? (
                                    <Link
                                        href={`/writing/${prev.slug}`}
                                        className="group block"
                                    >
                                        <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-fg-faint mb-1">
                                            ← Previous
                                        </span>
                                        <span className="block text-sm tracking-[-0.005em] text-fg-muted group-hover:text-accent-ink transition-colors duration-150">
                                            {prev.title}
                                        </span>
                                    </Link>
                                ) : null}
                            </div>
                            <div className="text-right">
                                {next ? (
                                    <Link
                                        href={`/writing/${next.slug}`}
                                        className="group block"
                                    >
                                        <span className="block font-mono text-[10.5px] uppercase tracking-[0.08em] text-fg-faint mb-1">
                                            Next →
                                        </span>
                                        <span className="block text-sm tracking-[-0.005em] text-fg-muted group-hover:text-accent-ink transition-colors duration-150">
                                            {next.title}
                                        </span>
                                    </Link>
                                ) : null}
                            </div>
                        </nav>
                    ) : null}
                </article>
            </main>
        </>
    );
}
