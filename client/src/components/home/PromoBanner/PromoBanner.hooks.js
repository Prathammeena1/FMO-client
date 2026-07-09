"use client";

import { useState } from "react";

export function usePromoBanner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAction = (e, callback) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate redirection or action loading
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (callback) callback();
      
      // Reset toast after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1200);
  };

  return {
    isSubmitting,
    isSuccess,
    handleAction,
  };
}
