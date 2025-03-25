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
                "prose prose-zinc dark:prose-invert max-w-none w-full text-sm text-foreground/80 font-light text-pretty leading-loose mx-1",
                className
            )}
        >
            <p>
                I&apos;m a{" "}
                <span
                    className={cn(
                        "font-reader text-[13px] text-foreground font-normal",
                        newsreader.className
                    )}
                >
                    Computer Engineering
                </span>{" "}
                student and developer with a few years of experience working on open-source
                projects. I love turning ideas into real, functional products—especially when it
                means building fast, modern web apps that are both clean and scalable. I enjoy
                working where design meets engineering and creating things that are both practical
                and polished.
            </p>
            <p>
                I&apos;m always learning, whether it&apos;s picking up new frameworks, optimizing
                performance, or rethinking how I approach a problem. For me, every project is a
                chance to grow, get better, and push myself to build smarter, more impactful
                software.
            </p>
        </div>
    );
}
