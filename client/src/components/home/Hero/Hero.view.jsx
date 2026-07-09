"use client";

import React from "react";
import Button from "@/components/ui/Button.view";
import Badge from "@/components/ui/Badge.view";
import { PhoneCall, Siren, PawPrint, ArrowRight, ShieldCheck } from "lucide-react";

export function HeroView({ tilt, cardRef, handleMouseMove, handleMouseLeave }) {
  // Inline dynamic styles for the 3D card tilt
  const cardStyle = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
    transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-indigo-950 via-purple-900 to-[#191635] text-white overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/25 rounded-full filter blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <Badge variant="glass" pill>
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 mr-1" />
            Bharat's Own Smart QR Tag
          </Badge>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight sm:leading-none">
            Smart QR Tags <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-300">
              For Every Moment
            </span> <br />
            Of Your Life
          </h1>
          
          <p className="text-zinc-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed">
            A revolutionary parking management system designed to make parking hassle-free, secure, and smart. Provide instant alerts for wrongly parked vehicles, emergency SOS, luggage safety, and pet safety without revealing your phone number.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" size="lg" className="flex items-center gap-2 group">
              Product & Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outlineWhite" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Graphic Mockup Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={cardStyle}
            className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl shadow-indigo-950/50 p-6 flex flex-col justify-between items-center text-zinc-900 border border-white/10 select-none group/card cursor-grab active:cursor-grabbing"
          >
            {/* Header info */}
            <div className="w-full flex items-center justify-between">
              <span className="font-display font-extrabold text-sm tracking-tight text-indigo-900">
                Park<span className="text-indigo-600">QR</span>.in
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                Active tag
              </span>
            </div>

            {/* QR Mockup SVG */}
            <div className="w-48 h-48 border-4 border-indigo-50 rounded-2xl p-3 bg-white relative shadow-inner flex items-center justify-center transition-all duration-300 group-hover/card:scale-105">
              <svg className="w-full h-full text-indigo-950" viewBox="0 0 100 100">
                {/* QR Code Blocks */}
                <rect x="0" y="0" width="25" height="25" fill="currentColor" rx="2" />
                <rect x="5" y="5" width="15" height="15" fill="white" rx="1" />
                <rect x="9" y="9" width="7" height="7" fill="currentColor" />

                <rect x="75" y="0" width="25" height="25" fill="currentColor" rx="2" />
                <rect x="80" y="5" width="15" height="15" fill="white" rx="1" />
                <rect x="84" y="84" width="7" height="7" fill="currentColor" />

                <rect x="0" y="75" width="25" height="25" fill="currentColor" rx="2" />
                <rect x="5" y="80" width="15" height="15" fill="white" rx="1" />
                <rect x="9" y="84" width="7" height="7" fill="currentColor" />

                {/* Random QR Modules */}
                <rect x="35" y="0" width="10" height="5" fill="currentColor" />
                <rect x="55" y="5" width="5" height="15" fill="currentColor" />
                <rect x="40" y="15" width="10" height="10" fill="currentColor" />
                <rect x="30" y="30" width="15" height="5" fill="currentColor" />
                
                <rect x="60" y="35" width="25" height="5" fill="currentColor" />
                <rect x="70" y="45" width="5" height="20" fill="currentColor" />
                <rect x="85" y="60" width="15" height="5" fill="currentColor" />
                <rect x="90" y="30" width="5" height="20" fill="currentColor" />

                <rect x="0" y="35" width="5" height="25" fill="currentColor" />
                <rect x="10" y="45" width="15" height="10" fill="currentColor" />
                <rect x="35" y="50" width="5" height="15" fill="currentColor" />
                <rect x="45" y="65" width="20" height="5" fill="currentColor" />

                <rect x="35" y="75" width="10" height="15" fill="currentColor" />
                <rect x="55" y="80" width="15" height="10" fill="currentColor" />
                <rect x="65" y="90" width="10" height="5" fill="currentColor" />
                
                {/* Center Brand icon */}
                <rect x="40" y="40" width="20" height="20" fill="white" rx="3" className="shadow-xs" />
                <rect x="44" y="44" width="12" height="12" fill="#4F46E5" rx="2" />
              </svg>
            </div>

            {/* Sub text */}
            <div className="text-center">
              <p className="font-semibold text-xs text-zinc-500 uppercase tracking-widest">Scan tag to</p>
              <p className="font-display font-extrabold text-sm text-indigo-950 mt-0.5">Contact vehicle owner</p>
            </div>

            {/* Floating Badge: Scan to call */}
            <div className="absolute top-10 right-[-30px] bg-emerald-500 text-white rounded-2xl py-2.5 px-4 shadow-xl flex items-center gap-2 border border-emerald-400/20 animate-float">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <PhoneCall className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase opacity-80 tracking-wide">Secure Calling</p>
                <p className="text-xs font-bold font-display">Scan to call</p>
              </div>
            </div>

            {/* Floating Badge: SOS alert */}
            <div className="absolute bottom-16 right-[-25px] bg-rose-500 text-white rounded-2xl py-2.5 px-4 shadow-xl flex items-center gap-2 border border-rose-400/20 animate-float-delayed">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Siren className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase opacity-80 tracking-wide">Emergency</p>
                <p className="text-xs font-bold font-display">SOS alert</p>
              </div>
            </div>

            {/* Floating Badge: Pet tracking */}
            <div className="absolute bottom-6 left-[-35px] bg-indigo-600 text-white rounded-2xl py-2.5 px-4 shadow-xl flex items-center gap-2 border border-indigo-500/20 animate-float">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <PawPrint className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase opacity-80 tracking-wide">Safety</p>
                <p className="text-xs font-bold font-display">Pet tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
