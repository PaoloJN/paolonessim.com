import { notFound } from "next/navigation";
import { getPosts } from "@/libraries/content";
import { Post } from "@/types/type";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDX } from "@/mdx-components";

const route = "guides";

const Posts = getPosts(route);

interface PageProps {
    params: Post;
}

export default function Page({ params }: PageProps) {
    const post = Posts.find((post: { slug: string }) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return <MDX source={post.content} />;
}
