import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppFloating: React.FC = () => {
  return (
    <a
      id="floating-whatsapp-btn"
      href="https://wa.me/5491171440883"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all duration-150 flex items-center justify-center border-2 border-white/20 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      title="Consultar por WhatsApp con un asesor (se abre en nueva pestaña)"
      aria-label="Consultar por WhatsApp con un asesor de Parabol (se abre en nueva pestaña)"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};
