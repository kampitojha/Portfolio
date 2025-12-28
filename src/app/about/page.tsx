"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-16"
      >
        {/* Header Section */}
        <section className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            About Me
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded-full" />
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
            I'm a software engineer obsessed with building high-performance applications that look as good as they feel.
          </p>
        </section>

        {/* Bio / Story */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-slate-400 text-lg leading-loose">
            <p>
              My journey started with a simple curiosity: <span className="text-white font-medium">how do pixels end up on the screen?</span> That curiosity led me down the rabbit hole of computer graphics, then web development, and eventually distributed systems.
            </p>
            <p>
              Today, I specialize in the <span className="text-indigo-400">React ecosystem</span> and <span className="text-indigo-400">Cloud Architecture</span>. I don't just write code; I design systems. Whether it's optimizing Core Web Vitals or architecting a micro-frontend solution, I approach problems from a user-centric perspective.
            </p>
            <p>
              When I'm not coding, you can find me exploring the latest in generative AI, reading about system design patterns, or just gaming.
            </p>
          </div>
          
          {/* Stats / Trivia Grid */}
          <div className="grid grid-cols-2 gap-4">
             <StatCard label="Years Experience" value="1.5" />
             <StatCard label="Projects Shipped" value="15+" />
             <StatCard label="Coffee Consumed" value="∞" />
             <StatCard label="Bugs Squashed" value="1.2k" />
             <div className="col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
                <span className="text-slate-500 text-sm uppercase tracking-wider font-bold">Current Status</span>
                <span className="text-green-400 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Open to Opportunities
                </span>
             </div>
          </div>
        </section>

        {/* Philosophy */}
         <section className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Development Philosophy</h3>
            <ul className="space-y-4">
                <PhilosophyItem text="User Experience is not an afterthought; it's the foundation." />
                <PhilosophyItem text="Clean code is cheaper than clever code." />
                <PhilosophyItem text="Performance is a feature, not a fix." />
            </ul>
         </section>

      </motion.div>
    </main>
  );
}

const StatCard = ({ label, value }: { label: string, value: string }) => (
    <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{label}</div>
    </div>
);

const PhilosophyItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3 text-slate-300">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
        {text}
    </li>
);
