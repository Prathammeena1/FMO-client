"use client";

import React from "react";
import { usePricing } from "./Pricing.hooks";
import { PricingView } from "./Pricing.view";

export default function Pricing(props) {
  const logic = usePricing();
  return <PricingView {...props} {...logic} />;
}
