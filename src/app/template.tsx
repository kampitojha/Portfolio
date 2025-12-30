"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: "power4.inOut" },
      // Start immediately on mount
      delay: 0
    });

    // Banners wipe up - faster animation
    tl.set(".banner", { yPercent: 0 })
      .to(".banner", {
        yPercent: -100,
        stagger: 0.08, // Slightly faster stagger
        duration: 0.6, // Reduced duration
      });

    // Content fade in - faster and smoother
    tl.from(container.current, {
        y: 15,
        opacity: 0,
        duration: 0.4,
        clearProps: "all" 
    }, "-=0.4");

  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen">
       {/* 4-Column Curtain Effect */}
       <div className="banner fixed top-0 left-0 w-1/4 h-screen bg-slate-100 dark:bg-[#050505] z-[9999] border-r border-slate-200 dark:border-white/5" />
       <div className="banner fixed top-0 left-[25%] w-1/4 h-screen bg-slate-100 dark:bg-[#050505] z-[9999] border-r border-slate-200 dark:border-white/5" />
       <div className="banner fixed top-0 left-[50%] w-1/4 h-screen bg-slate-100 dark:bg-[#050505] z-[9999] border-r border-slate-200 dark:border-white/5" />
       <div className="banner fixed top-0 left-[75%] w-1/4 h-screen bg-slate-100 dark:bg-[#050505] z-[9999]" />
       
       {children}
    </div>
  )
}
