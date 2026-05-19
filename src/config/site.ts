export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Paolo JN",
    fullName: "Paolo Nessim",
    description:
        "Paolo Nessim — computer engineer building real-time systems that blend software, data, and hardware. Currently researching computer vision at UMD CPSE.",
    url: "https://paolonessim.com",
    ogImage: "https://paolonessim.com/opengraph-image.png",
    location: {
        city: "College Park, MD",
        timezone: "America/New_York",
    },
    links: {
        email: "mailto:paolo.j.nessim@gmail.com",
        github: "https://github.com/paolojn",
        linkedin: "https://linkedin.com/in/paolonessim",
        twitter: "https://x.com/paolojn",
        resume: "/resume.pdf",
    },
} as const;
