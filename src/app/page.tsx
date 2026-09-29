import { Suspense } from "react";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Hero from "@/components/hero";
import GlassmorphismCard from "@/components/glassmorphism-card";
import ProjectGrid from "@/components/project-grid";
import SplitText from "@/components/motion/split-text";
import TiltCard from "@/components/motion/tilt-card";
import SkillsRibbon from "@/components/motion/skills-ribbon";
import { Reveal } from "@/components/motion/reveal";
import { Clapperboard, Sparkles, LayoutGrid } from "lucide-react";
import {
  getVideoCategoriesWithCountIncludingAll,
  getAllVideoProjectsFlattened
} from "@/lib/helper";

const STATS = [
  {
    icon: Clapperboard,
    title: "1+ Year Experience",
    text: "Premiere Pro & After Effects",
    tile: "bg-blue-500/10",
    color: "text-blue-400",
  },
  {
    icon: Sparkles,
    title: "Graphic Design Background",
    text: "A trained eye for visual storytelling",
    tile: "bg-purple-500/10",
    color: "text-purple-400",
  },
  {
    icon: LayoutGrid,
    title: "Multiple Projects Delivered",
    text: "Across YouTube, social, and brands",
    tile: "bg-emerald-500/10",
    color: "text-emerald-400",
  },
];

const SERVICES = [
  {
    title: "YouTube Editing",
    description: "Engaging edits optimized for retention with perfect pacing.",
    icon: "🎬",
  },
  {
    title: "Course Content",
    description: "Clear, educational content with professional polish.",
    icon: "📚",
  },
  {
    title: "Motion Graphics",
    description: "Eye-catching animations that enhance your storytelling.",
    icon: "✨",
  },
  {
    title: "Color Grading",
    description: "Cinematic looks that give your videos a premium feel.",
    icon: "🎨",
  },
  {
    title: "Storytelling",
    description: "Professional storytelling that connect with audience.",
    icon: "🏷️",
  },
  {
    title: "Audio Engineering",
    description: "Crystal clear audio mix with noise reduction.",
    icon: "🎵",
  },
];

const SPIN_ON_HOVER =
  "transition-transform duration-700 [transform:perspective(500px)_rotateY(0deg)] group-hover:[transform:perspective(500px)_rotateY(360deg)]";

export default function HomePage() {
  // Fetch data on the server
  const categories = getVideoCategoriesWithCountIncludingAll();
  const allProjects = getAllVideoProjectsFlattened(); // We need all projects initially for the grid to filter client-side

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MouseMoveEffect />

      <Hero />

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            <SplitText parts={[{ text: "A Bit " }, { text: "About Me", className: "text-blue-500" }]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
              I'm a video editor and graphic designer with over a year of hands-on
              experience in{" "}
              <span className="text-white font-medium">Adobe Premiere Pro</span> and{" "}
              <span className="text-white font-medium">After Effects</span>. My
              roots in graphic design shape the way I edit — a sharp eye for color,
              composition, and detail that turns raw footage into visuals with
              genuine impact. Along the way, I've completed{" "}
              <span className="text-blue-400 font-medium">multiple projects</span>{" "}
              spanning YouTube content, social media, and branded video work,
              always focused on telling a story that keeps people watching.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {STATS.map((stat, i) => (
              <Reveal key={stat.title} variant="flip" delay={i * 0.12}>
                <TiltCard className="h-full">
                  <GlassmorphismCard className="group p-6 flex flex-col items-center text-center h-full">
                    <div className={`mx-auto w-fit p-3 rounded-xl mb-4 ${stat.tile} ${SPIN_ON_HOVER}`}>
                      <stat.icon className={stat.color} size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{stat.title}</h3>
                    <p className="text-gray-400 text-sm">{stat.text}</p>
                  </GlassmorphismCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SkillsRibbon />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            {/* Spotlight Effect behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight relative z-10">
              <SplitText
                parts={[
                  {
                    text: "Video Projects",
                    className: "bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent pb-[0.12em]",
                  },
                ]}
              />
            </h2>
            <Reveal delay={0.15}>
              <p className="text-gray-350 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
               From long-form storytelling to short-form content
               I create videos that capture attention, connect with audiences, and leave a
                <span className="text-blue-400 font-medium"> lasting impression</span>.
              </p>
            </Reveal>
          </div>

          <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading projects...</div>}>
            <ProjectGrid initialCategories={categories} initialProjects={allProjects} />
          </Suspense>
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <SplitText parts={[{ text: "What I Can Do " }, { text: "for You", className: "text-blue-500" }]} />
            </h2>
            <Reveal delay={0.15}>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                If you're looking for someone who blends creativity with technical
                skill, communicates clearly, and truly cares about results.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} variant="flip" delay={(index % 3) * 0.1} className="h-full">
                <TiltCard className="h-full">
                  <GlassmorphismCard className="p-8 h-full flex flex-col items-center text-center group hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300">
                    <div className={`mx-auto w-fit text-5xl mb-6 bg-white/5 p-4 rounded-2xl border border-white/5 ${SPIN_ON_HOVER}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </GlassmorphismCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
