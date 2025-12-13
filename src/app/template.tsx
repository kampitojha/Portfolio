"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    // Banners wipe up
    tl.set(".banner", { yPercent: 0 })
      .to(".banner", {
        yPercent: -100,
        stagger: 0.1, // Classic shutter effect
        duration: 0.8,
      });

    // Optional: Content fade in slightly after
    tl.from(container.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        clearProps: "all" 
    }, "-=0.5");

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
