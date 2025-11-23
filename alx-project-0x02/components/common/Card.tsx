import { type CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
