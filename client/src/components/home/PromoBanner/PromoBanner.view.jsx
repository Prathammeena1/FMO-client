"use client";

import React from "react";
import Button from "@/components/ui/Button.view";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export function PromoBannerView({
  title = "Ready to Park Smarter?",
  subtitle = "Secure your vehicle and join the modern parking movement today. Safeguard your personal contact details.",
  primaryText = "Order Tag Now",
  secondaryText = "Contact Sales",
  onPrimaryClick,
  onSecondaryClick,
  isSubmitting,
  isSuccess,
  handleAction,
}) {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
      {/* Banner Container */}
      <div className="relative bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 rounded-3xl p-8 md:p-14 overflow-hidden border border-indigo-600/30 shadow-2xl shadow-indigo-900/10">
        
        {/* Dynamic Background Patterns */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/10 rounded-full -ml-20 -mb-20 blur-xl pointer-events-none" />
        
        {/* Radial grid decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl text-left space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-indigo-200 border border-white/10">
              <Sparkles className="h-3 w-3" />
              Limited Offer
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              {title}
            </h2>
            <p className="text-indigo-100 font-sans text-sm sm:text-base leading-relaxed opacity-90">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              variant="secondary"
              size="lg"
              loading={isSubmitting}
              onClick={(e) => handleAction(e, onPrimaryClick)}
              className="flex items-center gap-2 font-bold hover:shadow-xl active:scale-[0.98]"
            >
              {primaryText}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outlineWhite"
              size="lg"
              onClick={(e) => handleAction(e, onSecondaryClick)}
            >
              {secondaryText}
            </Button>
          </div>
        </div>

        {/* Success toast simulation */}
        {isSuccess && (
          <div className="absolute bottom-4 right-4 bg-emerald-600 text-white rounded-xl py-2 px-4 shadow-xl flex items-center gap-2 border border-emerald-500/20 animate-bounce">
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-xs font-bold font-display">Simulated: Processing Order!</span>
          </div>
        )}
      </div>
    </section>
  );
}
