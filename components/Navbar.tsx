'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FrescoLogo } from './Flourishes';
import { Menu as MenuIcon, X, Phone, Calendar, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
  onOpenAbout: () => void;
  onOpenOffer: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({
  onOpenReservation,
  onOpenMenu,
  onOpenAbout,
  onOpenOffer,
  cartCount,
  onOpenCart,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#ece8e1] py-3'
          : 'bg-white py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center"
            id="brand-logo-link"
          >
            <FrescoLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[15px] font-medium text-[#2d2d2d]">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#ff6900] hover:text-[#e05d00] transition-colors font-semibold"
              id="nav-home-btn"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('our-menu')}
              className="hover:text-[#ff6900] transition-colors"
              id="nav-menu-btn"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('welcome-section')}
              className="hover:text-[#ff6900] transition-colors"
              id="nav-about-btn"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('happy-hours')}
              className="hover:text-[#ff6900] transition-colors"
              id="nav-specials-btn"
            >
              Specials
            </button>
            <button
              onClick={() => scrollToSection('reviews-section')}
              className="hover:text-[#ff6900] transition-colors"
              id="nav-reviews-btn"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('reservation-footer')}
              className="hover:text-[#ff6900] transition-colors"
              id="nav-contact-btn"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Cart Button */}
            {cartCount > 0 && (
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full text-[#333] hover:bg-neutral-100 transition-colors"
                title="View Table Order"
                id="nav-cart-btn"
              >
                <ShoppingBag className="w-5 h-5 text-[#ff6900]" />
                <span className="absolute -top-1 -right-1 bg-[#ff6900] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              </button>
            )}

            {/* Quick Call */}
            <a
              href="tel:+1234561010"
              className="hidden xl:flex items-center gap-1.5 text-xs text-[#555] font-medium hover:text-[#ff6900] px-3 py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff6900]" />
              <span>(123) 456-1010</span>
            </a>

            {/* Primary Orange Reservation Pill */}
            <button
              onClick={onOpenReservation}
              id="nav-reservation-btn"
              className="bg-[#ff6900] hover:bg-[#e05c00] active:scale-[0.98] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-200 flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4 opacity-90" />
              <span>Reservation</span>
            </button>
          </div>

          {/* Mobile Menu & Cart Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {cartCount > 0 && (
              <button
                onClick={onOpenCart}
                className="relative p-2 text-[#ff6900]"
                id="nav-mobile-cart-btn"
              >
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-[#ff6900] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenReservation}
              className="bg-[#ff6900] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Reserve
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2d2d2d] hover:text-[#ff6900] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-base font-semibold text-[#ff6900]"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('our-menu')}
            className="block w-full text-left py-2 text-base font-medium text-[#333] hover:text-[#ff6900]"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection('welcome-section')}
            className="block w-full text-left py-2 text-base font-medium text-[#333] hover:text-[#ff6900]"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('happy-hours')}
            className="block w-full text-left py-2 text-base font-medium text-[#333] hover:text-[#ff6900]"
          >
            Happy Hours
          </button>
          <button
            onClick={() => scrollToSection('reviews-section')}
            className="block w-full text-left py-2 text-base font-medium text-[#333] hover:text-[#ff6900]"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('reservation-footer')}
            className="block w-full text-left py-2 text-base font-medium text-[#333] hover:text-[#ff6900]"
          >
            Contact
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full bg-[#ff6900] text-white font-semibold py-2.5 rounded-full text-center shadow-sm"
            >
              Book a Table
            </button>
            <a
              href="tel:+1234561010"
              className="w-full text-center py-2 text-sm text-[#666] flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#ff6900]" />
              Call us: (123) 456-1010
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
