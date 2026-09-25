"use client";

import {
    createContext,
    Fragment,
    useContext,
    type CSSProperties,
    type PointerEvent,
    type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { Caveat, Poppins } from "next/font/google";
import {
    m,
    MotionConfig,
    motionValue,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
    type MotionValue,
} from "framer-motion";
import { ArrowRight, Phone, Video } from "lucide-react";
import { AdobeBadge, AppTile, ClapperGlyph, FigmaGlyph } from "./hero-icons";

const display = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const script = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type From = { x?: string; y?: string; rotate?: number; scale?: number };

// Offsets are in viewport units so every element starts outside the frame.
function fly(from: From, delay: number, duration = 1.25) {
    return {
        initial: {
            x: from.x ?? "0vw",
            y: from.y ?? "0vh",
            rotate: from.rotate ?? 0,
            scale: from.scale ?? 1,
            opacity: 0,
        },
        animate: { x: "0vw", y: "0vh", rotate: 0, scale: 1, opacity: 1 },
        transition: { duration, delay, ease: EASE, opacity: { duration: 0.3, delay } },
    };
}

type Pointer = { x: MotionValue<number>; y: MotionValue<number> };
const PointerContext = createContext<Pointer>({ x: motionValue(0), y: motionValue(0) });

function Depth({ depth, className, children }: { depth: number; className?: string; children: ReactNode }) {
    const pointer = useContext(PointerContext);
    const x = useTransform(pointer.x, (v) => v * depth);
    const y = useTransform(pointer.y, (v) => v * depth);
    return (
        <m.div style={{ x, y }} className={className}>
            {children}
        </m.div>
    );
}

type Letter = { ch: string; x: string; y: string; r: number };

const VIDEO: Letter[] = [
    { ch: "V", x: "-45vw", y: "-45vh", r: -140 },
    { ch: "I", x: "-10vw", y: "-60vh", r: 110 },
    { ch: "D", x: "-65vw", y: "8vh", r: -200 },
    { ch: "E", x: "-30vw", y: "95vh", r: 150 },
    { ch: "O", x: "8vw", y: "-55vh", r: 170 },
];

const EDITOR: Letter[] = [
    { ch: "E", x: "35vw", y: "-50vh", r: -120 },
    { ch: "D", x: "12vw", y: "95vh", r: 190 },
    { ch: "I", x: "28vw", y: "-65vh", r: -90 },
    { ch: "T", x: "75vw", y: "-12vh", r: 140 },
    { ch: "O", x: "55vw", y: "95vh", r: -170 },
    { ch: "R", x: "85vw", y: "22vh", r: 100 },
];

const letterFly = (l: Letter, i: number) => fly({ x: l.x, y: l.y, rotate: l.r, scale: 0.5 }, 0.15 + i * 0.05);

const SKILLS: { icon: ReactNode; label: string; note?: string }[] = [
    { icon: <AdobeBadge app="Pr" />, label: "Video Editing", note: "(Reels / YouTube)" },
    { icon: <AdobeBadge app="Ae" />, label: "Motion Graphics" },
    { icon: <AdobeBadge app="Ai" />, label: "Color Grading" },
    { icon: <AdobeBadge app="Ps" />, label: "Logo Animations" },
    {
        icon: (
            <AppTile>
                <FigmaGlyph className="h-[52%]" />
            </AppTile>
        ),
        label: "Social Media Content",
    },
];

const DOCK: { name: string; icon: ReactNode }[] = [
    { name: "Adobe Premiere Pro", icon: <AdobeBadge app="Pr" /> },
    { name: "Adobe After Effects", icon: <AdobeBadge app="Ae" /> },
    { name: "Adobe Illustrator", icon: <AdobeBadge app="Ai" /> },
    { name: "Adobe Photoshop", icon: <AdobeBadge app="Ps" /> },
    {
        name: "Figma",
        icon: (
            <AppTile>
                <FigmaGlyph className="h-[55%]" />
            </AppTile>
        ),
    },
    {
        name: "Final Cut Pro",
        icon: (
            <AppTile>
                <ClapperGlyph className="h-[82%]" />
            </AppTile>
        ),
    },
];

const FLOATERS: { id: string; icon: ReactNode; className: string; from: From; delay: number; drift: number; depth: number }[] = [
    {
        id: "ps",
        icon: <AdobeBadge app="Ps" />,
        className: "right-[7%] top-[3%] text-[34px] xl:left-[61%] xl:right-auto xl:top-[8.5%] xl:text-[2.9cqw]",
        from: { x: "25vw", y: "-55vh", rotate: 120 },
        delay: 1.25,
        drift: 9,
        depth: 26,
    },
    {
        id: "ae",
        icon: <AdobeBadge app="Ae" />,
        className: "hidden xl:block xl:left-[95.6%] xl:top-[30%] xl:text-[2.5cqw]",
        from: { x: "40vw", y: "-25vh", rotate: -120 },
        delay: 1.4,
        drift: 11,
        depth: 18,
    },
    {
        id: "pr",
        icon: <AdobeBadge app="Pr" />,
        className: "hidden opacity-70 blur-[2px] xl:block xl:left-[91%] xl:top-[79%] xl:text-[4.2cqw]",
        from: { x: "30vw", y: "40vh", rotate: 90 },
        delay: 1.3,
        drift: 12,
        depth: 34,
    },
    {
        id: "ai",
        icon: <AdobeBadge app="Ai" />,
        className: "bottom-[24%] left-[4%] text-[30px] opacity-80 blur-[1px] xl:bottom-auto xl:left-[1.8%] xl:top-[46%] xl:text-[3.4cqw] xl:opacity-70 xl:blur-[1.5px]",
        from: { x: "-40vw", y: "20vh", rotate: -150 },
        delay: 1.35,
        drift: 10,
        depth: 30,
    },
    {
        id: "fcp",
        icon: (
            <AppTile>
                <ClapperGlyph className="h-[82%]" />
            </AppTile>
        ),
        className: "hidden xl:block xl:left-[24.5%] xl:top-[65%] xl:text-[3cqw]",
        from: { x: "-35vw", y: "45vh", rotate: 140 },
        delay: 1.5,
        drift: 8.5,
        depth: 22,
    },
];

const PARTICLES = [
    { l: 6, t: 78, s: 3, d: 0, dur: 11, dx: 18 },
    { l: 14, t: 34, s: 2, d: 2.5, dur: 9, dx: -12 },
    { l: 22, t: 88, s: 4, d: 1.2, dur: 13, dx: 10 },
    { l: 31, t: 58, s: 2, d: 4, dur: 10, dx: 16 },
    { l: 39, t: 14, s: 3, d: 6, dur: 12, dx: -20 },
    { l: 47, t: 70, s: 2, d: 3.2, dur: 9.5, dx: 8 },
    { l: 55, t: 42, s: 3, d: 7.5, dur: 11.5, dx: -14 },
    { l: 63, t: 86, s: 2, d: 0.8, dur: 10.5, dx: 12 },
    { l: 71, t: 24, s: 4, d: 5.5, dur: 14, dx: -10 },
    { l: 78, t: 64, s: 2, d: 2, dur: 9, dx: 20 },
    { l: 85, t: 46, s: 3, d: 8, dur: 12.5, dx: -16 },
    { l: 92, t: 82, s: 2, d: 4.6, dur: 10, dx: 10 },
    { l: 97, t: 30, s: 3, d: 1.6, dur: 13.5, dx: -8 },
    { l: 3, t: 52, s: 2, d: 6.8, dur: 11, dx: 14 },
];

function Backdrop() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <m.div
                className="hero-glow absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
            />
            {PARTICLES.map((p, i) => (
                <span
                    key={i}
                    className="hero-rise absolute rounded-full bg-[#9fdcff]"
                    style={
                        {
                            left: `${p.l}%`,
                            top: `${p.t}%`,
                            width: p.s,
                            height: p.s,
                            animationDuration: `${p.dur}s`,
                            animationDelay: `${p.d}s`,
                            boxShadow: "0 0 10px 2px rgba(120, 200, 255, 0.55)",
                            "--hero-dx": `${p.dx}px`,
                        } as CSSProperties
                    }
                />
            ))}
        </div>
    );
}

