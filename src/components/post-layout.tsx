import type { Post } from "@/types/type";

import TableOfContents from "@/components/table-of-contents";
import PostNavigation from "@/components/post-navigation";
import { getPosts } from "@/libraries/content";
import { MDX } from "@/mdx-components";

import React from "react";
import { readingTime } from "reading-time-estimator";
import { toFormattedDate } from "@/libraries/utils";

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
            <div className="flex flex-col">
                <div>
                    <h1>{post.title}</h1>
                </div>
                <div className="mt-1 flex gap-2 text-muted-foreground text-[12.5px]">
                    <PublishedTime />
                    <Seperator />
                    <UpdateTime />
                    <Seperator />
                    <ReadingTime />
                </div>
            </div>

            <MDX source={post.content} />
            <PostNavigation posts={posts} />
            <TableOfContents />
        </React.Fragment>
    );
}
