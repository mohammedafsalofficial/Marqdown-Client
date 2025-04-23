import NavbarSkeleton from "@/components/skeletonUI/NavbarSkeleton";
import Navbar from "@/components/UI/Navbar";
import Sidebar from "@/components/UI/Sidebar";
import React, { Suspense } from "react";

export default function ApplicationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white min-h-screen flex">
      <Sidebar />

      <div className="h-screen bg-gray-100 w-px"></div>

      <main className="flex-1 ml-64">
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar />
        </Suspense>

        {children}
      </main>
    </div>
  );
}
