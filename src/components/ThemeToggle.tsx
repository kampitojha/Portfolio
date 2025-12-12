"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-14 h-8" />; // Placeholder to prevent hydration mismatch

    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`
                relative w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center cursor-pointer
                ${isDark ? 'bg-slate-800 border border-slate-700 justify-end' : 'bg-sky-100 border border-sky-200 justify-start'}
            `}
            aria-label="Toggle Theme"
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`
                    w-6 h-6 rounded-full shadow-sm flex items-center justify-center relative
                    ${isDark ? 'bg-slate-900' : 'bg-white'}
                `}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                        initial={false}
                        animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5, rotate: isDark ? 0 : -90 }}
                        className="absolute inset-0 flex items-center justify-center text-indigo-400"
                    >
                        <Moon size={14} fill="currentColor" />
                    </motion.div>
                    
                    <motion.div
                        initial={false}
                        animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1, rotate: isDark ? 90 : 0 }}
                        className="absolute inset-0 flex items-center justify-center text-amber-400"
                    >
                        <Sun size={14} fill="currentColor" />
                    </motion.div>
                </div>
            </motion.div>
        </button>
    );
};
