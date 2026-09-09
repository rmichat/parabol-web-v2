import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Resorte suave para una animación fluida al hacer scroll
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        id="scroll-progress-bar"
        className="h-full w-full origin-left will-change-transform"
        style={{ scaleX }}
      />
    </div>
  );
};
