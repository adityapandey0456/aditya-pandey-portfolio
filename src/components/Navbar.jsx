import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with Small Profile Image */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full border-2 border-blue-500/50 overflow-hidden group-hover:scale-110 transition-transform">
            <img 
              src="/profile.jpg" 
              alt="Logo" 
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=A+P&background=3b82f6&color=fff"}
            />
          </div>
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            ADITYA PANDEY
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Skills", "Experience", "Projects", "Contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;