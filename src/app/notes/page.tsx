"use client";
import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export default function NotesPage() {
  return (
    <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="pt-32 pb-24 container mx-auto px-6 max-w-4xl"
    >
         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Engineering <span className="text-indigo-500">Notes</span>
        </h1>
        <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-2xl">
            Thoughts on software architecture, performance patterns, and the occasional rant about hydration errors.
        </p>

        <div className="space-y-10">
            {BLOG_POSTS.map((post) => (
                <Link href={`/notes/${post.id}`} key={post.id} className="group block">
                    <article className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 hover:border-indigo-500/30 transition-all duration-300">
                        <div className="flex flex-wrap gap-3 mb-4 text-xs font-medium uppercase tracking-wider">
                            <span className="text-indigo-400">{post.date}</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-500 flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                            Read Article <ArrowRight size={18} />
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    </motion.div>
  );
}
