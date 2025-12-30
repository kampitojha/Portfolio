import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-200 selection:bg-indigo-500/30">
      <Hero />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-32">
        
        {/* Experience */}
        <section data-aos="fade-up">
             <Experience />
        </section>

      </div>
    </main>
  );
}
