import React, { useState, useEffect } from 'react';
import { Award, Building2, TrendingUp, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AboutSkeleton } from './skeletons/AboutSkeleton';

interface AboutProps {
  isLoading?: boolean;
}

export const About: React.FC<AboutProps> = ({ isLoading }) => {
  const [loading, setLoading] = useState(isLoading ?? true);

  useEffect(() => {
    if (isLoading !== undefined) {
      setLoading(isLoading);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <section id="nosotros" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-20">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="about-skeleton-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <AboutSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="about-content-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Encabezado con aparición progresiva al desplazarse */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-2xl mx-auto space-y-3 mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Nuestra Identidad</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Más de 20 Años Conectando el Futuro
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Evolucionamos permanentemente para ofrecer tecnología de vanguardia y atención personalizada a cada cliente.
              </p>
            </motion.div>

            {/* 3 Tarjetas de pilares institucionales con aparición escalonada al desplazarse */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Nuestra Historia</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Desde hace +20 años brindamos soluciones de conectividad a empresas, organizaciones y conjuntos residenciales en una amplia zona de cobertura.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Nuestra Visión</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Para nosotros es esencial innovar y adelantarnos a los cambios permanentes que el mundo de hoy nos propone.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Alianzas Tecnológicas</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Disponemos de alianzas estratégicas con los mejores partners del sector, líderes globales en tecnología y comunicaciones.
                </p>
              </motion.div>
            </div>

            {/* Recuadro de cita institucional con aparición progresiva al desplazarse */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border-l-4 border-cyan-500 rounded-r-2xl p-6 sm:p-10 shadow-xl"
            >
              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic font-serif">
                &ldquo;En el mundo actual estar comunicados es fundamental, por eso en toda empresa y organización el éxito depende del acceso a la información. Los entornos digitales se encuentran en permanente expansión. Proveemos a nuestros clientes las herramientas necesarias para facilitarles su crecimiento. Integramos soluciones de comunicaciones, Internet, redes de datos, voz y video escalables, a medida de las necesidades más exigentes.&rdquo;
              </blockquote>
              <div className="mt-4 flex justify-end">
                <div className="font-sans font-bold text-cyan-400 text-sm tracking-wide text-right">
                  — Parabol Argentina
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
