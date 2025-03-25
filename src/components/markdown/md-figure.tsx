import React from "react";

export default function Figure({
    children,
    withCodeblock,
}: React.HTMLAttributes<HTMLDivElement> & { withCodeblock?: boolean }) {
    return (
        <figure data-with-codeblock={withCodeblock} className="figureWithCodeblock">
            {children}
        </figure>
    );
}
