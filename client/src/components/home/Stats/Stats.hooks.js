"use client";

import { useState, useEffect } from "react";

export function useStats() {
  const [counts, setCounts] = useState({
    tags: 0,
    societies: 0,
    states: 0,
    rating: 0,
  });

  useEffect(() => {
    const duration = 1500; // 1.5 seconds animation
    const steps = 30;
    const intervalTime = duration / steps;
    
    let stepCount = 0;
    
    const interval = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      
      setCounts({
        tags: Math.floor(progress * 50000),
        societies: Math.floor(progress * 200),
        states: Math.floor(progress * 5),
        rating: Number((progress * 4.8).toFixed(1)),
      });

      if (stepCount >= steps) {
        setCounts({
          tags: 50000,
          societies: 200,
          states: 5,
          rating: 4.8,
        });
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return {
    counts,
  };
}
