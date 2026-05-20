export type ProjectKind = "product" | "portfolio";

export type Project = {
    slug: string;
    title: string;
    year: string;
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
        stack: "Chrome · React · TypeScript",
        mark: "SP",
        href: "https://snipprompt.com",
        kind: "product",
    },
    {
        slug: "youtube-ai",
        title: "YouTube AI Extension",
        year: "May '26",
        stack: "React · MV3 · OpenAI",
        mark: "RX",
        href: "https://github.com/PaoloJN/youtube-ai-extension",
        kind: "product",
    },
    {
        slug: "satgaze",
        title: "Satgaze — 3D Satellite Tracker",
        year: "May '26",
        stack: "Next.js · Three.js · WebGL",
        mark: "3D",
        href: "https://satgaze.com",
        kind: "portfolio",
    },
    {
        slug: "claude-code-vcr",
        title: "Claude Code VCR",
        year: "May '26",
        stack: "MCP · TypeScript · Node",
        mark: "MCP",
        href: "https://github.com/PaoloJN/claude-code-vcr",
        kind: "portfolio",
    },
    {
        slug: "chess-vision",
        title: "Chessboard Vision System",
        year: "2025 →",
        stack: "Python · OpenCV · ROS",
        mark: "CV",
        href: "https://github.com/PaoloJN/Magic-Gambit-2.0",
        kind: "portfolio",
    },
    {
        slug: "ai-chat-tree",
        title: "AI Chat Tree — Obsidian",
        year: "Dec '25",
        stack: "TypeScript · Obsidian API",
        mark: "OBS",
        href: "https://github.com/PaoloJN/ai-chat-tree",
        kind: "portfolio",
    },
    {
        slug: "pathfinding",
        title: "Pathfinding Visualizer",
        year: "Jan '25",
        stack: "Next.js · Canvas · A* / Dijkstra",
        mark: "A*",
        href: "",
        kind: "portfolio",
    },
];
