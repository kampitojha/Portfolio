"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Rocket } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import for MatrixBackground
const MatrixBackground = dynamic(() => import('@/components/MatrixBackground').then(mod => mod.MatrixBackground), { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-slate-950/20" /> 
});

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      <MatrixBackground />
      
      {/* Gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob will-change-transform" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 will-change-transform" />
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          
          {/* Icon with animation */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-linear-to-r from-indigo-500 to-purple-500 opacity-50 rounded-full" />
              <Sparkles className="relative text-indigo-400" size={64} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            <span className="text-white">what I </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400">
              believe in
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-3xl text-slate-300 font-semibold flex items-center justify-center gap-3 flex-wrap">
              <Code2 className="text-indigo-400" size={32} />
              <span>Crafting something special</span>
              <Rocket className="text-purple-400" size={32} />
            </p>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              This space is under construction. I'm building something that truly reflects my values, 
              philosophy, and what drives me to create meaningful digital experiences.
            </p>
          </motion.div>

          {/* Animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-2 pt-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 rounded-full bg-linear-to-r from-indigo-400 to-purple-400"
              />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-shadow border border-white/10"
              >
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-indigo-500/30 text-indigo-300 text-sm font-medium backdrop-blur-sm">
              ✨ Coming Soon
            </span>
          </motion.div>

        </motion.div>

      </div>
    </main>
  );
}
