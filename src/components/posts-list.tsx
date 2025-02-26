import Link from "next/link";
import Section from "./ui/section";

import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { EllipsisIcon, SquarePen } from "lucide-react";
import { getPosts } from "@/libraries/content";
import { cn } from "@/libraries/utils";

interface PostsListProps {
    index: number;
    category: string;

    limit?: number | null;
    className?: string;
}

function formatDate(date: string | number | Date): string {
    const d: Date = new Date(date);
    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function PostsList({ index, category, limit, className }: PostsListProps) {
    console.log("category", category);
    const posts = getPosts(category).sort((a, b) => {
        return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
    });

    const displayedPosts = limit == null ? posts : posts.slice(0, limit);

    return (
        <Section index={index} className={className}>
            <div className="flex flex-row items-center justify-between px-1 py-3 border-border/50 border-b">
                <div className="flex flex-row items-center gap-2 text-muted-foreground font-medium">
                    <SquarePen className="w-3.5 h-3.5 mt-[1px]" />
                    <h3 className="capitalize">
                        {category !== "all" ? category : "Posts"} ({posts.length})
                    </h3>
                </div>

                <Button variant="outline" size="xs">
                    <EllipsisIcon className="w-3 h-3 text-muted-foreground" />
                </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
                {displayedPosts.map((post) => (
                    <PostItem
                        key={post.slug}
                        title={post.title}
                        slug={post.slug}
                        type={post.type}
                        date={formatDate(post.time.created)}
                    />
                ))}
            </div>

            {limit != null && (
                <Link
                    href="/posts"
                    className={cn(
                        buttonVariants({
                            variant: "outline",
                            size: "sm",
                        }),
                        "w-full text-[12px] text-muted-foreground mt-5 gap-2"
                    )}
                >
                    <span>View All</span> <ArrowRightIcon className="w-4 h-4" />
                </Link>
            )}
        </Section>
    );
}

interface PostItemProps {
    title: string;
    slug: string;
    date: string;
    type?: string;
}

function PostItem({ title, slug, type, date }: PostItemProps) {
    return (
        <Link
            className="flex w-full items-center hover:rounded-md py-3 px-2 text-black hover:bg-neutral-200/50  dark:text-neutral-100 dark:hover:bg-neutral-800/75"
            href={`/${type}s/${slug}`}
        >
            <div className="flex flex-initial items-center space-x-2">
                <span className="text-sm">{title}</span>
                {type ? (
                    <span className="border text-[10px] text-muted-foreground rounded-md border-neutral-200 dark:border-neutral-900 px-2 capitalize">
                        {type}
                    </span>
                ) : null}
            </div>
            <div className="mx-4 -mb-1 flex-auto border-b border-border dark:border-neutral-700/20"></div>
            <div className="flex-end">
                <span className="text-sm text-muted-foreground">{date}</span>
            </div>
        </Link>
    );
}
