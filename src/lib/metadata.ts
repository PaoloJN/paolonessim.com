import { siteConfig } from "@/config/site";
import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
    metadataBase: new URL("https://paolonessim.com"),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "paolo jn",
        "paolo jn portfolio",
        "paolo js github",
        "paolo nessim",
        "paolo nessim github",
        "paolo nessim portfolio",
        "software developer",
        "Full stack developer",
    ],
    authors: [
        {
            name: "Paolo Nessim",
            url: "https://paolonessim.com",
        },
    ],
    creator: "paolonessim",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@paolonessim",
    },
    icons: {
        icon: "/favicon.ico",
    },
};
