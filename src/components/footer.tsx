"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Heart,
  Instagram,
} from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Kandari_Manav",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/graphicx_boy/",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/manavkandari/",
      icon: Linkedin,
    },
    
    {
      name: "Email",
      href: "mailto:kandarimanavv@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="glass-panel border-t border-white/5 mt-20 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <RevealGroup className="grid md:grid-cols-3 gap-12" stagger={0.15}>
          {/* Brand */}
          <RevealItem className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-200 bg-clip-text text-transparent">
              Manav Kandari
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
              Video Editor and Graphic Designer passionate about
              creating visual stories with style, precision, and cinematic
              magic.
            </p>
          </RevealItem>

          {/* Quick Links */}
          <RevealItem className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <Link
                href="/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/skills"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </RevealItem>

          {/* Social Links */}
          <RevealItem className="space-y-6">
            <h4 className="font-semibold text-white tracking-wide uppercase text-xs opacity-70">
              Connect With Me
            </h4>
            <div className="flex space-x-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={link.name}
                  >
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.45)] transition-[background-color,border-color,box-shadow,transform] duration-700 [transform:perspective(400px)_rotateY(0deg)] group-hover:[transform:perspective(400px)_rotateY(360deg)]">
                      <Icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </RevealItem>
        </RevealGroup>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1.5 flex-wrap">
            Made with
            <a
              href="https://www.linkedin.com/in/manavkandari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline decoration-dotted underline-offset-4"
            >
              Manav
            </a>{" "}
            © {currentYear}
            <span className="text-gray-700">·</span>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/vinit-rawat-105135327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline decoration-dotted underline-offset-4"
            >
              Vinit Rawat
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
