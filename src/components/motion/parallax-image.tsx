"use client";

import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { m, useScroll, useTransform } from "framer-motion";

// The image is oversized by `strength` on each side so the drift never exposes an edge.
export default function ParallaxImage({
    strength = 6,
    className = "",
    ...image
}: Omit<ImageProps, "fill"> & { strength?: number; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const drift = strength * 0.85;
    const y = useTransform(scrollYProgress, [0, 1], [`-${drift}%`, `${drift}%`]);

    return (
        <div ref={ref} className="absolute inset-0 overflow-hidden">
            <m.div className="absolute inset-x-0" style={{ y, top: `-${strength}%`, bottom: `-${strength}%` }}>
                <Image fill {...image} className={className} />
            </m.div>
        </div>
    );
}
