'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import { MenuItem } from '@/data/restaurantData';

export interface CartItem {
  dish: MenuItem;
  quantity: number;
}

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function OrderCartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: OrderCartDrawerProps) {
  const [orderType, setOrderType] = useState<'table' | 'pickup'>('table');
  const [tableNumber, setTableNumber] = useState('7');
  const [orderedSuccess, setOrderedSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const tax = subtotal * 0.08875;
  const total = subtotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderedSuccess(true);
    setTimeout(() => {
      onClearCart();
      setOrderedSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="bg-[#292929] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#ff6900]" />
            <h3 className="font-playfair text-xl font-bold">Your Table Order</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
            id="close-cart-drawer-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderedSuccess ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-playfair text-2xl font-bold text-neutral-900">
                Order Sent to Kitchen!
              </h4>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                Chef Lorenzo &amp; the team are preparing your handcrafted Italian dishes right now.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20 text-neutral-500 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-neutral-300 stroke-[1.5]" />
              <p className="font-serif text-base text-neutral-700">Your order list is empty.</p>
              <p className="text-xs text-neutral-400">
                Browse our menu to add handmade pastas, wood-fired pizzas, and authentic antipasti!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Order Mode Toggle */}
              <div className="flex bg-neutral-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setOrderType('table')}
                  className={`flex-1 py-1.5 rounded-md transition-colors ${
                    orderType === 'table' ? 'bg-white text-[#ff6900] shadow-xs' : 'text-neutral-600'
                  }`}
                >
                  Dine-In Table Order
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`flex-1 py-1.5 rounded-md transition-colors ${
                    orderType === 'pickup' ? 'bg-white text-[#ff6900] shadow-xs' : 'text-neutral-600'
                  }`}
                >
                  Curbside Pickup
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-neutral-100">
                {items.map((cartItem) => (
                  <div key={cartItem.dish.id} className="py-3 flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-playfair text-sm font-bold text-neutral-900 truncate">
                        {cartItem.dish.name}
                      </h5>
                      <span className="text-xs text-[#ff6900] font-semibold">
                        ${(cartItem.dish.price * cartItem.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-2 py-1">
                      <button
                        onClick={() => onUpdateQuantity(cartItem.dish.id, -1)}
                        className="text-neutral-600 hover:text-black p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(cartItem.dish.id, 1)}
                        className="text-neutral-600 hover:text-black p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(cartItem.dish.id)}
                      className="text-neutral-400 hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Table number input if dine-in */}
              {orderType === 'table' && (
                <div className="pt-2">
                  <label className="block text-[11px] font-semibold text-neutral-600 uppercase">
                    Table Number
                  </label>
                  <input
                    type="text"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    placeholder="e.g. Table 7"
                    className="w-full mt-1 bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1.5 text-xs text-neutral-900 focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && !orderedSuccess && (
          <div className="p-5 bg-[#faf6f0] border-t border-[#ebd9c5] space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8.875%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-neutral-900 border-t border-neutral-200 pt-1.5">
                <span>Total</span>
                <span className="text-[#ff6900]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              id="send-order-kitchen-btn"
              className="w-full bg-[#ff6900] hover:bg-[#e05c00] text-white font-semibold py-3 rounded-full text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Send Order to Kitchen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
