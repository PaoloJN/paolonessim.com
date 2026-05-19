export type Role = {
    when: string;
    title: string;
    org: string;
    orgSuffix?: string;
    body: string;
};

export const experience: Role[] = [
    {
        when: "Aug 2025 — now",
        title: "Research Intern",
        org: "UMD CPSE",
        body: "Building the vision pipeline for Magic Gambit v2, the lab's robotic chess system. Camera → board state → motion planning, all in real time.",
    },
    {
        when: "Jan 2026 — now",
        title: "CE Participant",
        org: "NASA L'SPACE",
        orgSuffix: " Mission Concept Academy",
        body: "Designing a space mission with a multidisciplinary team — requirements through Preliminary Design Review. Engineering documents, technical reports, formal reviews.",
    },
    {
        when: "Jun — Aug 2025",
        title: "HW/SW Engineer",
        org: "UMD CPSE",
        orgSuffix: " Summer Program",
        body: "Built \"ICantSee,\" a proof-of-concept assistive system using computer vision + haptic feedback for visually impaired users. Got invited back as a research intern.",
    },
    {
        when: "Jan 2023 — now",
        title: "Founder, Full-Stack Dev",
        org: "Nessimworks",
        body: "Production websites and web apps for small-business and nonprofit clients. Requirements, design, build, ship, support. React / Next.js / Tailwind.",
    },
];
