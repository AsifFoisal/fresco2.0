import React from 'react';

export function VintageFork({ className = "w-10 h-64 text-white/70" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* 4 Tines */}
      <path d="M12 12 L12 75 C12 92 16 104 20 108" />
      <path d="M17 12 L17 78 C17 95 19 104 20 108" />
      <path d="M23 12 L23 78 C23 95 21 104 20 108" />
      <path d="M28 12 L28 75 C28 92 24 104 20 108" />
      
      {/* Fork Neck & Collar */}
      <path d="M20 108 L20 135" />
      <ellipse cx="20" cy="138" rx="3.5" ry="2" fill="currentColor" fillOpacity="0.15" />
      
      {/* Fork Handle Stem with elegant taper and decorative bulb end */}
      <path d="M19 140 C18.5 170 17 210 16 230 C15 245 17 252 20 252 C23 252 25 245 24 230 C23 210 21.5 170 21 140 Z" />
      <circle cx="20" cy="244" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function VintageKnife({ className = "w-10 h-64 text-white/70" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Knife Blade */}
      <path d="M20 12 C23 25 26 55 26 95 C26 120 22 135 20 138 L20 12 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M20 12 L20 138" />
      
      {/* Knife Bolster Collar */}
      <rect x="18" y="138" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.25" />
      
      {/* Knife Handle */}
      <path d="M19 142 C18 165 17 205 16 228 C15.5 244 17 252 20 252 C23 252 24.5 244 24 228 C23 205 22 165 21 142 Z" />
      <circle cx="20" cy="165" r="1" fill="currentColor" />
      <circle cx="20" cy="195" r="1" fill="currentColor" />
      <circle cx="20" cy="225" r="1" fill="currentColor" />
    </svg>
  );
}

export function HeaderScrollFlourish({ className = "w-36 h-8 text-white/60" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Center diamond & loop */}
      <circle cx="80" cy="18" r="2.5" fill="currentColor" />
      <path d="M80 12 C75 8 68 8 64 13 C60 18 64 24 72 24 C80 24 88 12 96 12 C104 12 108 18 104 23 C100 28 93 28 88 24" />
      
      {/* Left wing scroll */}
      <path d="M64 13 C55 13 46 9 36 14 C26 19 16 17 8 13 C4 11 2 7 6 5 C10 3 14 7 12 11" />
      <circle cx="6" cy="7" r="1.5" fill="currentColor" />

      {/* Right wing scroll */}
      <path d="M96 12 C105 12 114 16 124 11 C134 6 144 8 152 12 C156 14 158 18 154 20 C150 22 146 18 148 14" />
      <circle cx="154" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function OliveBranchFlourish({ className = "w-16 h-10 text-[#2a2a2a]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Left branch & leaves */}
      <path d="M40 38 C32 30 22 22 10 20" />
      <path d="M12 19 C14 14 20 15 21 19 C21 23 15 23 12 19 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M23 23 C26 18 31 19 32 24 C32 28 26 28 23 23 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="16" cy="27" r="2.2" fill="currentColor" />
      <circle cx="28" cy="32" r="2.2" fill="currentColor" />

      {/* Right branch & leaves */}
      <path d="M40 38 C48 30 58 22 70 20" />
      <path d="M68 19 C66 14 60 15 59 19 C59 23 65 23 68 19 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M57 23 C54 18 49 19 48 24 C48 28 54 28 57 23 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="64" cy="27" r="2.2" fill="currentColor" />
      <circle cx="52" cy="32" r="2.2" fill="currentColor" />

      {/* Center stem bud */}
      <circle cx="40" cy="38" r="2" fill="currentColor" />
    </svg>
  );
}

export function FrescoLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 select-none group cursor-pointer ${className}`}>
      <span className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a] transition-colors group-hover:text-[#ff6900]">
        fresco<span className="text-[#ff6900]">.</span>
      </span>
      {/* Citrus / Tomato slice emblem */}
      <div className="relative w-6 h-6 rounded-full bg-[#ff6900] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:rotate-45">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white stroke-white fill-none stroke-[1.8]">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 L12 21" strokeOpacity="0.8" />
          <path d="M3 12 L21 12" strokeOpacity="0.8" />
          <path d="M5.6 5.6 L18.4 18.4" strokeOpacity="0.8" />
          <path d="M18.4 5.6 L5.6 18.4" strokeOpacity="0.8" />
          <circle cx="12" cy="12" r="3" fill="#ff6900" stroke="white" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}
