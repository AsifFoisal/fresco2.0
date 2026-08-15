'use client';

import React from 'react';
import Image from 'next/image';
import { OliveBranchFlourish } from './Flourishes';
import { Star, MessageSquarePlus, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, ReviewItem } from '@/data/restaurantData';

interface HappyCustomersProps {
  onOpenReviewModal: () => void;
  customReviews?: ReviewItem[];
}

export function HappyCustomers({ onOpenReviewModal, customReviews = [] }: HappyCustomersProps) {
  const allReviews = [...TESTIMONIALS, ...customReviews];
  const firstReview = allReviews[0];
  const secondReview = allReviews[1];
  const thirdReview = allReviews[2];

  return (
    <section id="reviews-section" className="py-20 lg:py-24 bg-white text-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Huge Quotes & Customer 1 (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Giant Graphic Quotation Marks & Branch */}
            <div className="relative">
              <div className="flex items-center text-[#ffeedd] select-none font-serif text-8xl sm:text-9xl leading-none -mb-8 -ml-2">
                “ ”
              </div>
              <div className="mt-2">
                <OliveBranchFlourish className="w-14 h-8 text-[#2a2a2a]" />
              </div>
            </div>

            {/* Section Title */}
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight">
              Happy Customers!
            </h2>

            {/* Testimonial 1 */}
            {firstReview && (
              <div className="pt-4 flex flex-col space-y-4 max-w-lg">
                {/* Circular Avatar */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-sm border-2 border-white">
                  <Image
                    src={firstReview.avatar}
                    alt={firstReview.author}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="80px"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#ff6900]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ff6900]" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="font-serif text-base sm:text-lg font-bold text-[#1a1a1a] leading-relaxed">
                  &ldquo;{firstReview.quote}&rdquo;
                </blockquote>

                {/* Author Name */}
                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                  - {firstReview.author}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Customer 2, Customer 3 & Social Reviews (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-10 lg:pt-8">
            
            {/* Testimonial 2 */}
            {secondReview && (
              <div className="flex flex-col space-y-3 max-w-lg border-b border-neutral-100 pb-8">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-sm">
                  <Image
                    src={secondReview.avatar}
                    alt={secondReview.author}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="64px"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-1 text-[#ff6900]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ff6900]" />
                  ))}
                </div>

                <blockquote className="font-serif text-sm sm:text-base font-bold text-[#1a1a1a] leading-relaxed">
                  &ldquo;{secondReview.quote}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                  - {secondReview.author}
                </p>
              </div>
            )}

            {/* Testimonial 3 */}
            {thirdReview && (
              <div className="flex flex-col space-y-3 max-w-lg">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-sm">
                  <Image
                    src={thirdReview.avatar}
                    alt={thirdReview.author}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="64px"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-1 text-[#ff6900]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ff6900]" />
                  ))}
                </div>

                <blockquote className="font-serif text-sm sm:text-base font-bold text-[#1a1a1a] leading-relaxed">
                  &ldquo;{thirdReview.quote}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                  - {thirdReview.author}
                </p>
              </div>
            )}

            {/* Check Out Our Reviews & Orange Icons */}
            <div className="pt-2">
              <p className="font-serif text-base sm:text-lg font-bold text-[#1a1a1a] mb-4">
                Check Out Our Reviews
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Yelp */}
                <button
                  onClick={onOpenReviewModal}
                  id="review-yelp-btn"
                  title="Yelp 4.9 Stars"
                  className="w-10 h-10 rounded-full bg-[#ff6900] hover:bg-[#e05c00] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                >
                  <span className="font-bold text-xs tracking-tighter">Y</span>
                </button>

                {/* Facebook */}
                <button
                  onClick={onOpenReviewModal}
                  id="review-fb-btn"
                  title="Facebook 5.0 Rating"
                  className="w-10 h-10 rounded-full bg-[#ff6900] hover:bg-[#e05c00] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                >
                  <span className="font-bold text-xs">f</span>
                </button>

                {/* TripAdvisor */}
                <button
                  onClick={onOpenReviewModal}
                  id="review-trip-btn"
                  title="TripAdvisor Certificate of Excellence"
                  className="w-10 h-10 rounded-full bg-[#ff6900] hover:bg-[#e05c00] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                >
                  <span className="font-bold text-xs">🦉</span>
                </button>

                {/* Google */}
                <button
                  onClick={onOpenReviewModal}
                  id="review-google-btn"
                  title="Google Reviews 4.9 (1,240+ reviews)"
                  className="w-10 h-10 rounded-full bg-[#ff6900] hover:bg-[#e05c00] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                >
                  <span className="font-bold text-xs">G+</span>
                </button>

                {/* Leave a review button */}
                <button
                  onClick={onOpenReviewModal}
                  id="leave-review-action-btn"
                  className="ml-2 text-xs font-semibold text-[#ff6900] hover:text-[#c44900] flex items-center gap-1.5 py-2 px-3 rounded-full hover:bg-[#fff5eb] transition-colors"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  <span>Leave a Review</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
