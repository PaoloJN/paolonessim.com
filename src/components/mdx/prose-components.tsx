import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const proseComponents: MDXComponents = {
    h1: ({ children, ...props }) => (
        <h1
            className="font-serif italic font-normal text-[40px] max-[580px]:text-[32px] leading-[1.05] tracking-[-0.025em] mt-12 mb-4 text-fg"
            {...props}
        >
            {children}
        </h1>
    ),
    h2: ({ children, ...props }) => (
        <h2
            className="text-[20px] font-medium tracking-[-0.012em] leading-snug mt-12 mb-3 text-fg"
            {...props}
        >
            {children}
        </h2>
    ),
    h3: ({ children, ...props }) => (
        <h3
            className="text-[16px] font-medium tracking-[-0.005em] leading-snug mt-10 mb-2 text-fg"
            {...props}
        >
            {children}
        </h3>
    ),
    p: ({ children, ...props }) => (
        <p
            className="text-[15.5px] leading-[1.7] tracking-[-0.003em] text-fg my-5 max-w-[64ch]"
            {...props}
        >
            {children}
        </p>
    ),
    a: ({ href = "", children, ...props }) => {
        const external = /^https?:\/\//.test(href);
        const cls =
            "underline underline-offset-[3px] decoration-rule decoration-1 hover:decoration-fg text-fg transition-colors duration-150";
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                    {...props}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={cls}>
                {children}
            </Link>
        );
    },
    strong: ({ children, ...props }) => (
        <strong className="font-medium text-fg" {...props}>
            {children}
        </strong>
    ),
    em: ({ children, ...props }) => (
        <em className="font-serif italic text-fg" {...props}>
            {children}
        </em>
    ),
    ul: ({ children, ...props }) => (
        <ul
            className="list-disc pl-5 my-5 text-[15.5px] leading-[1.7] tracking-[-0.003em] text-fg max-w-[64ch] marker:text-fg-faint [&>li]:my-1.5 [&>li]:pl-1"
            {...props}
        >
            {children}
        </ul>
    ),
    ol: ({ children, ...props }) => (
        <ol
            className="list-decimal pl-5 my-5 text-[15.5px] leading-[1.7] tracking-[-0.003em] text-fg max-w-[64ch] marker:text-fg-faint marker:font-mono marker:text-[12px] [&>li]:my-1.5 [&>li]:pl-1"
            {...props}
        >
            {children}
        </ol>
    ),
    blockquote: ({ children, ...props }) => (
        <blockquote
            className="border-l border-rule pl-4 my-6 text-fg-muted italic font-serif text-[17px] leading-[1.6] max-w-[60ch]"
            {...props}
        >
            {children}
        </blockquote>
    ),
    hr: (props) => <hr className="my-10 border-0 border-t border-rule-subtle" {...props} />,
    code: ({ children, ...props }) => (
        <code
            className="font-mono text-[12.5px] px-[5px] py-[1px] rounded-[3px] bg-bg-elevated border border-rule-subtle text-fg"
            {...props}
        >
            {children}
        </code>
    ),
    pre: ({ children, ...props }) => (
        <pre
            className="my-6 p-4 rounded-md border border-rule-subtle bg-bg-elevated overflow-x-auto text-[13px] leading-[1.6] font-mono [&>code]:bg-transparent [&>code]:border-0 [&>code]:p-0 [&>code]:text-[13px]"
            {...props}
        >
            {children}
        </pre>
    ),
    img: ({ src = "", alt = "", ...props }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            className="my-8 rounded-md border border-rule-subtle max-w-full h-auto"
            {...props}
        />
    ),
};
