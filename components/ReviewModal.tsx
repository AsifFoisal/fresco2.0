'use client';

import React, { useState } from 'react';
import { X, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { ReviewItem } from '@/data/restaurantData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: ReviewItem) => void;
}

export function ReviewModal({ isOpen, onClose, onAddReview }: ReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(5);
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [source, setSource] = useState<'Google' | 'TripAdvisor' | 'Yelp'>('Google');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !quote) return;

    const newRev: ReviewItem = {
      id: `custom-rev-${Date.now()}`,
      author: name,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop',
      quote,
      rating,
      date: 'Just now',
      source,
    };

    onAddReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setQuote('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#292929] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="font-script text-2xl text-[#ff6900]">
            Guest Feedback
          </span>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
            Share Your Experience
          </h3>
          <p className="text-xs text-neutral-300 mt-1">
            We value your honest review and love celebrating memories with our guests.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-playfair text-2xl font-bold text-neutral-900">Grazie Mille!</h4>
              <p className="text-sm text-neutral-600">Your review has been shared successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Rating selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Rating
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(rating)}
                      onClick={() => setRating(star)}
                      className="p-1 text-2xl focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= (hoverRating || rating)
                            ? 'text-[#ff6900] fill-[#ff6900]'
                            : 'text-neutral-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-neutral-500 font-medium ml-2">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alessandra Moretti"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                />
              </div>

              {/* Review Quote */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Your Review
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about the dishes, wine, atmosphere, or service..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                />
              </div>

              {/* Platform */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1">
                  Post review to platform
                </label>
                <select
                  value={source}
                  onChange={(e) => setSource(e.target.value as any)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:bg-white"
                >
                  <option value="Google">Google Reviews (Verified Diner)</option>
                  <option value="TripAdvisor">TripAdvisor Traveler Review</option>
                  <option value="Yelp">Yelp Elite Review</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#ff6900] hover:bg-[#e05c00] text-white font-semibold py-3 rounded-full text-sm shadow-sm transition-all"
                >
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
