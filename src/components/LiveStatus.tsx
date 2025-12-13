"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const LiveStatus = () => {
    const [status, setStatus] = useState<{ learning: string } | null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await fetch('/status.json');
                const data = await res.json();
                setStatus(data);
            } catch (e) {
                console.error("Failed to fetch status", e);
            }
        };
        fetchStatus();
    }, []);

    if (!status) return null;

    return (
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-5 py-3 rounded-full border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
        >
             <div className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </div>
             <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Live Activity</span>
                 <span className="text-sm font-bold text-slate-900 dark:text-white leading-none mt-0.5">Learning: {status.learning}</span>
             </div>
        </motion.div>
    );
};
