export type Course = {
    code: string;
    name: string;
    cat: "ee" | "cs" | "math" | "phys";
    status: "done" | "current" | "planned";
};

export const degree = {
    when: "Aug '23 → May '27",
    title: "BS, Computer Engineering",
    org: "University of Maryland",
    orgSuffix: ", College Park",
    body: "A. James Clark School of Engineering. CE track — split between EE fundamentals (circuits, signals, EM) and CS (systems, algorithms, vision). Minor in robotics.",
};

export const courses: Course[] = [
    { code: "ENEE 222", name: "Signals & Systems", cat: "ee", status: "done" },
    { code: "ENEE 245", name: "Digital Circuits Lab", cat: "ee", status: "done" },
    { code: "ENEE 322", name: "Signal & System Theory", cat: "ee", status: "current" },
    { code: "ENEE 350", name: "Computer Organization", cat: "ee", status: "done" },
    { code: "CMSC 132", name: "Object-Oriented Programming", cat: "cs", status: "done" },
    { code: "CMSC 216", name: "Computer Systems", cat: "cs", status: "done" },
    { code: "CMSC 250", name: "Discrete Structures", cat: "cs", status: "done" },
    { code: "CMSC 330", name: "Programming Languages", cat: "cs", status: "current" },
    { code: "CMSC 426", name: "Computer Vision", cat: "cs", status: "planned" },
    { code: "MATH 240", name: "Linear Algebra", cat: "math", status: "done" },
    { code: "MATH 241", name: "Calculus III", cat: "math", status: "done" },
    { code: "STAT 410", name: "Probability Theory", cat: "math", status: "planned" },
    { code: "PHYS 270", name: "EM & Modern Physics", cat: "phys", status: "current" },
    { code: "PHYS 271", name: "Physics Lab II", cat: "phys", status: "current" },
];
