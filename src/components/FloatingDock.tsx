"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, BookOpen, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DOCK_ITEMS = [
  { 
    label: 'Home', 
    icon: Home, 
    href: '/', 
    color: 'hover:text-indigo-400',
    type: 'internal' as const
  },
  { 
    label: 'About', 
    icon: User, 
    href: '/about', 
    color: 'hover:text-cyan-400',
    type: 'internal' as const
  },
  { 
    label: 'Blogs', 
    icon: BookOpen, 
    href: '/blogs', 
    color: 'hover:text-green-400',
    type: 'internal' as const
  },
  { 
    label: 'Email', 
    icon: Mail, 
    href: 'mailto:kampitojha2@gmail.com', 
    color: 'hover:text-red-400',
    type: 'external' as const
  },
  { 
    label: 'Cal.com', 
    icon: Calendar, 
    href: 'https://cal.com/kampit-ojha-modpxr', 
    color: 'hover:text-indigo-500',
    type: 'external' as const
  },
  { 
    label: 'X', 
    icon: XIcon, 
    href: 'https://x.com/semixevi', 
    color: 'hover:text-white',
    type: 'external' as const
  },
];

export const FloatingDock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-500/20"
      >
        {DOCK_ITEMS.map((item) => (
          <DockItem key={item.label} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const DockItem = ({ item }: { item: typeof DOCK_ITEMS[0] }) => {
  const pathname = usePathname();
  const isActive = item.type === 'internal' && pathname === item.href;
  
  const iconElement = (
    <motion.div
      whileHover={{ scale: 1.2, y: -8 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2.5 md:p-3 rounded-full transition-all border relative group ${
        isActive 
          ? 'bg-indigo-600 border-indigo-500 text-white' 
          : 'bg-white/5 hover:bg-white/10 border-transparent hover:border-white/20 text-slate-400'
      }`}
    >
      <item.icon size={20} className={`transition-colors ${!isActive && item.color}`} />
      
      {/* Tooltip */}
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
          {item.label}
      </span>
      
      {/* Active Indicator */}
      {isActive && (
        <motion.div 
          layoutId="activeDock"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400"
        />
      )}
    </motion.div>
  );
  
  if (item.type === 'external') {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {iconElement}
      </a>
    );
  }
  
  return (
    <Link href={item.href}>
      {iconElement}
    </Link>
  );
};
