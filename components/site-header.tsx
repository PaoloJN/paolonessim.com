"use client"

import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { DesktopNav } from "@/components/desktop-nav"
import { useTheme } from "next-themes"
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Icons } from "@/components/ui/icons"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const theme = useTheme()
  const logo = theme.theme === "dark" ? "/logo-light.jpeg" : "/logo-dark.jpeg"
  // const isBlog = window.location.pathname.includes("/blog")
  const [{ y }] = useWindowScroll()
  const scrollY = y ?? 0
  // const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  // const scrollProgress = (scrollY / totalHeight) * 100

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full bg-background transition-shadow duration-100",
          // border Remove this line
          "border-[#EBEBEB] dark:border-0 border-[0.5px] box-content",
          scrollY > 0 && "shadow-sm"
        )}
      >
        <div className="flex justify-between items-center mx-8 my-4 px-6">
          <div className="flex items-center space-x-4">
            <Image
              src={logo}
              alt="Logo"
              width={30}
              height={30}
              className="rounded-md"
            />
            <DesktopNav items={siteConfig.mainNav} />
          </div>

          <div className="flex items-center space-x-2">
            <Button variant={"outline"} size="sm">
              Contact
            </Button>
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
        {/* {isBlog && (
          <div
            className="h-[3px] bg-muted-foreground rounded-md"
            style={{ width: `${scrollProgress}%` }}
          />
        )} */}
      </header>
    </>
  )
}
