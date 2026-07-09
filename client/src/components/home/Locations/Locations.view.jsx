"use client";

import React from "react";
import Badge from "@/components/ui/Badge.view";
import { Compass } from "lucide-react";

export function LocationsView() {
  const row1 = [
    "Maharashtra", "Karnataka", "Delhi NCR", "Uttar Pradesh", "Gujarat", 
    "Tamil Nadu", "Bihar", "Madhya Pradesh", "West Bengal", "Telangana"
  ];
  
  const row2 = [
    "Haryana", "Punjab", "Rajasthan", "Goa", "Kerala", "Odisha", 
    "Assam", "Jharkhand", "Uttarakhand", "Himachal Pradesh"
  ];

  return (
    <section className="py-16 bg-[#FDFDFF] overflow-hidden border-y border-zinc-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-10">
        <Badge variant="primary" pill className="mb-4">
          <Compass className="h-3 w-3 mr-1" />
          Coverage Map
        </Badge>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 tracking-tight">
          Delivering Across Bharat
        </h2>
        <p className="text-zinc-400 mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider">
          Providing smart solutions to all corners of the nation
        </p>
      </div>

      {/* Marquee Wrapper Row 1 (scrolls left) */}
      <div className="flex w-full overflow-hidden relative py-2">
        <div className="flex gap-4 items-center whitespace-nowrap animate-marquee shrink-0">
          {/* Double list for seamless transition */}
          {[...row1, ...row1].map((loc, idx) => (
            <span
              key={`${loc}-${idx}`}
              className="px-6 py-3 rounded-2xl bg-white border border-zinc-100 text-zinc-700 font-sans font-bold text-sm shadow-xs shadow-indigo-900/2 hover:border-indigo-500/50 hover:text-indigo-600 transition-colors cursor-default"
            >
              📍 {loc}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Wrapper Row 2 (scrolls right) */}
      <div className="flex w-full overflow-hidden relative py-2 mt-2">
        <div className="flex gap-4 items-center whitespace-nowrap animate-marquee-reverse shrink-0">
          {/* Double list for seamless transition */}
          {[...row2, ...row2].map((loc, idx) => (
            <span
              key={`${loc}-${idx}`}
              className="px-6 py-3 rounded-2xl bg-white border border-zinc-100 text-zinc-700 font-sans font-bold text-sm shadow-xs shadow-indigo-900/2 hover:border-indigo-500/50 hover:text-indigo-600 transition-colors cursor-default"
            >
              📍 {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
