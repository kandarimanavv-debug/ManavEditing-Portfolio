"use client";

import { useState, useEffect, useCallback } from "react";
import { m } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { EASE_OUT } from "@/components/motion/reveal";
import type { VideoProject } from "@/types/videos";
import { getVideoProjectsByCategory } from "@/lib/helper";

interface ProjectGridProps {
  initialCategories: { category: string; count: number }[];
  initialProjects: VideoProject[];
}

export default function ProjectGrid({ initialCategories, initialProjects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProjects, setDisplayedProjects] = useState<VideoProject[]>(initialProjects.slice(0, 9));
  const [allProjects, setAllProjects] = useState<VideoProject[]>(initialProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialProjects.length > 9);

  const ITEMS_PER_PAGE = 9;

  // Load projects for selected category
  useEffect(() => {
    let projects;
    if (selectedCategory === "All") {
        projects = initialProjects;
    } else {
        projects = getVideoProjectsByCategory(selectedCategory);
    }
    
    setAllProjects(projects);
    setDisplayedProjects(projects.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(projects.length > ITEMS_PER_PAGE);
  }, [selectedCategory, initialProjects]);

  // Load more projects
  const loadMoreProjects = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newProjects = allProjects.slice(startIndex, endIndex);

    setDisplayedProjects((prev) => [...prev, ...newProjects]);
    setCurrentPage(nextPage);
    setHasMore(endIndex < allProjects.length);
    setLoading(false);
  }, [currentPage, allProjects, loading, hasMore]);

  // Infinite scroll for non-"All" categories
  useEffect(() => {
    if (selectedCategory === "All") return;

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        loadMoreProjects();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedCategory, loadMoreProjects]);

  return (
    <>
        {/* Category Filter */}
        <m.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            className="flex flex-wrap justify-center gap-3 mb-16"
        >
            {initialCategories.map(({ category, count }) => (
            <m.button
                key={category}
                variants={{
                    hidden: { opacity: 0, y: 24, rotateX: -70 },
                    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: EASE_OUT } },
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformPerspective: 600 }}
                onClick={() => setSelectedCategory(category)}
                className={`
                relative px-5 py-2.5 rounded-full text-sm font-medium transition-[background-color,color,box-shadow,scale] duration-300
                ${selectedCategory === category
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                }
                `}
            >
                {category}
                <span className={`
                ml-2 text-[10px] px-1.5 py-0.5 rounded-full transition-colors
                ${selectedCategory === category ? "bg-black text-white" : "bg-white/10 text-gray-400"}
                `}>
                {count}
                </span>
            </m.button>
            ))}
        </m.div>

        {/* Projects Grid */}
        <m.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
            {displayedProjects.map((project, index) => (
            <m.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 90, rotateX: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.95, ease: EASE_OUT, delay: (index % 3) * 0.12 }}
                style={{ transformPerspective: 1200, transformOrigin: "50% 100%" }}
            >
                <ProjectCard project={project} />
            </m.div>
            ))}
        </m.div>

        {/* Load More Button for "All" category */}
        {selectedCategory === "All" && hasMore && (
            <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-20"
            >
            <Button
                onClick={loadMoreProjects}
                disabled={loading}
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 font-medium transition-all hover:scale-105"
            >
                {loading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                </>
                ) : (
                <>
                    Load More Projects
                    <ArrowRight className="ml-2" size={16} />
                </>
                )}
            </Button>
            </m.div>
        )}
    </>
  );
}
