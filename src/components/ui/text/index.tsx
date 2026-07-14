// app/components/Text.tsx
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "title" | "subtitle" | "body" | "caption" | "ia";
  color?: "primary" | "secondary" | "success" | "muted";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "normal" | "medium" | "bold" | "black";
}

export const Text = ({ 
  children, 
  variant = "body", 
  color, 
  size,
  weight,
  className, 
  ...props 
}: TextProps) => {
  
  const variants = {
    title: "text-3xl font-black tracking-tighter uppercase",
    subtitle: "text-xl font-bold tracking-tight",
    body: "text-base font-normal leading-relaxed",
    caption: "text-xs font-bold uppercase tracking-widest opacity-70",
    ia: "text-sm italic font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-200"
  };

  const colors = {
    primary: "text-brand-primary",
    secondary: "text-brand-secondary",
    success: "text-brand-success",
    muted: "text-slate-500"
  };

  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
    black: "font-black",
  };

  return (
    <span 
      className={cn(
        variants[variant], 
        color && colors[color], 
        size && sizes[size], 
        weight && weights[weight],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};