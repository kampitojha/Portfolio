"use client";
import React from 'react';
import { ArrowUpRight, Code } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { Project } from '@/types';
import { motion } from 'framer-motion';

interface ProjectsProps {
    limit?: number;
    showTitle?: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ limit, showTitle = true }) => {
  const displayedProjects = limit ? PROJECTS.filter(p => p.featured).slice(0, limit) : PROJECTS;

  return (
    <div className="w-full">
      {showTitle && (
        <div className="mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-white mb-6"
            >
                Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">Works</span>
            </motion.h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {displayedProjects.map((project, index) => {
            let colSpan = "md:col-span-6";
            if (!limit) {
                if (index % 4 === 0 || index % 4 === 3) colSpan = "md:col-span-8";
                else colSpan = "md:col-span-4";
            } else {
                if (index === 0) colSpan = "md:col-span-12";
            }

            return (
                <ProjectCard key={project.id} project={project} colSpan={colSpan} />
            );
        })}
      </div>
      
      {limit && (
        <div className="mt-12 text-center">
             <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold group tracking-wide">
                View Archive <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform"/>
            </Link>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, colSpan }: { project: Project, colSpan: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/40 transition-all duration-500 cursor-pointer ${colSpan} h-[340px] md:h-[380px] shadow-lg hover:shadow-indigo-500/10`}
    >
      <div className={`absolute inset-0 bg-linear-to-br ${project.color || 'from-slate-800 to-slate-900'} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
            <div className="p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors duration-300 shadow-inner">
                <Code size={20} className="text-white" />
            </div>
            
            <Link href={`/work/${project.id}`} className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-bold text-white hover:bg-white hover:text-black transition-all translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                View Case Study
            </Link>
        </div>

        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <h3 className="font-bold text-white mb-2 text-2xl md:text-3xl tracking-tight leading-tight">
                {project.title}
            </h3>
            <p className="text-slate-400 mb-5 text-sm md:text-base line-clamp-2 max-w-xl leading-relaxed">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200 group-hover:border-indigo-500/30 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};