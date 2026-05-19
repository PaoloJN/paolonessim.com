"use client";

import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import { bookmarks } from "@/content/bookmarks";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandShortcut,
} from "@/components/ui/command";

const NAV: { id: string; label: string }[] = [
    { id: "work", label: "Selected work" },
    { id: "xp", label: "Experience" },
    { id: "activity", label: "Activity" },
    { id: "edu", label: "Education" },
    { id: "uses", label: "Stack & uses" },
    { id: "writing", label: "Writing" },
    { id: "bm", label: "Bookmarks" },
    { id: "off", label: "Off the clock" },
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const runAndClose = useCallback((fn: () => void) => {
        // Defer so cmdk's onSelect completes before the dialog tears down its focus trap
        setOpen(false);
        setTimeout(fn, 0);
    }, []);

    const scrollTo = (id: string) =>
        runAndClose(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });

    const openHref = (href: string) =>
        runAndClose(() => {
            window.open(href, "_blank", "noopener,noreferrer");
        });

    const mailto = (href: string) =>
        runAndClose(() => {
            window.location.href = href;
        });

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput />
            <CommandList>
                <CommandEmpty>No matches.</CommandEmpty>

                <CommandGroup heading="Navigate">
                    {NAV.map((n) => (
                        <CommandItem
                            key={n.id}
                            value={`nav ${n.label}`}
                            onSelect={() => scrollTo(n.id)}
                        >
                            <span>{n.label}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Elsewhere">
                    <CommandItem
                        value="email contact"
                        onSelect={() => mailto(siteConfig.links.email)}
                    >
                        <span>Email</span>
                        <CommandShortcut>{siteConfig.links.email.replace("mailto:", "")}</CommandShortcut>
                    </CommandItem>
                    <CommandItem
                        value="github paolojn"
                        onSelect={() => openHref(siteConfig.links.github)}
                    >
                        <span>GitHub</span>
                        <CommandShortcut>@PaoloJN</CommandShortcut>
                    </CommandItem>
                    <CommandItem
                        value="linkedin"
                        onSelect={() => openHref(siteConfig.links.linkedin)}
                    >
                        <span>LinkedIn</span>
                    </CommandItem>
                    <CommandItem
                        value="x twitter paolojn"
                        onSelect={() => openHref(siteConfig.links.twitter)}
                    >
                        <span>X</span>
                        <CommandShortcut>@paolojn</CommandShortcut>
                    </CommandItem>
                    <CommandItem
                        value="resume cv"
                        onSelect={() => openHref(siteConfig.links.resume)}
                    >
                        <span>Résumé</span>
                        <CommandShortcut>press R</CommandShortcut>
                    </CommandItem>
                </CommandGroup>

                <CommandGroup heading="Projects">
                    {projects.map((p) => (
                        <CommandItem
                            key={p.slug}
                            value={`project ${p.title} ${p.stack} ${p.mark}`}
                            onSelect={() => openHref(p.href)}
                        >
                            <span>{p.title}</span>
                            <CommandShortcut>{p.stack}</CommandShortcut>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandGroup heading="Bookmarks">
                    {bookmarks.map((b) => (
                        <CommandItem
                            key={b.domain}
                            value={`bookmark ${b.domain} ${b.tag} ${b.note}`}
                            onSelect={() => openHref(b.href)}
                        >
                            <span>{b.domain}</span>
                            <CommandShortcut>{b.tag}</CommandShortcut>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
