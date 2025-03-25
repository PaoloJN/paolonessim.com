"use client";

import type { Post } from "@/types/type";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

interface PostNavigationProps {
    posts: Array<Post>;
}

export default function PostNavigation({ posts }: PostNavigationProps) {
    posts.sort((a, b) => {
        return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
    });

    const currentSlug = usePathname().split("/").pop();
    const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
    const previous = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
    const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

    if (!previous && !next) {
        return null;
    }

    return (
        <div className="mt-16 flex w-full justify-between border-border border-t pt-8 text-sm">
            {previous && (
                <Link href={`${previous.slug}`} className="flex w-full flex-col gap-3 text-left">
                    <span className="text-muted-foreground">Previous</span>
                    <span className="text-foreground/80">{previous.title}</span>
                </Link>
            )}
            {next && (
                <Link href={`${next.slug}`} className="flex w-full flex-col gap-3 text-right">
                    <span className="text-muted-foreground">Next</span>
                    <span className="text-foreground/80">{next.title}</span>
                </Link>
            )}
        </div>
    );
}
