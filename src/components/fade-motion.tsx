"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function FadeContainer({ children, className }: React.HTMLProps<HTMLDivElement>) {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <motion.div variants={container} initial="hidden" animate="show" className={className}>
            {children}
        </motion.div>
    );
}

export function FadeItem({ children }: { children: React.ReactNode }) {
    const item = {
        hidden: {
            opacity: 0,
            y: 16,
            filter: "blur(4px)",
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 19,
                mass: 1.2,
            },
        },
    };
    return <motion.div variants={item}>{children}</motion.div>;
}

export function Animation({
    className,
    children,
    index,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & { index: number }) {
    return (
        <section
            className={cn(`animate-slide-from-down-and-fade-${index} space-y-4 text-sm`, className)}
            {...props}
        >
            {children}
        </section>
    );
}
