"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ... (Mobile menu logic remains similar)

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="fixed top-6 left-0 w-full z-50 pointer-events-none flex justify-center"
            >
                {/* Floating Island Container - Pointer events auto to allow clicking inside */}
                <div className="pointer-events-auto bg-slate-900/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-slate-200/20 dark:border-white/10 rounded-full p-2 pr-3 shadow-2xl flex items-center gap-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/10">
                    
                    {/* Desktop Nav Items */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`relative px-6 py-3 rounded-full text-base font-bold transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/30"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-8 bg-white/10" />

                    {/* Actions: Toggle + CTA */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        
                        <a
                            href="mailto:hello@kampit.dev"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white text-black font-bold text-base transition-all duration-300 hover:bg-slate-200 hover:scale-105 active:scale-95 shadow-lg"
                        >
                            <span>Let's Talk</span>
                            <MessageCircle size={18} className="text-indigo-600 fill-current" />
                        </a>

                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </div>
            </motion.header>

            {/* Mobile Fullscreen Menu (Kept as backup for small screens) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8">
                             {NAV_ITEMS.map((item) => (
                                 <Link 
                                    key={item.path} 
                                    href={item.path} 
                                    className="text-3xl font-bold text-slate-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                 </Link>
                             ))}
                        </nav>
                        <button onClick={() => setIsOpen(false)} className="absolute bottom-10 p-4 rounded-full bg-white/10 text-white">
                            <X size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};