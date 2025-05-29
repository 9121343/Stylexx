// src/components/ui/button.tsx

"use client";

import React from "react";
import { cn } from "@/lib/utils"; // make sure this alias works or use relative path

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded transition font-medium";

  const variants: Record<typeof variant, string> = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-pink-500 text-pink-500 hover:bg-pink-50",
  };

  return (
    <button {...props} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
};
