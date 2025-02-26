import clsx from "clsx";

interface CustomLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    text?: string;
    underline?: boolean;
    className?: string;
}

export default function CustomLink({
    text,
    href,
    underline,
    className,
    children,
}: CustomLinkProps) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={clsx(className, {
                "underline decoration-1 decoration-gray-a4 underline-offset-2": underline,
            })}
            href={href}
        >
            {text || children}
        </a>
    );
}
