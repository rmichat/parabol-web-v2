import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(currentScrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-btn"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-24 right-7 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/90 hover:bg-slate-800 active:bg-slate-700 text-cyan-400 hover:text-cyan-300 active:text-cyan-200 border border-slate-700/80 hover:border-cyan-500/60 shadow-xl shadow-slate-950/50 backdrop-blur-md transition-all duration-150 hover:scale-108 active:scale-92 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          title="Volver arriba"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
