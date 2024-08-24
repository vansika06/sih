import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-lg font-bold">YourLogo</h1>
            <p className="text-sm">© 2024 YourCompany. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="text-sm hover:text-blue-400">About Us</a>
            <a href="#privacy" className="text-sm hover:text-blue-400">Privacy Policy</a>
            <a href="#terms" className="text-sm hover:text-blue-400">Terms of Service</a>
            <a href="#contact" className="text-sm hover:text-blue-400">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Follow us on:
            <a href="https://facebook.com" className="ml-2 hover:text-blue-400">Facebook</a>,
            <a href="https://twitter.com" className="ml-2 hover:text-blue-400">Twitter</a>,
            <a href="https://instagram.com" className="ml-2 hover:text-blue-400">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
