"use client";

import React from "react";
import { Star, Truck, ShieldAlert, Award } from "lucide-react";

export function StatsView({ counts }) {
  const stats = [
    {
      value: `${counts.tags.toLocaleString()}+`,
      label: "Active QR Tags",
      icon: Award,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      value: `${counts.societies}+`,
      label: "Housing Societies",
      icon: ShieldAlert,
      color: "text-purple-600 bg-purple-50",
    },
    {
      value: `${counts.states}+`,
      label: "Indian States Covered",
      icon: Star,
      color: "text-amber-500 bg-amber-50",
    },
    {
      value: `${counts.rating}★`,
      label: "Google Rating",
      icon: Star,
      color: "text-yellow-500 bg-yellow-50",
    },
    {
      value: "24-48h",
      label: "Dispatch Time",
      icon: Truck,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6 md:px-12">
      <div className="bg-white border border-zinc-100/80 shadow-xl shadow-indigo-900/5 rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center p-4 md:p-2 ${
                idx >= 2 && idx < 5 ? "pt-6 md:pt-2" : ""
              }`}
            >
              <div className={`p-2 rounded-xl ${stat.color} mb-3 transition-transform duration-300 hover:scale-110`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-display font-black text-2xl md:text-3xl text-zinc-900 leading-none">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-zinc-400 mt-2 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
