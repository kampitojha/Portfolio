import { Project, Skill, NavItem, BlogPost } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Proof of Work', path: '/work' },
  { label: 'Gallery', path: '/gallery' }
];

export const SKILLS_DATA: Skill[] = [
  { subject: 'Frontend', A: 140, fullMark: 150 },
  { subject: 'Backend', A: 130, fullMark: 150 },
  { subject: 'Mobile', A: 110, fullMark: 150 },
  { subject: 'Languages', A: 135, fullMark: 150 },
  { subject: 'System Arch', A: 120, fullMark: 150 },
  { subject: 'Tools', A: 125, fullMark: 150 },
];

export const PROJECTS: Project[] = [
  {
    id: 'syncmeet',
    title: 'SyncMeet',
    description: 'A serverless P2P video collaboration tool with zero-latency communication.',
    fullDescription: "Built a serverless 1:1 video collaboration platform using WebRTC and BitTorrent-based signaling, enabling fully client-side communication with secure, zero-latency P2P connections. Developed real-time collaboration tools including an interactive whiteboard, shared notes editor, and integrated rich chat to support productive remote sessions.",
    tags: ['React JS', 'TypeScript', 'WebRTC', 'Trystero', 'Vite', 'TailwindCSS'],
    link: 'https://github.com/kampitojha/SyncMeet',
    github: 'https://github.com/kampitojha/SyncMeet',
    featured: true,
    color: 'from-indigo-600 to-cyan-500',
    stats: [
        { label: "P2P Latency", value: "<50ms" },
        { label: "Architecture", value: "Serverless" }
    ]
  },
  {
    id: 'os-seedcard',
    title: 'Seed Card Stepper (OS)',
    description: 'Developed an inline form validation stepper for high-conversion financial onboarding.',
    fullDescription: "Developed a Seed Card Stepper with inline form validation for a multi-step Recurring Deposit Account flow. Ensured stepwise data persistence, dynamic progress tracking, and error handling per design specifications to improve user conversion.",
    tags: ['React.js', 'TypeScript', 'Formik', 'Tailwind CSS'],
    link: 'https://github.com/pro-set/seed-app',
    github: 'https://github.com/pro-set/seed-app',
    featured: true,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'os-account-creation',
    title: 'Multi-step Account Creation (OS)',
    description: 'Contributed to a multi-step account creation flow for a financial platform.',
    fullDescription: "Contributed to setting up a multi-step account creation flow by creating placeholder pages (Details, Terms, Charges, Preview) integrated with a Seed Card Stepper for seamless navigation and consistent UI layout.",
    tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/pro-set/seed-app',
    github: 'https://github.com/pro-set/seed-app',
    featured: true,
    color: 'from-orange-500 to-red-400',
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
  sub: "Full-stack developer focused on building fast, scalable, and user-centric web applications with clean architecture and real-world problem solving."
};