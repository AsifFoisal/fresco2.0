'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { X, Search, Filter, Plus, Check, Sparkles, Wine, Leaf } from 'lucide-react';
import { FULL_MENU_ITEMS, MenuItem } from '@/data/restaurantData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export function MenuModal({ isOpen, onClose, onAddToCart }: MenuModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Full Menu' },
    { id: 'antipasti', label: 'Antipasti & Starters' },
    { id: 'pasta', label: 'Handmade Pasta' },
    { id: 'pizza', label: 'Wood-Fired Pizza' },
    { id: 'mains', label: 'Secondi & Carne' },
    { id: 'dessert', label: 'Dolci & Desserts' },
  ];

  const filteredItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter((item) => {
      // Category check
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search check
      if (
        searchQuery &&
        !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      // Dietary check
      if (dietaryFilter === 'vegetarian' && !item.dietary?.includes('vegetarian')) {
        return false;
      }
      if (dietaryFilter === 'gluten-free' && !item.dietary?.includes('gluten-free')) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  if (!isOpen) return null;

  const handleAddItem = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#292929] text-white p-5 sm:p-6 relative flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-script text-xl sm:text-2xl text-[#ff6900]">
              La Cucina Italiana
            </span>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold tracking-tight">
              Fresco. Complete Menu
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Fresh seasonal ingredients made with passion and heritage recipes.
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            id="close-menu-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="p-4 sm:p-5 bg-[#faf6f0] border-b border-[#ebd9c5] flex flex-col md:flex-row gap-3 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#ff6900] text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and dietary filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-48">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-neutral-200 rounded-full pl-8 pr-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              />
            </div>

            <select
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-xs text-neutral-700 font-medium focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
            >
              <option value="all">All Dietary</option>
              <option value="vegetarian">🌱 Vegetarian</option>
              <option value="gluten-free">🌾 Gluten-Free</option>
            </select>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh]">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <p className="text-sm">No dishes match your selected filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setDietaryFilter('all');
                }}
                className="mt-2 text-xs text-[#ff6900] font-semibold underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredItems.map((dish) => {
                const isAdded = addedIds[dish.id];

                return (
                  <div
                    key={dish.id}
                    className="flex flex-col sm:flex-row bg-[#faf5ed]/60 hover:bg-[#faf5ed] border border-[#eee4d6] rounded-xl p-3.5 sm:p-4 transition-all duration-200 gap-4 group"
                  >
                    {/* Dish Image */}
                    {dish.image && (
                      <div className="relative w-full sm:w-28 sm:h-28 h-36 rounded-lg overflow-hidden shrink-0 bg-neutral-200">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 112px"
                          referrerPolicy="no-referrer"
                        />
                        {dish.isChefSpecial && (
                          <span className="absolute top-1 left-1 bg-[#ff6900] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                            Chef
                          </span>
                        )}
                      </div>
                    )}

                    {/* Dish Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-playfair text-base sm:text-lg font-bold text-[#1a1a1a] group-hover:text-[#ff6900] transition-colors">
                            {dish.name}
                          </h4>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#1a1a1a] shrink-0">
                            {dish.priceFormatted}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-600 leading-relaxed mt-1 line-clamp-2">
                          {dish.description}
                        </p>

                        {/* Wine Pairing recommendation if any */}
                        {dish.pairing && (
                          <div className="flex items-center gap-1 mt-2 text-[11px] text-[#995522]">
                            <Wine className="w-3 h-3 text-[#ff6900] shrink-0" />
                            <span>Pair with: {dish.pairing}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#ebd9c5]/60">
                        <div className="flex items-center gap-1.5">
                          {dish.dietary?.map((diet) => (
                            <span
                              key={diet}
                              className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium"
                            >
                              {diet}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => handleAddItem(dish)}
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                            isAdded
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-[#ff6900] hover:bg-[#e05c00] text-white shadow-xs'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Order</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-500">
          <span>* All pastas are crafted daily in-house using organic semolina flour.</span>
          <button
            onClick={onClose}
            className="text-[#292929] hover:underline font-semibold"
          >
            Close Menu
          </button>
        </div>

      </div>
    </div>
  );
}
