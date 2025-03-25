import { BookOpenText, EllipsisIcon, RssIcon } from "lucide-react";
import { getPosts } from "@/lib/content";
import { cn } from "@/lib/utils";

import { Link as NextViewTransition } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostsListProps {
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

export default function PostsList({ category, limit, className }: PostsListProps) {
    const posts = getPosts(category).sort((a, b) => {
        return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
    });

    const limitedPosts = limit == null ? posts : posts.slice(0, limit);

    return (
        <div className={cn("text-sm", className)}>
            <div className="flex flex-row items-center justify-between px-1 py-3 border-border/75 border-b">
                <NextViewTransition href={`/${category}`}>
                    <div className="flex flex-row items-center gap-2 text-foreground/80 font-medium">
                        <BookOpenText className="w-4 h-4" />

                        <div>
                            <h2 className="capitalize text-foreground/80 font-normal">
                                {category !== "all" ? category : "Posts"} ({posts.length})
                            </h2>
                        </div>
                    </div>
                </NextViewTransition>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="xs">
                            <EllipsisIcon className="w-3 h-3 text-muted-foreground" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background" align="end">
                        {/* TODO: Add RSS feed */}
                        <DropdownMenuItem className="text-xs px-2">
                            <RssIcon className="w-3 h-3 text-muted-foreground" />
                            RSS
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex flex-col mt-3 gap-1">
                {limitedPosts.length > 0 ? (
                    limitedPosts.map((item) => (
                        <PostItem
                            key={item.slug}
                            title={item.title}
                            slug={item.slug}
                            type={item.type}
                            date={formatDate(item.time.created)}
                        />
                    ))
                ) : (
                    <div className="flex justify-center items-center py-8">
                        <div className="text-muted-foreground italic">No posts yet.</div>
                    </div>
                )}
            </div>
        </div>
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
        <NextViewTransition
            href={`/${type}s/${slug}`}
            className="flex items-center gap-4 px-2 py-3 rounded-md hover:bg-muted dark:hover:bg-neutral-800/60 transition-colors font-light"
        >
            <div className="flex items-center gap-4 whitespace-nowrap">
                <span className="text-sm text-foreground/80">{title}</span>
                {type && (
                    <Badge
                        variant="outline"
                        className="text-xs font-normal text-muted-foreground/80 capitalize"
                    >
                        {type}
                    </Badge>
                )}
            </div>
            <div className="flex-grow border-t border-border/50" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">{date}</span>
        </NextViewTransition>
    );
}
