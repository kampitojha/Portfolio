import { Project, Skill, NavItem, BlogPost } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Whiteboard', path: '/whiteboard' },
];

export const SKILLS_DATA: Skill[] = [
  { subject: 'Frontend', A: 145, fullMark: 150 },
  { subject: 'Backend', A: 120, fullMark: 150 },
  { subject: 'DevOps', A: 95, fullMark: 150 },
  { subject: 'Design', A: 110, fullMark: 150 },
  { subject: 'System Arch', A: 130, fullMark: 150 },
  { subject: 'AI/LLM', A: 100, fullMark: 150 },
];

export const PROJECTS: Project[] = [
  {
    id: 'neobank',
    title: 'NeoBank Ultimate',
    description: 'A futuristic banking dashboard with real-time transaction processing and WebGL visualizations.',
    fullDescription: "Built a high-frequency trading dashboard simulator. The goal was to visualize 10,000+ data points without lagging the main thread. Used Web Workers for data parsing and WebGL for rendering charts. The result is a buttery smooth 60fps experience even on mid-range devices.",
    tags: ['Next.js', 'TypeScript', 'WebGL', 'PostgreSQL'],
    link: 'https://github.com/kampit/neobank-demo',
    github: 'https://github.com/kampit/neobank',
    featured: true,
    color: 'from-blue-500 to-cyan-400',
    stats: [
        { label: "Performance", value: "98/100" },
        { label: "Transactions", value: "10k/sec" }
    ]
  },
  {
    id: 'ai-nexus',
    title: 'AI Chat Nexus',
    description: 'Context-aware LLM wrapper allowing seamless switching between Gemini and GPT models.',
    fullDescription: "A unified interface for LLMs. I got tired of switching tabs between ChatGPT and Gemini, so I built a unified wrapper that routes prompts based on complexity. Simple queries go to Flash-Lite (cheaper), complex reasoning goes to GPT-4o.",
    tags: ['React', 'Gemini API', 'Tailwind'],
    link: 'https://ai-nexus-demo.vercel.app',
    github: 'https://github.com/kampit/ai-nexus',
    featured: true,
    color: 'from-violet-500 to-purple-400',
    stats: [
        { label: "Latency", value: "<400ms" },
        { label: "Users", value: "2.5k+" }
    ]
  },
  {
    id: 'ecom-headless',
    title: 'E-com Headless',
    description: 'High-performance Shopify headless storefront built for extreme SEO and speed.',
    tags: ['Shopify', 'Remix', 'Redis'],
    link: 'https://headless-store-demo.netlify.app',
    github: 'https://github.com/kampit/shopify-remix',
    featured: false,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    id: 'devops-cli',
    title: 'DevOps CLI',
    description: 'Rust-based CLI tool to automate AWS deployments in seconds.',
    tags: ['Rust', 'AWS', 'CLI'],
    link: 'https://crates.io/crates/devops-cli-tool',
    github: 'https://github.com/kampit/rust-cli',
    featured: false,
    color: 'from-orange-500 to-red-400'
  },
  {
    id: 'portfolio-v1',
    title: 'Legacy Portfolio',
    description: 'My previous portfolio built with vanilla JS and GSAP.',
    tags: ['GSAP', 'HTML/SCSS'],
    link: 'https://v1.kampit.dev',
    github: 'https://github.com/kampit/portfolio-v1',
    featured: false,
    color: 'from-pink-500 to-rose-400'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'react-server-components',
    title: 'Why I stopped using useEffect (mostly)',
    excerpt: 'Synchronization is not an effect. Here is how I refactored my codebase to use Server Actions and derived state instead of messy effect chains.',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    tags: ['React', 'Performance'],
    content: "When React 18 introduced stricter effect running in development, it broke half my apps. That was a wake-up call. Effects are for synchronization with external systems, not for data fetching or state derivation. In this deep dive, I explore how moving logic to event handlers and server components simplified my mental model..."
  },
  {
    id: 'rust-for-js-devs',
    title: 'Rust for JavaScript Developers: The mental model shift',
    excerpt: 'Borrow checker explained in terms of "loaning a book to a friend". Breaking down ownership without the complex jargon.',
    date: 'Sep 28, 2024',
    readTime: '8 min read',
    tags: ['Rust', 'DX'],
    content: "Rust isn't hard, it's just disciplined. In JS, we pass objects around like free candy. In Rust, you have to sign a contract. Here is how to map JS concepts to Rust traits..."
  },
  {
    id: 'system-design-basics',
    title: 'Scaling from 1 to 100k users',
    excerpt: 'A practical guide to caching, database indexing, and when to actually split into microservices (hint: not yet).',
    date: 'Aug 15, 2024',
    readTime: '12 min read',
    tags: ['System Design', 'Backend'],
    content: "Vertical scaling works longer than you think. Don't add Kubernetes until you actually need it. Let's talk about Redis caching strategies..."
  }
];

export const HERO_TEXT = {
  greeting: "Hi, I'm Kampit",
  role: "Engineer & Builder",
  sub: "Crafting digital experiences that merge technical precision with aesthetic excellence."
};