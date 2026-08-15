'use client';

import React from 'react';
import { VintageFork, VintageKnife, HeaderScrollFlourish } from './Flourishes';
import { ChevronDown, Utensils, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export function Hero({ onOpenReservation, onExploreMenu }: HeroProps) {
  const scrollToMenu = () => {
    const element = document.getElementById('our-menu');
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full bg-[#292929] text-white overflow-hidden min-h-[460px] md:min-h-[520px] lg:min-h-[580px] flex items-center justify-center py-20 px-4 sm:px-6"
    >
      {/* Background subtle grain and radial ambient warmth */}
      <div 
        className="absolute inset-0 bg-radial from-[#383838]/60 via-[#2a2a2a]/95 to-[#202020] pointer-events-none" 
      />

      <div className="relative max-w-4xl mx-auto w-full flex items-center justify-between">
        {/* Left Hand-Drawn Fork */}
        <div className="hidden sm:flex flex-col items-center justify-center pr-2 md:pr-8 animate-in fade-in duration-700">
          <VintageFork className="w-8 h-48 md:w-11 md:h-64 lg:h-72 text-white/80 transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center text-center px-2 sm:px-6 z-10">
          {/* Top Decorative Scroll Flourish */}
          <div className="mb-2 md:mb-3">
            <HeaderScrollFlourish className="w-28 h-6 sm:w-36 sm:h-8 text-white/70" />
          </div>

          {/* Main Title: Fresco. */}
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-sm mb-3 md:mb-4">
            Fresco<span className="text-[#ff6900]">.</span>
          </h1>

          {/* Subtitle: Italian Specialities */}
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#f3ece2] font-normal tracking-wide mb-6 md:mb-8">
            Italian Specialities
          </p>

          {/* Slogan with Horizontal Line Dividers */}
          <div className="w-full max-w-md flex items-center justify-center gap-3 sm:gap-4 my-2">
            <div className="flex-1 h-[1px] bg-white/40" />
            <span className="font-serif text-xs sm:text-sm md:text-base tracking-widest text-[#f5efe6] font-light uppercase whitespace-nowrap px-1">
              Good Food | Good wine
            </span>
            <div className="flex-1 h-[1px] bg-white/40" />
          </div>

          {/* Action Quick Links / Pill Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToMenu}
              id="hero-view-menu-btn"
              className="bg-transparent hover:bg-white/10 active:scale-[0.98] text-white border border-white/40 hover:border-white/80 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2"
            >
              <Utensils className="w-4 h-4 text-[#ff6900]" />
              <span>Explore Menu</span>
            </button>
            <button
              onClick={onOpenReservation}
              id="hero-reserve-btn"
              className="bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.98] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-200 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>
          </div>
        </div>

        {/* Right Hand-Drawn Knife */}
        <div className="hidden sm:flex flex-col items-center justify-center pl-2 md:pl-8 animate-in fade-in duration-700">
          <VintageKnife className="w-8 h-48 md:w-11 md:h-64 lg:h-72 text-white/80 transition-transform duration-300 hover:scale-105" />
        </div>
      </div>

      {/* Down Arrow / Scroll indicator */}
      <button
        onClick={scrollToMenu}
        aria-label="Scroll down to welcome section"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors duration-200 p-2 animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
