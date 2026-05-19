export type Bookmark = {
    domain: string;
    note: string;
    tag: "design" | "engineering" | "writing" | "weird";
    href: string;
};

export const bookmarks: Bookmark[] = [
    {
        domain: "rauno.me",
        note: "The taste benchmark. Every detail is intentional, nothing extra.",
        tag: "design",
        href: "https://rauno.me",
    },
    {
        domain: "linear.app/method",
        note: "How a serious software team thinks about quality, defaults, and craft.",
        tag: "engineering",
        href: "https://linear.app/method",
    },
    {
        domain: "paulgraham.com",
        note: "Old essays, still load-bearing. Re-read \"Do Things That Don't Scale\" yearly.",
        tag: "writing",
        href: "https://paulgraham.com",
    },
    {
        domain: "thingsmagazine.net",
        note: "Daily slow-internet — architecture, ephemera, beautiful obscurities.",
        tag: "weird",
        href: "http://thingsmagazine.net",
    },
    {
        domain: "rachelbythebay",
        note: "Linux + ops + war stories. The opposite of HN noise.",
        tag: "engineering",
        href: "https://rachelbythebay.com",
    },
    {
        domain: "anthropic.com/news",
        note: "Where the models I use come from. Worth tracking the model card prose.",
        tag: "engineering",
        href: "https://www.anthropic.com/news",
    },
];
