export default function Navbar() {
  return (
    <nav className="backdrop-blur-lg bg-white/70 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
          JobGuard AI
        </h1>

        <div className="space-x-8 text-sm font-medium">
          <a
            href="/"
            className="text-gray-700 hover:text-red-600"
          >
            Home
          </a>
          <a
            href="/detect"
            className="text-gray-700 hover:text-red-600"
          >
            Detect Job
          </a>
        </div>
      </div>
    </nav>
  );
}
