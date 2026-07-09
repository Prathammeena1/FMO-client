"use client";

import { useState } from "react";

export function usePricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("form"); // 'form' | 'processing' | 'success'
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pin: "",
  });

  const openCheckout = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setCheckoutStep("form");
    setFormData({ name: "", phone: "", address: "", pin: "" });
  };

  const closeCheckout = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitCheckout = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    setCheckoutStep("processing");

    // Simulate payment and order placement
    setTimeout(() => {
      setCheckoutStep("success");
    }, 2000);
  };

  return {
    selectedPlan,
    isModalOpen,
    checkoutStep,
    formData,
    openCheckout,
    closeCheckout,
    handleInputChange,
    submitCheckout,
  };
}
