import React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import FramerLazyMotion from "@/components/framer-lazy-motion";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://manav-portfolio.vercel.app"),
  title: {
    default: "Manav Kandari – Video Editor & Motion Graphics Designer",
    template: "%s | Manav Kandari",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Manav Kandari specializes in DaVinci Resolve, Premiere Pro, and After Effects — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Manav Kandari",
    "Video Editor",
    "Motion Graphics Designer",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Cinematic Editing",
     
  ],
  authors: [{ name: "Manav Kandari", url: "" }],
  creator: "Manav Kandari",
  publisher: "Manav Kandari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.linkedin.com/in/manavkandari",
    title: "Manav Kandari – Video Editor & Graphics Designer",
    description:
      "Passionate Video Editor and Graphic Designer delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and After Effects.",
    siteName: "Manav Kandari Portfolio",
    images: [
      {
        url: "/manavprofile.jpeg",
        width: 1200,
        height: 630,
        alt: "Manav Kandari - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manav Kandari – Video Editor & Graphic Designer",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    creator: "@graphicx_boy", // update if you have a real Twitter handle
    images: ["/manavprofile.jpeg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://www.linkedin.com/in/manavkandari",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manav Kandari",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.linkedin.com/in/manavkandari",
              image: "/manavprofile.jpeg",
              sameAs: [
                "https://www.linkedin.com/in/manavkandari/",
                "https://www.instagram.com/graphicx_boy/",
                "https://www.youtube.com/@Kandari_Manav",
              ],
              jobTitle: "Video Editor & Graphic Designer",
              knowsAbout: [
                "Video Editing",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="">{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
