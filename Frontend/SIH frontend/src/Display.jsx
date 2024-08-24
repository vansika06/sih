// Layout.jsx
import React from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";

const Display = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-4">{children}</main>
      <Footer />
    </>
  );
};

export default Display;
