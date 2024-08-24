import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">UIDAI Face Auth</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-blue-200">Features</a></li>
              <li><a href="#about" className="hover:text-blue-200">About</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Secure Face Authentication</h1>
          <p className="text-xl mb-8">Powered by Advanced Liveness Detection Technology</p>
          <Link to="/demo" className="bg-white text-blue-500 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">
            Try Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Browser-Based</h3>
              <p>Authenticate from any device using your web browser.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Liveness Detection</h3>
              <p>Advanced AI prevents spoofing attempts for enhanced security.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-4">Fast & Efficient</h3>
              <p>Quick authentication process completed within seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About UIDAI Face Authentication</h2>
          <p className="text-center max-w-2xl mx-auto">
            UIDAI's Face Authentication platform is a cutting-edge solution that enables Aadhaar number holders to securely authenticate using facial recognition technology. Our system uses advanced liveness detection to ensure the highest level of security and prevent fraud.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="mb-4">Have questions or need support? Reach out to us.</p>
          <a href="mailto:support@uidai.gov.in" className="text-blue-500 hover:underline">support@uidai.gov.in</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 UIDAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;