import { Plus } from "lucide-react";

export default function Notes() {
  return (
    <div className="p-6 relative">
      <div className="flex justify-end items-center mb-8">
        <button className="group relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-rose-100 transform transition-all duration-300 scale-0 group-hover:scale-110"></div>
          <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-md">
            <Plus size={20} className="transition-transform duration-300 group-hover:rotate-90" />
          </div>

          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-rose-700 text-white text-xs py-1 px-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Create note
          </div>
        </button>
      </div>
    </div>
  );
}
