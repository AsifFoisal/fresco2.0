'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { OliveBranchFlourish } from './Flourishes';
import { ArrowRight, Plus, Check, Sparkles } from 'lucide-react';
import { CHECKERBOARD_ITEMS, FULL_MENU_ITEMS, MenuItem } from '@/data/restaurantData';

interface OurMenuProps {
  onOpenFullMenu: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export function OurMenu({ onOpenFullMenu, onAddToCart }: OurMenuProps) {
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const handleQuickAdd = (title: string, priceStr: string) => {
    const numericPrice = parseFloat(priceStr.replace('$', '')) || 20;
    const found = FULL_MENU_ITEMS.find((m) => m.name.toLowerCase().includes(title.toLowerCase()));
    
    const menuItemToAdd: MenuItem = found || {
      id: `quick-${title.toLowerCase().replace(/\s+/g, '-')}`,
      name: title,
      category: 'mains',
      description: 'Handcrafted with fresh Italian ingredients and authentic heritage recipe.',
      price: numericPrice,
      priceFormatted: priceStr,
    };

    onAddToCart(menuItemToAdd);
    setAddedItemId(title);
    setTimeout(() => setAddedItemId(null), 1800);
  };

  return (
    <section id="our-menu" className="relative bg-white text-[#2a2a2a] pt-16 pb-20 sm:pb-28">
      {/* Header Info */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12 sm:mb-16">
        {/* Botanical Olive Flourish */}
        <div className="flex justify-center mb-3">
          <OliveBranchFlourish className="w-16 h-10 text-[#333333]" />
        </div>

        {/* Script Section Title */}
        <p className="font-script text-3xl sm:text-4xl text-[#1a1a1a] mb-2 font-normal">
          Our Menu
        </p>

        {/* Heading: Quality Ingredients, Tasty Meals */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-4">
          Quality Ingredients, Tasty Meals
        </h2>

        {/* Description */}
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor.
          Molestias vivamus eligendi ut, cupidatat nisl iaculis etiam! Laboris aenean.
        </p>
      </div>

      {/* Dark Ambient Restaurant Background Section wrapping the 3x3 Grid */}
      <div className="relative w-full py-12 sm:py-16 overflow-hidden">
        {/* Background Restaurant Ambient Dark Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
            alt="Warm ambient Italian restaurant interior"
            fill
            className="object-cover brightness-[0.25] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* 3x3 Checkerboard Grid Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden border border-[#e8dfd3]/20">
            {CHECKERBOARD_ITEMS.map((item, index) => {
              if (item.type === 'content') {
                const isAdded = addedItemId === item.title;

                return (
                  <div
                    key={`content-${index}`}
                    className="bg-[#faf5ed] flex flex-col justify-center items-center text-center p-6 sm:p-8 lg:p-10 min-h-[260px] md:min-h-[290px] border border-[#f0e7db] relative group transition-colors duration-200 hover:bg-[#fbf7f1]"
                  >
                    {/* Category subtle label */}
                    {item.category && (
                      <span className="text-[11px] uppercase tracking-widest text-[#998877] font-semibold mb-2">
                        {item.category}
                      </span>
                    )}

                    {/* Dish Title */}
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#e05c00] transition-colors">
                      {item.title}
                    </h3>

                    {/* Dish Description */}
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-[240px] mb-4">
                      {item.description}
                    </p>

                    {/* Price Divider & Price */}
                    <div className="w-12 h-[1px] bg-neutral-300 mx-auto mb-2" />
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#1a1a1a]">
                      {item.price}
                    </span>

                    {/* Quick Add overlay button */}
                    <button
                      onClick={() => handleQuickAdd(item.title || '', item.price || '$20')}
                      id={`menu-quick-add-${index}`}
                      className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-semibold inline-flex items-center gap-1 text-[#ff6900] hover:text-[#c44900] bg-white px-3 py-1 rounded-full shadow-xs border border-[#ff6900]/20"
                      title="Add to table order"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Added to Order</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Order This</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div
                    key={`image-${index}`}
                    className="relative min-h-[260px] md:min-h-[290px] w-full overflow-hidden group bg-neutral-900"
                  >
                    <Image
                      src={item.image || ''}
                      alt={item.alt || 'Italian dish'}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-medium drop-shadow-md">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* CTA Button Under Menu Grid */}
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={onOpenFullMenu}
              id="menu-discover-entire-btn"
              className="inline-flex items-center gap-2.5 bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.98] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 group"
            >
              <span>Discover Entire Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
