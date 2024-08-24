import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

const Display = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded shadow-lg w-full max-w-5xl">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Display;
