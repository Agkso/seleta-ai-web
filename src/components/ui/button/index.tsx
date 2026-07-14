import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  isLoading, 
  className, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-slate-800 shadow-md",
    secondary: "bg-brand-secondary text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
    success: "bg-brand-success text-white hover:bg-emerald-600 shadow-lg shadow-emerald-100",
    outline: "border-2 border-slate-200 text-slate-600 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-500 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm font-bold",
    lg: "px-8 py-4 text-base font-black uppercase tracking-wider",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
};