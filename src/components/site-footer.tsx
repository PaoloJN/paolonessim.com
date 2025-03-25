"use client";

import React from "react";
import ThemeSwitcher from "@/components/theme-switcher";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex w-full items-center justify-between border-border border-t pt-2">
            <div className="px-[2px] text-muted-foreground/80 text-xs">
                @ {currentYear} {siteConfig.fullName}
            </div>
            <div className="text-muted text-xs">
                <ThemeSwitcher />
            </div>
        </div>
    );
}
