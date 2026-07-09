"use client";

import React from "react";
import { useHowItWorks } from "./HowItWorks.hooks";
import { HowItWorksView } from "./HowItWorks.view";

export default function HowItWorks(props) {
  const logic = useHowItWorks();
  return <HowItWorksView {...props} {...logic} />;
}
