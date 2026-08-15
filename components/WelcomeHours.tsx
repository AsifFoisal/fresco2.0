'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurantData';

interface WelcomeHoursProps {
  onOpenAbout: () => void;
  onOpenReservation: () => void;
}

export function WelcomeHours({ onOpenAbout, onOpenReservation }: WelcomeHoursProps) {
  return (
    <section id="welcome-section" className="py-20 lg:py-24 bg-white text-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Column 1: Welcome Story (5 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 md:space-y-5 pr-0 lg:pr-4">
            {/* Script tag */}
            <p className="font-script text-2xl sm:text-3xl text-[#1a1a1a] tracking-normal font-normal">
              Country&apos;s Most Loved!
            </p>

            {/* Main Welcome Heading */}
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
              Welcome
            </h2>

            {/* Subheading */}
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1e1e1e] leading-snug">
              We Are Locally Crafted Food &amp; Wine Serving Since {RESTAURANT_INFO.since}.
            </h3>

            {/* Description paragraph */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor.
              Molestias vivamus eligendi ut, cupidatat nisl iaculis etiam! Laboris aenean.
            </p>

            {/* Features pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-neutral-600">
              <span className="inline-flex items-center gap-1 bg-[#fff5eb] text-[#e05c00] px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Wood-Fired Ovens
              </span>
              <span className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5" /> Imported Italian Flour
              </span>
            </div>

            {/* Orange Button */}
            <div className="pt-3">
              <button
                onClick={onOpenAbout}
                id="welcome-more-about-btn"
                className="inline-flex items-center gap-2.5 bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.98] text-white text-sm sm:text-base font-semibold px-7 py-3 rounded-full shadow-sm transition-all duration-200 group"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Column 2: Pizza Image (4 cols) */}
          <div className="lg:col-span-4 relative h-[360px] sm:h-[420px] lg:h-[450px] rounded-xl overflow-hidden shadow-md group">
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
              alt="Freshly baked artisan cheese pizza slice"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay highlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Column 3: Hours & Dining Card with Image Background (4 cols) */}
          <div className="lg:col-span-4 relative h-[360px] sm:h-[420px] lg:h-[450px] rounded-xl overflow-hidden shadow-md group">
            <Image
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop"
              alt="Guests toasting wine at dinner"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              referrerPolicy="no-referrer"
            />

            {/* Dark Tint Overlay with Centered Hours Typography */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-6 text-white">
              {/* Script Title: Hours */}
              <h3 className="font-script text-4xl sm:text-5xl text-white mb-4 drop-shadow-sm font-normal">
                Hours
              </h3>

              {/* Hours Schedule */}
              <div className="space-y-2 text-xs sm:text-sm font-medium text-neutral-100 max-w-xs">
                <p className="border-b border-white/20 pb-2">
                  Monday - Saturday | 9AM - 1PM
                </p>
                <p className="pt-1">
                  Saturday - Sunday | 9AM - 4AM
                </p>
              </div>

              {/* Quick Reserve CTA inside Hours Card */}
              <button
                onClick={onOpenReservation}
                id="hours-card-reserve-btn"
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-[#ff6900] bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/30 transition-all duration-200"
              >
                <Clock className="w-3.5 h-3.5 text-[#ff6900]" />
                <span>Reserve During These Times</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
