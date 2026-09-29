"use client";

// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";
import { EASE_OUT } from "@/components/motion/reveal";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <m.div
        className="max-w-md w-full"
        initial={{ opacity: 0, y: 60, rotateX: 25 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
        style={{ transformPerspective: 1200 }}
      >
        <div className="animate-float">
          <Image
            src="/not-found.jpg" // 🖼️ Replace with your image path
            alt="404 Not Found"
            width={500}
            height={300}
            className="w-full h-auto rounded-2xl object-contain mb-6 shadow-[0_30px_80px_-30px_rgba(59,130,246,0.5)]"
            priority
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="outline" size="sm" className="cursor-pointer">
            <StepBack /> Go Back Home
          </Button>
        </Link>
      </m.div>
    </main>
  );
}
