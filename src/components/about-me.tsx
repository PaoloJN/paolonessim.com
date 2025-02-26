import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/libraries/utils";

import { Newsreader } from "next/font/google";
import Section from "./ui/section";

const newsreader = Newsreader({
    style: "italic",
    subsets: ["latin"],
});

interface AboutMeProps {
    index: number;
    className?: string;
}

export default function AboutMe({ index, className }: AboutMeProps) {
    return (
        <Section
            index={index}
            className={cn("prose prose-zinc dark:prose-invert text-[15px] text-pretty", className)}
        >
            {/* className="leading-relaxed" */}
            <p>
                I&#39;m a{" "}
                <span
                    className={cn(
                        "font-medium font-reader text-[16px] text-foreground",
                        newsreader.className
                    )}
                >
                    Computer Engineering
                </span>{" "}
                Student focused on building modern, cool, and optimized web apps that follow
                industry standards. I have a passion for learning new technologies and frameworks.
            </p>
            <p>
                Inspired by{" "}
                <Tooltip>
                    <TooltipTrigger>
                        <span className="italic hover:underline underline-offset-4">Kaizen</span>
                    </TooltipTrigger>
                    <TooltipContent align="start" className="bg-background border">
                        <span className="italic prose prose-zinc dark:prose-invert text-sm">
                            (n.) philosophy of continuous improvement
                        </span>
                    </TooltipContent>
                </Tooltip>
                , strive for continuous learning and improvement, always seeking innovative ways to
                refine my skills and knowledge.
            </p>
        </Section>
    );
}
