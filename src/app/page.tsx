import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { GithubStats } from "@/components/GithubStats";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-200 selection:bg-indigo-500/30">
      <Hero />
      
      {/* Main Content using Bento Grid philosophy (Dense, Organized) */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
        
        {/* Section 1: Stats & Overview */}
        <section data-aos="fade-up">
           <GithubStats />
        </section>

        {/* Section 2: Tech Stack & Skills */}
        <section data-aos="fade-up">
             <Skills />
        </section>

        {/* Section 3: Experience */}
        <section data-aos="fade-up">
             <Experience />
        </section>

      </div>
    </main>
  );
}
