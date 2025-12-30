"use client";
import React, { useRef } from 'react';
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';

// Dynamic import for MatrixBackground
const MatrixBackground = dynamic(() => import('./MatrixBackground').then(mod => mod.MatrixBackground), { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-slate-950/20" /> 
});

export const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-name", { y: 30, opacity: 0, duration: 1, delay: 0.3 })
        .from(".hero-about", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-links", { y: 20, opacity: 0, duration: 0.8 }, "-=0.4");
        
  }, { scope: container });

  return (
    <section ref={container} id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 md:pt-20">
      
      <MatrixBackground />

      {/* Subtle gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob will-change-transform" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 will-change-transform" />

      {/* Centered Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center space-y-12">
        
        {/* Name */}
        <div className="hero-name space-y-3">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            <span className="text-white">hi, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">kampit</span>
            <span className="text-white"> here</span>
          </h1>
          <AgeCounter />
        </div>

        {/* About Section */}
        <div className="hero-about space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-300">about</h2>
          <div className="text-slate-400 text-lg leading-relaxed space-y-4">
            <p>I like building things for the web. Clean code, smooth experiences.</p>
            <p>I write code and solve problems.</p>
            <p>
              If you want to know more about me, check out{' '}
              <Link href="/about" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
                what I believe in
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="hero-links flex items-center justify-center gap-6 pt-8">
          <a 
            href="https://github.com/kampitojha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/kampitojha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <Link 
            href="/Kampit_Resume.pdf" 
            target="_blank"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all hover:scale-110"
            aria-label="Resume"
          >
            <FileText size={24} />
          </Link>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-500" size={32} />
      </div>

    </section>
  );
};

// Live Age Counter Component
const AgeCounter: React.FC = () => {
  const [age, setAge] = React.useState<number>(0);
  
  React.useEffect(() => {
    const birthDate = new Date('2002-04-22T00:00:00').getTime();
    
    const updateAge = () => {
      const now = new Date().getTime();
      const diffInMs = now - birthDate;
      const yearsElapsed = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
      setAge(yearsElapsed);
    };
    
    // Update immediately
    updateAge();
    
    // Update every 100ms for smooth counting
    const interval = setInterval(updateAge, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <p className="text-slate-400 text-sm md:text-base font-mono">
      been here for {age.toFixed(9)} years
    </p>
  );
};