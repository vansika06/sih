import React, { useEffect } from "react";
import './Landing.css'

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Whether animations should happen only once or every time you scroll up/down
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <section className="text-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <div class="wrapper text-2xl">
              <div class="typing-demo">Secure Face authentication</div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://cdn.hyperverge.co/wp-content/uploads/2023/06/face-auth.webp"
              className="w-full h-auto md:w-3/4 lg:w-2/3"
              alt="Secure Face Authentication"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
            Key Features
          </h2>
          <div className="flex flex-col items-center mt-8 space-y-8">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4" data-aos="fade-up">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">
                  Fast Liveness Detection
                </h4>
                <p className="text-gray-600 mt-2">
                  Ensure users are real and present with our lightning-fast
                  liveness detection.
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">
                  Easy Integration
                </h4>
                <p className="text-gray-600 mt-2">
                  Integrate our solution easily into your web application with
                  minimal setup.
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">
                  High Accuracy
                </h4>
                <p className="text-gray-600 mt-2">
                  Experience high accuracy in detecting face spoofing and
                  ensuring security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="steps" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
            How It Works
          </h2>

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex justify-center mb-24"
          >
            <img
              src="https://images.pexels.com/photos/3585014/pexels-photo-3585014.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Upload Your Image"
              className="w-32 h-32 md:w-48 md:h-48 mr-20 lg:w-64 lg:h-64 rounded-lg shadow-lg"
            />
            <h1 className="text-5xl font-extrabold text-white mt-20">
              1. Upload an Image
            </h1>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="flex justify-center mb-24 "
          >
            <h1 className="text-5xl font-extrabold text-white mt-20">
              2. Enable Webcam
            </h1>
            <img
              src="https://th.bing.com/th/id/OIP.fk_UR518-btWdflRVh4sIQHaEK?rs=1&pid=ImgDetMain"
              alt="Upload Your Image"
              className="w-32 h-32 md:w-48 md:h-48 ml-20 lg:w-64 lg:h-64 rounded-lg shadow-lg"
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex justify-center mb-24 "
          >
            {" "}
            <img
              src="https://th.bing.com/th/id/OIP.ppjMDonXVr-2EOykcrwRZgHaE8?rs=1&pid=ImgDetMain "
              alt="Upload Your Image"
              className="w-44 h-32 md:w-48 md:h-48 mr-20 lg:w-64 lg:h-64 rounded-lg shadow-lg"
            />
            <h1 className="text-5xl font-extrabold text-white mt-20">
              3. Authentication
            </h1>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            About UIDAI Face Authentication
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            UIDAI's Face Authentication platform is a cutting-edge solution that
            enables Aadhaar number holders to securely authenticate using facial
            recognition technology. Our system uses advanced liveness detection
            to ensure the highest level of security and prevent fraud.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="mb-4">
            Have questions or need support? Reach out to us.
          </p>
          <a
            href="mailto:support@uidai.gov.in"
            className="text-blue-500 hover:underline"
          >
            support@uidai.gov.in
          </a>
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
