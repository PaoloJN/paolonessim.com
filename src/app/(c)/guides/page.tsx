import { FadeItem } from "@/components/fade-motion";
import { Posts } from "@/components/posts";
// import { OpenGraph } from "@/lib/og";

import React from "react";

// export function generateMetadata() {
//     const title = "Guides";
//     const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

//     return {
//         ...OpenGraph,
//         title,
//         openGraph: {
//             title,
//             images: [image],
//         },
//         twitter: {
//             images: [image],
//         },
//     };
// }

export default function Page() {
    return (
        <>
            {/* <FadeItem>
                <Posts category="guides" />
            </FadeItem> */}

            <h1>Hello</h1>
        </>
    );
}
