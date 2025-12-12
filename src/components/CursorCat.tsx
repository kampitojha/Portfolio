"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion';

export const CursorCat: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const timerRef = useRef<any>(null);

  // Smooth physics for natural movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Center offset (w-20 is approx 80px, so offset by 40px to center)
      cursorX.set(e.clientX - 40);
      cursorY.set(e.clientY - 40);
      setIsMoving(true);
      
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [cursorX, cursorY]);

  useMotionValueEvent(smoothX, "change", (latest) => {
     const prev = smoothX.getPrevious();
     if (prev !== undefined) {
         const diff = latest - prev;
         // Tuning threshold to prevent jitter
         if (diff > 0.5) setIsFlipped(false); // Moving Right -> Face Right (No flip)
         if (diff < -0.5) setIsFlipped(true); // Moving Left -> Face Left (Flip)
     }
  });

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
       <img 
          src="/cat.png"
          alt="Running Cat"
          // scale-x-[-1] flips the image horizontally
          // drop-shadow-lg helps it stand out against dark backgrounds
          className={`w-20 h-auto drop-shadow-lg transition-transform duration-200 ${isFlipped ? 'scale-x-[-1]' : ''}`}
          onError={(e) => {
            // Robust fallback if local image fails for any reason
            e.currentTarget.src = "https://media.tenor.com/On7kb9rhCg4AAAAj/loading-cat-transparent.gif";
          }}
       />
    </motion.div>
  );
};