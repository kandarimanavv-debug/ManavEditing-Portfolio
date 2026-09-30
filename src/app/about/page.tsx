"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import CTASection from "@/components/CTASection";
import SplitText from "@/components/motion/split-text";
import TiltCard from "@/components/motion/tilt-card";
import ParallaxImage from "@/components/motion/parallax-image";
import { EASE_OUT, Reveal } from "@/components/motion/reveal";
import {
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Award,
  Clock,
  Zap,
  Quote
} from "lucide-react";
import { clientsData } from "@/db/clients";

const SOCIAL_FLIP =
  "transition-[transform,background-color] duration-700 [transform:perspective(400px)_rotateY(0deg)] hover:[transform:perspective(400px)_rotateY(360deg)_scale(1.1)]";

export default function AboutPage() {


  return (
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mt-0 md:mt-20 mb-3 text-white tracking-tight">
            <SplitText
              parts={[
                { text: "The Man Behind the " },
                { text: "Magic", className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500" },
              ]}
            />
          </h1>
          <Reveal delay={0.3}>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Visual Storyteller. Video Editor. Problem Solver.
            </p>
          </Reveal>
        </div>

        <BentoGrid className="max-w-6xl mx-auto mb-20">
          {/* 1. Hero Profile - SUPER HIGHLIGHTED */}
          <Reveal variant="zoom" delay={0.1} className="md:col-span-2 md:row-span-2">
            <TiltCard className="h-full" max={5} glareClassName="rounded-3xl">
              <BentoGridItem
                title=""
                description=""
                header={
                  <div className="relative w-full h-full min-h-[28rem] md:min-h-[16rem] rounded-xl overflow-hidden group-hover/bento:scale-[1.02] transition-transform duration-500">
                    <ParallaxImage
                      src="/manavprofile.jpeg"
                      alt="Manav"
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                    {/* Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <m.div
                        initial={{ opacity: 0, y: 30, rotateX: -60 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.9, ease: EASE_OUT }}
                        style={{ transformPerspective: 800 }}
                        className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter"
                      >
                        Manav<br />
                        <span className="text-blue-500">Kandari</span>
                      </m.div>
                      <m.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8, ease: EASE_OUT }}
                        className="h-1 w-16 md:w-20 bg-purple-500 mt-4 rounded-full origin-left"
                      />
                      <p className="text-gray-300 mt-4 text-xs md:text-sm font-medium tracking-wide uppercase">
                        Video Editor & Graphic Designer
                      </p>
                    </div>
                  </div>
                }
                className="h-full shadow-2xl shadow-blue-900/10"
                icon={null} // Icon inside header
              />
            </TiltCard>
          </Reveal>

          {/* 2. Stats - Experience - VISUAL */}
          <Reveal variant="zoom" delay={0.2} className="md:col-span-1">
            <TiltCard className="h-full" max={8} glareClassName="rounded-3xl">
              <BentoGridItem
                title="Experience"
                description="Years of professional grinding."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-black to-neutral-900 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors py-8 md:py-0">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
                    <m.span
                      initial={{ opacity: 0, scale: 0.4, rotateY: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1.1, ease: EASE_OUT }}
                      style={{ transformPerspective: 600 }}
                      className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-900 z-10"
                    >
                      1
                    </m.span>
                    <div className="text-emerald-500/50 text-xs font-mono uppercase tracking-[0.2em] z-10 mt-2">Years Active</div>
                  </div>
                }
                className="h-full"
                icon={<Clock className="h-4 w-4 text-emerald-500" />}
              />
            </TiltCard>
          </Reveal>



          {/* 4. Global Reach - Visual Map */}
          <Reveal variant="zoom" delay={0.3} className="md:col-span-1">
            <TiltCard className="h-full" max={8} glareClassName="rounded-3xl">
              <BentoGridItem
                title="Global Reach"
                description="Remote ready."
                header={
                  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#0a0a0a] overflow-hidden flex items-center justify-center border border-white/5">
                    {/* Abstract grid lines for map feel */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <span aria-hidden="true" className="radar-ping absolute inset-0 rounded-full border border-blue-400/60" />
                        <span aria-hidden="true" className="radar-ping absolute inset-0 rounded-full border border-blue-400/60" style={{ animationDelay: "1.3s" }} />
                        <MapPin className="relative text-blue-500 animate-float" size={32} />
                      </div>
                      <div className="mt-2 bg-blue-500/20 backdrop-blur text-blue-300 px-3 py-1 rounded text-xs font-bold border border-blue-500/30">
                        WORLDWIDE
                      </div>
                    </div>
                  </div>
                }
                className="h-full"
                icon={<MapPin className="h-4 w-4 text-indigo-500" />}
              />
            </TiltCard>
          </Reveal>

          {/* 5. The Philosophy - Quote */}
          <Reveal variant="zoom" delay={0.4} className="md:col-span-2">
            <TiltCard className="h-full" max={5} glareClassName="rounded-3xl">
              <BentoGridItem
                title="Philosophy"
                description="A story begins where unnecessary frames end."
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-6 flex items-center">
                    <Quote className="text-white/10 absolute top-4 right-4 animate-float" size={48} />
                    <p className="text-gray-300 italic text-sm md:text-base leading-relaxed relative z-10">
"I don't build videos - I build experiences. Every frame has a purpose, every cut has a consequence, and every story deserves to be felt."                  </p>
                  </div>
                }
                className="h-full"
                icon={<Award className="h-4 w-4 text-yellow-500" />}
              />
            </TiltCard>
          </Reveal>

          {/* 6. Socials - Visual Bar */}
          <Reveal variant="zoom" delay={0.5} className="md:col-span-1">
            <TiltCard className="h-full" max={8} glareClassName="rounded-3xl">
              <BentoGridItem
                title="Connect"
                description=""
                header={
                  <div className="flex flex-1 h-full w-full items-center justify-between px-6 bg-gradient-to-br from-[#0b1a3a]/80 via-[#0a1330]/70 to-[#1e1b4b]/60 rounded-xl border border-[#4fb8ff]/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_30px_-12px_rgba(79,184,255,0.35)] py-4 md:py-0 min-h-[5rem]">
                    <a href="https://www.linkedin.com/in/manavkandari" target="_blank" aria-label="LinkedIn" className={`p-3 bg-white/10 ring-1 ring-white/10 rounded-full hover:bg-[#0077b5] text-white ${SOCIAL_FLIP}`}><Linkedin size={20} /></a>
                    <a href="https://www.instagram.com/graphicx_boy/" target="_blank" aria-label="Instagram" className={`p-3 bg-white/10 ring-1 ring-white/10 rounded-full hover:bg-pink-600 text-white ${SOCIAL_FLIP}`}><Instagram size={20} /></a>
                    <a href="https://www.youtube.com/@Kandari_Manav" target="_blank" aria-label="YouTube" className={`p-3 bg-white/10 ring-1 ring-white/10 rounded-full hover:bg-red-600 text-white ${SOCIAL_FLIP}`}><Youtube size={20} /></a>
                  </div>
                }
                className="h-full"
                icon={<Zap className="h-4 w-4 text-white" />}
              />
            </TiltCard>
          </Reveal>

        </BentoGrid>

        {/* Clients Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              <SplitText parts={[{ text: "Trusted By" }]} />
            </h2>
            <m.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: EASE_OUT }}
              className="h-1 w-20 bg-blue-500 mx-auto rounded-full"
            />
          </div>

          <Reveal delay={0.2}>
            <div
              className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-10"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <Marquee className="[--duration:20s]">
                {clientsData.map((client) => (
                  <div key={client.id} className="mx-8 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:bg-white/10 transition-all">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-3 text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors text-center whitespace-nowrap">
                      {client.name}
                    </p>
                  </div>
                ))}
              </Marquee>
            </div>
          </Reveal>
        </div>

        <CTASection
          title="Ready to Work Together?"
          description="Let's make something that breaks the internet."
          buttonText="Start Collaboration"
          href="/contact"
        />
      </div>
    </div>
  );
}
