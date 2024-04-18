import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

interface MainNavProps {
  items?: NavItem[]
}

export function DesktopNav({ items }: MainNavProps) {
  // get url see if it matches the href
  // if it does, then add active class
  const pathname = usePathname()

  return (
    <div>
      {items?.length ? (
        <nav className="p-2 rounded-md">
          {items?.map(
            (item, index) =>
              item.href && (
                <Button
                  variant={"ghost"}
                  key={index}
                  disabled={item.disabled}
                  className={cn(
                    "text-muted-foreground p-0 px-4 h-fit py-1 font-light text-[13px]",
                    pathname === item.href && "bg-accent "
                  )}
                  asChild
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
