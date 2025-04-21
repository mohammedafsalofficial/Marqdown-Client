"use client";

import { logoutAction } from "@/actions/auth";
import { Archive, Home, Trash2, LogOut, Tag, Bookmark, Star, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const menuItems = [
  { icon: <Home size={18} />, label: "Home" },
  { icon: <Archive size={18} />, label: "Archive" },
  { icon: <Trash2 size={18} />, label: "Trash" },
];

const categoryItems = [
  { icon: <Tag size={16} />, label: "Work" },
  { icon: <Bookmark size={16} />, label: "Personal" },
  { icon: <Star size={16} />, label: "Important" },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  function handleSignout() {
    logoutAction();
    toast.success("Successfully logged out!");
  }

  return (
    <aside className="w-64 h-screen bg-white fixed left-0 top-0 flex flex-col shadow-sm">
      <div className="px-6 py-3">
        <h1 className="text-rose-700 text-2xl font-bold flex items-center">
          <span className="bg-rose-100 text-rose-700 p-1 rounded mr-2 shadow-sm">M</span>
          Marqdown
        </h1>
      </div>

      <nav className="p-4 flex-1">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-2">Menu</p>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 text-left w-full p-3 rounded-lg font-medium relative overflow-hidden group"
              onMouseEnter={() => setActiveItem(`menu-${index}`)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>

              <div
                className={`absolute inset-0 bg-rose-50 transform transition-transform duration-300 ${
                  activeItem === `menu-${index}` ? "scale-x-100" : "scale-x-0 origin-left"
                }`}
              ></div>

              <div className="relative z-10 text-gray-500 group-hover:text-rose-600 transition-colors duration-75">
                {item.icon}
              </div>

              <span className="relative z-10 text-gray-700 group-hover:text-rose-700 transition-colors duration-75">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4 px-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</p>
            <button
              className="group relative flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute inset-0 rounded-full bg-rose-100 transform transition-all duration-300 ${
                  isHovered ? "scale-110" : "scale-0"
                }`}
              ></div>
              <div
                className={`relative z-10 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isHovered ? "bg-rose-500 text-white shadow-md" : "bg-rose-100 text-rose-600"
                }`}
              >
                <Plus size={14} className={`transition-transform duration-300 ${isHovered ? "rotate-90" : ""}`} />
              </div>

              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-rose-700 text-white text-xs py-1 px-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Add category
              </div>
            </button>
          </div>

          <div className="space-y-1">
            {categoryItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-3 text-left w-full p-2 px-3 rounded-lg relative overflow-hidden group"
                onMouseEnter={() => setActiveItem(`cat-${index}`)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>

                <div
                  className={`absolute inset-0 bg-rose-50 transform transition-transform duration-300 ${
                    activeItem === `cat-${index}` ? "scale-x-100" : "scale-x-0 origin-left"
                  }`}
                ></div>

                <div className="relative z-10 text-gray-500 group-hover:text-rose-600 transition-colors duration-75">
                  {item.icon}
                </div>

                <span className="relative z-10 text-sm text-gray-700 group-hover:text-rose-700 transition-colors duration-75">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100">
        <button
          className="flex items-center space-x-2 text-left w-full p-2 rounded-lg relative overflow-hidden group"
          onMouseEnter={() => setActiveItem("logout")}
          onMouseLeave={() => setActiveItem(null)}
          onClick={handleSignout}
        >
          <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>

          <div
            className={`absolute inset-0 bg-rose-50 transform transition-transform duration-300 ${
              activeItem === "logout" ? "scale-x-100" : "scale-x-0 origin-left"
            }`}
          ></div>

          <div className="relative z-10 text-gray-500 group-hover:text-rose-600 transition-colors duration-75">
            <LogOut size={18} />
          </div>

          <span className="relative z-10 font-medium text-gray-700 group-hover:text-rose-700 transition-colors duration-75">
            Sign out
          </span>
        </button>
      </div>
    </aside>
  );
}
