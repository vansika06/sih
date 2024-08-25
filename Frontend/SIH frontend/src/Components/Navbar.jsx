import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">
          <Link to="/">YourLogo</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link to="/uploadphoto" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Upload Photo
          </Link>
          <a href="https://google.com" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Testing
          </a>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Contact
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-expanded={isOpen}>
            <div className="text-gray-800 text-2xl">
              {isOpen ? <span className="block">✖</span> : <span className="block">☰</span>}
            </div>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transform ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500 ease-in-out bg-white shadow-lg fixed top-16 left-0 w-full z-10`}
      >
        <div className="py-4 space-y-2 text-center">
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/uploadphoto"
            className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Upload Photo
          </Link>
          <Link
            to="/features"
            className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block py-2 text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
