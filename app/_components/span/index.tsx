import { cn } from "@/app/lib/utils/util_cn";
import { HTMLAttributes } from "react";

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "ia" | "outline";
  size?: "xs" | "sm" | "md";
}

export const Span = ({ 
  children, 
  variant = "default", 
  size = "sm", 
  className, 
  ...props 
}: SpanProps) => {
  
  const variants = {
    default: "bg-slate-100 text-slate-600",
    success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-100 text-amber-700 border border-amber-200",
    error: "bg-red-100 text-red-700 border border-red-200",
    ia: "bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-sm",
    outline: "border-2 border-slate-200 text-slate-500 bg-transparent"
  };

  const sizes = {
    xs: "px-2 py-0.5 text-[10px] font-black uppercase tracking-widest",
    sm: "px-3 py-1 text-xs font-bold rounded-lg",
    md: "px-4 py-1.5 text-sm font-bold rounded-xl",
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center justify-center transition-all",
        variants[variant],
        sizes[size],
        className
      )} 
      {...props}
    >
      {children}
    </span>
  );
};