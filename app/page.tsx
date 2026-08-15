'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WelcomeHours } from '@/components/WelcomeHours';
import { OurMenu } from '@/components/OurMenu';
import { HappyHours } from '@/components/HappyHours';
import { HappyCustomers } from '@/components/HappyCustomers';
import { ReservationBanner } from '@/components/ReservationBanner';
import { ReservationModal } from '@/components/ReservationModal';
import { MenuModal } from '@/components/MenuModal';
import { AboutModal } from '@/components/AboutModal';
import { OfferModal } from '@/components/OfferModal';
import { ReviewModal } from '@/components/ReviewModal';
import { OrderCartDrawer, CartItem } from '@/components/OrderCartDrawer';
import { MenuItem, ReviewItem } from '@/data/restaurantData';

export default function HomePage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customReviews, setCustomReviews] = useState<ReviewItem[]>([]);

  const handleAddToCart = (dish: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.dish.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setCustomReviews((prev) => [newReview, ...prev]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-white text-[#2a2a2a] flex flex-col selection:bg-[#ff6900] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenReservation={() => setReservationOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenAbout={() => setAboutOpen(true)}
        onOpenOffer={() => setOfferOpen(true)}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenReservation={() => setReservationOpen(true)}
        onExploreMenu={() => {
          const el = document.getElementById('our-menu');
          if (el) {
            const navOffset = 70;
            const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
          }
        }}
      />

      {/* Welcome & Hours Section */}
      <WelcomeHours
        onOpenAbout={() => setAboutOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Our Menu Section with 3x3 Alternating Grid */}
      <OurMenu
        onOpenFullMenu={() => setMenuOpen(true)}
        onAddToCart={handleAddToCart}
      />

      {/* Happy Hours Section */}
      <HappyHours
        onOpenOffer={() => setOfferOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Happy Customers / Reviews Section */}
      <HappyCustomers
        onOpenReviewModal={() => setReviewOpen(true)}
        customReviews={customReviews}
      />

      {/* Reservation Call Banner & Footer */}
      <ReservationBanner
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <MenuModal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
        onOpenReservation={() => {
          setAboutOpen(false);
          setReservationOpen(true);
        }}
      />

      <OfferModal
        isOpen={offerOpen}
        onClose={() => setOfferOpen(false)}
        onOpenReservation={() => {
          setOfferOpen(false);
          setReservationOpen(true);
        }}
      />

      <ReviewModal
        isOpen={reviewOpen}
        onClose={() => setReviewOpen(false)}
        onAddReview={handleAddReview}
      />

      <OrderCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </main>
  );
}
