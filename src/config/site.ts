export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Paolo JN",
    fullName: "Paolo Nessim",
    description:
        "Paolo Nessim — computer engineer building real-time systems that blend software, data, and hardware.",
    url: "https://paolonessim.com",
    ogImage: "/api/og",
    location: {
        city: "College Park, MD",
        timezone: "America/New_York",
    },
    links: {
        email: "mailto:paolo.j.nessim@gmail.com",
        github: "https://github.com/paolojn",
        linkedin: "https://linkedin.com/in/paolonessim",
        twitter: "https://x.com/paolojn",
        resume: "https://www.linkedin.com/in/paolonessim",
    },
} as const;
