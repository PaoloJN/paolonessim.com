import type { Post } from "@/types/type";

import TableOfContents from "@/components/table-of-contents";
import PostNavigation from "@/components/post-navigation";
import { getPosts } from "@/lib/content";
import { MDX } from "@/mdx-components";

import React from "react";
import { readingTime } from "reading-time-estimator";
import { toFormattedDate } from "@/lib/utils";

interface PostLayoutProps {
    post: Post;
    route: string;
}

export default function PostLayout({ post, route }: PostLayoutProps) {
    const posts = getPosts(route);

    const Seperator = () => {
        return <div>⋅</div>;
    };

    const PublishedTime = () => {
        return <div>Published {toFormattedDate(new Date(post.time.created))}</div>;
    };
    const UpdateTime = () => {
        return <div>Updated {toFormattedDate(new Date(post.time.updated))}</div>;
    };

    const ReadingTime = () => {
        return <div>{readingTime(post.content).minutes} minutes read</div>;
    };

    return (
        <React.Fragment>
            <div>
                <h1 className="mb-4">{post.title}</h1>
                <div className="mt-1 flex gap-2 text-muted-foreground text-small">
                    <PublishedTime />
                    <Seperator />
                    <UpdateTime />
                    <Seperator />
                    <ReadingTime />
                </div>
            </div>

            <article className="text-pretty leading-6">
                <MDX source={post.content} />
            </article>
            <PostNavigation posts={posts} />
            <TableOfContents />
        </React.Fragment>
    );
}
