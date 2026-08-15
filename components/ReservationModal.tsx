'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, Phone, Mail, User } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: '2',
    seating: 'Main Dining Hall',
    specialOccasion: 'None',
    notes: '',
  });
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'FRC-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#292929] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            id="close-reservation-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="font-script text-xl sm:text-2xl text-[#ff6900]">
            Table Experience
          </span>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold mt-0.5">
            Reserve at Fresco.
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            Enjoy handcrafted Italian specialties with genuine Italian hospitality.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">1:00 PM (Lunch)</option>
                    <option value="17:30">5:30 PM (Early Dinner)</option>
                    <option value="18:30">6:30 PM (Dinner)</option>
                    <option value="19:00">7:00 PM (Prime Dinner)</option>
                    <option value="19:30">7:30 PM (Prime Dinner)</option>
                    <option value="20:30">8:30 PM (Dinner)</option>
                    <option value="21:30">9:30 PM (Late Night)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                  >
                    <option value="1">1 Guest (Solo Dining)</option>
                    <option value="2">2 Guests (Couple Table)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Standard Table)</option>
                    <option value="6">6 Guests (Group)</option>
                    <option value="8">8 Guests (Large Group)</option>
                    <option value="10">10+ Guests (Private Area)</option>
                  </select>
                </div>

                {/* Seating Area */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Seating Area
                  </label>
                  <select
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                  >
                    <option value="Main Dining Hall">Main Dining Hall (Warm Ambiance)</option>
                    <option value="Tuscan Wine Cellar">Tuscan Wine Cellar (Intimate)</option>
                    <option value="Garden Patio">Romantic Garden Patio</option>
                    <option value="Chef Counter">Chef&apos;s Counter View</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-neutral-100">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    Primary Contact Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marco Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="marco@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                    Special Requests or Dietary Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g. Anniversary celebration, vegetarian menu preference, quiet table..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="confirm-reservation-submit-btn"
                  className="w-full bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.99] text-white font-semibold py-3.5 rounded-full shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Confirm Table Reservation</span>
                </button>
                <p className="text-center text-xs text-neutral-500 mt-2">
                  No credit card required. Instant confirmation guaranteed.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full">
                  Reservation Confirmed
                </span>
                <h4 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1a1a1a] mt-2">
                  Ci vediamo presto, {formData.name}!
                </h4>
                <p className="text-sm text-neutral-600 mt-1 max-w-md mx-auto">
                  We look forward to welcoming you at Fresco. A confirmation receipt has been sent to <span className="font-medium text-neutral-800">{formData.email}</span>.
                </p>
              </div>

              {/* Ticket Card */}
              <div className="bg-[#faf6f0] border border-[#ebd9c5] rounded-xl p-5 text-left max-w-md mx-auto text-sm space-y-2.5 shadow-xs">
                <div className="flex justify-between items-center border-b border-[#ebd9c5] pb-2">
                  <span className="text-xs text-neutral-500 uppercase font-semibold">Booking Ref</span>
                  <span className="font-mono font-bold text-[#ff6900]">{confirmationCode}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-neutral-500">Date &amp; Time:</span>
                    <p className="font-semibold text-neutral-900">{formData.date} at {formData.time}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500">Guests &amp; Area:</span>
                    <p className="font-semibold text-neutral-900">{formData.guests} Guests ({formData.seating})</p>
                  </div>
                </div>
                <div className="pt-1 text-xs text-neutral-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6900]" />
                  <span>{RESTAURANT_INFO.address}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="bg-[#292929] hover:bg-black text-white font-semibold px-8 py-3 rounded-full text-sm shadow-sm transition-all duration-200"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
