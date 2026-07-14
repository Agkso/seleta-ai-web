"use client";

import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "../label";
import { Span } from "../span";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, required, className, id, children, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
        )}

        <div className="relative group">
          <select
            id={id}
            ref={ref}
            className={cn(
              "w-full py-4 pl-4 pr-11 rounded-2xl border-2 border-slate-100 outline-none transition-all shadow-sm appearance-none",
              "focus:border-brand-secondary focus:ring-4 focus:ring-blue-50/50",
              "text-slate-700 bg-white font-medium",
              error && "border-red-400 focus:border-red-400 focus:ring-red-50",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-focus-within:text-brand-secondary transition-colors"
          />
        </div>

        {error && (
          <Span variant="error" size="xs" className="mt-1 self-start">
            {error}
          </Span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
