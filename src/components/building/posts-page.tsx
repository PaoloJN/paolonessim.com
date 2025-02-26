import React from "react";
import { readingTime } from "reading-time-estimator";
import { toFormattedDate } from "@/libraries/utils";
import { Post } from "@/types/type";
import { MDXRemote } from "next-mdx-remote/rsc";

// import { getPosts } from "@/libraries/content";

interface Props {
    post: Post;
    route: string;
}

export const Layout = ({ post, route }: Props) => {
    // const posts = getPosts(route);

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
                <div className="mt-1 flex gap-2 text-muted text-small">
                    <PublishedTime />
                    <Seperator />
                    <UpdateTime />
                    <Seperator />
                    <ReadingTime />
                </div>
            </div>

            <MDXRemote source={post.content} />
            {/* <PostNavigation posts={posts} />
            <TableOfContents /> */}
        </React.Fragment>
    );
};
