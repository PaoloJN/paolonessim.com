/**
 * Shared Tailwind class strings for the editorial Tabs treatment, used
 * across Activity / Education / Stack / Bookmarks. They override the shadcn
 * Tabs defaults (h-9 bg-muted p-1) and bind colors to the oklch palette.
 */

export const editorialTabsList =
    "inline-flex items-center gap-[2px] h-auto rounded-[var(--radius-md)] bg-transparent border border-[color:var(--rule-subtle)] p-[2px] text-[color:var(--fg-subtle)]";

export const editorialTabsTrigger =
    "inline-flex items-center gap-[7px] h-6 px-2.5 rounded-[4px] border border-transparent " +
    "font-mono text-[11px] font-medium tracking-[0.01em] text-[color:var(--fg-subtle)] " +
    "hover:text-[color:var(--fg-muted)] transition-colors " +
    "data-[state=active]:bg-[color:var(--bg-elevated)] data-[state=active]:text-[color:var(--fg)] " +
    "data-[state=active]:border-[color:var(--rule-subtle)] data-[state=active]:shadow-[0_1px_2px_rgb(0_0_0/0.04)]";

/** Compact variant for the Coursework board (slightly tighter) */
export const editorialTabsTriggerCompact =
    "inline-flex items-center h-[22px] px-[9px] rounded-[4px] border border-transparent " +
    "font-mono text-[10.5px] font-medium tracking-[0.02em] text-[color:var(--fg-subtle)] " +
    "hover:text-[color:var(--fg-muted)] transition-colors " +
    "data-[state=active]:bg-[color:var(--bg)] data-[state=active]:text-[color:var(--fg)] " +
    "data-[state=active]:border-[color:var(--rule-subtle)] data-[state=active]:shadow-[0_1px_2px_rgb(0_0_0/0.04)]";

/** Bookmarks variant — same look but standalone (no border container) */
export const editorialTabsListInline = editorialTabsList + " mb-[18px]";

/** Stack/terminal variant — outlined chips, no wrapping container */
export const terminalTabsList =
    "flex flex-wrap justify-start gap-1 mb-[14px] bg-transparent border-0 p-0 h-auto rounded-none text-[color:var(--fg-subtle)]";

export const terminalTabsTrigger =
    "inline-flex items-center h-auto px-2 py-[3px] rounded-[4px] " +
    "font-mono text-[10.5px] font-medium tracking-[0.04em] " +
    "bg-transparent border border-[color:var(--rule-subtle)] text-[color:var(--fg-subtle)] " +
    "hover:text-[color:var(--fg-muted)] hover:border-[color:var(--rule)] transition-colors " +
    "data-[state=active]:bg-[color:var(--bg)] data-[state=active]:text-[color:var(--fg)] " +
    "data-[state=active]:border-[color:var(--rule-strong)]";
