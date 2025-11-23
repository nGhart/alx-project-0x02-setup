import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  radius?: string;
  styleClass?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  radius = "rounded-full",
  styleClass = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 flex items-center justify-center cursor-pointer ${radius} ${styleClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
