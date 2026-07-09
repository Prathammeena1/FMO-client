"use client";

import React from "react";
import { usePromoBanner } from "./PromoBanner.hooks";
import { PromoBannerView } from "./PromoBanner.view";

export default function PromoBanner(props) {
  const logic = usePromoBanner();
  return <PromoBannerView {...props} {...logic} />;
}
