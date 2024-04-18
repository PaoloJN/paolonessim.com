"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { Button, buttonVariants } from "./ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "./ui/icons"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { DesktopNav } from "./desktop-nav"

interface SiteHeaderProps {
  className?: string
}
export function SiteHeader({ className, ...props }: SiteHeaderProps) {
  const theme = useTheme()
  const logo = theme.theme === "dark" ? "/logo-dark.jpeg" : "/logo-light.jpeg"

  return (
    <nav className={className} {...props}>
      <div className="flex justify-between items-center pb-[20px] w-full text-xs leading-3 text-black border-b-[0.5px] border-solid border-black border-opacity-15">
        <div className="flex space-x-4 justify-center">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <div className="flex flex-col my-auto">
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
                  "w-9 px-0"
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
                  "w-9 px-0"
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
  )
}
