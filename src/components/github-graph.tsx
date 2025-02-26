"use client";

import GitHubCalendar from "react-github-calendar";
import Section from "./ui/section";

type Theme = {
    light: [string, string, string, string, string];
    dark: [string, string, string, string, string];
};

const customTheme: Theme = {
    light: ["#ffffff", "#e0e0e0", "#c0c0c0", "#808080", "#404040"],
    dark: ["#000000", "#333333", "#666666", "#999999", "#cccccc"],
};

const defaultTheme: Theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

// TODO: Add Light mode
// - Add Change year button to show on hover

interface Activity {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

interface GithubGraphProps {
    index: number;
    className?: string;
    data?: Activity[];
}

export default function GithubGraph({ index, className }: GithubGraphProps) {
    return (
        <Section index={index} className={className}>
            <div className="block dark:hidden">
                <GitHubCalendar
                    username="PaoloJN"
                    year={new Date().getFullYear() - 1}
                    colorScheme="light"
                    theme={defaultTheme}
                    fontSize={11.5}
                    hideTotalCount={true}
                    hideColorLegend={true}
                    hideMonthLabels={true}

                    // renderBlock={(block, activity) => (
                    //     <Tooltip delayDuration={50} key={activity.date}>
                    //         <TooltipTrigger asChild>{block}</TooltipTrigger>
                    //         <TooltipContent className="bg-accent text-foreground shadow text-[10px] px-2 py-1">
                    //             {activity.count} activities on {activity.date}
                    //         </TooltipContent>
                    //     </Tooltip>
                    // )}
                    // renderColorLegend={(block, level) => (
                    //     <Tooltip delayDuration={100} key={level}>
                    //         <TooltipTrigger asChild>{block}</TooltipTrigger>
                    //         <TooltipContent
                    //             className="bg-accent text-foreground shadow text-[10px] px-2 py-1"
                    //             side="bottom"
                    //             sideOffset={5}
                    //         >
                    //             Level: {level}
                    //         </TooltipContent>
                    //     </Tooltip>
                    // )}
                />
            </div>

            <div className="hidden dark:block">
                <GitHubCalendar
                    username="PaoloJN"
                    year={new Date().getFullYear()}
                    colorScheme="dark"
                    theme={customTheme}
                    fontSize={11.5}
                    hideTotalCount={true}
                    hideColorLegend={true}
                    hideMonthLabels={true}

                    // renderBlock={(block, activity) => (
                    //     <Tooltip delayDuration={50} key={activity.date}>
                    //         <TooltipTrigger asChild>{block}</TooltipTrigger>
                    //         <TooltipContent className="bg-accent text-foreground shadow text-[10px] px-2 py-1">
                    //             {activity.count} activities on {activity.date}
                    //         </TooltipContent>
                    //     </Tooltip>
                    // )}
                    // renderColorLegend={(block, level) => (
                    //     <Tooltip delayDuration={100} key={level}>
                    //         <TooltipTrigger asChild>{block}</TooltipTrigger>
                    //         <TooltipContent
                    //             className="bg-accent text-foreground shadow text-[10px] px-2 py-1"
                    //             side="bottom"
                    //             sideOffset={5}
                    //         >
                    //             Level: {level}
                    //         </TooltipContent>
                    //     </Tooltip>
                    // )}
                />
            </div>
        </Section>
    );
}
