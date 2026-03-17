import { cn } from "@/app/lib/utils/util_cn";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  dir?: "row" | "col";
  items?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: 0 | 2 | 4 | 6 | 8 | 10;
}

export const Flex = ({ 
  children, dir = "row", items = "center", justify = "start", gap = 4, className, ...props 
}: FlexProps) => {
  return (
    <div 
      className={cn(
        "flex",
        dir === "col" ? "flex-col" : "flex-row",
        `items-${items}`,
        `justify-${justify}`,
        `gap-${gap}`,
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};