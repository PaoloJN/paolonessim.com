import React from "react";
import { OpenGraph } from "@/lib/metadata";
import PostsList from "@/components/posts-list";
import { FadeItem } from "@/components/fade-motion";

const category = "examples";

export function generateMetadata() {
    const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(category)}`;

    return {
        ...OpenGraph,
        category,
        openGraph: {
            category,
            images: [image],
        },
        twitter: {
            images: [image],
        },
    };
}

export default function Page() {
    return (
        <React.Fragment>
            <FadeItem>
                <PostsList category={category} />
            </FadeItem>
        </React.Fragment>
    );
}
