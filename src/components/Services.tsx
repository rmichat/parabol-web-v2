import React, { useState, useEffect } from 'react';
import { Wifi, Zap, CheckCircle2, ArrowRight, Radio, Server, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServicesSkeleton } from './skeletons/ServicesSkeleton';

interface ServicesProps {
  isLoading?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ isLoading }) => {
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
    <section id="soluciones" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-24 relative">
      {/* Anchor alias invisible para retrocompatibilidad */}
      <span id="servicios" className="absolute -top-24 left-0 pointer-events-none opacity-0" aria-hidden="true" />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="services-skeleton-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ServicesSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="services-content-view"
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
              className="text-center max-w-3xl mx-auto space-y-3 mb-12"
            >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider">
          <Wifi className="w-3.5 h-3.5" />
          <span>#ConectividadSinLímites</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Soluciones Integrales de Conectividad
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Diseñamos e integramos soluciones de comunicaciones, Internet, redes de datos, voz y video. Redes de fibra óptica, redes de seguridad, redes eléctricas. Soluciones escalables para satisfacer las necesidades más exigentes de empresas, PyMEs y organizaciones.
        </p>
      </motion.div>

      {/* 4 Columnas de soluciones principales con aparición escalonada al desplazarse */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tarjeta 1: Internet de Alta Velocidad */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-7 space-y-5 transition-all shadow-lg flex flex-col justify-between"
        >
          <div className="space-y-5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Internet de Alta Velocidad</h3>
              <p className="text-xs text-slate-400 mt-1">
                Conexiones dedicadas y premium con ancho de banda simétrico garantizado.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Acceso a Internet Dedicado:</strong> Conexión de alta disponibilidad simétrica. Incluye IP pública. SLA (acuerdo de nivel de servicio), Soporte 24x7x365. Reportes y gráficos de rendimiento.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Acceso a Internet Premium:</strong> Conexión para usuarios que requieran elevados niveles de servicio. Disponibilidad de 99,5%, medida sobre base anual. IP dinámica o fija.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Acceso a Internet Banda Ancha:</strong> Conexión no dedicada sugerida para emprendedores y usuarios residenciales exigentes.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Planes de hasta 1 GB:</strong> Máxima velocidad simétrica para transferencia masiva y trabajo en la nube.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <a
              href="#contacto"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 active:text-cyan-200 active:scale-95 flex items-center gap-1.5 transition-all duration-150 select-none inline-flex"
            >
              <span>Consultar disponibilidad</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Tarjeta 2: Infraestructura y Enlaces */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 sm:p-7 space-y-5 transition-all shadow-lg flex flex-col justify-between"
        >
          <div className="space-y-5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Radio className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Infraestructura & Redes</h3>
              <p className="text-xs text-slate-400 mt-1">
                Tecnología multienlace para garantizar conectividad en cualquier punto geográfico.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Fibra Óptica, Wireless & WiMAX:</strong> Múltiples medios de transmisión para asegurar cobertura donde otras tecnologías no llegan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Enlace de Datos Punto a Punto, Multipunto, VPN:</strong> Conexión privada punto a punto entre sedes, plantas industriales y sucursales.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Enlaces Especiales:</strong> Microondas, Fibra Óptica, Cobre, Satelital.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Triple Play y 2 Play:</strong> Internet de alta velocidad + Telefonía + TV Digital.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <a
              href="#contacto"
              className="text-xs font-bold text-blue-400 hover:text-blue-300 active:text-blue-200 active:scale-95 flex items-center gap-1.5 transition-all duration-150 select-none inline-flex"
            >
              <span>Consultar enlace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Tarjeta 3: Soluciones Corporativas y PyMEs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 sm:p-7 space-y-5 transition-all shadow-lg flex flex-col justify-between"
        >
          <div className="space-y-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Server className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Soluciones Corporativas & PyMEs</h3>
              <p className="text-xs text-slate-400 mt-1">
                Consultoría TICs y servicios digitales.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Soluciones On-Demand para empresas y PyMEs:</strong> Desarrollo y diseño de sitios web, hosting corporativo y registro de dominios.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Consultoría TICs:</strong> Asesoramiento estratégico en comunicaciones y tecnologías de la información para empresas.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Equipamiento de Marcas Líderes:</strong> Venta, instalación y soporte de routers corporativos, switches y antenas.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <a
              href="#contacto"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 active:text-indigo-200 active:scale-95 flex items-center gap-1.5 transition-all duration-150 select-none inline-flex"
            >
              <span>Hablar con un consultor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Tarjeta 4: Ingeniería & Obras */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-7 space-y-5 transition-all shadow-lg flex flex-col justify-between"
        >
          <div className="space-y-5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <HardHat className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Ingeniería & Obras</h3>
              <p className="text-xs text-slate-400 mt-1">
                Diseño, instalación y mantenimiento de redes eléctricas, fibra óptica, cobre.
              </p>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Instalaciones Eléctricas:</strong> Tableros eléctricos, iluminación, fuerza motriz, grupos electrógenos, UPS.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Instalaciones Integrales de Fibra Óptica y Cableado Estructurado.</strong>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Enlaces Especiales:</strong> Torres, Antenas, Microondas, Satelital.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <a
              href="#contacto"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 active:text-amber-200 active:scale-95 flex items-center gap-1.5 transition-all duration-150 select-none inline-flex"
            >
              <span>Consultar proyecto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
