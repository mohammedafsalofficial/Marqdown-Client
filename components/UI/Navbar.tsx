import type { UserData } from "@/types/user";
import { axiosInstance } from "@/utils/axiosInstance";
import { getInitials } from "@/utils/userUtils";
import { Bell, Search, Settings, User } from "lucide-react";
import { cookies } from "next/headers";

export default async function Navbar() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;

  const response = await axiosInstance.get("/user/getUser", {
    headers: { Authorization: `Bearer ${authToken}` },
  });

  const { fullName, email } = response.data as UserData;

  return (
    <nav className="h-16 px-6 md:px-10 flex items-center justify-between bg-white shadow-sm">
      <div className="hidden md:flex items-center relative w-64 lg:w-80">
        <div className="absolute left-3 text-gray-400">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full py-2 pl-10 pr-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-rose-200 focus:border-rose-400 text-sm"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Settings size={20} className="text-gray-600" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 font-medium">
            {getInitials(fullName)}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">{fullName}</p>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
