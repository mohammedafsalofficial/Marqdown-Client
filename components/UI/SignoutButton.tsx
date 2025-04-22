"use client";

import { logoutAction } from "@/actions/auth";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";

export default function SignoutButton() {
  function handleSignout() {
    logoutAction();
    toast.success("Successfully logged out!");
  }

  return (
    <button
      className="flex items-center space-x-2 text-left w-full p-2 rounded-lg relative overflow-hidden group"
      onClick={handleSignout}
    >
      <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>

      <div className="absolute inset-0 bg-rose-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>

      <div className="relative z-10 text-gray-500 group-hover:text-rose-600 transition-colors duration-75">
        <LogOut size={18} />
      </div>

      <span className="relative z-10 font-medium text-gray-700 group-hover:text-rose-700 transition-colors duration-75">
        Sign out
      </span>
    </button>
  );
}
