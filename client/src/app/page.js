"use client";

import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import EmergencySOS from "@/components/home/EmergencySOS";
import Pricing from "@/components/home/Pricing";
import Locations from "@/components/home/Locations";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import PromoBanner from "@/components/home/PromoBanner";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow min-h-screen bg-[#FCFBFF] selection:bg-indigo-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow flex flex-col">
        {/* Hero Banner Section */}
        <Hero />

        {/* Dynamic Numerical Statistics */}
        <Stats />

        {/* Stepped Process Breakdown */}
        <HowItWorks />

        {/* Promo CTA Banner 1 */}
        <PromoBanner
          title="Ready to Park Smarter?"
          subtitle="Join the thousands of smart vehicle owners who trust ParkQR for their daily parking needs."
          primaryText="Order Tag Now"
          secondaryText="Contact Sales"
        />

        {/* Emergency SOS Features & Simulator */}
        <EmergencySOS />

        {/* Pricing Comparison Cards & Checkout Simulator */}
        <Pricing />

        {/* Delivering Across Bharat Marquees */}
        <Locations />

        {/* Features Specification Grid */}
        <Features />

        {/* Client Testimonials Carousel / Grid */}
        <Testimonials />

        {/* Promo CTA Banner 2 */}
        <PromoBanner
          title="Ready to Park Smarter?"
          subtitle="Secure your vehicle and stay connected without exposing your details."
          primaryText="Order Tag Now"
          secondaryText="Learn More"
        />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}
