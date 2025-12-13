"use client";
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="relative border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#050505] pt-20 pb-10 overflow-hidden mt-20">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
            
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                            KAMPIT<span className="text-indigo-500">OJHA</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed text-sm md:text-base">
                            Crafting digital experiences that merge technical precision with aesthetic excellence. Always exploring the bleeding edge of web technology.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                                Start a Project <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6 tracking-wide text-sm uppercase opacity-80">Explore</h3>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                             <li><Link href="/work" className="hover:text-indigo-500 dark:hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"/>Work</Link></li>
                             <li><Link href="/blogs" className="hover:text-indigo-500 dark:hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"/>Blogs</Link></li>
                             <li><Link href="/gallery" className="hover:text-indigo-500 dark:hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"/>Gallery</Link></li>
                             <li><Link href="/whiteboard" className="hover:text-indigo-500 dark:hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"/>Whiteboard</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6 tracking-wide text-sm uppercase opacity-80">Connect</h3>
                        <div className="grid grid-cols-4 gap-3">
                            <SocialIcon icon={<Github size={18} />} href="https://github.com" label="Github" />
                            <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" label="Twitter" />
                            <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" label="LinkedIn" />
                            <SocialIcon icon={<Mail size={18} />} href="mailto:hello@kampit.dev" label="Email" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
                    <p>© 2025 Kampit Ojha. All rights reserved.</p>
                    <p className="flex items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full text-slate-500 dark:text-slate-400">
                        Made with <Heart size={12} className="text-pink-500 fill-current animate-pulse" /> using Next.js 15 & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
    <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="aspect-square flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-indigo-600 dark:hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
    >
        {icon}
    </a>
)
