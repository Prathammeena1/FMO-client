"use client";

import { useState, useEffect, useRef } from "react";

export function useHowItWorks() {
  const [activeStep, setActiveStep] = useState(0); // 0-indexed steps
  const autoPlayRef = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (autoPlayRef.current) {
        setActiveStep((prev) => (prev + 1) % 4);
      }
    }, 5000); // cycle every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
    // Pause auto play on user interaction
    autoPlayRef.current = false;
  };

  return {
    activeStep,
    handleStepClick,
  };
}
