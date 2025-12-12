"use client";
import React, { useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2, Cpu, Globe, FileText } from 'lucide-react';
import Link from 'next/link';
import { HERO_TEXT } from '@/lib/constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-badge", {
          y: -20,
          opacity: 0,
          duration: 0.8,
          delay: 0.2
      })
      .from(".hero-char", {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.05,
          duration: 1
      }, "-=0.4")
      .from(".hero-sub", {
          y: 30,
          opacity: 0,
          duration: 0.8
      }, "-=0.6")
      .from(".hero-btn", {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6
      }, "-=0.4");
      
     // Magnetic effect for buttons
     const buttons = document.querySelectorAll('.hero-btn');
     buttons.forEach((btn) => {
         btn.addEventListener('mousemove', (e: any) => {
             const rect = btn.getBoundingClientRect();
             // Check if element is still in DOM to avoid errors
             if (!rect) return;
             const x = e.clientX - rect.left - rect.width / 2;
             const y = e.clientY - rect.top - rect.height / 2;
             gsap.to(btn, {
                 x: x * 0.2,
                 y: y * 0.2,
                 duration: 0.3
             });
         });
         btn.addEventListener('mouseleave', () => {
             gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
         });
     });

  }, { scope: container });

  return (
    <section ref={container} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-left space-y-8 perspective-1000">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 text-sm font-bold tracking-wide backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for Hire
            </div>
            
            <div className="space-y-0 relative">
                 {/* Main Title Layer */}
                 <h1 className="flex flex-wrap text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                    {/* KAMPIT */}
                    <div className="flex overflow-hidden">
                        {"KAMPIT".split("").map((char, i) => (
                            <span key={`first-${i}`} className="hero-char inline-block">{char}</span>
                        ))}
                    </div>
                 </h1>
                 <h1 className="flex flex-wrap text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 leading-[0.9]">
                    <div className="flex overflow-hidden">
                        {"OJHA".split("").map((char, i) => (
                            <span key={`last-${i}`} className="hero-char inline-block">{char}</span>
                        ))}
                         <span className="hero-char inline-block text-slate-900 dark:text-white">.</span>
                    </div>
                </h1>
            </div>
            
            <p className="hero-sub max-w-xl text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed border-l-4 border-indigo-500/50 pl-6">
                {HERO_TEXT.sub}
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="/work" className="hero-btn group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-lg overflow-hidden transition-all shadow-xl hover:shadow-indigo-500/20">
                <span className="relative z-10 group-hover:text-indigo-400 dark:group-hover:text-indigo-600 transition-colors">View My Work</span>
                <div className="absolute inset-0 bg-slate-800 dark:bg-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
              
              <a 
                href="/resume.pdf" 
                download
                className="hero-btn px-8 py-4 rounded-full border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white font-bold text-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <FileText size={20} /> Resume
              </a>
              
              <div className="flex gap-4 items-center">
                 <SocialButton icon={<Github size={24} />} href="https://github.com" label="GitHub" />
                 <SocialButton icon={<Linkedin size={24} />} href="https://linkedin.com" label="LinkedIn" />
              </div>
            </div>
        </div>

        <motion.div style={{ y: y2 }} className="hidden lg:block relative h-[600px] w-full pointer-events-none">
            <FloatingCard 
                icon={<Code2 size={40} className="text-cyan-500 dark:text-cyan-400" />} 
                label="Clean Code" 
                className="top-20 right-20 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200 dark:border-white/10" 
                delay={0}
            />
            <FloatingCard 
                icon={<Cpu size={40} className="text-indigo-500 dark:text-indigo-400" />} 
                label="System Arch" 
                className="top-1/2 left-10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200 dark:border-white/10" 
                delay={1.5}
            />
            <FloatingCard 
                icon={<Globe size={40} className="text-purple-500 dark:text-purple-400" />} 
                label="Global Scale" 
                className="bottom-20 right-1/3 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border-slate-200 dark:border-white/10" 
                delay={0.8}
            />
        </motion.div>

      </div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2 text-slate-400 mix-blend-difference dark:mix-blend-screen"
      >
        <span className="text-xs uppercase tracking-[0.3em] rotate-90 origin-right translate-x-8 mb-8">Scroll</span>
        <ArrowDown size={32} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="hero-btn p-4 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-indigo-600 hover:border-indigo-200 dark:hover:border-indigo-500 transition-all duration-300"
  >
    {icon}
  </a>
);

const FloatingCard = ({ icon, label, className, delay }: { icon: React.ReactNode, label: string, className: string, delay: number }) => (
    <motion.div 
        className={`absolute p-6 rounded-3xl border shadow-xl dark:shadow-2xl flex flex-col items-center gap-3 w-48 ${className}`}
        animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0]
        }}
        transition={{ 
            duration: 6,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        {icon}
        <span className="font-bold text-slate-700 dark:text-slate-200">{label}</span>
    </motion.div>
)