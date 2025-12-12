"use client";
import React from 'react';
import { Download, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
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
                    A timeline of my professional journey and the value I've delivered.
                </p>
            </motion.div>

            <motion.a 
                href="/resume.pdf" 
                download
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

        <div className="relative border-l border-slate-800 ml-3 space-y-12">
            <ExperienceItem 
                role="Senior Frontend Engineer"
                company="TechCorp Inc."
                period="2022 - Present"
                description="Led the migration of a legacy monolithic app to Next.js micro-frontends. Improved LCP by 40% and reduced build times by 60%."
                tags={['Next.js', 'Turborepo', 'AWS']}
            />
            <ExperienceItem 
                role="Software Developer"
                company="StartUp Studio"
                period="2020 - 2022"
                description="Built and shipped 3 SaaS products from scratch. Implemented real-time collaboration features using WebSockets and Redis."
                tags={['React', 'Node.js', 'Socket.io']}
            />
            <ExperienceItem 
                role="Frontend Intern"
                company="WebFlows"
                period="2019 - 2020"
                description="Developed interactive UI components and optimized animation performance for marketing landing pages."
                tags={['JavaScript', 'GSAP', 'HTML/CSS']}
            />
        </div>
    </div>
  );
};

const ExperienceItem = ({ role, company, period, description, tags }: any) => (
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
