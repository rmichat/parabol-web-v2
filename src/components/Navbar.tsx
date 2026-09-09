import React, { useState, useEffect } from 'react';
import { Mail, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cerrar el menú móvil con la tecla Escape (WCAG 2.1.2)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Barra superior de estado en vivo */}
      <div id="status-bar" className="bg-slate-900 border-b border-slate-800 text-xs px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span id="status-bar-hashtag" className="text-cyan-400 font-semibold tracking-wide">
              #ConectividadSinLímites
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              id="top-whatsapp-link"
              href="https://wa.me/5491171440883"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp al +54 9 11 7144-0883 (se abre en nueva pestaña)"
              className="flex items-center gap-1.5 hover:text-emerald-400 active:text-emerald-400 active:scale-95 transition-all rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-slate-200">+54 9 11 7144-0883</span>
            </a>
            <span aria-hidden="true">•</span>
            <a
              id="top-email-link"
              href="mailto:consultas@parabol.com.ar"
              aria-label="Enviar correo electrónico a consultas@parabol.com.ar"
              className="flex items-center gap-1 hover:text-cyan-400 active:text-cyan-400 active:scale-95 transition-all rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>consultas@parabol.com.ar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cabecera principal fija con desenfoque de fondo */}
      <header id="main-header" className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logotipo oficial de la marca */}
          <div className="flex items-center gap-3">
            <a
              id="brand-logo-link"
              href="#inicio"
              aria-label="Ir a la página de inicio de Parabol Argentina"
              className="flex items-center group active:scale-95 transition-transform duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <img
                src="/parabol/logoparabol.png"
                alt="Parabol Argentina - Soluciones Integrales de Conectividad"
                width={279}
                height={58}
                fetchPriority="high"
                decoding="async"
                className="h-8 sm:h-[35px] w-auto object-contain transition-transform group-hover:scale-102"
              />
            </a>
          </div>

          {/* Enlaces de navegación de escritorio */}
          <nav id="desktop-nav" aria-label="Navegación principal" className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300 select-none">
            <a
              href="#soluciones"
              className="hover:text-cyan-400 active:text-cyan-400 active:scale-95 transition-all duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Soluciones
            </a>
            <a
              href="#nosotros"
              className="hover:text-cyan-400 active:text-cyan-400 active:scale-95 transition-all duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Nosotros (+20 años)
            </a>
            <a
              href="#contacto"
              className="hover:text-cyan-400 active:text-cyan-400 active:scale-95 transition-all duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Contacto
            </a>
          </nav>

          {/* Botones de acción y controles */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 shrink-0">
            <a
              id="header-whatsapp-cta"
              href="https://wa.me/5491171440883"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por WhatsApp con un asesor (se abre en nueva pestaña)"
              className="hidden sm:flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 md:px-4 h-9 sm:h-10 bg-emerald-950/60 hover:bg-emerald-900/60 active:bg-emerald-900/90 active:border-emerald-500 text-emerald-300 border border-emerald-700/50 text-xs md:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-150 hover:scale-102 active:scale-95 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap">Consultá vía WhatsApp</span>
            </a>
            <a
              id="header-quote-cta"
              href="#contacto"
              aria-label="Ir al formulario de contacto y cotización"
              className="hidden sm:flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-5 h-9 sm:h-10 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 text-white text-xs md:text-sm font-bold rounded-xl shadow-lg shadow-cyan-900/30 whitespace-nowrap shrink-0 transition-all duration-150 hover:scale-102 active:scale-95 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span className="whitespace-nowrap">Consultá</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>

            {/* Un solo botón de cambio de modo noche a modo día, ubicado al lado del botón de menú */}
            <ThemeToggle />

            {/* Botón de menú hamburguesa móvil con respuesta táctil */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white active:scale-90 active:bg-slate-800 active:border-cyan-500/40 transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label={mobileMenuOpen ? 'Cerrar menú principal de navegación' : 'Abrir menú principal de navegación'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menú desplegable móvil con animación suave de apertura y cierre */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              key="mobile-nav-drawer"
              id="mobile-nav-drawer"
              aria-label="Menú de navegación móvil"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden absolute top-full left-0 right-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 px-4 py-4 space-y-3 z-50 shadow-2xl"
            >
              <a
                href="#soluciones"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-900 active:bg-cyan-500/15 active:text-cyan-400 active:scale-[0.98] font-semibold text-sm transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Soluciones
              </a>
              <a
                href="#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-900 active:bg-cyan-500/15 active:text-cyan-400 active:scale-[0.98] font-semibold text-sm transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Nosotros (+20 años)
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-900 active:bg-cyan-500/15 active:text-cyan-400 active:scale-[0.98] font-semibold text-sm transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Contacto
              </a>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Ir a la sección de contacto para solicitar cotización"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 active:scale-95 text-white rounded-xl text-sm font-bold shadow-lg shadow-cyan-900/30 transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span>Consultá</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/5491171440883"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultar por WhatsApp con un asesor (se abre en nueva pestaña)"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-950/60 hover:bg-emerald-900/60 active:bg-emerald-900/90 active:scale-95 text-emerald-300 border border-emerald-700/50 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Consultá vía WhatsApp</span>
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Capa de fondo oscurecida con desenfoque (backdrop blur) al abrir el menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            id="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-30 lg:hidden pointer-events-auto"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
