"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const post = BLOG_POSTS.find(p => p.id === slug);

  if (!post) return <div className="text-white pt-32 text-center">Note not found.</div>;

  return (
    <motion.article 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="pt-32 pb-24 min-h-screen container mx-auto px-6 max-w-3xl"
    >
        <Link href="/notes" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} /> Back to Notes
        </Link>

        <header className="mb-12 border-b border-slate-800 pb-12">
            <div className="flex gap-4 text-sm text-slate-400 mb-6 font-medium">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-indigo-500"/> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-indigo-500"/> {post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <div className="flex gap-2">
                {post.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300">#{tag}</span>
                ))}
            </div>
        </header>

        <div className="prose prose-invert prose-lg prose-indigo max-w-none">
            <p className="lead text-xl text-slate-300 mb-8">{post.excerpt}</p>
            <p className="text-slate-400">
                {post.content}
            </p>
            <p className="text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-white mt-8 mb-4">The Mental Model</h3>
            <p className="text-slate-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="bg-slate-900 border-l-4 border-indigo-500 p-6 my-8 italic text-slate-300">
                &quot;Simplicity is the prerequisite for reliability.&quot; — Edsger W. Dijkstra
            </div>
             <p className="text-slate-400">
                Performance optimization often comes down to understanding the underlying machine. JavaScript engines are smart, but we can help them by writing predictable code.
            </p>
        </div>
    </motion.article>
  );
}
