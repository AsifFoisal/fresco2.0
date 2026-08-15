'use client';

import React from 'react';
import Image from 'next/image';
import { X, Heart, Award, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurantData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export function AboutModal({ isOpen, onClose, onOpenReservation }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 max-h-[90vh] flex flex-col">
        
        {/* Header with Image */}
        <div className="relative h-48 sm:h-56 bg-[#292929] text-white">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
            alt="Fresco Italian Kitchen"
            fill
            className="object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white p-1.5 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
            <span className="font-script text-2xl text-[#ff6900]">
              Our Heritage &amp; Passion
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
              About Fresco Ristorante
            </h3>
            <p className="text-xs text-neutral-300">
              Serving handcrafted Italian food and fine wines since {RESTAURANT_INFO.since}.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5 text-neutral-700 text-sm leading-relaxed">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#1a1a1a] mb-2">
              From Nonna&apos;s Hearth in Florence to Your Table
            </h4>
            <p>
              Founded in 1978 by Chef Lorenzo and his family, Fresco was born out of a profound love for traditional Italian conviviality. We believe that true Italian dining is an art form—rooted in rustic simplicity, the highest grade extra virgin olive oils, hand-stretched mozzarella, and slow-fermented pizza doughs baked in custom stone hearths.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#faf6f0] p-4 rounded-xl border border-[#ebd9c5] text-center">
              <Award className="w-6 h-6 text-[#ff6900] mx-auto mb-2" />
              <h5 className="font-bold text-xs text-neutral-900 mb-1">Authentic DOP Sourcing</h5>
              <p className="text-[11px] text-neutral-600">
                Directly imported Parmigiano-Reggiano, San Marzano tomatoes, and Prosciutto di Parma.
              </p>
            </div>

            <div className="bg-[#faf6f0] p-4 rounded-xl border border-[#ebd9c5] text-center">
              <Sparkles className="w-6 h-6 text-[#ff6900] mx-auto mb-2" />
              <h5 className="font-bold text-xs text-neutral-900 mb-1">Handmade Daily</h5>
              <p className="text-[11px] text-neutral-600">
                Fresh bronze-cut pastas, artisanal focaccia, and secret family sauces simmered for 8+ hours.
              </p>
            </div>

            <div className="bg-[#faf6f0] p-4 rounded-xl border border-[#ebd9c5] text-center">
              <Heart className="w-6 h-6 text-[#ff6900] mx-auto mb-2" />
              <h5 className="font-bold text-xs text-neutral-900 mb-1">Curated Wine Cellar</h5>
              <p className="text-[11px] text-neutral-600">
                Over 250 labels spanning Tuscany, Piedmont, Sicily, and Veneto.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <MapPin className="w-4 h-4 text-[#ff6900] shrink-0" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="bg-[#ff6900] hover:bg-[#e05c00] text-white font-semibold text-xs px-6 py-2.5 rounded-full shadow-sm"
            >
              Book a Dining Experience
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
