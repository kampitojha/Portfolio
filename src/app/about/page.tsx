"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Code2, Rocket, Target, Heart, Lightbulb, 
  Zap, Shield, Users, Globe, Award, TrendingUp,
  Cpu, Palette, Database, Cloud
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamic import for MatrixBackground
const MatrixBackground = dynamic(() => import('@/components/MatrixBackground').then(mod => mod.MatrixBackground), { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-slate-950/20" /> 
});

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      
      <MatrixBackground />
      
      {/* Gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob will-change-transform" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 will-change-transform" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="container mx-auto max-w-6xl relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 mb-20"
          >
            
            {/* Icon with animation */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 rounded-full" />
                <Sparkles className="relative text-indigo-400" size={64} strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black tracking-tight"
            >
              <span className="text-white">what I </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                believe in
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl text-slate-300 font-semibold flex items-center justify-center gap-3 flex-wrap">
                <Code2 className="text-indigo-400" size={32} />
                <span>Crafting Digital Excellence</span>
                <Rocket className="text-purple-400" size={32} />
              </p>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Building meaningful digital experiences that blend creativity with performance. 
                Every line of code is a step towards perfection, every project a opportunity to innovate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-center text-white mb-16"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-indigo-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Philosophy Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-center text-white mb-16"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Philosophy</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {technicalPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300 flex-shrink-0">
                    <principle.icon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {principle.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Tech Stack Focus</h3>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <tech.icon className={tech.color} size={20} />
                      <span className="text-white font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Journey Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-center text-white mb-16"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Journey</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8 text-center"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6">
                From writing my first <span className="text-purple-400 font-semibold">"Hello World"</span> to building 
                scalable web applications, my journey has been driven by curiosity and the desire to create 
                impactful digital solutions.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                I believe in continuous learning, embracing challenges, and pushing the boundaries of 
                what's possible with modern web technologies. Every project is an opportunity to grow, 
                every problem a chance to innovate.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {['Problem Solver', 'Quick Learner', 'Team Player', 'Detail Oriented', 'Creative Thinker'].map((trait) => (
                  <span key={trait} className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Something Amazing</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I'm always excited to work on challenging projects and collaborate with creative minds. 
              Whether you have a specific project in mind or just want to chat about technology, 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 border border-white/10"
                >
                  View My Work
                </motion.button>
              </Link>
              <a href="mailto:kampitojha2@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Core Values Data
const coreValues = [
  {
    title: "Performance First",
    description: "Building lightning-fast applications that delight users with smooth interactions and minimal load times.",
    icon: Zap
  },
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable code that follows best practices and stands the test of time.",
    icon: Shield
  },
  {
    title: "User-Centric Design",
    description: "Putting users at the heart of every decision, creating intuitive and accessible experiences.",
    icon: Heart
  },
  {
    title: "Continuous Learning",
    description: "Staying updated with the latest technologies and constantly expanding my technical horizons.",
    icon: Lightbulb
  },
  {
    title: "Collaboration",
    description: "Believing in the power of teamwork and open communication to achieve extraordinary results.",
    icon: Users
  },
  {
    title: "Innovation",
    description: "Pushing boundaries and exploring creative solutions to complex problems.",
    icon: Target
  }
];

// Technical Principles Data
const technicalPrinciples = [
  {
    title: "Mobile-First Approach",
    description: "Designing for the smallest screen first ensures optimal performance across all devices.",
    icon: Globe
  },
  {
    title: "Component Architecture",
    description: "Building reusable, composable components that scale efficiently and maintain consistency.",
    icon: Cpu
  },
  {
    title: "Semantic HTML",
    description: "Writing meaningful markup that enhances accessibility and SEO.",
    icon: Code2
  },
  {
    title: "Progressive Enhancement",
    description: "Ensuring core functionality works everywhere, then enhancing with modern features.",
    icon: TrendingUp
  },
  {
    title: "Performance Optimization",
    description: "Implementing lazy loading, code splitting, and other optimization techniques.",
    icon: Award
  }
];

// Tech Stack Data
const techStack = [
  { name: "React", icon: Code2, color: "text-cyan-400" },
  { name: "Next.js", icon: Rocket, color: "text-indigo-400" },
  { name: "TypeScript", icon: Database, color: "text-blue-400" },
  { name: "Tailwind", icon: Palette, color: "text-purple-400" },
  { name: "Node.js", icon: Cloud, color: "text-green-400" },
  { name: "PostgreSQL", icon: Database, color: "text-orange-400" }
];
