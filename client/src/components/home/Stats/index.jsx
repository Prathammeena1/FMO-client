"use client";

import React from "react";
import { useStats } from "./Stats.hooks";
import { StatsView } from "./Stats.view";

export default function Stats(props) {
  const logic = useStats();
  return <StatsView {...props} {...logic} />;
}
