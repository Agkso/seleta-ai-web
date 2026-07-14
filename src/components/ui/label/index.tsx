import { cn } from "@/lib/utils";
import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = ({ children, required, className, ...props }: LabelProps) => {
  return (
    <label 
      className={cn(
        "text-sm font-bold tracking-tight text-slate-700 mb-1.5 flex items-center gap-1",
        className
      )} 
      {...props}
    >
      {children}
      {required && <span className="text-red-500 font-black">*</span>}
    </label>
  );
};