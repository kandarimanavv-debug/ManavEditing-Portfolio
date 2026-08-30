import type { ElementType } from "react";
import {
  Award,
  Camera,
  Film,
  Palette,
  Scissors,
  Sparkles,
  Users,
  Volume2,
  Zap,
} from "lucide-react";

export interface VideoEditingSkill {
  name: string;
  image_link: string;
  icon: ElementType;
  description: string;
  color: string;
}

export interface Specialization {
  title: string;
  skills: string[];
  icon: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: ElementType;
  color: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export const videoEditingSkills: VideoEditingSkill[] = [
  {
    name: "Adobe Illustrator",
    image_link: "/tools/illustrator_5611037.png",
    icon: Film,
    description:
      "Designing clean, Scalable graphics with purpose and precision.",
    color: "text-orange-400",
  },
  {
    name: "Adobe Premiere Pro",
    image_link: "/tools/Adobe_Premiere_Pro_CC.png",
    icon: Scissors,
    description:
      "Advanced Video Editing, Multicam Sync and Workflow Optimization.",
    color: "text-purple-400",
  },
  {
    name: "Adobe After Effects",
    image_link: "/tools/Adobe_After_Effects_CC.png",
    icon: Sparkles,
    description: "Motion graphics, Visual effects and Animations",
    color: "text-blue-400",
  },
  {
    name: "Adobe Photoshop",
    image_link: "/tools/Adobe_Photoshop_CC.png",
    icon: Palette,
    description: "Posts Designs, Graphics creation, and Image manipulation",
    color: "text-cyan-400",
  },
  {
    name: "Adobe Audition",
    image_link: "/tools/Adobe_Audition_CC.png",
    icon: Volume2,
    description: "Audio editing, Noise reduction, and Sound enhancement",
    color: "text-green-400",
  },
];

export const specializations: Specialization[] = [
  {
    title: "YouTube Content Creation",
    skills: [
      "Documentary Editing",
      "Shorts",
    ],
    icon: "🎬",
    description:
      "Specialized in creating engaging YouTube content that keeps viewers watching.",
  },
  {
    title: "Social Media Videos",
    skills: [
      "Short-form Content",
      "Google/Meta Ads Video",
    ],
    icon: "📱",
    description:
      "Expert in creating content optimized for Instagram, Facebook, and other platforms.",
  },
  {
    title: "Educational Content",
    skills: [
      "Social Awareness",
      "Educational Awareness",
      "Clear Explanations",
      "Interactive Elements",
    ],
    icon: "📚",
    description:
      "Specialized in making complex topics easy to understand through video",
  },
];

export const achievements: Achievement[] = [
  {
    title: "50+ Projects Completed",
    description:
      "Successfully delivered over 100 video projects across various industries",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "Happy Clients",
    description:
      "Built strong client relationships with positive feedback and lasting partnerships",
    icon: Users,
    color: "text-green-400",
  },
  {
    title: "1 Years Experience",
    description:
      "Professional video editing experience with continuous skill development",
    icon: Camera,
    color: "text-blue-400",
  },
  {
    title: "Fast Turnaround",
    description:
      "Delivering high-quality work within tight deadlines",
    icon: Zap,
    color: "text-purple-400",
  },
];

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Project Analysis",
    description:
      "Understanding client requirements, target audience, and project goals",
  },
  {
    step: "02",
    title: "Content Review",
    description:
      "Analyzing raw footage, identifying key moments, and planning the edit",
  },
  {
    step: "03",
    title: "Rough Cut",
    description:
      "Creating initial edit with basic cuts, transitions, and structure",
  },
  {
    step: "04",
    title: "Fine Tuning",
    description:
      "Adding graphics, color grading, audio enhancement, and effects",
  },
  {
    step: "05",
    title: "Client Review",
    description: "Presenting the work for feedback and implementing revisions",
  },
  {
    step: "06",
    title: "Final Delivery",
    description:
      "Exporting in required formats and delivering the completed project",
  },
];
