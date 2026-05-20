export type ProjectKind = "product" | "portfolio";

export type Project = {
    slug: string;
    title: string;
    year: string;
    /** Short one-liner — what it does or why it exists. Shown in the row. */
    tagline: string;
    /** Tech stack — surfaced in command palette and hover tooltip, not the row. */
    stack: string;
    mark: string;
    href: string;
    kind: ProjectKind;
};

export const projects: Project[] = [
    {
        slug: "snipprompt",
        title: "Snipprompt",
        year: "May '26",
        tagline: "Prompt library that injects into ChatGPT, Claude, Cursor",
        stack: "Chrome MV3 · React · TypeScript",
        mark: "SP",
        href: "https://snipprompt.com",
        kind: "product",
    },
    {
        slug: "youtube-ai",
        title: "YouTube AI",
        year: "May '26",
        tagline: "Chat with any video — 669★ Chrome extension",
        stack: "React · MV3 · OpenAI · Plasmo",
        mark: "YT",
        href: "https://github.com/PaoloJN/youtube-ai-extension",
        kind: "product",
    },
    {
        slug: "satgaze",
        title: "Satgaze",
        year: "May '26",
        tagline: "Every active satellite in orbit, rendered in real time",
        stack: "Next.js · Three.js · WebGL",
        mark: "3D",
        href: "https://satgaze.com",
        kind: "portfolio",
    },
    {
        slug: "claude-code-vcr",
        title: "Claude Code VCR",
        year: "May '26",
        tagline: "Replay past Claude Code sessions from inside a new one",
        stack: "MCP · TypeScript · Node",
        mark: "MCP",
        href: "https://github.com/PaoloJN/claude-code-vcr",
        kind: "portfolio",
    },
    {
        slug: "chess-vision",
        title: "Magic Gambit",
        year: "2025 →",
        tagline: "A robot that plays chess against you — OpenCV + ROS",
        stack: "Python · OpenCV · ROS",
        mark: "CV",
        href: "https://github.com/PaoloJN/Magic-Gambit-2.0",
        kind: "portfolio",
    },
    {
        slug: "ai-chat-tree",
        title: "AI Chat Tree",
        year: "Dec '25",
        tagline: "Branching AI conversations inside Obsidian canvas",
        stack: "TypeScript · Obsidian API",
        mark: "OBS",
        href: "https://github.com/PaoloJN/ai-chat-tree",
        kind: "portfolio",
    },
    {
        slug: "pathfinding",
        title: "Pathfinding Visualizer",
        year: "Jan '25",
        tagline: "A*, Dijkstra, BFS — animated on a maze you can draw",
        stack: "Next.js · Canvas",
        mark: "A*",
        href: "",
        kind: "portfolio",
    },
];
