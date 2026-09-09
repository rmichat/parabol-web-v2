import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-xl transition-all duration-150 active:scale-90 border cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        isLight
          ? 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border-slate-300 text-slate-800 shadow-sm'
          : 'bg-slate-900/90 hover:bg-slate-800 active:bg-slate-800/90 border-slate-700/80 text-amber-300 shadow-inner'
      } ${className}`}
      aria-label={isLight ? 'Activar modo oscuro' : 'Activar modo claro de alto contraste'}
      title={isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro (alto contraste)'}
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-slate-700 transition-transform hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      )}
      {showLabel && (
        <span className="text-xs font-semibold">
          {isLight ? 'Modo Oscuro' : 'Modo Claro'}
        </span>
      )}
    </button>
  );
};
