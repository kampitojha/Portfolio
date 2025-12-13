"use client";
import React, { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle resize
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Characters - Mix of Katakana and Latin for that cyberpunk feel
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for(let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    const draw = () => {
        // Semi-transparent black to create trail effect
        // Use theme "background" color (dark: #050505) but we hardcode hex for canvas
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Text Color - Indigo/Cyan Gradient per column? 
        // Simple: Cyan/Indigo for consistency
        ctx.fillStyle = '#6366f1'; // Indigo-500
        // Or '#0F0' (Green) if user strictly wants Matrix. 
        // I'll stick to Indigo to match theme, but maybe lighter? '#818cf8' (Indigo-400)
        ctx.fillStyle = Math.random() > 0.5 ? '#818cf8' : '#2dd4bf'; // Indigo/Teal mix
        ctx.font = fontSize + 'px monospace';

        for(let i = 0; i < drops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i*fontSize, drops[i]*fontSize);

            // Reset drop
            if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
                drops[i] = 0;

            // Increment Y
            drops[i]++;
        }
    };

    const interval = setInterval(draw, 30);

    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full z-0 opacity-10 dark:opacity-20 pointer-events-none mix-blend-screen"
    />
  );
};
