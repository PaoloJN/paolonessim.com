"use client";

import * as React from "react";
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ClipboardIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CopyButtonProps extends ButtonProps {
    value: string;
    src?: string;
}

export async function copyToClipboardWithMeta(value: string) {
    navigator.clipboard.writeText(value);
}

export function CopyButton({ value, className, variant = "ghost", ...props }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    return (
        <Button
            size="icon"
            variant={variant}
            className={cn(
                "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
                className
            )}
            onClick={() => {
                copyToClipboardWithMeta(value);
                setHasCopied(true);
            }}
            {...props}
        >
            <span className="sr-only">Copy</span>
            {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
        </Button>
    );
}

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
    value: string;
    classNames: string;
    className?: string;
}

export function CopyWithClassNames({ value, classNames, className }: CopyWithClassNamesProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    const copyToClipboard = React.useCallback((value: string) => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    className={cn(
                        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
                        className
                    )}
                >
                    {hasCopied ? (
                        <CheckIcon className="h-3 w-3" />
                    ) : (
                        <ClipboardIcon className="h-3 w-3" />
                    )}
                    <span className="sr-only">Copy</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => copyToClipboard(value)}>
                    Component
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => copyToClipboard(classNames)}>
                    Classname
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
    commands: string[];
}

export function CopyNpmCommandButton({ commands, className }: CopyNpmCommandButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }, [hasCopied]);

    const copyCommand = React.useCallback((value: string) => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
    }, []);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    className={cn(
                        "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
                        className
                    )}
                >
                    {hasCopied ? (
                        <CheckIcon className="h-3 w-3" />
                    ) : (
                        <ClipboardIcon className="h-3 w-3" />
                    )}
                    <span className="sr-only">Copy</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => copyCommand(commands[0])}>npm</DropdownMenuItem>
                <DropdownMenuItem onClick={() => copyCommand(commands[1])}>yarn</DropdownMenuItem>
                <DropdownMenuItem onClick={() => copyCommand(commands[2])}>pnpm</DropdownMenuItem>
                <DropdownMenuItem onClick={() => copyCommand(commands[3])}>bun</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
