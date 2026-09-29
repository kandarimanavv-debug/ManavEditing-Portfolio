"use client";

import { useEffect, type PointerEvent, type ReactNode } from "react";
import {
    m,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion";

const SPRING = { stiffness: 170, damping: 18, mass: 0.6 };

export default function TiltCard({
    children,
    className = "",
    max = 8,
    glareClassName = "rounded-[24px]",
    disabled = false,
}: {
    children: ReactNode;
    className?: string;
    max?: number;
    glareClassName?: string;
    disabled?: boolean;
}) {
    const reduceMotion = useReducedMotion();
    const pointerX = useMotionValue(0.5);
    const pointerY = useMotionValue(0.5);
    const glare = useMotionValue(0);
    const rotateX = useSpring(useTransform(pointerY, [0, 1], [max, -max]), SPRING);
    const rotateY = useSpring(useTransform(pointerX, [0, 1], [-max, max]), SPRING);
    const glareOpacity = useSpring(glare, SPRING);
    const glareX = useTransform(pointerX, (v) => `${v * 100}%`);
    const glareY = useTransform(pointerY, (v) => `${v * 100}%`);
    const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.16), transparent 55%)`;

    useEffect(() => {
        if (!disabled) return;
        pointerX.set(0.5);
        pointerY.set(0.5);
        glare.set(0);
    }, [disabled, pointerX, pointerY, glare]);

    const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
        if (disabled || reduceMotion || e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        pointerX.set((e.clientX - rect.left) / rect.width);
        pointerY.set((e.clientY - rect.top) / rect.height);
        glare.set(1);
    };

    const handlePointerLeave = () => {
        pointerX.set(0.5);
        pointerY.set(0.5);
        glare.set(0);
    };

    return (
        <m.div
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className={`relative ${className}`}
        >
            {children}
            <m.div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-30 ${glareClassName}`}
                style={{ background: glareBackground, opacity: glareOpacity }}
            />
        </m.div>
    );
}
