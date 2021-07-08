import React, { InputHTMLAttributes, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Input({
  className,
  children,
  type,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "password") {
    return (
      <div className="relative items-center flex flex-row">
        {showPassword ? (
          <FiEyeOff
            size={18}
            className="absolute right-3 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FiEye
            size={18}
            className="absolute right-3 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
        <input
          className={`rounded-lg focus:bg-gray-100 transition-colors border-gray-200 pr-9 w-full ${
            className || ""
          }`}
          type={showPassword ? "text" : "password"}
          {...rest}
        >
          {children}
        </input>
      </div>
    );
  }

  return (
    <input
      className={`rounded-lg border-gray-200 transition-colors focus:bg-gray-100 ${
        className || ""
      }`}
      type={type}
      {...rest}
    >
      {children}
    </input>
  );
}
