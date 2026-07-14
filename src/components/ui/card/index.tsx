import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "outline" | "flat";
  isHoverable?: boolean;
}

export const Card = ({ 
  children, 
  variant = "elevated", 
  isHoverable = false, 
  className, 
  ...props 
}: CardProps) => {
  const variants = {
    elevated: "bg-white shadow-xl shadow-slate-200/50 border border-slate-100",
    outline: "bg-transparent border-2 border-slate-100",
    flat: "bg-slate-50 border border-slate-200",
  };

  return (
    <div 
      className={cn(
        "p-6 rounded-[2rem] transition-all", 
        variants[variant],
        isHoverable && "hover:border-brand-secondary hover:-translate-y-1 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};