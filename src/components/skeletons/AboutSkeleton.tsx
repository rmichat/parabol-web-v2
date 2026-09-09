import React from 'react';

export const AboutSkeleton: React.FC = () => {
  return (
    <div id="about-skeleton" className="w-full space-y-12 animate-pulse transition-opacity duration-300">
      {/* Encabezado esqueleto */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 flex flex-col items-center">
        {/* Badge píldora */}
        <div className="w-40 h-7 rounded-full skeleton-box-subtle animate-shimmer" />
        {/* Título */}
        <div className="w-4/5 max-w-md h-9 sm:h-10 rounded-xl skeleton-box animate-shimmer" />
        {/* Subtítulo */}
        <div className="w-full max-w-xl h-4 rounded skeleton-box-subtle animate-shimmer" />
      </div>

      {/* 3 Tarjetas de pilares institucionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="skeleton-card border p-6 sm:p-8 rounded-2xl space-y-4 shadow-lg"
          >
            {/* Ícono de pilar */}
            <div className="w-12 h-12 rounded-xl skeleton-box animate-shimmer" />
            {/* Título de pilar */}
            <div className="w-3/5 h-6 rounded-lg skeleton-box animate-shimmer" />
            {/* Párrafo descriptivo */}
            <div className="space-y-2 pt-1">
              <div className="w-full h-3.5 rounded skeleton-box-subtle animate-shimmer" />
              <div className="w-5/6 h-3.5 rounded skeleton-box-subtle animate-shimmer" />
              <div className="w-4/6 h-3.5 rounded skeleton-box-subtle animate-shimmer" />
            </div>
          </div>
        ))}
      </div>

      {/* Cita institucional */}
      <div className="skeleton-card border-l-4 border-slate-700/60 rounded-r-2xl p-6 sm:p-10 shadow-xl space-y-3">
        <div className="w-full h-4 rounded skeleton-box-subtle animate-shimmer" />
        <div className="w-11/12 h-4 rounded skeleton-box-subtle animate-shimmer" />
        <div className="w-4/5 h-4 rounded skeleton-box-subtle animate-shimmer" />
        <div className="pt-3 flex justify-end">
          <div className="w-36 h-4 rounded skeleton-box animate-shimmer" />
        </div>
      </div>
    </div>
  );
};
