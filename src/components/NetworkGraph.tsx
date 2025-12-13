"use client";
import React, { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
}

export const NetworkGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    const pointCount = 40; // Dense enough
    const connectionDistance = 150;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
        if (containerRef.current) {
            width = canvas.width = containerRef.current.clientWidth;
            height = canvas.height = containerRef.current.clientHeight;
            initPoints();
        }
    };

    const initPoints = () => {
        points = [];
        for (let i = 0; i < pointCount; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1, // Velocity
                vy: (Math.random() - 0.5) * 1,
                color: Math.random() > 0.5 ? '#6366f1' : '#2dd4bf' // Indigo or Teal
            });
        }
    };

    const draw = () => {
        ctx.clearRect(0, 0, width, height);

        // Update points
        points.forEach(point => {
            point.x += point.vx;
            point.y += point.vy;

            // Bounce off walls
            if (point.x < 0 || point.x > width) point.vx *= -1;
            if (point.y < 0 || point.y > height) point.vy *= -1;

            // Mouse interaction (Repell)
            const dx = mouse.x - point.x;
            const dy = mouse.y - point.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 200) {
                const angle = Math.atan2(dy, dx);
                // Push away
                point.vx -= Math.cos(angle) * 0.5;
                point.vy -= Math.sin(angle) * 0.5;
            }
            
            // Limit speed
            const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
            if (speed > 2) { // Max speed
                 point.vx *= 0.8;
                 point.vy *= 0.8;
            }

            // Draw Point
            ctx.beginPath();
            ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = point.color;
            ctx.fill();
        });

        // Draw Lines
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)'; // Slate-400 equivalent
        ctx.lineWidth = 1;

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dx = points[i].x - points[j].x;
                const dy = points[i].y - points[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);

                if (dist < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    // Opacity based on distance
                    ctx.globalAlpha = 1 - (dist / connectionDistance);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
        
        requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    const handleMouseMove = (e: MouseEvent) => {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    
    // Add mouse listener to container or window?
    // Canvas is inside container.
    canvas.addEventListener('mousemove', handleMouseMove);

    resize();
    draw();

    return () => {
        window.removeEventListener('resize', resize);
        canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
        <canvas ref={canvasRef} className="block" />
        {/* Glow effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
