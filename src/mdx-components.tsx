import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { PluggableList } from "unified";
import { cn } from "@/libraries/utils";

import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import CustomImage from "./components/md-custom-image";
import CustomLink from "./components/md-custom-link";
import Figure from "./components/md-figure";

const components: MDXComponents = {
    h2: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
        if (id?.includes("footnote-label")) {
            return null;
        }
        return <h2 id={id}>{children}</h2>;
    },
    a: ({ children, href }) => {
        // if (href?.startsWith("#user-content-fn-")) {
        //     return <FootnoteForwardReference href={href}>{children}</FootnoteForwardReference>;
        // }
        return (
            <CustomLink href={href} className="inline-flex items-center gap-1 text-muted" underline>
                {children}
            </CustomLink>
        );
    },
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <blockquote
            className={cn("mt-6 border-gray-4 border-l-2 pl-6 text-muted", className)}
            {...props}
        />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-hidden overflow-y-auto">
            <table className={cn("w-full overflow-hidden", className)} {...props} />
        </div>
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
        if (
            React.Children.toArray(props.children).some(
                (child) =>
                    React.isValidElement(child) &&
                    (child as React.ReactElement).props.id?.includes("user-content-fn-")
            )
        ) {
            return (
                <ol data-footnotes>
                    <div className="mt-6 mb-2 text-muted text-small">Footnotes</div>
                    {props.children}
                </ol>
            );
        }
        return <ol className={cn("mt-2 ml-2 list-decimal", className)} {...props} />;
    },
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("mt-2 ml-2 list-disc", className)} {...props} />
    ),
    // li: ({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
    //     if (props.id?.includes("user-content-fn-")) {
    //         return (
    //             <li id={props.id}>
    //                 {React.Children.map(children, (child) => {
    //                     if (React.isValidElement(child)) {
    //                         if (child.type === "p") {
    //                             const href = child.props.children.find((child: React.ReactNode) => {
    //                                 if (React.isValidElement(child)) {
    //                                     return (
    //                                         React.isValidElement(child) &&
    //                                         "props" in child &&
    //                                         (child.props as { href?: string }).href?.includes(
    //                                             "user-content-fnref-"
    //                                         )
    //                                     );
    //                                 }
    //                                 return false;
    //                             })?.props.href;

    //                             const filtered = child.props.children.filter(
    //                                 (child: React.ReactNode) => {
    //                                     if (React.isValidElement(child)) {
    //                                         return !(
    //                                             React.isValidElement(child) &&
    //                                             "props" in child &&
    //                                             (child.props as { href?: string }).href?.includes(
    //                                                 "user-content-fnref-"
    //                                             )
    //                                         );
    //                                     }
    //                                     return true;
    //                                 }
    //                             );

    //                             return (
    //                                 <FootnoteBackReference href={href}>
    //                                     {filtered}
    //                                 </FootnoteBackReference>
    //                             );
    //                         }
    //                         return child;
    //                     }
    //                     return child;
    //                 })}
    //             </li>
    //         );
    //     }
    //     return <li className={cn("mt-2 ml-2 list-item", className)}>{children}</li>;
    // },

    CodeBlock: ({ children, className }) => {
        const language = className?.replace("language-", "");
        return (
            <pre className="my-6">
                <code className={`language-${language}`}>{children}</code>
            </pre>
        );
    },
    Figure: ({ children, withCodeblock }) => (
        <Figure withCodeblock={withCodeblock ? withCodeblock : undefined}>{children}</Figure>
    ),

    FigureExample: () => {
        return (
            <div className="min- flex h-10 w-32 items-center justify-center rounded-lg border border-yellow-600 bg-yellow-300 text-yellow-100">
                <div className="overflow-x-auto">
                    <div className="min-w-full">
                        <div className="min-w-full">
                            <div className="min-w-full">Showcase</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    Image: ({ caption, alt, ...props }) => <CustomImage {...props} caption={caption} alt={alt} />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
    };
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
    const options = {
        keepBackground: false,
        defaultLang: "tsx",
        theme: {
            dark: "github-dark",
            light: "github-light",
        },
    };

    return (
        <MDXRemote
            {...props}
            components={components}
            options={{
                mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug, [rehypePrettyCode, options]] as PluggableList,
                },
            }}
        />
    );
}
