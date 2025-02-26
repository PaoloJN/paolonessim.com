import React from "react";
import ThemeSwitcher from "@/components/theme-switcher";
import CustomLink from "@/components/md-custom-link";

export default function SiteFooter() {
    return (
        <div className="flex w-full items-center justify-between border-border border-t pt-2">
            <div className="px-[2px] text-muted text-small">
                Built with <CustomLink href="https://nextjs.org/" text="Next.js" underline />
            </div>
            <div className="text-muted text-small">
                <ThemeSwitcher />
            </div>
        </div>
    );
}
