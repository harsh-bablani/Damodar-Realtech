import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="/logo.jpeg"
              alt="Damodar Realtech"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('directors')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Leadership
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('directors')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              Leadership
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
