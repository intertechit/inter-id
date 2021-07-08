import React, { HTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`p-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 hover:shadow-md transition-all ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
