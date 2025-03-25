import { cn } from "@/lib/utils";

import Image, { ImageProps } from "next/image";

interface ThemeImageProps extends Omit<ImageProps, "src"> {
    lightSrc: string;
    darkSrc: string;
    className?: string;
}

export default function ThemeImage({
    lightSrc,
    darkSrc,
    className,
    alt,
    ...props
}: ThemeImageProps) {
    return (
        <>
            <Image
                src={lightSrc}
                alt={alt}
                className={cn(className, "block dark:hidden")}
                {...props}
            />
            <Image
                src={darkSrc}
                alt={alt}
                className={cn(className, "hidden dark:block")}
                {...props}
            />
        </>
    );
}
