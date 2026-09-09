import React from 'react';
import { FileText } from 'lucide-react';

interface FooterProps {
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  return (
    <footer id="main-footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-800 text-xs text-slate-400">
      <div className="flex flex-col items-center justify-center gap-6 pb-8">
        <div id="footer-logo-wrap" className="flex justify-center items-center">
          <img
            src="/parabol/logoparabol.png"
            alt="Parabol Argentina - Consortio Net SAS"
            width={279}
            height={58}
            loading="lazy"
            decoding="async"
            className="h-[26px] w-auto object-contain"
          />
        </div>

        <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#inicio"
            className="hover:text-cyan-400 active:text-cyan-300 active:scale-95 transition-all duration-150 select-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Inicio
          </a>
          <a
            href="#soluciones"
            className="hover:text-cyan-400 active:text-cyan-300 active:scale-95 transition-all duration-150 select-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Soluciones
          </a>
          <a
            href="#nosotros"
            className="hover:text-cyan-400 active:text-cyan-300 active:scale-95 transition-all duration-150 select-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            className="hover:text-cyan-400 active:text-cyan-300 active:scale-95 transition-all duration-150 select-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Contacto
          </a>
          <button
            type="button"
            id="open-terms-button"
            onClick={onOpenTerms}
            aria-label="Abrir términos y condiciones de uso"
            className="text-cyan-400 hover:text-cyan-300 active:text-cyan-200 active:scale-95 hover:underline flex items-center gap-1.5 transition-all duration-150 cursor-pointer select-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Términos y Condiciones</span>
          </button>
        </nav>
      </div>

      <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
        <div>
          Parabol &copy; 2026 | Todos los derechos reservados.
        </div>
        <div>
          Parabol es marca comercial de Consortio Net SAS.
        </div>
      </div>
    </footer>
  );
};
