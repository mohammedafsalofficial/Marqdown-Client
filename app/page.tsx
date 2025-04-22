import NavbarSkeleton from "@/components/skeletonUI/NavbarSkeleton";
import Navbar from "@/components/UI/Navbar";
import Sidebar from "@/components/UI/Sidebar";
import { Plus, Clock, Star, Edit3 } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="bg-white min-h-screen flex">
      <Sidebar />

      <div className="h-screen bg-gray-100 w-px"></div>

      <main className="flex-1 ml-64">
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>

        <div className="p-6 relative">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center mb-4">
                <Clock size={18} className="text-rose-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Recent Notes</h2>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium group-hover:text-rose-600 transition-colors">Meeting Notes {item}</h3>
                      <span className="text-xs text-gray-400">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      These are the notes from our team meeting discussing the project roadmap and upcoming
                      milestones...
                    </p>
                  </div>
                ))}
                <button className="text-sm text-rose-600 hover:text-rose-700 font-medium flex items-center mt-2">
                  View all recent notes
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center mb-4">
                <Star size={18} className="text-rose-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Starred Notes</h2>
              </div>
              <div className="space-y-3">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium group-hover:text-rose-600 transition-colors">
                        Important Document {item}
                      </h3>
                      <span className="text-xs text-gray-400">1 week ago</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      This document contains critical information about our project requirements and deadlines...
                    </p>
                  </div>
                ))}
                <button className="text-sm text-rose-600 hover:text-rose-700 font-medium flex items-center mt-2">
                  View all starred notes
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex items-center mb-4">
              <Edit3 size={18} className="text-rose-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Recently Edited</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer group"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium group-hover:text-rose-600 transition-colors">Note {item}</h3>
                    <span className="text-xs text-gray-400">
                      {item} hour{item !== 1 ? "s" : ""} ago
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
