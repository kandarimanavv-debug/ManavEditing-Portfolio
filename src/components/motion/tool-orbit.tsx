import type { CSSProperties } from "react";
import Image from "next/image";
import { videoEditingSkills } from "@/db/skills";

// Must match the .tool-orbit-* animation durations in globals.css.
const REVOLUTION_SECONDS = 28;

export default function ToolOrbit() {
    const step = 360 / videoEditingSkills.length;

    return (
        <div className="tool-orbit relative mx-auto h-[260px] w-full max-w-3xl [--orbit-r:105px] [perspective:1100px] sm:h-[320px] sm:[--orbit-r:200px] md:h-[380px] md:[--orbit-r:270px]">
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-[64%] h-24 w-[72%] -translate-x-1/2 rounded-[100%] bg-blue-500/20 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="animate-pulse-slow absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,184,255,0.55),transparent_70%)] blur-xl"
            />
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[calc(var(--orbit-r)*2)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#4fb8ff]/25 shadow-[0_0_40px_-6px_rgba(79,184,255,0.35)] [transform:rotateX(76deg)]"
            />
            <ul aria-label="Tools I use" className="tool-orbit-ring absolute left-1/2 top-1/2 [transform-style:preserve-3d]">
                {videoEditingSkills.map((tool, i) => {
                    const angle = i * step;
                    return (
                        <li
                            key={tool.name}
                            className="absolute left-0 top-0 [transform-style:preserve-3d]"
                            style={{ transform: `rotateY(${angle}deg) translateZ(var(--orbit-r))` }}
                        >
                            <div
                                className="tool-orbit-item"
                                style={
                                    {
                                        "--a": `${angle}deg`,
                                        animationDelay: `0s, ${-(angle / 360) * REVOLUTION_SECONDS}s`,
                                    } as CSSProperties
                                }
                            >
                                <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#0b1a3a]/90 p-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_-8px_rgba(79,184,255,0.45)] sm:p-4">
                                    <Image
                                        src={tool.image_link}
                                        alt=""
                                        width={96}
                                        height={96}
                                        className="size-12 object-contain sm:size-16 md:size-20"
                                    />
                                    <span className="whitespace-nowrap text-[10px] font-medium text-gray-300 sm:text-xs">
                                        {tool.name.replace("Adobe ", "")}
                                    </span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
