import StatusBar from "@/components/site/status-bar";
import Hero from "@/components/site/hero";
import Work from "@/components/site/work";
import Experience from "@/components/site/experience";
import Activity from "@/components/site/activity";
import Education from "@/components/site/education";
import Stack from "@/components/site/stack";
import Bookmarks from "@/components/site/bookmarks";
import OffTheClock from "@/components/site/off-the-clock";
import SiteFooter from "@/components/site/site-footer";
import KeyboardShortcuts from "@/components/site/keyboard-shortcuts";
import CommandPalette from "@/components/site/command-palette";

export default function Home() {
    return (
        <>
            <KeyboardShortcuts />
            <CommandPalette />
            <StatusBar />
            <main className="page">
                <Hero />
                <Activity />

                <Work />
                <Experience />
                <Education />
                <Stack />
                <Bookmarks />
                <OffTheClock />
                <SiteFooter />
            </main>
        </>
    );
}
