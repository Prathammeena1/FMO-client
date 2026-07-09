"use client";

import { useState } from "react";

export function useEmergencySOS() {
  const [simulationState, setSimulationState] = useState("idle"); // 'idle' | 'calling' | 'ringing' | 'whatsapp_sending' | 'whatsapp_sent' | 'notifying' | 'notified'
  const [simText, setSimText] = useState("Scan to alert owner");

  const startSimulation = (action) => {
    if (simulationState !== "idle") return;

    if (action === "call") {
      setSimulationState("calling");
      setSimText("Generating Masked Number...");
      
      setTimeout(() => {
        setSimulationState("ringing");
        setSimText("Connecting secure call (+91 ***** *234)...");
      }, 1500);

      setTimeout(() => {
        setSimulationState("idle");
        setSimText("Scan to alert owner");
      }, 5000);
    } 
    
    else if (action === "whatsapp") {
      setSimulationState("whatsapp_sending");
      setSimText("Sending WhatsApp template alert...");
      
      setTimeout(() => {
        setSimulationState("whatsapp_sent");
        setSimText("Alert sent securely!");
      }, 1500);

      setTimeout(() => {
        setSimulationState("idle");
        setSimText("Scan to alert owner");
      }, 4000);
    } 
    
    else if (action === "notify") {
      setSimulationState("notifying");
      setSimText("Pinging emergency contacts + GPS...");
      
      setTimeout(() => {
        setSimulationState("notified");
        setSimText("Contacts notified! Location shared.");
      }, 1500);

      setTimeout(() => {
        setSimulationState("idle");
        setSimText("Scan to alert owner");
      }, 4000);
    }
  };

  const resetSimulation = () => {
    setSimulationState("idle");
    setSimText("Scan to alert owner");
  };

  return {
    simulationState,
    simText,
    startSimulation,
    resetSimulation,
  };
}
