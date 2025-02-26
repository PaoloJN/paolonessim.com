import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const toFormattedDate = (input: Date): string => {
    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(input);
};

export const toFormattedNumber = (input: number): string => {
    return new Intl.NumberFormat("en", {
        style: "decimal",
    }).format(input);
};

export const toRelativeTime = (value: number, unit: Intl.RelativeTimeFormatUnit): string => {
    return new Intl.RelativeTimeFormat("en", {
        numeric: "auto",
    }).format(value, unit);
};
