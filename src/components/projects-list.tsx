"use client";

import type React from "react";
import { cn } from "@/libraries/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, FramerLogoIcon } from "@radix-ui/react-icons";
import { SquarePen } from "lucide-react";

import Link from "next/link";
import Section from "./ui/section";

interface ProjectListsProps {
    index: number;
    className?: string;
}

export default function ProjectsList({ index, className }: ProjectListsProps) {
    return (
        <Section index={index} className={cn("text-sm max-20", className)}>
            <div className="flex flex-row items-center justify-between px-1 py-4 border-border/50 border-b">
                <div className="flex flex-row items-center gap-2 text-foreground/90 font-medium">
                    <SquarePen className="w-3.5 h-3.5 mt-[1px]" />
                    <h3>Projects (20)</h3>
                </div>
            </div>

            {/* <ProjectItem title="Youtube AI" description="Building SaaS from Scratch" year="2021" />
            <ProjectItem title="Weather AI" description="Solving Sellers Problem" year="2021" />
            <ProjectItem title="PDF AI" description="Learn New Things by Doing" year="2021" /> */}
            <div className="flex flex-col mt-3 gap-1">
                <ProjectItemCard />
            </div>
            <Button variant="outline" className="w-full text-[12px] text-muted-foreground mt-4">
                View All <ArrowRightIcon className="w-4 h-4" />
            </Button>
        </Section>
    );
}

interface ProjectItemTextProps {
    title: string;
    description: string;
    year: string;
}

function ProjectItemText({ title, description, year }: ProjectItemTextProps) {
    return (
        <Link
            className="flex w-full items-center rounded-md px-3 py-3 text-black hover:bg-neutral-200/50 focus:outline-blue-500 dark:text-neutral-100 dark:hover:bg-neutral-800/75"
            href=""
        >
            <div className="flex flex-initial items-center">
                <FramerLogoIcon className="w-4 h-4 mr-4 text-muted-foreground" />
                <span className="text-sm font-medium">{title}</span>
                <span className="mx-2 text-sm text-neutral-500 dark:text-neutral-400">
                    {description}
                </span>
            </div>
            <div className="mx-2 -mb-1 flex-auto border-b border-neutral-200 ease-in-out dark:border-neutral-700/50"></div>
            <div className="flex-end">
                <span className="text-sm text-neutral-500">{year}</span>
            </div>
        </Link>
    );
}

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function ProjectItemCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
