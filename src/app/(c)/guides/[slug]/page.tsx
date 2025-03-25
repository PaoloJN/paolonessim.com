import type { Post } from "@/types/type";

import { OpenGraph } from "@/lib/metadata";
import { getPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import PostLayout from "@/components/post-layout";

interface PageProps {
    params: Post;
}

const route = "guides";
const Posts = getPosts(route);

export async function generateStaticParams() {
    return Posts.map((post) => ({
        slug: `${post.slug}`,
    }));
}

export function generateMetadata({ params }: PageProps) {
    const post = Posts.find((post: { slug: string }) => post.slug === params.slug);
    const title = post ? post.title : "";
    const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

    return {
        ...OpenGraph,
        title,
        openGraph: {
            title,
            images: [image],
        },
        twitter: {
            images: [image],
        },
    };
}

export default function Page({ params }: PageProps) {
    const post = Posts.find((post: { slug: string }) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <PostLayout post={post} route={route} />;
}
