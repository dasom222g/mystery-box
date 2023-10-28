import React, { FC } from "react";

interface ButtonProps {
  variant?: "contained" | "transparent";
  text: string;
  color?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  variant = "contained",
  text,
  color = "bg-mb-blue-700",
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`rounded-mb-lg ${
        variant === "transparent" ? "bg-transparent" : color
      } text-white py-2 block w-full text-center mt-4 first:mt-0`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
