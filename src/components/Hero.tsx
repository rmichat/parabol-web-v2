import React from 'react';
import { ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-center md:justify-start lg:justify-center py-8 sm:py-10 md:pt-12 md:pb-16 lg:py-16 overflow-hidden bg-slate-950"
    >
      {/* Fondo: Video de Data Center en funcionamiento libre de derechos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 [isolation:isolate] transform-gpu">
        <video
          id="hero-datacenter-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/datacenter-poster.jpg"
          className="w-full h-full object-cover opacity-75 sm:opacity-85 pointer-events-none transform-gpu"
          aria-hidden="true"
        >
          <source src="/assets/datacenter.mp4" type="video/mp4" />
        </video>

        {/* Capa de color uniforme base (mantiene siempre el tono exacto del Hero) */}
        <div
          id="hero-video-base-tint"
          className="absolute inset-0 bg-slate-950/25 pointer-events-none z-[1]"
        ></div>

        {/* Capa de degradado continuo que preserva el color superior e inferior durante el scroll en cualquier dirección */}
        <div
          id="hero-video-overlay"
          className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950 pointer-events-none z-[2]"
        ></div>

        {/* Transición inferior que encaja perfectamente con el color de la sección Servicios */}
        <div
          id="hero-bottom-blend"
          className="absolute bottom-0 inset-x-0 h-36 sm:h-56 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950 pointer-events-none z-[3]"
        ></div>

        {/* Desenfoque degradado decorativo sutil de tonos cian y azul característicos */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-600/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none z-[4]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto md:my-0 lg:my-auto md:pt-4 md:pb-6 lg:py-0">
        <div className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6 md:space-y-6">
          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18]"
          >
            Conectividad{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              sin límites
            </span>
            <br />
            donde sea que estés
          </motion.h1>

          {/* Subtítulo descriptivo */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal px-2"
          >
            Desde hace +20 años brindamos soluciones de conectividad a empresas, PyMEs y organizaciones en todo el país.
          </motion.p>

          {/* Botones de llamada a la acción principales (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-1 max-w-sm sm:max-w-none mx-auto"
          >
            <a
              id="hero-contacto-cta-btn"
              href="#contacto"
              className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-900/30 transition-all duration-150 hover:scale-102 flex items-center justify-center gap-2 select-none cursor-pointer"
            >
              <span>Consultá</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              id="hero-whatsapp-btn"
              href="https://wa.me/5491171440883"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-950/40 hover:bg-emerald-900/60 active:bg-emerald-900/90 active:border-emerald-400/90 active:scale-95 backdrop-blur-md text-emerald-300 border border-emerald-500/40 hover:border-emerald-400/70 font-semibold text-sm rounded-xl shadow-lg shadow-emerald-950/30 transition-all duration-150 hover:scale-102 flex items-center justify-center gap-2 select-none cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Consultá vía WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Cuadrícula de 4 pilares: se expande hasta max-w-5xl para garantizar una lectura cómoda sin desbordes */}
        <motion.div
          id="hero-pillars"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-3.5 lg:gap-4 mt-8 sm:mt-10 md:mt-12 lg:mt-10 text-left"
        >
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-3.5 sm:p-4 rounded-xl hover:border-slate-700 transition-colors overflow-hidden min-w-0">
            <div className="text-cyan-400 font-black text-xl sm:text-2xl lg:text-3xl tracking-tight truncate">+20 Años</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium leading-snug">Integrando Soluciones de Conectividad</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-3.5 sm:p-4 rounded-xl hover:border-slate-700 transition-colors overflow-hidden min-w-0">
            <div className="text-emerald-400 font-black text-xl sm:text-2xl lg:text-3xl tracking-tight truncate">Sin Límites</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium leading-snug">BW – Ancho de Banda + Alta Disponibilidad</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-3.5 sm:p-4 rounded-xl hover:border-slate-700 transition-colors overflow-hidden min-w-0">
            <div className="text-sky-400 font-black text-lg sm:text-xl lg:text-2xl tracking-tight truncate">99.8%</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium leading-snug">SLA – Acuerdo de Nivel de Servicio</div>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 p-3.5 sm:p-4 rounded-xl hover:border-slate-700 transition-colors overflow-hidden min-w-0">
            <div className="text-indigo-400 font-black text-xl sm:text-2xl lg:text-3xl tracking-tight truncate">24x7x365</div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium leading-snug">Soporte Técnico</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
