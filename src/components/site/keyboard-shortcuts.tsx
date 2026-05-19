"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";

function isEditable(el: EventTarget | null) {
    if (!(el instanceof HTMLElement)) return false;
    const tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

export default function KeyboardShortcuts() {
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (isEditable(e.target)) return;

            // R — open résumé in a new tab. ⌘K is owned by CommandPalette.
            if (!e.metaKey && !e.ctrlKey && !e.altKey && e.key.toLowerCase() === "r") {
                e.preventDefault();
                window.open(siteConfig.links.resume, "_blank", "noopener,noreferrer");
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return null;
}
