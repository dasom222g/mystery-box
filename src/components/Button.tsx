import React, { FC } from "react";

interface ButtonProps {
  text: string;
  color?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  color = "bg-mb-blue-700",
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`rounded-mb-lg ${color} text-white py-2 block w-full text-center`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
