import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/">YourLogo</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link to="/uploadphoto" className="text-gray-600 hover:text-blue-500">
              Upload Photo
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-blue-500">
              Features
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-500">
              Login
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-expanded={isOpen}>
              <div className="text-gray-800 text-xl">
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
        <div className={`md:hidden transition-transform ${isOpen ? "transform translate-y-0" : "transform -translate-y-full"} bg-white shadow-lg`}>
          <div className="py-4">
            <Link to="/" className="block py-2 text-gray-600 hover:text-blue-500" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/uploadphoto" className="block py-2 text-gray-600 hover:text-blue-500" onClick={toggleMenu}>
              Upload Photo
            </Link>
            <Link to="/features" className="block py-2 text-gray-600 hover:text-blue-500" onClick={toggleMenu}>
              Features
            </Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-500" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/login" className="block py-2 text-gray-600 hover:text-blue-500" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
