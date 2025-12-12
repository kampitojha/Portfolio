"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  return (
    <>
      <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 w-full z-50 transition-all duration-500 
          ${scrolled || isOpen ? 'bg-white/80 dark:bg-[#050505]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 py-4' : 'bg-transparent py-6 md:py-8'}`}
      >
          <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
              <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white group relative flex items-center gap-1 z-50">
                  <span>Kampit</span>
                  <span className="text-slate-500 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white transition-colors">Ojha</span>
                  <span className="text-indigo-500 group-hover:text-cyan-400 transition-colors duration-300">.</span>
              </Link>
              
              <div className="flex items-center gap-6">
                <nav className="hidden md:flex gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-lg shadow-sm dark:shadow-2xl dark:shadow-indigo-500/10">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link 
                                key={item.path} 
                                href={item.path}
                                className={`px-6 py-2.5 rounded-full text-base font-bold transition-all duration-300 relative overflow-hidden
                                ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-indigo-600 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className={`relative z-10 ${isActive ? 'text-white' : ''}`}>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden md:block">
                    <ThemeToggle />
                </div>

                <a 
                    href="mailto:hello@kampit.dev" 
                    className="hidden md:flex items-center justify-center px-8 py-3 rounded-full bg-indigo-600 text-white text-base font-bold tracking-wide transition-all duration-300 hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25 ring-2 ring-transparent hover:ring-indigo-400/50"
                >
                    Let's Talk
                </a>
              </div>

              <div className="md:hidden flex items-center gap-4">
                 <ThemeToggle />
                 <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 p-2 text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Toggle menu"
                 >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                 </button>
              </div>
          </div>
      </motion.header>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#050505] flex flex-col justify-center items-center md:hidden"
          >
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

             <nav className="flex flex-col items-center gap-8 relative z-10">
                {NAV_ITEMS.map((item, i) => {
                   const isActive = pathname === item.path;
                   return (
                   <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.1) }}
                   >
                     <Link
                        href={item.path}
                        className={`text-4xl font-black tracking-tight ${isActive ? 'text-indigo-600 dark:text-white' : 'text-slate-500 dark:text-slate-500'}`}
                        onClick={() => setIsOpen(false)}
                     >
                        {item.label}
                     </Link>
                   </motion.div>
                )})}
                
                <motion.a 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href="mailto:hello@kampit.dev" 
                    className="mt-8 px-10 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-xl hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-colors"
                >
                    Let's Talk
                </motion.a>
             </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};