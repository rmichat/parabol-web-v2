import React from 'react';

export const ServicesSkeleton: React.FC = () => {
  return (
    <div id="services-skeleton" className="w-full space-y-12 animate-pulse transition-opacity duration-300">
      {/* Encabezado esqueleto */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 flex flex-col items-center">
        {/* Badge píldora */}
        <div className="w-48 h-7 rounded-full skeleton-box-subtle animate-shimmer" />
        {/* Título */}
        <div className="w-4/5 max-w-md h-9 sm:h-10 rounded-xl skeleton-box animate-shimmer" />
        {/* Subtítulo multilínea */}
        <div className="w-full max-w-2xl space-y-2 pt-1 flex flex-col items-center">
          <div className="w-full h-3.5 sm:h-4 rounded skeleton-box-subtle animate-shimmer" />
          <div className="w-5/6 h-3.5 sm:h-4 rounded skeleton-box-subtle animate-shimmer" />
        </div>
      </div>

      {/* Cuadrícula de 4 tarjetas de soluciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="skeleton-card border rounded-2xl p-6 sm:p-7 space-y-6 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-5">
              {/* Ícono superior */}
              <div className="w-12 h-12 rounded-xl skeleton-box animate-shimmer" />

              {/* Título de tarjeta y descripción breve */}
              <div className="space-y-2">
                <div className="w-4/5 h-5 rounded-lg skeleton-box animate-shimmer" />
                <div className="w-full h-3.5 rounded skeleton-box-subtle animate-shimmer" />
              </div>

              {/* Lista de características (4 ítems con viñeta) */}
              <div className="space-y-3 pt-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full skeleton-box animate-shimmer shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-1.5 pt-0.5">
                      <div className="w-full h-3 rounded skeleton-box-subtle animate-shimmer" />
                      <div className="w-4/5 h-3 rounded skeleton-box-subtle animate-shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enlace inferior de consulta */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="w-32 h-4 rounded skeleton-box animate-shimmer" />
              <div className="w-4 h-4 rounded-full skeleton-box-subtle animate-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
