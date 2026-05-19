"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Command = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            "flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--rule)] bg-[color:var(--bg-overlay)] text-[color:var(--fg)] shadow-[0_24px_60px_rgb(0_0_0/0.18),0_2px_8px_rgb(0_0_0/0.06)]",
            className,
        )}
        {...props}
    />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends React.ComponentProps<typeof Dialog> {
    title?: string;
    description?: string;
}

const CommandDialog = ({
    children,
    title = "Command palette",
    description = "Search and navigate the site",
    ...props
}: CommandDialogProps) => (
    <Dialog {...props}>
        <DialogContent className="p-0 overflow-hidden">
            <DialogTitle className="sr-only">{title}</DialogTitle>
            <DialogDescription className="sr-only">{description}</DialogDescription>
            <Command className="[&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.12em] [&_[cmdk-group-heading]]:px-[10px] [&_[cmdk-group-heading]]:pt-[10px] [&_[cmdk-group-heading]]:pb-[4px] [&_[cmdk-group-heading]]:text-[color:var(--fg-faint)]">
                {children}
            </Command>
        </DialogContent>
    </Dialog>
);

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
    <div
        className="flex items-center gap-[10px] px-[14px] py-[12px] border-b border-[color:var(--rule-subtle)] text-[color:var(--fg-subtle)]"
        cmdk-input-wrapper=""
    >
        <Search className="h-[14px] w-[14px] shrink-0" />
        <CommandPrimitive.Input
            ref={ref}
            className={cn(
                "flex-1 bg-transparent outline-none text-[14px] tracking-[-0.005em] text-[color:var(--fg)] placeholder:text-[color:var(--fg-subtle)] disabled:cursor-not-allowed disabled:opacity-50 font-sans",
                className,
            )}
            placeholder="Search this site…"
            {...props}
        />
        <span className="kbd">esc</span>
    </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn("max-h-[50vh] overflow-y-auto overflow-x-hidden p-[6px]", className)}
        {...props}
    />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="py-[18px] px-[14px] text-center text-[13px] text-[color:var(--fg-subtle)]"
        {...props}
    />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group ref={ref} className={cn("overflow-hidden", className)} {...props} />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn("my-[6px] h-px bg-[color:var(--rule-subtle)]", className)}
        {...props}
    />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-pointer select-none items-center justify-between gap-[12px] rounded-[var(--radius-sm)] px-[10px] py-[9px] text-[13px] text-[color:var(--fg-muted)] outline-none transition-colors duration-100",
            "data-[selected=true]:bg-[color:var(--bg-elevated)] data-[selected=true]:text-[color:var(--fg)]",
            "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
            className,
        )}
        {...props}
    />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={cn(
            "font-mono text-[11px] text-[color:var(--fg-subtle)] whitespace-nowrap shrink-0",
            className,
        )}
        {...props}
    />
);
CommandShortcut.displayName = "CommandShortcut";

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
};
