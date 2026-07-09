"use client";

import React from "react";
import Card from "@/components/ui/Card.view";
import Badge from "@/components/ui/Badge.view";
import { Shield, Smartphone, Bell, CloudRain, HeartPulse, Layers, Map, Lock, Headphones } from "lucide-react";

export function FeaturesView() {
  const items = [
    {
      title: "Privacy-First Tag",
      desc: "Communicate securely without sharing your phone number. Your contact details remain masked at all times.",
      icon: Shield,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-150",
    },
    {
      title: "No App Required",
      desc: "Works via any mobile browser instantly after scanning. Scanners do not need to download or install anything.",
      icon: Smartphone,
      iconColor: "text-purple-600 bg-purple-50 border-purple-150",
    },
    {
      title: "Instant Notifications",
      desc: "Get SMS, WhatsApp, and email alerts instantly when scanned, so you never miss a warning or contact attempt.",
      icon: Bell,
      iconColor: "text-amber-600 bg-amber-50 border-amber-150",
    },
    {
      title: "Robust Build",
      desc: "Waterproof, heatproof, and scratch-resistant epoxy tags designed for all rough weather conditions on roads.",
      icon: CloudRain,
      iconColor: "text-sky-600 bg-sky-50 border-sky-150",
    },
    {
      title: "Medical Profile",
      desc: "Optionally share emergency contact and blood group details during critical medical or accident situations.",
      icon: HeartPulse,
      iconColor: "text-rose-600 bg-rose-50 border-rose-150",
    },
    {
      title: "Multi-Vehicle Support",
      desc: "Manage all your tags—cars, bikes, suitcases, pets—under a single consolidated dashboard easily.",
      icon: Layers,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-150",
    },
    {
      title: "Location Tracking",
      desc: "Receive the approximate GPS location coordinates of the scanner when your QR code is scanned.",
      icon: Map,
      iconColor: "text-blue-600 bg-blue-50 border-blue-150",
    },
    {
      title: "Secure Database",
      desc: "Your personal data is encrypted end-to-end and stored securely, strictly following industry compliances.",
      icon: Lock,
      iconColor: "text-teal-600 bg-teal-50 border-teal-150",
    },
    {
      title: "24/7 Help Support",
      desc: "Our dedicated support team is always available to resolve queries, assist in activations, or help order replacements.",
      icon: Headphones,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-150",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-200/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-200/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" pill className="mb-4">
            Security Features
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
            Everything You Need. Nothing You Don't.
          </h2>
          <p className="text-zinc-500 mt-4 text-base sm:text-lg">
            Our technology is simple, robust, and designed to protect your privacy at all times.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                hoverEffect
                className="bg-white border-zinc-100 p-8 flex flex-col items-start gap-4 transition-all duration-300"
              >
                {/* Icon Wrapper */}
                <div className={`p-3 rounded-2xl border ${item.iconColor} transition-transform duration-300 hover:scale-110`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Title & Description */}
                <div>
                  <h3 className="font-display font-extrabold text-lg text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 font-sans text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                  <a
                    href="#partners"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 mt-4 transition-colors group/link"
                  >
                    Learn More
                    <span className="transform translate-x-0 group-hover/link:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
