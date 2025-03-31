import { cn } from "@/lib/utils";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    style: "italic",
    subsets: ["latin"],
});

interface AboutMeProps {
    className?: string;
}

export default function AboutMe({ className }: AboutMeProps) {
    return (
        <div
            className={cn(
                "prose prose-zinc dark:prose-invert max-w-none w-full text-sm text-foreground/80 font-normal text-pretty leading-loose mx-1",
                className
            )}
        >
            <p>
                I’m a{" "}
                <span
                    className={cn(
                        "font-reader text-[13px] text-foreground/95 font-normal mb-1 mx-1",
                        newsreader.className
                    )}
                >
                    Computer Engineering
                </span>{" "}
                student with a curious mind and a love for building thoughtful, useful things. Over
                the years, I’ve worked on open-source projects, explored modern web tech, and
                learned how to turn ideas into real, working products—but I’m just as interested in
                learning *why* things work as *how* they do.
            </p>
            <p>
                Outside of tech, I’m into good design, long walks, interesting conversations, and
                picking up random skills for fun. I like simplicity, clarity, and staying open to
                new ways of thinking. Whether I’m coding or not, I’m always exploring,
                experimenting, and trying to make things a little better.
            </p>
        </div>
    );
}
