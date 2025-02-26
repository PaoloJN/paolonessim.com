"use client";

import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <Tabs value={theme} onValueChange={setTheme}>
            <TabsList className="rounded-md p-[1px] h-fit dark:bg-neutral-900">
                <TabsTrigger value="system" className="p-2">
                    <DesktopIcon className="size-3" />
                    <span className="sr-only">System</span>
                </TabsTrigger>
                <TabsTrigger value="light" className="p-2">
                    <SunIcon className="size-3" />
                    <span className="sr-only">Light</span>
                </TabsTrigger>
                <TabsTrigger value="dark" className="p-2">
                    <MoonIcon className="size-3" />
                    <span className="sr-only">Dark</span>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