function CallButton({
    href,
    label,
    tone,
    delay,
    children,
}: {
    href: string;
    label: string;
    tone: "blue" | "green";
    delay: number;
    children: ReactNode;
}) {
    const palette =
        tone === "blue"
            ? "from-[#4aa6ff] to-[#1d6fde] shadow-[0_10px_24px_-8px_rgba(45,140,255,0.9)]"
            : "from-[#3ed584] to-[#19a553] shadow-[0_10px_24px_-8px_rgba(40,200,110,0.85)]";
    const ring = tone === "blue" ? "bg-[#3b93ff]" : "bg-[#2cc66e]";
    const body = (
        <>
            <span
                aria-hidden="true"
                className={`hero-ring absolute inset-0 rounded-full ${ring}`}
                style={{ animationDelay: `${delay + 0.9}s` }}
            />
            <m.span
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                className={`relative grid size-full place-items-center rounded-full bg-gradient-to-b text-white ${palette}`}
            >
                {children}
            </m.span>
        </>
    );
    const className =
        "relative block size-11 shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/70 xl:size-[3.45cqw]";

    return href.startsWith("http") ? (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
            {body}
        </a>
    ) : (
        <Link href={href} aria-label={label} className={className}>
            {body}
        </Link>
    );
}

export default function Hero() {
    const reduceMotion = useReducedMotion();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const x = useSpring(pointerX, { stiffness: 50, damping: 16, mass: 0.8 });
    const y = useSpring(pointerY, { stiffness: 50, damping: 16, mass: 0.8 });

    const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
        if (reduceMotion || e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        pointerX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
        pointerY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    };

    const resetPointer = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    return (
        <MotionConfig reducedMotion="user">
            <PointerContext.Provider value={{ x, y }}>
                <section
                    aria-label="Introduction"
                    onPointerMove={handlePointerMove}
                    onPointerLeave={resetPointer}
                    className={`${display.className} hero-bg relative isolate overflow-hidden xl:flex xl:min-h-[100svh] xl:items-center xl:justify-center xl:pt-6`}
                >
                    <Backdrop />

                    {/* Desktop: a 3:2 stage that scales as one piece. Mobile: a stacked column. */}
                    <div className="@container relative mx-auto flex w-full max-w-xl flex-col gap-8 px-5 pb-20 pt-28 sm:max-w-2xl sm:px-8 xl:block xl:aspect-[3/2] xl:w-[min(100%,max(1180px,calc((100svh_-_1.5rem)*1.5)))] xl:max-w-none xl:p-0">
                        <div className="relative z-10 flex flex-col gap-4 xl:contents">
                            <m.p
                                {...fly({ x: "-40vw", y: "-20vh" }, 0.2, 1.1)}
                                className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-white/85 sm:text-xs xl:absolute xl:left-[6.9%] xl:top-[9.2%] xl:z-10 xl:text-[1.37cqw] xl:tracking-[0.26em]"
                            >
                                Motion Designer &amp;
                            </m.p>

                            <h1
                                aria-label="Video Editor"
                                className="flex flex-wrap gap-x-[0.24em] text-[clamp(3.25rem,15vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.02em] xl:absolute xl:left-[6.7%] xl:top-[11.8%] xl:z-10 xl:flex-nowrap xl:text-[6.97cqw] xl:leading-none"
                            >
                                <span aria-hidden="true" className="flex">
                                    {VIDEO.map((l, i) => (
                                        <m.span
                                            key={i}
                                            {...letterFly(l, i)}
                                            className="inline-block bg-gradient-to-b from-white to-[#d4e4ff] bg-clip-text text-transparent"
                                        >
                                            {l.ch}
                                        </m.span>
                                    ))}
                                </span>
                                <span aria-hidden="true" className="flex drop-shadow-[0_0_28px_rgba(64,170,255,0.35)]">
                                    {EDITOR.map((l, i) => (
                                        <m.span
                                            key={i}
                                            {...letterFly(l, i + VIDEO.length)}
                                            className="inline-block bg-gradient-to-b from-[#8edbff] to-[#3aa2f3] bg-clip-text text-transparent"
                                        >
                                            {l.ch}
                                        </m.span>
                                    ))}
                                </span>
                            </h1>

                            <m.span
                                aria-hidden="true"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.1, duration: 0.8, ease: EASE }}
                                className="block h-1 w-16 origin-left rounded-full bg-[#4db6ff] shadow-[0_0_16px_rgba(77,182,255,0.75)] xl:absolute xl:left-[6.9%] xl:top-[23.05%] xl:z-10 xl:h-[0.3cqw] xl:w-[4.95%]"
                            />

                            <m.p
                                {...fly({ x: "-60vw" }, 0.55, 1.2)}
                                className="max-w-md text-base leading-relaxed text-[#c3d5ef] sm:text-lg xl:absolute xl:left-[6.9%] xl:top-[25.7%] xl:z-10 xl:max-w-none xl:text-[1.2cqw] xl:leading-[1.41]"
                            >
                                Turning ideas into engaging visuals <br className="hidden xl:inline" />
                                through motion, color and storytelling.
                            </m.p>
                        </div>

                        <Depth
                            depth={9}
                            className="relative z-10 w-full max-w-md xl:absolute xl:left-[6.5%] xl:top-[34.1%] xl:w-[31.9%] xl:max-w-none"
                        >
                            <m.div {...fly({ x: "-85vw", rotate: -8 }, 0.45, 1.35)}>
                                <div className="hero-bob" style={{ animationDelay: "2.3s", animationDuration: "6s" }}>
                                    <div className="flex items-center gap-3 rounded-full border border-[#8fb8ff]/20 bg-[#081d45]/70 p-2 pr-3 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md xl:h-[6.2cqw] xl:gap-[1.17cqw] xl:p-0 xl:pl-[1.17cqw] xl:pr-[1.55cqw]">
                                        <m.div
                                            initial={{ scale: 0, rotate: -120 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 220, damping: 16, delay: 1.2 }}
                                            className="relative size-14 shrink-0 overflow-hidden rounded-full border-2 border-white/25 xl:size-[4.3cqw]"
                                        >
                                            <Image src="/manav-avatar.webp" alt="" fill sizes="96px" className="object-cover" />
                                        </m.div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-lg font-medium leading-tight text-white xl:text-[1.47cqw]">Manav</p>
                                            <p className="text-[0.8rem] leading-snug text-[#b7c8e2] xl:mt-[0.2cqw] xl:truncate xl:text-[0.91cqw]">
                                                Motion Designer | Video Editor
                                            </p>
                                        </div>
                                        <CallButton href="/contact" label="Book a video call with Manav" tone="blue" delay={1.35}>
                                            <Video className="size-5 fill-current xl:size-[1.45cqw]" strokeWidth={1.8} />
                                        </CallButton>
                                        <CallButton
                                            href="https://wa.me/919654275166"
                                            label="Call Manav on WhatsApp"
                                            tone="green"
                                            delay={1.5}
                                        >
                                            <Phone className="size-[18px] fill-current xl:size-[1.3cqw]" strokeWidth={1.8} />
                                        </CallButton>
                                    </div>
                                </div>
                            </m.div>
                        </Depth>

                        {/* Grouped so these overlay the photo on mobile; xl:contents releases them onto the stage. */}
                        <div className="relative -mx-5 sm:-mx-8 xl:contents">
                            <Depth
                                depth={-10}
                                className="relative -ml-[7.23%] aspect-[1000/836] w-[120.5%] xl:absolute xl:left-[13.67%] xl:top-0 xl:z-0 xl:ml-0 xl:h-[81.64%] xl:w-[65.1%]"
                            >
                                <m.div
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.1, y: "6vh" }}
                                    animate={{ opacity: 1, scale: 1, y: "0vh" }}
                                    transition={{ duration: 1.7, ease: EASE }}
                                >
                                    <Image
                                        src="/hero-manav.webp"
                                        alt="Manav sitting at his editing desk with a laptop"
                                        fill
                                        priority
                                        sizes="(min-width: 1280px) 66vw, 120vw"
                                        className="object-contain"
                                    />
                                </m.div>
                            </Depth>

                            <div
                                aria-hidden="true"
                                className={`${script.className} pointer-events-none absolute left-[5%] top-[9%] z-10 -rotate-12 text-[8.5vw] font-semibold leading-[0.92] text-[#4fb0ff] sm:text-5xl xl:left-[6.9%] xl:top-[53.4%] xl:text-[3.15cqw]`}
                                style={{ textShadow: "0 0 18px rgba(79, 176, 255, 0.35)" }}
                            >
                                {["Edit", "Create", "Inspire"].map((word, i) => (
                                    <m.span
                                        key={word}
                                        {...fly({ x: "-50vw", y: "35vh", rotate: -35 }, 1.0 + i * 0.12, 1.15)}
                                        className="block"
                                        style={{ marginLeft: `${i * 0.36}em` }}
                                    >
                                        {word}
                                    </m.span>
                                ))}
                                <svg
                                    viewBox="0 0 120 34"
                                    className="-mt-[0.1em] ml-[0.95em] w-[2.5em] overflow-visible"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                >
                                    <m.path
                                        d="M3 28 C 38 24, 78 15, 117 4"
                                        strokeWidth={3.2}
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 1.6, duration: 0.7, ease: "easeInOut" }}
                                    />
                                    <m.path
                                        d="M44 31 C 64 27, 86 21, 106 14"
                                        strokeWidth={2}
                                        opacity={0.65}
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 1.85, duration: 0.55, ease: "easeInOut" }}
                                    />
                                </svg>
                            </div>

                            {FLOATERS.map((f) => (
                                <Depth key={f.id} depth={f.depth} className={`pointer-events-none absolute z-20 ${f.className}`}>
                                    <m.div {...fly(f.from, f.delay, 1.4)}>
                                        <div
                                            className="hero-drift"
                                            style={{ animationDuration: `${f.drift}s`, animationDelay: `${f.delay + 1.2}s` }}
                                        >
                                            {f.icon}
                                        </div>
                                    </m.div>
                                </Depth>
                            ))}

                            <Depth
                                depth={6}
                                className="absolute inset-x-0 bottom-3 z-20 mx-auto w-[min(92%,26rem)] sm:bottom-6 xl:inset-x-auto xl:bottom-auto xl:left-[30.6%] xl:top-[82.1%] xl:mx-0 xl:w-[38.74%]"
                            >
                                <m.div
                                    {...fly({ y: "50vh" }, 0.75, 1.25)}
                                    role="list"
                                    aria-label="Tools I use"
                                    className="flex items-center justify-between rounded-[1.4rem] border border-[#7fb0ff]/25 bg-[#0a1f47]/65 px-3.5 py-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md xl:h-[5.86cqw] xl:rounded-[1.8cqw] xl:px-[2.2cqw] xl:py-0"
                                >
                                    {DOCK.map((app, i) => (
                                        <m.div
                                            key={app.name}
                                            role="listitem"
                                            aria-label={app.name}
                                            initial={{ y: "45vh", x: i % 2 ? "6vw" : "-6vw", rotate: i % 2 ? 160 : -160, opacity: 0 }}
                                            animate={{ y: "0vh", x: "0vw", rotate: 0, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 80,
                                                damping: 13,
                                                delay: 1.0 + i * 0.08,
                                                opacity: { duration: 0.2, delay: 1.0 + i * 0.08 },
                                            }}
                                        >
                                            <div className="hero-wave" style={{ animationDelay: `${2.4 + i * 0.16}s` }}>
                                                <m.div
                                                    title={app.name}
                                                    whileHover={{ scale: 1.22, y: -8 }}
                                                    whileTap={{ scale: 0.94 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 16 }}
                                                    className="text-[40px] sm:text-[48px] xl:text-[3.8cqw]"
                                                >
                                                    {app.icon}
                                                </m.div>
                                            </div>
                                        </m.div>
                                    ))}
                                </m.div>
                            </Depth>

                            <m.span
                                aria-hidden="true"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.45, duration: 0.9, ease: EASE }}
                                className="hidden origin-right bg-gradient-to-l from-[#4a90e2] to-transparent xl:absolute xl:left-[22.66%] xl:top-[85.9%] xl:z-10 xl:block xl:h-[0.1cqw] xl:w-[6.25%]"
                            />
                            <m.span
                                aria-hidden="true"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.45, duration: 0.9, ease: EASE }}
                                className="hidden origin-left bg-gradient-to-r from-[#4a90e2] to-transparent xl:absolute xl:left-[71.1%] xl:top-[85.9%] xl:z-10 xl:block xl:h-[0.1cqw] xl:w-[6.25%]"
                            />
                        </div>

                        <div className="relative z-10 flex flex-col gap-2 xl:contents">
                            <div className="relative z-10 -rotate-[10deg] self-start xl:absolute xl:left-[72.4%] xl:top-[15.8%]">
                                <m.div
                                    {...fly({ x: "35vw", y: "-45vh", rotate: 40 }, 0.95, 1.2)}
                                    aria-hidden="true"
                                    className={`${script.className} flex items-start text-[2rem] font-semibold leading-none text-[#5fb4ff] xl:text-[2.3cqw]`}
                                    style={{ textShadow: "0 0 16px rgba(95, 180, 255, 0.35)" }}
                                >
                                    My Skills
                                    <svg
                                        viewBox="0 0 48 52"
                                        className="ml-[0.18em] mt-[0.2em] w-[1.05em] overflow-visible"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.6}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <m.path
                                            d="M3 8 C 22 2, 36 12, 38 40"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ delay: 1.5, duration: 0.6, ease: "easeInOut" }}
                                        />
                                        <m.path
                                            d="M29 32 L 38.5 42 L 45 30"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ delay: 2.05, duration: 0.3, ease: "easeOut" }}
                                        />
                                    </svg>
                                </m.div>
                            </div>

                            <Depth
                                depth={12}
                                className="relative z-10 w-full xl:absolute xl:left-[72.27%] xl:top-[24.6%] xl:w-[22.46%]"
                            >
                                <m.div
                                    {...fly({ x: "75vw", rotate: 6 }, 0.5, 1.35)}
                                    className="overflow-hidden rounded-3xl border border-[#8fb8ff]/20 bg-[#0a2150]/60 py-2 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md xl:rounded-[1.6cqw] xl:py-[0.56cqw]"
                                >
                                    <ul aria-label="My skills">
                                        {SKILLS.map((skill, i) => (
                                            <m.li key={skill.label} {...fly({ x: "30vw" }, 0.9 + i * 0.09, 1)} className="relative">
                                                {i > 0 && (
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-x-5 top-0 h-px bg-white/[0.08] xl:left-[1.95cqw] xl:right-[1.8cqw]"
                                                    />
                                                )}
                                                <Link
                                                    href="/skills"
                                                    className="group flex items-center gap-4 px-5 py-3 outline-none transition-colors duration-300 hover:bg-white/[0.04] focus-visible:bg-white/[0.06] xl:h-[4.48cqw] xl:gap-[1.2cqw] xl:py-0 xl:pl-[1.95cqw] xl:pr-[1.8cqw]"
                                                >
                                                    <span
                                                        className="hero-bob text-[40px] xl:text-[3.1cqw]"
                                                        style={{
                                                            animationDelay: `${2.2 + i * 0.35}s`,
                                                            animationDuration: `${4.5 + (i % 3) * 0.6}s`,
                                                        }}
                                                    >
                                                        <span className="block transition-transform duration-300 group-hover:scale-110">
                                                            {skill.icon}
                                                        </span>
                                                    </span>
                                                    <span className="min-w-0 flex-1 leading-tight">
                                                        <span className="block text-[0.95rem] font-medium text-white xl:text-[0.95cqw]">
                                                            {skill.label}
                                                        </span>
                                                        {skill.note && (
                                                            <span className="block text-xs text-[#93aacb] xl:mt-[0.15cqw] xl:text-[0.78cqw]">
                                                                {skill.note}
                                                            </span>
                                                        )}
                                                    </span>
                                                    <ArrowRight
                                                        aria-hidden="true"
                                                        strokeWidth={1.6}
                                                        className="size-4 shrink-0 text-[#8db6ea] transition duration-300 group-hover:translate-x-1 group-hover:text-white xl:size-[1.2cqw]"
                                                    />
                                                </Link>
                                            </m.li>
                                        ))}
                                    </ul>
                                </m.div>
                            </Depth>
                        </div>

                        <div className="relative z-10 flex flex-col gap-2.5 self-start xl:absolute xl:left-[74.2%] xl:top-[70.9%] xl:gap-[1.35cqw]">
                            <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#86b8f0] xl:gap-[1.2cqw] xl:text-[0.91cqw] xl:tracking-[0.2em]">
                                {["Ideas", "Edits", "Impact"].map((word, i) => (
                                    <Fragment key={word}>
                                        {i > 0 && (
                                            <m.span
                                                aria-hidden="true"
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.55 + i * 0.12, duration: 0.5 }}
                                            >
                                                <ArrowRight strokeWidth={1.6} className="size-3.5 xl:size-[1.05cqw]" />
                                            </m.span>
                                        )}
                                        <m.span {...fly({ x: "45vw" }, 1.15 + i * 0.12, 1.05)}>{word}</m.span>
                                    </Fragment>
                                ))}
                            </p>
                            <m.span
                                aria-hidden="true"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.75, duration: 0.8, ease: EASE }}
                                className="block h-0.5 w-32 origin-left rounded-full bg-gradient-to-r from-[#3d8fe0] via-[#3d8fe0] to-transparent xl:h-[0.13cqw] xl:w-[9cqw]"
                            />
                        </div>

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute hidden xl:left-[88.75%] xl:top-[8%] xl:block xl:h-[56%] xl:w-[0.32cqw]"
                        >
                            <m.div
                                initial={{ scaleY: 0, opacity: 0 }}
                                animate={{ scaleY: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: EASE, delay: 0.1 }}
                                className="size-full origin-top"
                            >
                                <div className="hero-strip relative size-full">
                                    <div className="absolute -inset-x-[2.4cqw] inset-y-0 rounded-full bg-gradient-to-b from-transparent via-[#3f9dff]/50 via-15% to-transparent blur-[22px]" />
                                    <div className="absolute -inset-x-[0.35cqw] inset-y-0 rounded-full bg-gradient-to-b from-transparent via-[#7cc8ff]/70 via-15% to-transparent blur-[6px]" />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-[#c9f1ff] via-15% to-transparent" />
                                </div>
                            </m.div>
                        </div>
                    </div>
                </section>
            </PointerContext.Provider>
        </MotionConfig>
    );
}
