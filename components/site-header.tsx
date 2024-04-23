"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "./ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./ui/icons";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { DesktopNav } from "./desktop-nav";
import { Suspense, useEffect, useState } from "react";

interface SiteHeaderProps {
  className?: string;
}
export function SiteHeader({ className, ...props }: SiteHeaderProps) {
  // const theme = useTheme();
  // // use css instead to find theme
  // const logo = theme.theme === "dark" ? "/logo-dark.jpeg" : "/logo-light.jpeg";

  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const logo =
    resolvedTheme === "dark"
      ? "/dark-logo.jpeg"
      : resolvedTheme === "light"
        ? "/light-logo.jpeg"
        : "";

  return (
    <nav className={className} {...props}>
      <div className="flex w-full items-center justify-between border-b-[0.5px] border-solid border-black border-opacity-15 pb-[20px] text-xs leading-3 text-black dark:border-white dark:border-opacity-10 dark:text-white">
        <div className="flex justify-center space-x-4">
          {logo !== "" && isClient && (
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          )}

          <div className="my-auto flex flex-col">
            <span>Paolo Nessim</span>
            <span className="mt-1 opacity-50">Junior Full-Stack Developer</span>
          </div>
        </div>

        {/* Nav links */}
        <DesktopNav items={siteConfig.mainNav} />

        <div className="flex items-center space-x-2">
          <div>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0",
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0",
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
