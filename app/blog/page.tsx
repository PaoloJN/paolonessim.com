import Link from "next/link";
import { getBlogPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  const allPosts = getBlogPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="flex flex-col ">
      {/* <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1> */}

      <div className="mx-auto w-fit">
        {sortedPosts.map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col">
              <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </p>
              {/* <Suspense fallback={<p className="h-6" />}>
              <Views slug={post.slug} />
            </Suspense> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount()
//   return <ViewCounter allViews={views} slug={slug} />
// }
