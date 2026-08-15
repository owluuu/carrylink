import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  disabled,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
