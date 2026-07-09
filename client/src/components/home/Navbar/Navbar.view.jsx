"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button.view";
import { Menu, X, QrCode } from "lucide-react";

export function NavbarView({ isOpen, isScrolled, toggleMenu, closeMenu }) {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Register", href: "#register" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md shadow-indigo-900/5 py-4 border-b border-zinc-150/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={closeMenu}
        >
          <div className="bg-indigo-600 text-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-300">
            <QrCode className="h-6 w-6" />
          </div>
          <span
            className={`font-display font-extrabold text-xl tracking-tight transition-colors duration-300 flex items-center gap-0.5 ${
              isScrolled ? "text-[#0F0E1E]" : "text-white"
            }`}
          >
            Park
            <span className={isScrolled ? "text-indigo-600" : "text-emerald-400"}>
              QR
            </span>
            <span
              className={`text-xs font-semibold mt-1.5 ml-1 transition-colors duration-300 ${
                isScrolled ? "text-zinc-400" : "text-white/40"
              }`}
            >
              .in
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                isScrolled
                  ? "text-zinc-600 hover:text-indigo-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant={isScrolled ? "outline" : "outlineWhite"}
            size="md"
          >
            Log In
          </Button>
          <Button
            variant={isScrolled ? "primary" : "secondary"}
            className={!isScrolled ? "bg-white text-indigo-950 border-none shadow-lg shadow-black/10 hover:bg-zinc-50" : ""}
            size="md"
          >
            Get Tag Now
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-xl transition-all cursor-pointer ${
            isScrolled
              ? "text-zinc-700 hover:text-indigo-600 hover:bg-zinc-100/80"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[73px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out border-t border-zinc-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 justify-between">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`text-lg font-semibold text-zinc-800 hover:text-indigo-600 transition-all duration-300 ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pb-12">
            <Button variant="outline" size="lg" className="w-full" onClick={closeMenu}>
              Log In
            </Button>
            <Button variant="primary" size="lg" className="w-full" onClick={closeMenu}>
              Get Tag Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
