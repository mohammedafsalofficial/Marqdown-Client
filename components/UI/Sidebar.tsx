import { Archive, Home, Trash2, Tag, Bookmark, Star, Plus, Clock, Notebook } from "lucide-react";
import Link from "next/link";
import SignoutButton from "./SignoutButton";

const menuItems = [
  { icon: <Home size={18} />, label: "Home", href: "/" },
  { icon: <Notebook size={18} />, label: "All Notes", href: "/notes" },
  { icon: <Clock size={18} />, label: "Recent", href: "/recent" },
  { icon: <Archive size={18} />, label: "Archive", href: "/archive" },
  { icon: <Trash2 size={18} />, label: "Trash", href: "/trash" },
];

const categoryItems = [
  { icon: <Tag size={16} />, label: "Work", href: "/category/work" },
  { icon: <Bookmark size={16} />, label: "Personal", href: "/category/bookmark" },
  { icon: <Star size={16} />, label: "Important", href: "/category/favourites" },
];

export default function Sidebar() {
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
            <Link
              key={index}
              href={item.href}
              className="flex items-center space-x-3 text-left w-full p-3 rounded-lg font-medium relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>

              <div className="absolute inset-0 bg-rose-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="relative z-10 text-gray-500 group-hover:text-rose-600 transition-colors duration-75">
                {item.icon}
              </div>

              <span className="relative z-10 text-gray-700 group-hover:text-rose-700 transition-colors duration-75">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4 px-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</p>
            <button className="group relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-rose-100 transform scale-0 group-hover:scale-110 transition-all duration-300"></div>

              <div className="relative z-10 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-md">
                <Plus size={14} className="transition-transform duration-300 group-hover:rotate-90" />
              </div>

              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-rose-700 text-white text-xs py-1 px-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Add category
              </div>
            </button>
          </div>

          <div className="space-y-1">
            {categoryItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-3 text-left w-full p-2 px-3 rounded-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-75"></div>

                <div className="absolute inset-0 bg-rose-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="relative z-10 text-gray-500 group-hover:text-rose-600 transition-colors duration-75">
                  {item.icon}
                </div>

                <span className="relative z-10 text-sm text-gray-700 group-hover:text-rose-700 transition-colors duration-75">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100">
        <SignoutButton />
      </div>
    </aside>
  );
}
