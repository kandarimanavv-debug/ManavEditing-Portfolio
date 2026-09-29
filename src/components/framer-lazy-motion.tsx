"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

export default function FramerLazyMotion({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LazyMotion features={domAnimation} strict>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LazyMotion>
    );
}
