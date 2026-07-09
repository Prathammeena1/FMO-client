import React from "react";

export default function Badge({
  children,
  className = "",
  variant = "primary",
  pill = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase transition-all duration-300";
  
  const variants = {
    primary: "bg-indigo-50 text-indigo-700 border border-indigo-100/50",
    secondary: "bg-zinc-100 text-zinc-700 border border-zinc-200/50",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-100/50",
    danger: "bg-rose-50 text-rose-700 border border-rose-100/50",
    warning: "bg-amber-50 text-amber-700 border border-amber-100/50",
    info: "bg-sky-50 text-sky-700 border border-sky-100/50",
    sos: "bg-gradient-to-r from-rose-500/10 to-orange-500/10 text-rose-600 border border-rose-500/20",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-xs",
  };

  const rounded = pill ? "rounded-full" : "rounded-lg";

  return (
    <span
      className={`${baseStyles} ${variants[variant] || ""} ${rounded} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
