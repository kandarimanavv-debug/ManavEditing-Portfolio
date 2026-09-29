"use client";

import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";

const SKILLS = [
    "Video Editing",
    "Motion Graphics",
    "Color Grading",
    "Storytelling",
    "Logo Animations",
    "Social Media Content",
    "YouTube Editing",
    "Audio Engineering",
];

function Track({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
    // Two identical rows so translating by -50% loops seamlessly.
    const row = (duplicate: boolean) => (
        <ul aria-hidden={duplicate || undefined} className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
            {words.map((word) => (
                <li
                    key={word}
                    className="flex items-center gap-8 whitespace-nowrap text-xl font-bold uppercase tracking-[0.12em] text-white md:gap-12 md:text-3xl"
                >
                    {word}
                    <span aria-hidden="true" className="text-[#7cc8ff]">
                        ✦
                    </span>
                </li>
            ))}
        </ul>
    );

    return (
        <div className={`ribbon-track flex w-max ${reverse ? "ribbon-track-reverse" : ""}`}>
            {row(false)}
            {row(true)}
        </div>
    );
}

export default function SkillsRibbon() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const driftA = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const driftB = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section ref={ref} aria-label="What I do" className="relative overflow-hidden py-16 md:py-24">
            <m.div style={{ x: driftA }} className="-mx-[5%] w-[110%] -rotate-2">
                <div className="border-y border-[#4fb8ff]/30 bg-gradient-to-r from-[#0b3a86] via-[#1d5fd0] to-[#0b3a86] py-4 shadow-[0_0_60px_-10px_rgba(59,130,246,0.6)] md:py-5">
                    <Track words={SKILLS} />
                </div>
            </m.div>
            <m.div aria-hidden="true" style={{ x: driftB }} className="-mx-[5%] -mt-3 w-[110%] rotate-[1.5deg]">
                <div className="border-y border-white/10 bg-[#0a1430]/80 py-4 md:py-5">
                    <Track words={[...SKILLS].reverse()} reverse />
                </div>
            </m.div>
        </section>
    );
}
