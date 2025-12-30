"use client";
import React from 'react';
import { Projects } from '@/components/Projects';
import { motion } from 'framer-motion';

export default function WorkPage() {
  return (
    <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-screen relative"
    >
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>

        <div className="pt-32 pb-24 container mx-auto px-6 relative z-10">
            <div className="mb-20 max-w-4xl">
                 <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight"
                >
                    Builds & <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Breakthroughs.</span>
                </motion.h1>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-slate-300 leading-relaxed border-l-4 border-indigo-500 pl-6"
                >
                    A curated archive of my open source contributions, complex systems, and experimental interfaces.
                </motion.p>
            </div>

            <Projects showTitle={false} />
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 p-12 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
                <h3 className="text-3xl font-bold text-slate-400 mb-4 relative z-10">More in the archives</h3>
                <p className="text-slate-500 text-lg relative z-10">
                    I'm constantly building. Check my <a href="https://github.com/kampitojha" className="text-indigo-400 hover:text-white underline decoration-wavy underline-offset-4">GitHub</a> for the raw, unpolished gems.
                </p>
            </motion.div>
        </div>
    </motion.div>
  );
}
