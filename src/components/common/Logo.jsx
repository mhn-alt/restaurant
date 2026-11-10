import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Aurelia Luxury Fine Dining Brand Logo
 * @param {'horizontal' | 'vertical' | 'mark'} variant - Layout style
 * @param {'sm' | 'md' | 'lg'} size - Scale
 * @param {boolean} animated - Adds hover glow effect
 * @param {string} className - Additional CSS classes
 */
export default function Logo({
  variant = 'horizontal',
  size = 'md',
  animated = true,
  className = '',
}) {
  // Dimension presets for the emblem mark
  const markDimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 42, height: 42 },
    lg: { width: 56, height: 56 },
  }[size] || { width: 42, height: 42 };

  // Typography scales
  const textSizes = {
    sm: { title: 'text-lg', sub: 'text-[8px] tracking-[0.3em]' },
    md: { title: 'text-2xl', sub: 'text-[9px] tracking-[0.35em]' },
    lg: { title: 'text-3xl', sub: 'text-[11px] tracking-[0.4em]' },
  }[size] || { title: 'text-2xl', sub: 'text-[9px] tracking-[0.35em]' };

  const Emblem = (
    <svg
      width={markDimensions.width}
      height={markDimensions.height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-500 ${animated ? 'group-hover:scale-105 group-hover:rotate-3' : ''}`}
    >
      <defs>
        {/* Luxury Champagne Gold Linear Gradient */}
        <linearGradient id="aureliaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        {/* Soft Radial Backlight Glow */}
        <radialGradient id="aureliaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient background glow */}
      <circle cx="50" cy="50" r="46" fill="url(#aureliaGlow)" />

      {/* Outer Fine Guilloche Ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="url(#aureliaGold)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        opacity="0.8"
      />

      {/* Inner Solid Crest Ring */}
      <circle
        cx="50"
        cy="50"
        r="39"
        stroke="url(#aureliaGold)"
        strokeWidth="1.5"
      />

      {/* Star of Excellence / Culinary Flame Top Starburst */}
      <path
        d="M50 16L51.8 23.2L59 25L51.8 26.8L50 34L48.2 26.8L41 25L48.2 23.2L50 16Z"
        fill="url(#aureliaGold)"
      />

      {/* Stylized Architectural Monogram 'A' */}
      <path
        d="M32 72L48.5 28.5C49.1 27 50.9 27 51.5 28.5L68 72H61.8L57.5 59.5H42.5L38.2 72H32ZM44.2 54.5H55.8L50 37.8L44.2 54.5Z"
        fill="url(#aureliaGold)"
      />

      {/* Crossbar Diamond Accent */}
      <polygon
        points="50,52 53,54.5 50,57 47,54.5"
        fill="#0c0d10"
      />
      <polygon
        points="50,53 52,54.5 50,56 48,54.5"
        fill="url(#aureliaGold)"
      />

      {/* Foundation Laurel / Flame arcs */}
      <path
        d="M26 62C25 50 30 38 36 34"
        stroke="url(#aureliaGold)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M74 62C75 50 70 38 64 34"
        stroke="url(#aureliaGold)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Bottom Year Accent Dots */}
      <circle cx="50" cy="81" r="1.5" fill="url(#aureliaGold)" />
      <circle cx="43" cy="80" r="1" fill="url(#aureliaGold)" opacity="0.7" />
      <circle cx="57" cy="80" r="1" fill="url(#aureliaGold)" opacity="0.7" />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center group ${className}`}>
        {Emblem}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center group ${className}`}>
        {Emblem}
        <div className="mt-3">
          <span className={`block font-serif tracking-[0.3em] font-semibold text-white group-hover:text-amber-200 transition-colors ${textSizes.title}`}>
            AURELIA
          </span>
          <span className={`block uppercase text-amber-400/90 font-medium ${textSizes.sub} mt-0.5`}>
            Haute Gastronomie • Est. 2008
          </span>
        </div>
      </div>
    );
  }

  // Default: 'horizontal'
  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {Emblem}
      <div className="flex flex-col">
        <span className={`font-serif tracking-[0.28em] font-semibold text-white group-hover:text-amber-200 transition-colors leading-none ${textSizes.title}`}>
          AURELIA
        </span>
        <span className={`uppercase text-amber-400/90 font-medium ${textSizes.sub} mt-1.5 leading-none`}>
          Fine Dining & Lounge
        </span>
      </div>
    </div>
  );
}
