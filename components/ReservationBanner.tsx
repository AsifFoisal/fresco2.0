'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Calendar, MapPin, Clock, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurantData';

interface ReservationBannerProps {
  onOpenReservation: () => void;
}

export function ReservationBanner({ onOpenReservation }: ReservationBannerProps) {
  return (
    <footer id="reservation-footer" className="relative w-full text-white overflow-hidden">
      {/* Background Image: Dark Rustic Pizza & Wood Texture */}
      <div className="relative min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop"
          alt="Rustic wood-fired pizza with fresh herbs background"
          fill
          className="object-cover brightness-[0.22] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Warm Vignette Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Script / Serif Call to Action Title */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md">
            Call for All Your Reservations
          </h2>

          {/* Large Bold Phone Number */}
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white hover:text-[#ff6900] transition-colors duration-200 tracking-wider inline-flex items-center gap-3 drop-shadow-lg"
            id="footer-call-phone-link"
          >
            <Phone className="w-8 h-8 md:w-10 md:h-10 text-[#ff6900] animate-pulse shrink-0" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>

          {/* Online Booking Pill Button */}
          <div className="pt-2">
            <button
              onClick={onOpenReservation}
              id="footer-book-table-btn"
              className="inline-flex items-center gap-2 bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.98] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Or Book Online Instantly</span>
            </button>
          </div>

          {/* Quick Info Grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300 w-full max-w-xl border-t border-white/10 mt-4">
            <div className="flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff6900]" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ff6900]" />
              <span>Daily: 9:00 AM - 4:00 AM</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#ff6900]" />
              <span>{RESTAURANT_INFO.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Very Bottom Copyright Bar */}
      <div className="bg-[#141414] py-4 text-center text-xs text-neutral-400 border-t border-white/5 px-4">
        <p>
          Copyright © 2026 Italian Restaurant | Powered by Italian Restaurant
        </p>
      </div>
    </footer>
  );
}
