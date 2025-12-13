"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Search } from 'lucide-react';

export default function BlogsPage() {
  const [query, setQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="pt-32 pb-24 container mx-auto px-6 max-w-4xl"
    >
         <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Engineering <span className="text-indigo-500">Blogs</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl">
            Thoughts on software architecture, performance patterns, and the occasional rant about hydration errors.
        </p>

        {/* Search Bar */}
        <div className="mb-16 relative max-w-xl">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
           <input 
              type="text" 
              placeholder="Search by keyword, tag, or title..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400 shadow-sm text-slate-900 dark:text-white"
           />
        </div>

        <div className="space-y-8">
            <AnimatePresence mode="popLayout">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/blogs/${post.id}`} className="group block">
                                <article className="p-8 rounded-3xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 hover:shadow-xl dark:hover:bg-slate-900 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm">
                                    <div className="flex flex-wrap gap-3 mb-4 text-xs font-medium uppercase tracking-wider">
                                        <span className="text-indigo-500 dark:text-indigo-400">{post.date}</span>
                                        <span className="text-slate-400">•</span>
                                        <span className="text-slate-500 flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-medium group-hover:translate-x-2 transition-transform">
                                        Read Article <ArrowRight size={18} />
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-20 border border-dashed border-slate-200 dark:border-white/10 rounded-3xl"
                    >
                        <div className="inline-flex p-4 rounded-full bg-slate-100 dark:bg-white/5 mb-4 text-slate-400">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No blogs found</h3>
                        <p className="text-slate-500 mb-6">
                            We couldn&apos;t find any articles matching &quot;{query}&quot;.
                        </p>
                        <button 
                            onClick={() => setQuery('')}
                            className="text-indigo-500 font-bold hover:underline"
                        >
                            Clear Search
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </motion.div>
  );
}
