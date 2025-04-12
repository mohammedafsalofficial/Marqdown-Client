"use client";

import { Eye, EyeOff, Mail, User2 } from "lucide-react";
import { useState } from "react";

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({ label, type, placeholder }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-base md:text-lg font-medium mb-1" htmlFor={label}>
        {label}
      </label>
      <div className="relative">
        {type === "text" && (
          <User2 className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        )}
        {type === "email" && (
          <Mail className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        )}

        {type === "password" && (
          <button
            type="button"
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}

        <div className="absolute left-8 md:left-10 top-1/2 -translate-y-1/2 h-4 w-px bg-gray-300"></div>
        <input
          className="w-full border border-gray-300 outline-none pl-10 md:pl-12 pr-4 py-2 rounded-md text-sm md:text-base"
          id={label}
          type={inputType}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
