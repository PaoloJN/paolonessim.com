import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

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
  return (
    <div>
      {items?.length ? (
        <nav>
          {items?.map(
            (item, index) =>
              item.href && (
                <Button
                  variant={"ghost"}
                  key={index}
                  disabled={item.disabled}
                  className="text-muted-foreground rounded-full p-0 px-4 h-fit py-1 font-light text-sm"
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
