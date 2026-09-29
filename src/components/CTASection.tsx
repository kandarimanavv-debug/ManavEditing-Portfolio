"use client";

import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CTASectionProps } from "@/types/cta";
import MagneticButton from "@/components/magnetic-button";
import SplitText from "@/components/motion/split-text";
import TiltCard from "@/components/motion/tilt-card";
import { EASE_OUT, RevealGroup, RevealItem } from "@/components/motion/reveal";

function OrbitRing({ className, ringClassName, dotClassName }: { className: string; ringClassName: string; dotClassName: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute z-[1] [perspective:900px] ${className}`}>
      <div className={`relative size-full rounded-full border ${ringClassName}`}>
        <span className={`absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${dotClassName}`} />
      </div>
    </div>
  );
}

const CTASection = ({
  title,
  description,
  buttonText,
  href,
}: CTASectionProps) => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      <m.div
        initial={{ opacity: 0, y: 80, rotateX: 22, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
        style={{ transformPerspective: 1400 }}
        className="relative max-w-5xl mx-auto"
      >
        <TiltCard max={5} glareClassName="rounded-[2rem]">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 group">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl z-0" />

            {/* Subtle Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none z-0" />

            {/* Animated Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full animate-pulse z-0" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full z-0 opacity-50" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }} />

            <OrbitRing
              className="-right-16 -top-16 size-56 md:size-72"
              ringClassName="gyro border-[#4fb8ff]/25"
              dotClassName="bg-[#7cc8ff] shadow-[0_0_14px_4px_rgba(124,200,255,0.7)]"
            />
            <OrbitRing
              className="-bottom-20 -left-16 size-60 md:size-80"
              ringClassName="gyro-alt border-purple-400/20"
              dotClassName="bg-purple-300 shadow-[0_0_14px_4px_rgba(192,132,252,0.6)]"
            />

            {/* Content Container */}
            <RevealGroup className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center" stagger={0.14} delay={0.25}>
              {/* Glowing Badge */}
              <RevealItem variant="zoom">
                <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <span className="text-xs md:text-sm font-semibold text-blue-300 tracking-widest uppercase">
                    Open for New Projects
                  </span>
                </div>
              </RevealItem>

              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                <SplitText parts={[{ text: title || "Ready to create magic?" }]} delay={0.35} />
              </h3>

              <RevealItem>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
                  {description}
                </p>
              </RevealItem>

              <RevealItem variant="zoom">
                <MagneticButton>
                  <a
                    href={href}
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                  >
                    <span className="relative z-10 flex items-center">
                      {buttonText}
                      <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={20} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </MagneticButton>
              </RevealItem>
            </RevealGroup>
          </div>
        </TiltCard>
      </m.div>
    </section>
  );
};

export default CTASection;
