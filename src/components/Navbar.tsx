import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://i.ibb.co/hVHLds9/IMG-7327.png" 
                alt="GMS Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link>
            <a href="/#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
            <a href="/#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <Link to="/achievements" className="text-gray-600 hover:text-purple-600 transition-colors">Achievements</Link>
            <Link to="/careers" className="text-gray-600 hover:text-purple-600 transition-colors">Careers</Link>
            <a href="/#admissions" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
            <a 
              href="/#admissions" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105"
            >
              Admissions Open
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">Home</Link>
            <a href="/#about" className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">About</a>
            <a href="/#features" className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">Features</a>
            <Link to="/achievements" className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">Achievements</Link>
            <Link to="/careers" className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">Careers</Link>
            <a href="/#admissions" className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors">Contact</a>
            <a href="/#admissions" className="block px-3 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-md transition-colors">Admissions Open</a>
          </div>
        </div>
      )}
    </nav>
  );
}