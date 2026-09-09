import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ScrollToTop } from './components/ScrollToTop';

// Carga diferida bajo demanda del modal de términos legales para reducir el bundle inicial
const TermsModal = lazy(() =>
  import('./components/TermsModal').then((mod) => ({ default: mod.TermsModal }))
);

export default function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();

        // Si el destino es inicio, desplazarse al tope de la página
        if (href === '#inicio') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          // Calcular compensación exacta de la cabecera fija
          const header = document.getElementById('main-header');
          const headerOffset = header ? header.offsetHeight : 72;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth',
          });
        }

        // Actualizar el hash de la URL de forma fluida sin saltos abruptos del navegador
        if (window.history.pushState) {
          window.history.pushState(null, '', href);
        }

        // Aplicar animación visual de barrido para resaltar la llegada a la sección
        targetElement.classList.remove('section-sweep-active');
        void (targetElement as HTMLElement).offsetWidth;
        targetElement.classList.add('section-sweep-active');

        setTimeout(() => {
          targetElement.classList.remove('section-sweep-active');
        }, 1600);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <ThemeProvider>
      <div id="parabol-site" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white pb-16 transition-colors duration-200">
        <ScrollProgressBar />
        <Navbar />
        <main>
          <Hero />
          <Services isLoading={false} />
          <About isLoading={false} />
          <Contact />
        </main>
        <Footer onOpenTerms={() => setIsTermsOpen(true)} />
        <WhatsAppFloating />
        <ScrollToTop />
        <Suspense fallback={null}>
          {isTermsOpen && <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />}
        </Suspense>
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

