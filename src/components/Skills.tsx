"use client";
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
import { SKILLS_DATA } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Server, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row items-center gap-12 xl:gap-16">
        <div className="flex-1 space-y-10 w-full">
            <div className="text-center md:text-left">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                >
                    Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400">Arsenal</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
                >
                    Specializing in performant frontend architectures and scalable backend systems.
                </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <SkillCard 
                    icon={<Layout className="text-cyan-400" size={20} />} 
                    title="Frontend" 
                    tags={["React", "Next.js", "Tailwind"]}
                    delay={0.1}
                />
                <SkillCard 
                    icon={<Server className="text-indigo-400" size={20} />} 
                    title="Backend" 
                    tags={["Node.js", "Rust", "Postgres"]}
                    delay={0.2}
                />
                <SkillCard 
                    icon={<Terminal className="text-purple-400" size={20} />} 
                    title="DevOps" 
                    tags={["Docker", "AWS", "CI/CD"]}
                    delay={0.3}
                />
                <SkillCard 
                    icon={<Cpu className="text-emerald-400" size={20} />} 
                    title="Emerging" 
                    tags={["WASM", "LLMs", "Solana"]}
                    delay={0.4}
                />
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[400px] md:max-w-[450px] aspect-square relative group mx-auto xl:mx-0"
        >
            <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 to-slate-900/40 backdrop-blur-md rounded-full border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[linear-gradient(transparent_0%,rgba(99,102,241,0.1)_50%,transparent_100%)] animate-scan pointer-events-none h-[200%] w-full -translate-y-1/2" />
                <div className="absolute inset-4 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-10 border border-dashed border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-[120%] h-[120%] relative z-10 -ml-4 -mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={SKILLS_DATA}>
                            <PolarGrid stroke="#334155" strokeOpacity={0.5} />
                            <PolarAngleAxis 
                                dataKey="subject" 
                                tick={{ fill: '#e2e8f0', fontSize: 11, fontWeight: 600 }} 
                            />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                            <Radar
                                name="Skills"
                                dataKey="A"
                                stroke="#818cf8"
                                strokeWidth={3}
                                fill="#6366f1"
                                fillOpacity={0.4}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
        
        <style>{`
            @keyframes scan {
                0% { transform: translateY(-50%); }
                100% { transform: translateY(50%); }
            }
            .animate-scan {
                animation: scan 4s linear infinite;
            }
        `}</style>
    </div>
  );
};

const SkillCard = ({ icon, title, tags, delay }: { icon: React.ReactNode, title: string, tags: string[], delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="group p-4 rounded-xl bg-[#0a0a0a]/40 border border-white/5 hover:bg-[#0a0a0a]/80 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm shadow-sm"
    >
        <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-white/5 text-white group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {icon}
            </div>
            <h3 className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-1.5 pl-1">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wide font-medium px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5 group-hover:border-indigo-500/20 group-hover:text-indigo-200 transition-colors">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);
