'use client';

import React from 'react';
import Image from 'next/image';
import { X, Wine, Percent, Clock, Check, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurantData';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export function OfferModal({ isOpen, onClose, onOpenReservation }: OfferModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#292929] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="font-script text-2xl text-[#ff6900]">
            Wednesdays Means
          </span>
          <h3 className="font-playfair text-3xl font-bold">
            Happy Hours &amp; Wine Special
          </h3>
          <p className="text-xs text-neutral-300 mt-1">
            Exclusive mid-week indulgence crafted for wine and food enthusiasts.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5 text-sm">
          {/* Main banner highlight */}
          <div className="bg-[#faf5ed] border border-[#ecd9c4] rounded-xl p-4 sm:p-5 flex items-start gap-4">
            <div className="w-12 h-12 bg-[#ff6900] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold text-[#1a1a1a]">
                50% Off Wine Bottles &amp; $9 Express Lunches
              </h4>
              <p className="text-xs text-neutral-600 mt-1">
                Every Wednesday between 11:30 AM – 7:00 PM. Includes all reserves under $120.
              </p>
            </div>
          </div>

          {/* List of included offerings */}
          <div>
            <h5 className="font-serif font-bold text-sm text-[#1a1a1a] mb-3">
              Included in Wednesday Happy Hour:
            </h5>
            <div className="space-y-2.5">
              {RESTAURANT_INFO.happyHour.discounts.map((discount, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{discount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timing note */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 bg-amber-50 p-3 rounded-lg border border-amber-200/60">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Table reservations are recommended as Happy Hour tables fill up fast!</span>
          </div>

          {/* Action */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="w-full bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.99] text-white font-semibold py-3.5 rounded-full shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Wednesday Happy Hour Table</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
