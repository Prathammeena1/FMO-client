"use client";

import React from "react";
import { useHero } from "./Hero.hooks";
import { HeroView } from "./Hero.view";

export default function Hero(props) {
  const logic = useHero();
  return <HeroView {...props} {...logic} />;
}
