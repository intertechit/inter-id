import React, { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export default function Card({
  children,
  className,
  label,
  ...rest
}: CardProps) {
  return (
    <div
      className={`p-5 shadow rounded-lg bg-white ${className || ""}`}
      {...rest}
    >
      {label ? (
        <div className="mb-3">
          <h2 className="font-semibold mb-3">{label}</h2>
          <hr />
        </div>
      ) : null}
      {children}
    </div>
  );
}
