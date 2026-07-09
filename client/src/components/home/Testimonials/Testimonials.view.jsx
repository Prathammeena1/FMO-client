"use client";

import React from "react";
import Card from "@/components/ui/Card.view";
import Badge from "@/components/ui/Badge.view";
import { Star, ShieldCheck, Heart } from "lucide-react";

export function TestimonialsView({
  activeFilter,
  filteredReviews,
  handleFilterChange,
}) {
  const tabs = [
    { id: "all", name: "All Reviews" },
    { id: "vehicle", name: "Vehicle Tags" },
    { id: "sos", name: "SOS Emergency" },
    { id: "pets", name: "Pets & Keys" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="primary" pill className="mb-4">
            <Heart className="h-3 w-3 mr-1 text-rose-500 fill-rose-500 animate-pulse" />
            Testimonials
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
            Loved By 50,000+ Vehicle Owners
          </h2>
          <p className="text-zinc-500 mt-4 text-base sm:text-lg">
            Real feedback from owners who rely on ParkQR to protect their privacy, vehicles, and loved ones.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0F0E1E] text-white shadow-lg shadow-black/10 scale-105"
                    : "bg-zinc-100 hover:bg-zinc-150 text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]">
          {filteredReviews.map((rev) => (
            <Card
              key={rev.id}
              hoverEffect
              className="bg-white border-zinc-100 p-8 flex flex-col justify-between items-start text-left border-zinc-100/80 shadow-md shadow-zinc-100 animate-in fade-in-50 slide-in-from-bottom-2 duration-300"
            >
              <div>
                {/* Stars Indicator */}
                <div className="flex gap-0.5 mb-4 text-amber-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-600 font-sans text-sm italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* User details footer */}
              <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-zinc-50/80 w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-sm ${rev.bg} shadow-inner`}>
                  {rev.initials}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-black text-sm text-zinc-900 leading-none">
                      {rev.name}
                    </span>
                    <ShieldCheck className="h-4 w-4 text-indigo-500 fill-indigo-50" />
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">
                    {rev.role} (Verified Owner)
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
