"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { ArrowLeft, Github, Globe, Layers, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id;
  const project = PROJECTS.find(p => p.id === id);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); 

  if (!project) {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-[#030014]">
            <h1 className="text-4xl font-bold text-white mb-4">404</h1>
            <p className="text-slate-400 mb-8">Project not found.</p>
            <Link href="/work" className="px-6 py-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition-colors">Back to Work</Link>
        </div>
    );
  }

  const gradientClass = project.color || 'from-indigo-600 to-violet-600';

  return (
    <motion.article 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#030014] relative overflow-hidden"
    >
        <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-20`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gradient-to-r ${gradientClass} opacity-30 blur-[100px] rounded-full`} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <Link href="/work" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Works
                </Link>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>
            </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 -mt-20 pb-24">
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                <div className="lg:col-span-2 space-y-12">
                    {project.stats && (
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                             {project.stats.map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-[#0f172a]/80 border border-white/10 backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
                                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">{stat.label}</div>
                                    <div className="text-3xl md:text-4xl font-bold text-white font-mono">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="bg-[#0f172a]/50 rounded-3xl p-8 md:p-12 border border-white/5">
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <Layers className="text-indigo-400" /> The Challenge
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                {project.fullDescription || "Full case study in progress."}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <Zap className="text-yellow-400" /> The Solution
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                We re-engineered the core processing unit to handle data streams off the main thread. By leveraging Web Workers and a custom rust-based WASM module, we reduced latency by 90%.
                            </p>
                            <div className="p-6 rounded-xl bg-black/40 border border-white/10 font-mono text-sm text-slate-300 overflow-x-auto">
                                <p className="text-indigo-400">// Implementation snippet</p>
                                <p>const worker = new Worker('processor.js');</p>
                                <p>worker.postMessage(largeDataSet);</p>
                                <p>worker.onmessage = (event) =&gt; updateUI(event.data);</p>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <div className="sticky top-24 space-y-6">
                        <div className="p-6 rounded-3xl bg-[#0f172a] border border-white/10 shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-6">Project Links</h3>
                            <div className="flex flex-col gap-4">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all">
                                        <Globe size={20} /> View Live Site
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
                                        <Github size={20} /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl bg-[#0f172a]/50 border border-white/10">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 text-sm border border-slate-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    </motion.article>
  );
}
