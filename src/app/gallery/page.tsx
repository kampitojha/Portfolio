"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Coffee, Laptop, PenTool, Monitor, MapPin } from 'lucide-react';

const PHOTOS = [
    { id: 1, title: 'Deep Work Station', category: 'SETUP', color: 'from-orange-400 to-rose-400', rotate: -6, icon: <Monitor size={48} /> },
    { id: 2, title: 'Midnight Debugging', category: 'IRL', color: 'from-blue-600 to-indigo-600', rotate: 3, icon: <Coffee size={48} /> },
    { id: 3, title: 'System Architecture', category: 'WHITEBOARD', color: 'from-emerald-500 to-teal-400', rotate: -3, icon: <PenTool size={48} /> },
    { id: 4, title: 'First Hackathon', category: 'MOMENTS', color: 'from-purple-500 to-pink-500', rotate: 4, icon: <Laptop size={48} /> },
    { id: 5, title: 'Coffee Run', category: 'IRL', color: 'from-amber-700 to-orange-600', rotate: -2, icon: <MapPin size={48} /> },
    { id: 6, title: 'The Note-taking era', category: 'NOTES', color: 'from-slate-600 to-slate-800', rotate: 5, icon: <PenTool size={48} /> },
];

export default function GalleryPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 overflow-hidden">
            <div className="text-center mb-20">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6"
                >
                    Life Behind <span className="text-indigo-500">Code</span>
                </motion.h1>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                >
                    More than just commits. A glimpse into my workspace, whiteboard sessions, and the caffeine that fuels it all.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto perspective-1000">
                {PHOTOS.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, scale: 0.8, rotate: photo.rotate * 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: photo.rotate }}
                        whileHover={{ scale: 1.1, rotate: 0, zIndex: 50, transition: { duration: 0.2 } }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className={`relative aspect-[4/5] bg-white dark:bg-slate-800 p-4 pb-16 shadow-xl hover:shadow-2xl rounded-sm transform transition-all duration-300 group cursor-pointer border border-slate-200 dark:border-white/5`}
                    >
                        {/* "Photo" Area */}
                        <div className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-center justify-center text-white/90 shadow-inner group-hover:brightness-110 transition-all`}>
                            {photo.icon}
                        </div>
                        
                        {/* Tape Effect */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm shadow-sm rotate-1 border border-white/20"></div>

                        {/* Caption */}
                        <div className="absolute bottom-4 left-0 w-full text-center px-4">
                            <p className="font-serif italic text-slate-800 dark:text-slate-200 text-xl font-bold">{photo.title}</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{photo.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-32 text-center">
                 <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                    <Camera size={20} />
                    <span>More shots coming soon...</span>
                 </div>
            </div>
        </div>
    );
}
