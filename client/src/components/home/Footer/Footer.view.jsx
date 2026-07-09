"use client";

import React from "react";
import Link from "next/link";
import { Send, QrCode, Heart } from "lucide-react";

// Custom inline SVG icons for social platforms
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export function FooterView({
  email,
  subState,
  handleSubscribe,
  handleEmailChange,
}) {
  const productLinks = [
    { name: "Vehicular Tag", href: "#partners" },
    { name: "SOS Safety Tag", href: "#partners" },
    { name: "Pets & Keys Tag", href: "#partners" },
    { name: "Luggage Tags", href: "#partners" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#contact" },
    { name: "Blog Articles", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Shipping details", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-[#0F0E1E] text-zinc-400 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        
        {/* Brand details column */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-6 text-left">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-indigo-600 text-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-300">
              <QrCode className="h-6 w-6" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              Park<span className="text-indigo-500">QR</span>.in
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            Revolutionizing security & parking across India. Smart QR tags connecting finders & owners instantly and anonymously. Made in Bharat, for safety.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon].map((SocialIcon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all cursor-pointer border border-white/5 hover:scale-105 duration-200"
              >
                <SocialIcon className="h-4.5 w-4.5 text-zinc-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column: Products */}
        <div className="lg:col-span-2 text-left">
          <h4 className="font-display font-black text-sm text-white uppercase tracking-wider mb-5">
            Products
          </h4>
          <ul className="space-y-3.5">
            {productLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column: Company */}
        <div className="lg:col-span-2 text-left">
          <h4 className="font-display font-black text-sm text-white uppercase tracking-wider mb-5">
            Company
          </h4>
          <ul className="space-y-3.5">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column: Legal */}
        <div className="lg:col-span-2 text-left">
          <h4 className="font-display font-black text-sm text-white uppercase tracking-wider mb-5">
            Legal
          </h4>
          <ul className="space-y-3.5">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup Column */}
        <div className="lg:col-span-2 text-left flex flex-col space-y-4">
          <h4 className="font-display font-black text-sm text-white uppercase tracking-wider mb-1">
            Newsletter
          </h4>
          <p className="text-xs leading-relaxed">
            Get latest updates on new product launches & safety articles.
          </p>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
              className="w-full text-xs px-3.5 py-3 pr-10 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              disabled={subState === "loading"}
              className="absolute right-1 top-1 bottom-1 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg flex items-center justify-center cursor-pointer transition-colors"
            >
              {subState === "loading" ? (
                <div className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="h-3.5 w-3.5" />
              )}
            </button>
          </form>
          {subState === "success" && (
            <p className="text-[10px] text-emerald-400 font-bold leading-none animate-bounce">
              ✓ Subscribed successfully!
            </p>
          )}
        </div>
      </div>

      {/* Footer Bottom copyright area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold">
        <p>© {new Date().getFullYear()} ParkQR.in. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Made in India with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> for security.
        </p>
      </div>
    </footer>
  );
}
