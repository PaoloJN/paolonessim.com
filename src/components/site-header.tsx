"use client";

import ThemeImage from "./theme-image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SiteHeaderProps {
    className?: string;
}

const menuItems = [
    {
        label: "Resume",
        href: "/resume",
    },
    {
        label: "Projects",
        href: "https://github.com/paolojn",
        target: "_blank",
    },
    {
        label: "Posts",
        href: "/posts",
    },
    {
        label: "Contact",
        href: "mailto:paolo.j.nessim@gmail.com",
    },
];

export default function SiteHeader({ className }: SiteHeaderProps) {
    const isActive = true;

    return (
        <header className={cn(`z-50 w-full`, className)}>
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-start gap-4">
                    <ThemeImage
                        lightSrc="/images/light-avatar.png"
                        darkSrc="/images/dark-avatar.png"
                        alt={"Avatar of " + siteConfig.fullName}
                        width={38}
                        height={38}
                        className="rounded-md border-[0.5px] border-border h-full"
                    />

                    <div className="flex flex-col">
                        <div className="cursor-pointer">
                            <h1 className="font-light text-small transition-element">
                                <span className="sr-only">{siteConfig.fullName}</span>
                                <span
                                    aria-hidden="true"
                                    className="group relative block overflow-hidden"
                                >
                                    <span className="group-hover:-translate-y-full inline-block transition-all duration-300 ease-in-out">
                                        <span
                                            className="inline-block"
                                            style={{ transitionDelay: "275ms" }}
                                        >
                                            {siteConfig.fullName}
                                        </span>
                                    </span>
                                    <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                                        <span
                                            className="inline-block"
                                            style={{ transitionDelay: "175ms" }}
                                        >
                                            {siteConfig.name}
                                        </span>
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Status */}
                        {isActive && (
                            <div className="flex items-center">
                                <div className="absolute flex size-4">
                                    <span className="absolute top-[4.5px] size-1.5 animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative top-[4.5px] size-1.5 rounded-full bg-green-500"></span>
                                </div>
                                <span className="prose prose-neutral ml-4 dark:prose-invert text-[10px] text-muted-foreground">
                                    Coding & Designing
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-row">
                    <Button variant="ghost" size="icon">
                        <Icons.twitter className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="mr-1">
                        <Icons.gitHub className="w-3.5 h-3.5" />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <DotsHorizontalIcon className="w-3.5 h-3.5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="bg-background text-foreground/80"
                            align="end"
                        >
                            {menuItems.map((item) => (
                                <DropdownMenuItem asChild className="text-xs px-2" key={item.label}>
                                    <Link
                                        href={item.href}
                                        target={item.target}
                                        className="group flex items-center justify-between"
                                    >
                                        {item.label}
                                        <ArrowUpRight className="w-3 h-3 ml-1 text-foreground/50 hidden group-hover:block" />
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
