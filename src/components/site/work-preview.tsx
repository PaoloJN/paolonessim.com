"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Props = { src: string | null; alt?: string };

function parseYouTubeId(url: string): string | null {
    const patterns = [
        /youtube\.com\/watch\?(?:.*&)?v=([\w-]{11})/,
        /youtu\.be\/([\w-]{11})/,
        /youtube\.com\/embed\/([\w-]{11})/,
        /youtube\.com\/shorts\/([\w-]{11})/,
    ];
    for (const re of patterns) {
        const m = url.match(re);
        if (m) return m[1];
    }
    return null;
}

export default function WorkPreview({ src, alt = "" }: Props) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const xToRef = useRef<((v: number) => void) | null>(null);
    const yToRef = useRef<((v: number) => void) | null>(null);
    const reducedMotion = usePrefersReducedMotion();

    useLayoutEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.92 });

        if (reducedMotion) return;

        xToRef.current = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
        yToRef.current = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

        function onMove(e: MouseEvent) {
            xToRef.current?.(e.clientX);
            yToRef.current?.(e.clientY);
        }
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [reducedMotion]);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        if (reducedMotion) {
            gsap.set(el, { autoAlpha: src ? 1 : 0, scale: 1 });
            return;
        }
        gsap.to(el, {
            autoAlpha: src ? 1 : 0,
            scale: src ? 1 : 0.92,
            duration: src ? 0.35 : 0.22,
            ease: src ? "power2.out" : "power2.in",
            overwrite: "auto",
        });
    }, [src, reducedMotion]);

    return (
        <div
            ref={wrapRef}
            aria-hidden
            style={{
                opacity: 0,
                visibility: "hidden",
                transform: "translate(-50%, -50%) scale(0.92)",
            }}
            className="pointer-events-none fixed left-0 top-0 z-[200] w-[260px] h-[170px] rounded-md overflow-hidden border border-rule-subtle bg-bg-elevated shadow-[0_12px_32px_rgb(0_0_0/0.16)]"
        >
            {src ? (
                (() => {
                    const yt = parseYouTubeId(src);
                    if (yt) {
                        return (
                            <iframe
                                key={src}
                                src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&mute=1&controls=0&loop=1&playlist=${yt}&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`}
                                title={alt}
                                allow="autoplay; encrypted-media"
                                className="block w-full h-full pointer-events-none scale-[1.35]"
                            />
                        );
                    }
                    if (/\.(mp4|webm|mov)$/i.test(src)) {
                        return (
                            <video
                                key={src}
                                src={src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="block w-full h-full object-cover"
                            />
                        );
                    }
                    return (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            key={src}
                            src={src}
                            alt={alt}
                            className="block w-full h-full object-cover"
                        />
                    );
                })()
            ) : null}
        </div>
    );
}
