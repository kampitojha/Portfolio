"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import 'tldraw/tldraw.css';
import { motion } from 'framer-motion';

const Tldraw = dynamic(async () => (await import('tldraw')).Tldraw, { 
    ssr: false,
    loading: () => (
        <div className="flex bg-slate-50 dark:bg-slate-900 h-full w-full items-center justify-center text-slate-400 gap-2">
            <span className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce"></span>
            <span className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce delay-100"></span>
            <span className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce delay-200"></span>
        </div>
    )
});

export default function WhiteboardPage() {
    return (
        <div className="pt-24 min-h-screen h-screen w-full bg-slate-50 dark:bg-slate-950 flex flex-col overflow-hidden">
             
             {/* Floating Info Card */}
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-28 left-6 z-10 pointer-events-none hidden md:block"
             >
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl max-w-xs pointer-events-auto">
                    <h1 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                         🧠 Brain Dump
                    </h1>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        This is a fully functional whiteboard powered by tldraw. Use it to sketch system architectures, complex flows, or just doodle while thinking.
                        <br/><br/>
                        <span className="font-semibold text-indigo-500">Your drawings are saved locally!</span>
                    </p>
                </div>
             </motion.div>

             <div className="flex-grow w-full relative h-[calc(100vh-96px)]">
                 <Tldraw persistenceKey="kampit-whiteboard-v1" className="z-0" />
             </div>
        </div>
    );
}
