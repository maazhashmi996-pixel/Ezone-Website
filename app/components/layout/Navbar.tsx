import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 body-font">
    
      <div className="container mx-auto flex flex-row items-center justify-between h-24 px-6 md:px-12">
        
       
        <Link href="/" className="flex title-font font-black items-center text-white tracking-tighter cursor-pointer shrink-0">
          <span className="text-2xl md:text-3xl uppercase">
            E<span className="text-blue-500">zone</span>
          </span>
        </Link>

       
        <nav className="hidden lg:flex flex-wrap items-center text-base justify-center font-semibold text-gray-200 gap-10">
          <Link href="/" className="hover:text-blue-400 transition-colors cursor-pointer">Home</Link>
          <Link href="/destinations" className="hover:text-blue-400 transition-colors cursor-pointer">Study Destinations</Link>
          <Link href="/universities" className="hover:text-blue-400 transition-colors cursor-pointer">Universities</Link>
          <Link href="/services" className="hover:text-blue-400 transition-colors cursor-pointer">Services</Link>
        </nav>

       
        <div className="shrink-0">
          <button className="inline-flex items-center bg-blue-600 border-0 py-10 px-20 focus:outline-none hover:bg-blue-500 rounded-md text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all active:scale-95 uppercase tracking-widest">
            Get Started
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
      </div>
    </header>
  );
}