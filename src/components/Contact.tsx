import React, { useState } from 'react';
import { Phone, Mail, Headphones, MapPin, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formattedMessage =
      `Parabol – *Solicitud de Asesoramiento y Cotización.*\n\n` +
      `Hola, me comunico a través del sitio web con la siguiente consulta:\n\n` +
      `• *Nombre:* ${contactName.trim()}\n` +
      `• *Empresa:* ${contactCompany.trim() || '-'}\n` +
      `• *Teléfono:* ${contactPhone.trim()}\n` +
      `• *Email:* ${contactEmail.trim()}\n` +
      `• *Requerimiento:* ${contactMessage.trim()}`;

    const url = `https://wa.me/5491171440883?text=${encodeURIComponent(formattedMessage)}`;
    setLastWhatsappUrl(url);

    // Breve pausa para brindar feedback visual inmediato con spinner antes de abrir WhatsApp
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitting(false);
      setContactSuccess(true);
    }, 600);
  };

  const handleResetForm = () => {
    setContactName('');
    setContactCompany('');
    setContactPhone('');
    setContactEmail('');
    setContactMessage('');
    setContactSuccess(false);
    setLastWhatsappUrl('');
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-20">
      {/* Encabezado con aparición progresiva al desplazarse */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto space-y-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
          <Phone className="w-3.5 h-3.5" />
          <span>Contacto Directo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Solicitá Asesoramiento & Cotización
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Elegí el canal de comunicación que te sea más cómodo para conversar con nuestro equipo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Canales directos y sedes físicas (5 columnas) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Acción directa por WhatsApp */}
          <a
            id="contact-whatsapp-card"
            href="https://wa.me/5491171440883"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar directamente por WhatsApp al +54 9 11 7144-0883 (se abre en nueva pestaña)"
            className="group block p-6 bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/40 rounded-2xl hover:border-emerald-400 active:scale-[0.98] active:border-emerald-300 transition-all duration-150 shadow-xl select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center p-2 group-hover:scale-110 group-active:scale-95 transition-transform text-emerald-400">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                  Respuesta Inmediata
                </span>
                <div className="text-lg font-black text-white">WhatsApp & Teléfono</div>
                <div className="text-sm font-mono text-emerald-300 font-bold">+54 9 11 7144-0883</div>
              </div>
            </div>
          </a>

          {/* Correo y Skype */}
          <div id="contact-electronic-channels" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Canales Electrónicos
            </h4>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Correo:</div>
                <a
                  id="contact-email-link"
                  href="mailto:consultas@parabol.com.ar"
                  aria-label="Enviar correo a consultas@parabol.com.ar"
                  className="font-semibold text-white hover:text-cyan-300 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  consultas@parabol.com.ar
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm pt-2 border-t border-slate-800">
              <Headphones className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Skype Corporativo:</div>
                <span id="contact-skype-handle" className="font-mono text-white font-semibold">parabolargentina</span>
              </div>
            </div>
          </div>

          {/* Oficinas */}
          <div id="contact-branches" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Oficinas</span>
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="branch-office-card p-3.5 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="branch-title font-bold text-white text-sm">Buenos Aires</div>
                <p className="branch-address text-slate-400 mt-1 leading-relaxed">
                  Argentina 1911, CP 1704, Buenos Aires, Argentina
                </p>
              </div>

              <div className="branch-office-card p-3.5 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="branch-title font-bold text-white text-sm">Mendoza</div>
                <p className="branch-address text-slate-400 mt-1 leading-relaxed">
                  Ruta Nac 144 Ex Ruta Nac 40 Sur, km 771, San Rafael, Mendoza CP 5600, AR
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulario de contacto (7 columnas) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-xl font-bold text-white mb-2">Envianos tu Consulta</h3>
          <p className="text-xs text-slate-400 mb-6">
            Completá el formulario para recibir factibilidad y cotización.
          </p>

          {contactSuccess ? (
            <div className="bg-slate-950/60 border border-cyan-500/30 p-6 sm:p-8 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center p-3 shadow-lg shadow-cyan-950/40">
                <img
                  src="/parabol/favicon.png"
                  alt="Parabol Argentina"
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 object-contain drop-shadow"
                />
              </div>
              <div className="space-y-1" role="status" aria-live="polite">
                <h4 className="text-lg font-bold text-white">¡Consulta enviada!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Un asesor técnico y comercial de Parabol se comunicará a la brevedad con la información y cotización solicitada.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {lastWhatsappUrl && (
                  <a
                    id="contact-reopen-whatsapp-btn"
                    href={lastWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir mensaje en WhatsApp (se abre en nueva pestaña)"
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-100" />
                    <span>Abrir en WhatsApp</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleResetForm}
                  aria-label="Reiniciar formulario para enviar otra consulta"
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-slate-300 hover:text-white font-semibold text-xs rounded-xl transition-all select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4 text-xs" noValidate={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-slate-400 font-semibold mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ej: Marcelo Gómez"
                    className="w-full bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-3.5 py-2.5 rounded-xl text-white text-xs transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-slate-400 font-semibold mb-1">
                    Empresa / Razón Social *
                  </label>
                  <input
                    id="contact-company"
                    name="organization"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="organization"
                    value={contactCompany}
                    onChange={(e) => setContactCompany(e.target.value)}
                    placeholder="Ej: Industrias del Sur S.A."
                    className="w-full bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-3.5 py-2.5 rounded-xl text-white text-xs transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-slate-400 font-semibold mb-1">
                    Teléfono o WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    name="tel"
                    type="tel"
                    required
                    aria-required="true"
                    autoComplete="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+54 9 11 ..."
                    className="w-full bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-3.5 py-2.5 rounded-xl text-white text-xs transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-slate-400 font-semibold mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    aria-required="true"
                    autoComplete="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="contacto@empresa.com.ar"
                    className="w-full bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-3.5 py-2.5 rounded-xl text-white text-xs transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-slate-400 font-semibold mb-1">
                  Detalle del Requerimiento / Ubicación *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Indicá el tipo de servicio y solución..."
                  className="w-full bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-3.5 py-2.5 rounded-xl text-white text-xs transition-colors"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  * Datos necesarios.
                </span>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label={isSubmitting ? "Enviando consulta y preparando WhatsApp..." : "Enviar consulta"}
                  className={`px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-900/30 transition-all duration-150 flex items-center justify-center gap-2 select-none hover:scale-102 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                    isSubmitting ? 'opacity-85 cursor-wait pointer-events-none' : 'cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-white animate-spin shrink-0" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" />
                      <span>Enviar</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
