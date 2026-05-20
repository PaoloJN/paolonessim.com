import Clock from "./clock";
import { siteConfig } from "@/config/site";

export default function StatusBar() {
    return (
        <header className="sticky top-0 z-50 h-9 grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 bg-[color:color-mix(in_oklab,var(--bg)_78%,transparent)] backdrop-blur-[14px] border-b border-rule-subtle font-mono text-[11px] text-fg-subtle tracking-[0.02em]">
            <div className="flex items-center gap-3.5 flex-shrink-0">
                <span>EST. 2023</span>
                <span className="text-fg-faint">·</span>
                <span>v1.0 · May &apos;26</span>
            </div>
            <div className="flex items-center gap-2 text-fg-muted justify-center">
                <span
                    className="w-1.5 h-1.5 rounded-full bg-fg-muted inline-block animate-pulse-soft"
                    aria-hidden
                />
                <span>
                    <Clock tz={siteConfig.location.timezone} />
                </span>
            </div>
            <div className="flex items-center gap-3.5 flex-shrink-0 justify-end">
                <span>{siteConfig.location.city}</span>
            </div>
        </header>
    );
}
