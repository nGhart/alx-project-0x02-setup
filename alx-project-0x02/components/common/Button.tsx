import React from "react";

const Button = ({
  children,
  type = "button",
  radius = "rounded-full",
  style,
}: {
  children: React.ReactNode;

  type: "button" | "submit" | "reset" | undefined;
  radius?: string;
  style: string;
}) => {
  return (
    <button
      type={type}
      className={`py-1 px-2 flex items-center justify-center ${radius} ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
