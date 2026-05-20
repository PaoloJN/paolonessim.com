import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllWritings } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url.replace(/\/$/, "");
    const now = new Date();

    const writings = getAllWritings().map((w) => ({
        url: `${base}/writing/${w.slug}`,
        lastModified: new Date(w.date),
        changeFrequency: "yearly" as const,
        priority: 0.6,
    }));

    return [
        {
            url: `${base}/`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        {
            url: `${base}/writing`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        ...writings,
    ];
}
