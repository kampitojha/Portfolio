"use client";
import React from 'react';
import { GitCommit, Star, GitBranch, Trophy, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export const GithubStats: React.FC = () => {
    // Bigger Heatmap Data
    const weeks = 26; // Half year view
    const days = 7;
    const contributionLevels = [
        'bg-[#1e293b]', // 0
        'bg-indigo-900/40', // 1
        'bg-indigo-700/60', // 2
        'bg-indigo-500', // 3
        'bg-cyan-400'  // 4
    ];

    const generateHeatmap = () => {
        const grid = [];
        for (let i = 0; i < weeks; i++) {
            const week = [];
            for (let j = 0; j < days; j++) {
                const level = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
                week.push(level);
            }
            grid.push(week);
        }
        return grid;
    };

    const heatmapData = generateHeatmap();

    return (
        <div className="w-full flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-1/3 bg-[#0a0a0a]/40 rounded-3xl p-6 border border-white/5 shadow-2xl relative group overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center gap-4 mb-6">
                    <div className="p-2.5 bg-indigo-500/20 rounded-xl text-indigo-400">
                        <Activity size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Open Source</h3>
                        <p className="text-slate-400 text-xs">Building in public</p>
                    </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                    <StatBox icon={<GitCommit size={16}/>} label="Commits" value="1,240" />
                    <StatBox icon={<Star size={16}/>} label="Stars" value="345" />
                    <StatBox icon={<GitBranch size={16}/>} label="PRs" value="82" />
                    <StatBox icon={<Trophy size={16}/>} label="Rank" value="Top 1%" />
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="text-xs text-slate-400 mb-2 font-mono uppercase tracking-wide">Top Languages</div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                        <div className="h-full bg-yellow-400 w-[45%]" title="JS/TS"></div>
                        <div className="h-full bg-orange-500 w-[30%]" title="Rust"></div>
                        <div className="h-full bg-blue-500 w-[25%]" title="CSS/Other"></div>
                    </div>
                    </div>
            </div>


            <div className="w-full xl:w-2/3 bg-[#0a0a0a]/40 rounded-3xl p-6 border border-white/5 shadow-xl flex flex-col justify-center relative hover:border-indigo-500/30 transition-all duration-500">
                    <div className="flex justify-between items-end mb-4">
                    <h4 className="text-base font-semibold text-slate-300 flex items-center gap-2">
                        <Zap size={16} className="text-yellow-400 fill-current" /> Contribution Activity
                    </h4>
                    <div className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">git log --stat</div>
                    </div>

                    <div className="w-full overflow-hidden">
                        <div className="flex gap-1.5 w-full justify-between mask-linear-fade">
                        {heatmapData.map((week, wIndex) => (
                            <div key={wIndex} className="flex flex-col gap-1.5 flex-1">
                                {week.map((level, dIndex) => (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (wIndex * 0.02) + (dIndex * 0.01) }}
                                        key={`${wIndex}-${dIndex}`}
                                        className={`aspect-square rounded-[2px] ${contributionLevels[level]} hover:brightness-125 transition-all cursor-pointer`}
                                    />
                                ))}
                            </div>
                        ))}
                        </div>
                    </div>
            </div>
        </div>
    );
};

const StatBox = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 hover:bg-slate-800 transition-colors">
        <div className="flex items-center gap-2 text-indigo-400 mb-1">
            {icon}
            <span className="text-[10px] uppercase font-bold tracking-wider">{label}</span>
        </div>
        <div className="text-xl font-bold text-slate-100 font-mono">{value}</div>
    </div>
);
