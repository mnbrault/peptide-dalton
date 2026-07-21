import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  asChild?: boolean;
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center micro px-8 py-4 transition-colors duration-500 disabled:opacity-50";

  const variants = {
    primary: "bg-forest text-ivory hover:bg-charcoal",
    ghost: "bg-transparent text-forest border border-forest/20 hover:border-forest",
    outline: "bg-transparent text-ivory border border-ivory/40 hover:bg-ivory hover:text-forest",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
