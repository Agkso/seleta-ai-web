import { ReactNode } from "react";
import { cn } from "@/app/lib/utils/util_cn";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({ children, content, position = "top" }: TooltipProps) => {
  const positions = {
    top: "-top-12 left-1/2 -translate-x-1/2",
    bottom: "-bottom-12 left-1/2 -translate-x-1/2",
    left: "top-1/2 -right-full -translate-y-1/2 mr-2",
    right: "top-1/2 -left-full -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div className={cn(
        "absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50",
        "bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-2 px-3 rounded-lg shadow-xl whitespace-nowrap",
        positions[position]
      )}>
        {content}
        <div className={cn(
          "absolute w-2 h-2 bg-slate-900 rotate-45",
          position === "top" && "-bottom-1 left-1/2 -translate-x-1/2",
          position === "bottom" && "-top-1 left-1/2 -translate-x-1/2"
        )} />
      </div>
    </div>
  );
};