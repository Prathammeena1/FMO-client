import React from "react";

export default function Card({
  children,
  className = "",
  hoverEffect = true,
  glass = false,
  dark = false,
  overflowHidden = true,
  ...props
}) {
  const baseStyles = `rounded-3xl border transition-all duration-300 ${overflowHidden ? "overflow-hidden" : ""}`;
  
  const themes = {
    standard: "bg-white border-zinc-100/80 shadow-md shadow-zinc-100",
    dark: "bg-[#0F0E1E] border-white/5 shadow-xl shadow-black/20 text-white",
    glass: "glass-panel shadow-lg shadow-indigo-900/5",
    glassDark: "glass-panel-dark shadow-2xl shadow-black/10 text-white"
  };

  const hoverStyles = hoverEffect 
    ? "hover:translate-y-[-6px] hover:shadow-xl hover:border-zinc-200/50 hover:shadow-indigo-900/5 duration-300"
    : "";

  const themeClass = glass 
    ? (dark ? themes.glassDark : themes.glass) 
    : (dark ? themes.dark : themes.standard);

  return (
    <div
      className={`${baseStyles} ${themeClass} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
