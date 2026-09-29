"use client";

import { m, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <m.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-[#2563eb] via-[#4fb8ff] to-[#a855f7] shadow-[0_0_12px_rgba(79,184,255,0.7)]"
        />
    );
}
