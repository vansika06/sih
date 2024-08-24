import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10 m-7">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <a href="/">YourLogo</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="#features" className="text-gray-600 hover:text-blue-500">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
            <a href="#login" className="text-gray-600 hover:text-blue-500">Login</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {/* Simple toggle icon */}
              <div className="text-gray-800">
                {isOpen ? (
                  <span className="block">✖</span>
                ) : (
                  <span className="block">☰</span>
                )}
              </div>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <a href="/" className="block py-2 text-gray-600 hover:text-blue-500">Home</a>
            <a href="#about" className="block py-2 text-gray-600 hover:text-blue-500">About</a>
            <a href="#features" className="block py-2 text-gray-600 hover:text-blue-500">Features</a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-500">Contact</a>
            <a href="#login" className="block py-2 text-gray-600 hover:text-blue-500">Login</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
