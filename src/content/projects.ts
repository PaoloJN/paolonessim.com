export type ProjectKind = "product" | "portfolio";

export type Project = {
    slug: string;
    title: string;
    year: string;
    /** Short one-liner — what it does or why it exists. Shown in the row. */
    tagline: string;
    /** Tech stack — surfaced in command palette and hover tooltip, not the row. */
    stack: string;
    /** Two- or three-letter monogram, used as a fallback when no logo. */
    mark: string;
    /** Optional logo path (svg/png in /public). Renders in place of the mark. */
    logo?: string;
    /** Optional preview image (in /public) — shown by the cursor on row hover. */
    preview?: string;
    href: string;
    kind: ProjectKind;
};

export const projects: Project[] = [
    {
        slug: "snipprompt",
        title: "Snipprompt",
        year: "May '26",
        tagline: "Prompt snippets, anywhere you type",
        stack: "Chrome MV3 · React · TypeScript",
        mark: "SP",
        logo: "/projects/snipprompt/logo.png",
        preview: "/projects/snipprompt/preview.png",
        href: "https://snipprompt.com",
        kind: "product",
    },
    {
        slug: "youtube-ai",
        title: "YouTube AI",
        year: "May '26",
        tagline: "Chat with any YouTube video",
        stack: "React · MV3 · OpenAI · Plasmo",
        mark: "YT",
        logo: "/projects/youtube-ai/logo.png",
        preview: "/projects/youtube-ai/preview.png",
        href: "https://github.com/PaoloJN/youtube-ai-extension",
        kind: "product",
    },
    {
        slug: "satgaze",
        title: "Satgaze",
        year: "May '26",
        tagline: "Every satellite, in real time",
        stack: "Next.js · Three.js · WebGL",
        mark: "3D",
        logo: "/projects/satgaze/logo.svg",
        href: "https://satgaze.com",
        kind: "portfolio",
    },
    {
        slug: "claude-code-vcr",
        title: "Claude Code VCR",
        year: "May '26",
        tagline: "Time-machine for Claude Code sessions",
        stack: "MCP · TypeScript · Node",
        mark: "MCP",
        href: "https://github.com/PaoloJN/claude-code-vcr",
        kind: "portfolio",
    },
    {
        slug: "chess-vision",
        title: "Magic Gambit",
        year: "2025 →",
        tagline: "A robot that plays chess",
        stack: "Python · OpenCV · ROS",
        mark: "CV",
        preview: "/projects/chess-vision/preview.png",
        href: "https://github.com/PaoloJN/Magic-Gambit-2.0",
        kind: "portfolio",
    },
    {
        slug: "ai-chat-tree",
        title: "AI Chat Tree",
        year: "Dec '25",
        tagline: "Branching AI chats in Obsidian",
        stack: "TypeScript · Obsidian API",
        mark: "OBS",
        href: "https://github.com/PaoloJN/ai-chat-tree",
        kind: "portfolio",
    },
    {
        slug: "pathfinding",
        title: "Pathfinding Visualizer",
        year: "Jan '25",
        tagline: "A*, Dijkstra, BFS — animated",
        stack: "Next.js · Canvas",
        mark: "A*",
        logo: "/projects/pathfinding/logo.png",
        preview: "/projects/pathfinding/preview.gif",
        href: "",
        kind: "portfolio",
    },
];
