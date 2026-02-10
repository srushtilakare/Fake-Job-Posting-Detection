export default function Navbar() {
    return (
      <nav className="w-full px-6 py-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold text-red-600">
          JobGuard AI
        </h1>
  
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-black">Home</a>
          <a href="/detect" className="text-gray-700 hover:text-black">Detect Job</a>
        </div>
      </nav>
    );
  }
  