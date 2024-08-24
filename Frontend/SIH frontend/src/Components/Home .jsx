import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome to Your Project</h2>
          <p className="text-gray-600 mt-4">Build the future of secure authentication with our advanced face detection technology.</p>
          <button className="mt-8 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Get Started
          </button>
        </div>
      </section>
      <section id="features" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Features</h3>
          <div className="flex flex-col items-center mt-8 space-y-8">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="fade-left">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">Fast Liveness Detection</h4>
                <p className="text-gray-600 mt-2">Ensure users are real and present with our lightning-fast liveness detection.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="fade-right" data-aos-delay="100">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">Easy Integration</h4>
                <p className="text-gray-600 mt-2">Integrate our solution easily into your web application with minimal setup.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="fade-left" data-aos-delay="100">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">High Accuracy</h4>
                <p className="text-gray-600 mt-2">Experience high accuracy in detecting face spoofing and ensuring security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
