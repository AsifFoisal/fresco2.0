'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Wine, Sparkles, Tag } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurantData';

interface HappyHoursProps {
  onOpenOffer: () => void;
  onOpenReservation: () => void;
}

export function HappyHours({ onOpenOffer, onOpenReservation }: HappyHoursProps) {
  const { happyHour } = RESTAURANT_INFO;

  return (
    <section id="happy-hours" className="py-20 lg:py-24 bg-white text-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with "Good Food | Good Wine" Overlay Badge (6 cols) */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] lg:h-[490px] rounded-xl overflow-hidden shadow-md group">
            <Image
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop"
              alt="People enjoying wine during Happy Hour at Fresco"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
            />

            {/* Dark gradient bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="text-center sm:text-left">
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-white font-medium tracking-wide drop-shadow-sm">
                  Good Food | Good Wine
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-medium">
                    <Wine className="w-3.5 h-3.5" /> 50% Off Select Italian Reserves
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Happy Hours Info (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 lg:pl-4">
            {/* Script Tag: Wednesdays Means */}
            <p className="font-script text-2xl sm:text-3xl text-[#1a1a1a] font-normal">
              {happyHour.day}
            </p>

            {/* Main Title: Happy Hours! */}
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
              {happyHour.title}
            </h2>

            {/* Subhead: Half Price Bottles of Wine... */}
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1e1e1e] leading-snug">
              {happyHour.highlight}
            </h3>

            {/* Description */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {happyHour.description}
            </p>

            {/* Specials Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2 bg-[#faf6f0] p-2.5 rounded-lg border border-[#f0e7db]">
                <Tag className="w-4 h-4 text-[#ff6900] shrink-0" />
                <span className="font-medium">$9 Express Lunch Dishes</span>
              </div>
              <div className="flex items-center gap-2 bg-[#faf6f0] p-2.5 rounded-lg border border-[#f0e7db]">
                <Wine className="w-4 h-4 text-[#ff6900] shrink-0" />
                <span className="font-medium">Half-Price Wine Bottles</span>
              </div>
            </div>

            {/* CTA Button: Discover Offer */}
            <div className="pt-3">
              <button
                onClick={onOpenOffer}
                id="happy-hour-discover-offer-btn"
                className="inline-flex items-center gap-2.5 bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.98] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-sm transition-all duration-200 group"
              >
                <span>Discover Offer</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
