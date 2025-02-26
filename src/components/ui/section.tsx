import { cn } from "@/libraries/utils";

interface SectionProps {
    index: number;
    title?: string;
}

export default function Section({
    index,
    title,
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & SectionProps) {
    return (
        <section
            className={cn(`text-sm  animate-slide-from-down-and-fade-2`, className)}
            {...props}
        >
            {title && <h3 className="font-medium text-[15px]">{title}</h3>}
            {children}
        </section>
    );
}
