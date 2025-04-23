export default function NavbarSkeleton() {
  return (
    <nav className="h-16 px-6 md:px-10 flex items-center justify-between bg-white shadow-sm animate-pulse">
      <div className="h-4 w-64 md:w-80 bg-gray-200 rounded" />

      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <div className="w-8 h-8 bg-gray-200 rounded-full" />

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="hidden md:block space-y-1">
            <div className="w-24 h-3 bg-gray-200 rounded" />
            <div className="w-32 h-2 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </nav>
  );
}
