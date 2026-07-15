"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { Label } from "../label";
import { Span } from "../span";  

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, required, className, id, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
        )}
        
        <div className="relative group">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-secondary transition-colors z-10">
              {icon}
            </div>
          )}
          
          <input
            id={id}
            ref={ref}
            className={cn(
              "w-full py-4 rounded-2xl border-2 border-slate-100 outline-none transition-all shadow-sm",
              "focus:border-brand-secondary focus:ring-4 focus:ring-blue-50/50",
              "placeholder:text-slate-400 text-slate-700 bg-white font-medium",
              icon ? "pl-12 pr-4" : "px-4",
              error && "border-red-400 focus:border-red-400 focus:ring-red-50",
              className
            )}
            {...props}
          /> 
        </div>

        {error && (
          <Span 
            variant="error" 
            size="xs" 
            className="mt-1 self-start animate-fade-in"
          >
            {error}
          </Span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";