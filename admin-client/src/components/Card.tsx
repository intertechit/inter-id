import React, { HTMLAttributes } from "react";

export default function Card({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-5 shadow rounded-lg bg-white ${className || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
