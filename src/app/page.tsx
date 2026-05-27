import { Suspense } from "react";
import StatusBar from "@/components/site/status-bar";
import Hero from "@/components/site/hero";
import Work from "@/components/site/work";
import Experience from "@/components/site/experience";
import Activity from "@/components/site/activity";
// import Education from "@/components/site/education";
import Stack from "@/components/site/stack";
import Writing from "@/components/site/writing";
import Bookmarks from "@/components/site/bookmarks";
import OffTheClock from "@/components/site/off-the-clock";
import SiteFooter from "@/components/site/site-footer";
import KeyboardShortcuts from "@/components/site/keyboard-shortcuts";
import CommandPalette from "@/components/site/command-palette";
import Dock from "@/components/site/dock";

function ActivitySkeleton() {
    return <section className="py-10 min-h-[240px]" aria-hidden />;
}

function OffTheClockSkeleton() {
    return <section className="py-10 min-h-[180px]" aria-hidden />;
}

export default function Home() {
    return (
        <>
            <KeyboardShortcuts />
            <CommandPalette />
            <StatusBar />
            <Dock />
            <main className="mx-auto max-w-[760px] px-6">
                <Hero />
                <Suspense fallback={<ActivitySkeleton />}>
                    <Activity />
                </Suspense>

                <div className="divide-y divide-rule-subtle">
                    <Work />
                    <Experience />
                    {/* <Education /> */}
                    <Stack />
                    <Writing />
                    <Bookmarks />
                    <Suspense fallback={<OffTheClockSkeleton />}>
                        <OffTheClock />
                    </Suspense>
                    <SiteFooter />
                </div>
            </main>
        </>
    );
}
