import { ButtonProps } from "@/interfaces";
import React from "react";
const sizeClasses: Record<string, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};
const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  colorClass = "bg-primary text-white hover:bg-primary/80",
  styleClass = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`cursor-pointer ${sizeClasses[size]}  ${styleClass} ${colorClass} ${shape}`}
    >
      {children}
    </button>
  );
};

export default Button;
