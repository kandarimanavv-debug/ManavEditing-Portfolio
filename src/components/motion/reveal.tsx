"use client";

import type { ReactNode } from "react";
import { m, type Variants } from "framer-motion";

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const VARIANTS = {
    up: {
        hidden: { opacity: 0, y: 48 },
        show: { opacity: 1, y: 0 },
    },
    flip: {
        hidden: { opacity: 0, y: 70, rotateX: 45, scale: 0.94 },
        show: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
    },
    left: {
        hidden: { opacity: 0, x: -90, rotateY: 22 },
        show: { opacity: 1, x: 0, rotateY: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 90, rotateY: -22 },
        show: { opacity: 1, x: 0, rotateY: 0 },
    },
    zoom: {
        hidden: { opacity: 0, scale: 0.82, rotateX: 18 },
        show: { opacity: 1, scale: 1, rotateX: 0 },
    },
} satisfies Record<string, Variants>;

type RevealVariant = keyof typeof VARIANTS;

type BaseProps = { children: ReactNode; className?: string };

export function Reveal({
    children,
    className,
    variant = "up",
    delay = 0,
    duration = 0.9,
    amount = 0.25,
}: BaseProps & { variant?: RevealVariant; delay?: number; duration?: number; amount?: number }) {
    return (
        <m.div
            className={className}
            variants={VARIANTS[variant]}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount }}
            transition={{ duration, delay, ease: EASE_OUT }}
            style={{ transformPerspective: 1200 }}
        >
            {children}
        </m.div>
    );
}

export function RevealGroup({
    children,
    className,
    stagger = 0.12,
    delay = 0,
    amount = 0.2,
}: BaseProps & { stagger?: number; delay?: number; amount?: number }) {
    return (
        <m.div
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
        >
            {children}
        </m.div>
    );
}

export function RevealItem({
    children,
    className,
    variant = "up",
    duration = 0.9,
}: BaseProps & { variant?: RevealVariant; duration?: number }) {
    const { hidden, show } = VARIANTS[variant];
    return (
        <m.div
            className={className}
            variants={{ hidden, show: { ...show, transition: { duration, ease: EASE_OUT } } }}
            style={{ transformPerspective: 1200 }}
        >
            {children}
        </m.div>
    );
}
