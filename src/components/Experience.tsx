"use client";
import React, { useRef } from 'react';
import { Download, Calendar } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 85%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
  return (
    <div className="w-full">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Career <span className="text-indigo-400">History</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-xl">
                    A timeline of my professional journey and the value I&apos;ve delivered.
                </p>
            </motion.div>

            <motion.a 
                href="/kampit_Ojha_Resume.pdf" 
                download="Kampit_Ojha_Resume.pdf"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all group"
            >
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                Download Resume
            </motion.a>
        </div>

    <div ref={containerRef} className="relative ml-3 space-y-12">
        {/* Static Background Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800" />
        
        {/* Scroll Progress Line */}
        <motion.div 
            style={{ scaleY }}
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 origin-top"
        >
             {/* Animated Glowing Head */}
            <div className="absolute bottom-0 -left-1 w-2 h-4 bg-indigo-500/50 blur-md rounded-full shadow-[0_0_15px_2px_rgba(99,102,241,0.6)]" />
        </motion.div>

        <ExperienceItem 
            role="SEO Developer"
            company="TestprepKart - Internship"
            period="Dec 2025 - Present"
            description="During my SEO internship I conducted keyword research optimized web-pages for on page SEO and used tools like google analytics & ahrefs to improve search rankings."
            tags={['Google Analytics', 'Keyword Research', 'SEO']}
        />
        <ExperienceItem 
            role="Full Stack Engineer"
            company="Genesis Web Solutions - Internship"
            period="Feb 2025 - Jul 2025"
            description="Developed & delivered frontend for 4 projects from scratch with ReactJs and TailwindCSS ensuring high quality. Boosted page load efficiency by applying lazy loading and other performance optimization techniques. Improved development efficiency by 40 percent utilizing component libraries like ShadCN and Material UI."
            tags={['Next.js', 'Tailwind CSS', 'React']}
        />
        
        {/* Spacer to extend line past the last item */}
        <div className="h-12" />

        {/* End Node */}
        <div className="absolute -left-[5px] bottom-0 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-900 shadow-[0_0_0_4px_#030014]">
            <motion.div 
                style={{ scale: scaleY, opacity: scaleY }}
                className="absolute inset-0 rounded-full bg-indigo-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]" 
            />
        </div>
    </div>
    </div>
  );
};

interface ExperienceItemProps {
    role: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
}

const ExperienceItem = ({ role, company, period, description, tags }: ExperienceItemProps) => (
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative pl-8 md:pl-12 group"
    >

        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-900 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#030014]" />
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{role}</h3>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-lg text-slate-300">{company}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono mb-4 uppercase tracking-wider">
            <Calendar size={14} /> {period}
        </div>
        
        <p className="text-slate-400 text-lg leading-relaxed mb-4 max-w-3xl">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 border border-slate-700/50">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);
