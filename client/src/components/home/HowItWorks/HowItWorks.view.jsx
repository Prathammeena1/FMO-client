"use client";

import React from "react";
import Card from "@/components/ui/Card.view";
import Badge from "@/components/ui/Badge.view";
import { ShoppingBag, Laptop, MapPin, Smartphone, QrCode } from "lucide-react";

export function HowItWorksView({ activeStep, handleStepClick }) {
  const steps = [
    {
      num: "1",
      title: "Get QR Tag",
      subtitle: "Order your preferred QR tag from our website or partner stores.",
      icon: ShoppingBag,
      color: "border-indigo-500 text-indigo-600 bg-indigo-50/50",
    },
    {
      num: "2",
      title: "Register/Activate",
      subtitle: "Scan the QR code and link your vehicle details & contact information.",
      icon: Laptop,
      color: "border-purple-500 text-purple-600 bg-purple-50/50",
    },
    {
      num: "3",
      title: "Place Tag",
      subtitle: "Stick the QR tag on your vehicle (car, bike) or luggage.",
      icon: MapPin,
      color: "border-amber-500 text-amber-600 bg-amber-50/50",
    },
    {
      num: "4",
      title: "Scan & Connect",
      subtitle: "When scanned, they can contact you or notify you instantly without sharing phone numbers.",
      icon: Smartphone,
      color: "border-emerald-500 text-emerald-600 bg-emerald-50/50",
    },
  ];

  return (
    <section id="register" className="py-24 bg-[#FAFAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="primary" pill className="mb-4">
            Process
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
            How ParkQR Works
          </h2>
          <p className="text-zinc-500 mt-4 text-base sm:text-lg">
            Four simple steps to activate and use your smart QR tag
          </p>
        </div>

        {/* Timeline Row (Desktop Horizontal, Mobile Vertical) */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="absolute top-6 left-[12%] right-[12%] h-[2px] bg-zinc-200/80 border-t border-dashed border-zinc-300 pointer-events-none z-0 hidden lg:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Timeline Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-lg transition-all duration-300 mb-6 relative z-10 border-2 ${
                      isActive
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/30 scale-110"
                        : "bg-white text-zinc-500 border-zinc-200 hover:border-indigo-400 hover:text-indigo-600"
                    }`}
                  >
                    {step.num}
                  </div>

                  {/* Card content */}
                  <Card
                    hoverEffect
                    className={`w-full p-6 flex flex-col items-center bg-white ${
                      isActive
                        ? "border-indigo-500 shadow-xl shadow-indigo-900/5 ring-1 ring-indigo-500/20"
                        : "border-zinc-150"
                    }`}
                  >
                    {/* Icon wrapper */}
                    <div className={`p-3 rounded-2xl border ${step.color} mb-4 transition-transform duration-300 group-hover:scale-108`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-zinc-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 font-sans text-sm leading-relaxed">
                      {step.subtitle}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
