import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)', 
        surface: 'var(--surface)',   
        primary: 'var(--primary)',   
        secondary: 'var(--secondary)', 
        accent: 'var(--accent)',    
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      },
      animation: {
        'blob': 'blob 10s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate3d(0px, 0px, 0px) scale(1)' },
          '33%': { transform: 'translate3d(30px, -50px, 0px) scale(1.1)' },
          '66%': { transform: 'translate3d(-20px, 20px, 0px) scale(0.9)' },
          '100%': { transform: 'translate3d(0px, 0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -20px, 0)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
