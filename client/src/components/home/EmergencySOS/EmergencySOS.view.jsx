"use client";

import React from "react";
import Button from "@/components/ui/Button.view";
import Badge from "@/components/ui/Badge.view";
import { CheckCircle2, Phone, MessageSquare, AlertTriangle, UserCheck, HeartHandshake, MapPin } from "lucide-react";

export function EmergencySOSView({
  simulationState,
  simText,
  startSimulation,
  resetSimulation,
}) {
  const benefits = [
    "Complete privacy (Number masking)",
    "Instant notifications (SMS, WhatsApp, App)",
    "Multiple contacts can be linked",
    "GPS location sharing during emergencies",
    "Easy setup in under 2 minutes",
  ];

  return (
    <section id="services" className="py-16 max-w-7xl mx-auto px-6 md:px-12">
      {/* Container with bright red-orange gradient */}
      <div className="relative bg-gradient-to-br from-rose-500 via-red-500 to-orange-500 rounded-3xl p-8 md:p-14 overflow-hidden border border-rose-400/20 shadow-2xl shadow-rose-500/10">
        
        {/* Decorative Grid and Blur Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information and Checklist */}
          <div className="lg:col-span-7 text-white text-left space-y-6 md:space-y-8">
            <Badge variant="glass" pill className="bg-white/10 border-white/20">
              <HeartHandshake className="h-3.5 w-3.5 mr-1" />
              Life Safety First
            </Badge>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              Emergency SOS <br />
              in One Scan
            </h2>

            <p className="text-rose-50 font-sans text-sm sm:text-base leading-relaxed opacity-95 max-w-xl">
              In case of accidents, wrong parking, or unattended vehicles, anyone can scan the QR code to contact the owner anonymously. No need to share personal numbers anymore! Get instant assistance during crucial times.
            </p>

            {/* Checklist */}
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm sm:text-base font-medium">
                  <CheckCircle2 className="h-5 w-5 text-amber-300 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button variant="" size="lg" className="text-rose-600 bg-white hover:bg-rose-50 shadow-lg shadow-rose-950/20 font-bold hover:scale-[1.02] active:scale-[0.98]">
                Learn More about SOS Tag
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Phone Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-[500px] bg-[#0F0E1E] p-4 rounded-[40px] border-4 border-zinc-800 shadow-2xl relative flex flex-col justify-between items-center text-white select-none">
              
              {/* Speaker & camera status bar */}
              <div className="w-full flex justify-between items-center px-4 pt-1 pb-4">
                <span className="text-[10px] font-semibold text-zinc-500">9:41 AM</span>
                <div className="w-20 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-3.5 border border-zinc-800" />
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-2.5 border border-zinc-500 rounded-xs" />
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                </div>
              </div>

              {/* Dynamic Screen contents */}
              <div className="flex-1 w-full bg-slate-50 rounded-3xl text-zinc-950 p-4 flex flex-col justify-between overflow-hidden relative">
                
                {/* Header Profile Info */}
                <div className="text-center border-b border-zinc-100 pb-3">
                  <div className="inline-flex items-center gap-1 bg-rose-100 border border-rose-200 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                    <AlertTriangle className="h-3 w-3" />
                    SOS Scan Active
                  </div>
                  <h4 className="font-display font-black text-sm text-zinc-800">Vehicle: MH 12 AB 1234</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">Owner Identity Masked for Privacy</p>
                </div>

                {/* Simulation Screen Center Display */}
                <div className="flex-1 flex flex-col items-center justify-center my-4">
                  {simulationState === "idle" && (
                    <div className="text-center animate-pulse-subtle">
                      <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-3 shadow-inner">
                        <UserCheck className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Simulation</p>
                      <p className="text-xs font-bold text-zinc-700 mt-1">Tap a button below to try!</p>
                    </div>
                  )}

                  {/* Calling animation */}
                  {simulationState === "calling" && (
                    <div className="text-center">
                      <div className="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center text-white mx-auto mb-3 animate-ping">
                        <Phone className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-bold text-indigo-600">{simText}</p>
                    </div>
                  )}

                  {simulationState === "ringing" && (
                    <div className="text-center">
                      <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-3 animate-bounce">
                        <Phone className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-bold text-emerald-600">{simText}</p>
                      <button onClick={resetSimulation} className="text-[10px] font-bold text-rose-500 mt-4 underline cursor-pointer">
                        End Call
                      </button>
                    </div>
                  )}

                  {/* WhatsApp Simulation */}
                  {simulationState === "whatsapp_sending" && (
                    <div className="text-center">
                      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-3 animate-pulse">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-bold text-green-600">{simText}</p>
                    </div>
                  )}

                  {simulationState === "whatsapp_sent" && (
                    <div className="text-center p-3 bg-emerald-50 border border-emerald-100 rounded-2xl w-full">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-2">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="text-[11px] font-bold text-emerald-800">{simText}</p>
                      <p className="text-[9px] text-zinc-500 mt-1">SMS & WhatsApp delivery simulated.</p>
                    </div>
                  )}

                  {/* Emergency notification mock */}
                  {(simulationState === "notifying" || simulationState === "notified") && (
                    <div className="text-center p-3 bg-rose-50 border border-rose-100 rounded-2xl w-full">
                      <div className={`w-10 h-10 ${simulationState === "notified" ? "bg-rose-600 animate-none" : "bg-rose-500 animate-bounce"} rounded-full flex items-center justify-center text-white mx-auto mb-2`}>
                        <MapPin className="h-5 w-5" />
                      </div>
                      <p className="text-[11px] font-bold text-rose-800">{simText}</p>
                      <p className="text-[9px] text-zinc-500 mt-1">GPS: 18.5204° N, 73.8567° E</p>
                    </div>
                  )}
                </div>

                {/* Simulated Action buttons */}
                <div className="space-y-2 pt-2 border-t border-zinc-100">
                  <button
                    onClick={() => startSimulation("call")}
                    disabled={simulationState !== "idle"}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call Owner (Masked)
                  </button>

                  <button
                    onClick={() => startSimulation("whatsapp")}
                    disabled={simulationState !== "idle"}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    Send WhatsApp Alert
                  </button>

                  <button
                    onClick={() => startSimulation("notify")}
                    disabled={simulationState !== "idle"}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
                  >
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Notify Emergency Contact
                  </button>
                </div>
              </div>

              {/* Bottom navigation pill */}
              <div className="w-28 h-1 bg-zinc-800 rounded-full mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
