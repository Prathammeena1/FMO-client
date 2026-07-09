"use client";

import React from "react";
import { useTestimonials } from "./Testimonials.hooks";
import { TestimonialsView } from "./Testimonials.view";

export default function Testimonials(props) {
  const logic = useTestimonials();
  return <TestimonialsView {...props} {...logic} />;
}
