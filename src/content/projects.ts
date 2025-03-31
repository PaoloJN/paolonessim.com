interface Project {
    title: string;
    description: string;
    date: string;
    github: string;
}

export const projects: Project[] = [
    {
        title: "Youtube AI",
        description: "Chrome Extension for Youtube",
        date: "2024-03-01",
        github: "https://chat-with-youtube.vercel.app",
    },
    {
        title: "Weather AI",
        description: "Vercel AI SDK + Weather API",
        date: "2024-05-01",
        github: "https://github.com/weather-ai",
    },
    {
        title: "AI Hub",
        description: "AI Interface for local models",
        date: "2024-04-01",
        github: "https://github.com/PaoloJN/interact-ai-hub",
    },
];
