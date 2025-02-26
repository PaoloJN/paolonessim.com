"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/libraries/utils";

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        // shrink-0
        className={cn(
            "bg-border/50",
            orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
            className
        )}
        {...props}
    />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
