"use client";

import { useState, useRef } from "react";

export function useHero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to the card dimensions
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Offsets from the card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-15 to 15 degrees max)
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return {
    tilt,
    cardRef,
    handleMouseMove,
    handleMouseLeave,
  };
}
