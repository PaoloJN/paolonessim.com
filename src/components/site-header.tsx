import ThemeImage from "./theme-image";

import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { cn } from "@/libraries/utils";

interface SiteHeaderProps {
    index: number;
    className?: string;
}

export default function SiteHeader({ index, className }: SiteHeaderProps) {
    const isActive = true;

    return (
        <header
            className={cn(
                `top-0 z-50 w-full animate-slide-from-down-and-fade-1 cursor-context-menu`,
                className
            )}
        >
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center gap-4">
                    <ThemeImage
                        lightSrc="/images/light-avatar.png"
                        darkSrc="/images/dark-avatar.png"
                        alt={"Avatar of " + siteConfig.fullName}
                        width={42}
                        height={42}
                        className="rounded-md border-[1px] border-border/80 h-full dark:border-border/60"
                    />

                    <div className="flex flex-col">
                        <div className="cursor-pointer">
                            <h1 className="font-medium text-[13px] transition-element">
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
                                    <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative top-[4.5px] size-2 rounded-full bg-green-500"></span>
                                </div>
                                <span className="prose prose-neutral ml-4 dark:prose-invert text-[12px]">
                                    Coding & Designing
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Get In Touch */}
                <div className="flex flex-row gap-2">
                    <Button variant="outline" size="icon">
                        <Icons.twitter className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Icons.gitHub className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                        UMD
                    </Button>
                </div>
            </div>
        </header>
    );
}
