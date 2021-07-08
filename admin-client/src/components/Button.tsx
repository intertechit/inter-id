import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "primary" | "danger";
}

export default function Button({
  children,
  className,
  type,
  ...rest
}: ButtonProps) {
  const decorate = () => {
    switch (type) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-600";
      case "danger":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <button
      className={`p-3 rounded-lg text-white font-semibold hover:shadow-md transition-all ${decorate()} ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
