"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles } from 'lucide-react';

type Message = {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
    id: 1,
    text: "Hi! I'm Kampit's AI assistant. Ask me anything about his projects, skills, or even his favorite tech stack! 🤖",
    sender: 'bot',
    timestamp: new Date()
};

const KNOWLEDGE_BASE = {
    keywords: {
        'projects': "Kampit has worked on amazing projects like NeoBank (Fintech dashboard), AI Chat Nexus, and a Rust-based CLI. Check out the 'Work' tab for more detail!",
        'work': "Kampit has worked on amazing projects like NeoBank (Fintech dashboard), AI Chat Nexus, and a Rust-based CLI. Check out the 'Work' tab for more detail!",
        'skills': "He is proficient in React, Next.js, TypeScript, Rust, and System Design. He loves building performant web apps.",
        'tech': "His favorite stack includes Next.js, TailwindCSS, Framer Motion, and Rust for high-performance tooling.",
        'stack': "His favorite stack includes Next.js, TailwindCSS, Framer Motion, and Rust for high-performance tooling.",
        'contact': "You can reach him at hello@kampit.dev or connect on LinkedIn/GitHub.",
        'email': "You can reach him at hello@kampit.dev.",
        'hire': "He is currently available for hire! Send him an email to chat.",
        'whiteboard': "He sketches system designs on the /whiteboard page. It's fully interactive!",
        'about': "Kampit is an Engineer & Builder focused on merging technical precision with aesthetic excellence.",
        'who': "Kampit is an Engineer & Builder focused on merging technical precision with aesthetic excellence.",
        'cat': "The cat is gone... for now. 😺"
    },
    default: "I'm not sure about that, but I know Kampit is awesome! Try asking about his 'projects', 'skills', or 'contact' info."
};

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI processing
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let responseText = KNOWLEDGE_BASE.default;

            for (const [key, value] of Object.entries(KNOWLEDGE_BASE.keywords)) {
                if (lowerInput.includes(key)) {
                    responseText = value;
                    break;
                }
            }

            const botMsg: Message = {
                id: Date.now() + 1,
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-36 md:bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] md:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-indigo-600 p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-white/20 rounded-full">
                                    <Bot size={20} />
                                </div>
                                <span className="font-bold">Kampit AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-950/50 space-y-4 h-[350px]">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                                        msg.sender === 'user' 
                                            ? 'bg-indigo-600 text-white rounded-tr-none' 
                                            : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 text-slate-700 dark:text-slate-200 rounded-tl-none shadow-sm'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 flex gap-2">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about projects..."
                                className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-indigo-500/50"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-32 md:bottom-6 right-4 md:right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
            >
                {isOpen ? <X size={24} /> : <Sparkles size={24} />}
            </motion.button>
        </>
    );
};
