import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
}

export function DesktopNav({ items }: MainNavProps) {
  // get url see if it matches the href
  // if it does, then add active class
  const pathname = usePathname();

  return (
    <div className="sm:hidden">
      {items?.length ? (
        <nav className="-ml-[90px] space-x-2 rounded-md p-2">
          {items?.map(
            (item, index) =>
              item.href && (
                <Button
                  variant={"ghost"}
                  key={index}
                  disabled={item.disabled}
                  className={cn(
                    "h-fit p-0 px-4 py-2 text-[13px] font-light text-muted-foreground",
                    pathname === item.href && "bg-white dark:bg-secondary/80",
                  )}
                  asChild
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
