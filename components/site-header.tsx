"use client"

import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { DesktopNav } from "@/components/desktop-nav"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const theme = useTheme()
  const logo = theme.theme === "dark" ? "logo-light.jpeg" : "/logo-dark.jpeg"

  return (
    <header className="sticky top-0 z-40 w-full bg-background ">
      <div className="flex justify-between items-center mx-8 my-4 px-6">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <DesktopNav items={siteConfig.mainNav} />
        </div>

        <div className="flex items-center space-x-4">
          <Button size="sm">Contact</Button>
        </div>
      </div>
    </header>
  )
}
