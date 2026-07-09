"use client";

import React from "react";
import { useEmergencySOS } from "./EmergencySOS.hooks";
import { EmergencySOSView } from "./EmergencySOS.view";

export default function EmergencySOS(props) {
  const logic = useEmergencySOS();
  return <EmergencySOSView {...props} {...logic} />;
}
