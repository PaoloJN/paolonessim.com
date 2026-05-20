export type Project = {
    slug: string;
    title: string;
    year: string;
    stack: string;
    mark: string;
    href: string;
};

export const projects: Project[] = [
    {
        slug: "chess-vision",
        title: "Chessboard Vision System",
        year: "2025 →",
        stack: "Python · OpenCV · ROS",
        mark: "PY",
        href: "https://github.com/PaoloJN/Magic-Gambit-2.0",
    },
    {
        slug: "satellite-tracker",
        title: "Satellite Tracker 3D",
        year: "Feb '25",
        stack: "Next.js · Three.js · WebGL",
        mark: "3D",
        href: "https://github.com/PaoloJN/satgaze",
    },
    {
        slug: "youtube-ai",
        title: "YouTube AI Extension",
        year: "Jan '25",
        stack: "React · MV3 · OpenAI",
        mark: "RX",
        href: "https://chat-with-youtube.vercel.app",
    },
    {
        slug: "pathfinding",
        title: "Pathfinding Visualizer",
        year: "Jan '25",
        stack: "Next.js · Canvas · A* / Dijkstra",
        mark: "A*",
        href: "",
    },
];
