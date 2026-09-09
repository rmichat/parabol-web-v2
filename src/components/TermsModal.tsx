import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Printer, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Bloquear scroll del fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="terms-modal-container"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="terms-modal-title"
        >
          {/* Telón de fondo con desenfoque estético */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Tarjeta modal principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto z-10"
          >
            {/* Cabecera del modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 sticky top-0 z-20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="terms-modal-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    Términos y Condiciones
                  </h3>
                  <p className="text-xs text-slate-400">
                    Parabol • Consortio Net SAS
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="p-2 text-slate-400 hover:text-cyan-400 active:text-cyan-300 active:scale-90 hover:bg-slate-800/80 rounded-lg transition-all duration-150 print:hidden cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  title="Imprimir / Guardar como PDF"
                  aria-label="Imprimir o guardar como PDF los términos y condiciones"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white active:scale-90 hover:bg-slate-800/80 rounded-lg transition-all duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  aria-label="Cerrar ventana de términos y condiciones"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contenido scrolleable de Términos y Condiciones */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-xs sm:text-sm text-slate-300 leading-relaxed custom-scrollbar">
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300">
                  El usuario que acceda a esta página web (<strong className="text-cyan-300 font-semibold">www.parabol.com.ar</strong>) conoce y acepta los términos y condiciones relativos a su utilización que a continuación se detallan.
                </p>
              </div>

              {/* Sección 1 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 text-xs flex items-center justify-center font-bold">1</span>
                  Propiedad Intelectual y Derechos Reservados
                </h4>
                <p className="text-slate-400 pl-7">
                  El material que integra la presente página web es propiedad de <strong className="text-slate-200">Parabol</strong> (marca comercial de <strong className="text-slate-200">Consortio Net SAS</strong>). Todos los derechos se encuentran reservados. La información, marcas, isotipos, logotipos y las imágenes que en ella se presentan no podrán ser reproducidas, distribuidas o usadas sin el consentimiento expreso y por escrito de Parabol, bajo ninguna circunstancia.
                </p>
              </div>

              {/* Sección 2 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 text-xs flex items-center justify-center font-bold">2</span>
                  Uso Personal y No Comercial
                </h4>
                <p className="text-slate-400 pl-7">
                  La información contenida en la presente página es exclusivamente para uso personal e informativo. El usuario se compromete expresamente a no vender, reproducir, modificar, alterar, descompilar, ceder o comercializar total o parcialmente la presente página web o cualquiera de sus contenidos.
                </p>
              </div>

              {/* Sección 3 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 text-xs flex items-center justify-center font-bold">3</span>
                  Conducta del Usuario y Restricciones
                </h4>
                <p className="text-slate-400 pl-7">
                  El usuario no podrá volcar términos o utilizar expresiones injuriosas, calumniantes, difamatorias o contrarias a las buenas costumbres y a la legislación vigente. No podrá transmitir información o material que pueda, concreta o eventualmente, violar derechos de terceros o que contenga virus, código malicioso o cualquier otro componente dañino. Parabol se reserva el derecho de moderar, editar o suprimir en su totalidad o de manera fraccionada cualquier mensaje, consulta o material remitido por el usuario.
                </p>
              </div>

              {/* Sección 4 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 text-xs flex items-center justify-center font-bold">4</span>
                  Material y Sugerencias Remitidas
                </h4>
                <p className="text-slate-400 pl-7">
                  El usuario garantiza a Parabol la libre utilización de cualquier información, sugerencia, idea o concepto vertidos a través de los canales de contacto, con el propósito que la compañía determine y sin derecho a compensación o remuneración económica de ninguna índole en favor del usuario.
                </p>
              </div>

              {/* Sección 5 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 text-xs flex items-center justify-center font-bold">5</span>
                  Exención de Garantías
                </h4>
                <p className="text-slate-400 pl-7">
                  Parabol no brinda garantía verbal o escrita sobre el material publicado en la presente página, incluyendo pero no limitando a que la información publicada se encuentre libre de errores o interrupciones. La utilización de la información es de riesgo exclusivo para el usuario. Parabol realiza esfuerzos permanentes y razonables para asegurar la exactitud y actualización de los datos expuestos, reservándose el derecho de efectuar modificaciones, actualizaciones o correcciones en cualquier momento sin necesidad de aviso previo.
                </p>
              </div>

              {/* Sección 6 */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-cyan-400 text-xs flex items-center justify-center font-bold">6</span>
                  Limitación de Responsabilidad y Vigencia
                </h4>
                <p className="text-slate-400 pl-7">
                  Bajo ninguna circunstancia Parabol ni Consortio Net SAS serán responsables por eventuales daños derivados del empleo incorrecto de los contenidos o enlaces del sitio. El presente acuerdo rige desde el momento de acceso a la página web. El usuario puede dar por finalizado el presente acuerdo desconectándose del sitio y destruyendo cualquier material descargado u obtenido.
                </p>
              </div>
            </div>

            {/* Pie del modal */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 text-center sm:text-left">
                Parabol es marca comercial de <strong className="text-slate-300">Consortio Net SAS</strong>.
              </span>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 active:scale-95 text-slate-950 font-bold text-xs transition-all duration-150 shadow-md shadow-cyan-500/20 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
