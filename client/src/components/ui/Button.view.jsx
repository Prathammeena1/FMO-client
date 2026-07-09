import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  ...props
}) {
  // Variant styling mapping in Tailwind v4 style
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 active:scale-[0.98]",
    secondary: "bg-white text-indigo-900 border border-indigo-100 hover:bg-indigo-50/50 active:scale-[0.98]",
    outline: "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 active:scale-[0.98]",
    outlineWhite: "border border-white/25 text-white hover:bg-white/10 active:scale-[0.98]",
    ghost: "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
    link: "text-indigo-600 underline-offset-4 hover:underline p-0",
    sos: "bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-600 hover:to-orange-600 shadow-xl shadow-rose-500/20 active:scale-[0.98]",
    dark: "bg-[#0F0E1E] text-white hover:bg-[#1c1a35] shadow-lg shadow-black/10 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs font-semibold rounded-lg",
    md: "px-5 py-2.5 text-sm font-semibold rounded-xl",
    lg: "px-7 py-3 text-base font-semibold rounded-2xl",
  };

  const baseStyles = "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-200 outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
