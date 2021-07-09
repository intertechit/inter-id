import React, { HTMLAttributes } from "react";
import { BsStarFill } from "react-icons/bs";

interface StarsProps extends HTMLAttributes<HTMLDivElement> {
  score: number;
  size?: "sm" | "md" | "lg";
}

enum Size {
  sm = 12,
  md = 17,
  lg = 22,
}

export default function Stars({
  score,
  className,
  size = "md",
  ...rest
}: StarsProps) {
  return (
    <div className={`flex gap-1 ${className || ""}`} {...rest}>
      {[...Array(score)].map((index) => (
        <BsStarFill key={index} size={Size[size]} />
      ))}
    </div>
  );
}
