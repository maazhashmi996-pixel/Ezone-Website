import Link from "next/link";

export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full h-20 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-black text-white">
          E<span className="text-blue-500">ZONE</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-white text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/destinations/poland">Destinations</Link>
          <Link href="/universities">Universities</Link>
        </div>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold text-sm">
          Get Started
        </button>

      </div>
    </nav>
  );
}