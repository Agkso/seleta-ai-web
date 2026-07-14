import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "adm" | "user" | "ghost";
  fullWidth?: boolean;
}

export const Section = ({ children, variant = "ghost", fullWidth = false, className, ...props }: SectionProps) => {
  const styles = {
    adm: "bg-brand-primary text-white border-b-4 border-brand-success",
    user: "bg-white text-slate-900 border-l-8 border-brand-secondary shadow-sm",
    ghost: "bg-transparent text-slate-800"
  };

  return (
    <section className={cn("py-8 px-6 transition-all", styles[variant], className)} {...props}>
      <div className={cn(!fullWidth && "max-w-7xl mx-auto")}>
        {children}
      </div>
    </section>
  );
};