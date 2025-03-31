"use client";

import Link from "next/link";

import type React from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { EllipsisIcon, Grid2x2Check } from "lucide-react";

import { projects } from "@/content/projects";

interface ProjectListsProps {
    className?: string;
}

export default function ProjectsList({ className }: ProjectListsProps) {
    return (
        <div className={cn("text-sm", className)}>
            <div className="flex flex-row items-center justify-between px-1 py-3 border-border/75 border-b">
                <Link href="/projects">
                    <div className="flex flex-row items-center gap-2 text-foreground/80 font-medium">
                        <Grid2x2Check className="w-4 h-4" />
                        <div>
                            <h2 className="capitalize text-foreground/80 font-normal">
                                Projects ({projects.length})
                            </h2>
                        </div>
                    </div>
                </Link>

                <Button variant="outline" size="xs">
                    <EllipsisIcon className="w-3 h-3 text-muted-foreground" />
                </Button>
            </div>
            <div className="flex flex-col mt-3 gap-1">
                {projects.map((project) => (
                    <ProjectItem
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        github={project.github}
                        date={project.date}
                    />
                ))}
            </div>
            <Link
                href="https:/github.com/paolojn"
                className={cn(
                    buttonVariants({
                        variant: "outline",
                        size: "sm",
                    }),
                    "w-full text-xs text-muted-foreground mt-5 gap-2"
                )}
            >
                <span>View All</span> <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
        </div>
    );
}

interface ProjectItemProps {
    title: string;
    description: string;
    date: string;
    github: string;
}

function ProjectItem({ title, description, date, github }: ProjectItemProps) {
    return (
        <Link
            className="flex items-center gap-4 px-2 py-3 rounded-md hover:bg-muted dark:hover:bg-neutral-800/60 transition-colors font-light"
            href={github || ""}
            target="_blank"
        >
            <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="text-sm text-foreground/80">{title}</span>
                <span className="mx-2 text-sm text-neutral-500 dark:text-neutral-400">
                    {description}
                </span>
            </div>
            <div className="flex-grow border-t border-border/50" />
            <span className="text-xs text-muted-foreground">{formatDate(date)}</span>
        </Link>
    );
}

// format date to month, year (e.g. "Jan, 2025")
function formatDate(date: string) {
    const dateObj = new Date(date);
    return dateObj.toLocaleString("default", { month: "long", year: "numeric" });
}
