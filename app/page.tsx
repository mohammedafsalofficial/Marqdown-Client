import NavbarSkeleton from "@/components/skeletonUI/NavbarSkeleton";
import Navbar from "@/components/UI/Navbar";
import Sidebar from "@/components/UI/Sidebar";
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

        <div className="p-6">
          <h1 className="text-2xl font-semibold">Home page</h1>
        </div>
      </main>
    </section>
  );
}
