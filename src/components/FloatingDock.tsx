"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Calendar, Twitter } from 'lucide-react';
import Link from 'next/link';

const DOCK_ITEMS = [
  { 
    label: 'Twitter', 
    icon: Twitter, 
    href: 'https://twitter.com/kampit', 
    color: 'hover:text-sky-500' 
  },
  { 
    label: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/kampit', 
    color: 'hover:text-blue-600'
  },
  { 
    label: 'GitHub', 
    icon: Github, 
    href: 'https://github.com/kampit', 
    color: 'hover:text-white'
  },
  { 
    label: 'Cal.com', 
    icon: Calendar, 
    href: 'https://cal.com/kampit', 
    color: 'hover:text-indigo-500'
  },
];

export const FloatingDock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-4 px-6 py-4 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-indigo-500/10"
      >
        {DOCK_ITEMS.map((item) => (
          <DockItem key={item.label} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const DockItem = ({ item }: { item: typeof DOCK_ITEMS[0] }) => {
  return (
    <Link href={item.href} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.2, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className={`p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/20 relative group`}
      >
        <item.icon size={24} className={`text-slate-400 transition-colors ${item.color}`} />
        
        {/* Tooltip */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
            {item.label}
        </span>
      </motion.div>
    </Link>
  );
};
