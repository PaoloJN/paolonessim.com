export type WritingItem = {
    slug: string;
    title: string;
    date: string;
    readMinutes: number;
    href: string;
};

export const writings: WritingItem[] = [
    {
        slug: "design-and-engineer",
        title: "How to think like both a designer & engineer",
        date: "21 / 02 / 25",
        readMinutes: 2,
        href: "#",
    },
    {
        slug: "ui-perf",
        title: "UI performance: the cheap wins first",
        date: "16 / 02 / 25",
        readMinutes: 4,
        href: "#",
    },
    {
        slug: "ai-workflow",
        title: "How AI is changing my workflow",
        date: "12 / 02 / 25",
        readMinutes: 2,
        href: "#",
    },
    {
        slug: "design-tokens-101",
        title: "Design tokens 101",
        date: "11 / 01 / 25",
        readMinutes: 2,
        href: "#",
    },
    {
        slug: "hello-world",
        title: "Hello world",
        date: "01 / 01 / 25",
        readMinutes: 1,
        href: "#",
    },
];
