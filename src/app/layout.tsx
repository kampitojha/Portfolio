import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Providers } from "./providers";

import { FloatingDock } from "@/components/FloatingDock";


const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: "Kampit Ojha",
  description: "Portfolio of Kampit Ojha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className={`${font.className} min-h-screen bg-background text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased transition-colors duration-300`} suppressHydrationWarning>
         <Providers>
            <SmoothScroll>
                <div className="fixed inset-0 bg-grid z-[-1] pointer-events-none opacity-20 dark:opacity-40" suppressHydrationWarning></div>
                {/* Navbar removed - all navigation in FloatingDock */}
                <main className="grow">
                    {children}
                </main>
                <footer className="py-6 border-t border-slate-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <p className="text-sm text-slate-500">© 2025 Kampit Ojha.</p>
                    </div>
                </footer>

                <div suppressHydrationWarning>
                  <FloatingDock />
                </div>
            </SmoothScroll>
         </Providers>
      </body>
    </html>
  );
}
