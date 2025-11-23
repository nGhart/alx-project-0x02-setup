import React from "react";

const Button = ({
  textColor = "text-white",
  bgColor,
  children,
  type = "button",
}: {
  children: React.ReactNode;
  textColor?: string;
  bgColor?: string;
  type: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button
      type={type}
      style={{ padding: "5px 8px", borderRadius: "10%" }}
      className={`p-2 text-2xl rounded-md ${textColor} ${bgColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
