"use client";

import { useState } from "react";

export function useTestimonials() {
  const [activeFilter, setActiveFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Amit Sharma",
      role: "Car Owner",
      quote: "Amazing product! Solved my wrong parking issue in my apartment complex. People scan and notify me immediately. Highly recommended!",
      stars: 5,
      category: "vehicle",
      initials: "AS",
      bg: "bg-indigo-100 text-indigo-700",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Scooter Owner",
      quote: "The privacy feature is outstanding. No more unknown calls from random numbers. I get alerts directly through the masked call line. Very secure!",
      stars: 5,
      category: "vehicle",
      initials: "PP",
      bg: "bg-purple-100 text-purple-700",
    },
    {
      id: 3,
      name: "Rohan Verma",
      role: "Pet Owner",
      quote: "My dog got loose last week. Thanks to the ParkQR pet tag, the finder scanned and got in touch with me within an hour. Saved my life!",
      stars: 5,
      category: "pets",
      initials: "RV",
      bg: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "SUV Driver",
      quote: "Highly durable tag. It has survived heavy monsoons and multiple car pressure washes. Still works perfectly. A must-have for every vehicle owner.",
      stars: 5,
      category: "vehicle",
      initials: "VS",
      bg: "bg-amber-100 text-amber-700",
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Mother / Keys Owner",
      quote: "Very helpful during a minor roadside accident. The medical staff scanned the helmet tag and immediately reached my husband. Life saving system.",
      stars: 5,
      category: "sos",
      initials: "NG",
      bg: "bg-rose-100 text-rose-700",
    },
    {
      id: 6,
      name: "Rahul Mehta",
      role: "Tech Enthusiast",
      quote: "Activated the tag in less than two minutes. The onboarding flows are simple and seamless. Excellent interface and utility.",
      stars: 5,
      category: "sos",
      initials: "RM",
      bg: "bg-teal-100 text-teal-700",
    },
  ];

  const filteredReviews = activeFilter === "all" 
    ? reviews 
    : reviews.filter(r => r.category === activeFilter);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return {
    activeFilter,
    filteredReviews,
    handleFilterChange,
  };
}
