import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-title uppercase tracking-widest font-bold text-xs border transition-all duration-300 ease-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-hover text-white border-primary hover:border-primary-hover",
    secondary:
      "bg-[#1B4332] hover:bg-[#2D6A4F] text-white border-[#2D6A4F] hover:border-accent",
    outline:
      "bg-transparent hover:bg-[#2D6A4F] text-foreground hover:text-white border-primary/40 hover:border-primary",
    accent:
      "bg-gold hover:bg-gold-hover text-[#0D1F0F] border-gold hover:border-gold-hover font-bold shadow-sm hover:shadow-md",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-[11px]",
    lg: "px-8 py-3.5 text-xs",
  };

  const content = (
    <span className="flex items-center justify-center gap-2">
      {icon && iconPosition === "left" && <span className="flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="flex items-center">{icon}</span>}
    </span>
  );

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {content}
    </button>
  );
}
