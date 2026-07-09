"use client";

import { useState } from "react";

export function useFooter() {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState("idle"); // 'idle' | 'loading' | 'success'

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubState("loading");

    // Simulate newsletter subscription
    setTimeout(() => {
      setSubState("success");
      setEmail("");
      
      // Reset back to idle after 3 seconds
      setTimeout(() => setSubState("idle"), 3000);
    }, 1500);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return {
    email,
    subState,
    handleSubscribe,
    handleEmailChange,
  };
}
