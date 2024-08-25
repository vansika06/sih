import React, { useState } from "react";

const PhotoUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setIsUploaded(false); // Reset the uploaded state when a new file is selected
  };

  const handleUpload = () => {
    if (file) {
      console.log("File uploaded successfully");
      setIsUploaded(true);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#1E201E]">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-xl w-full">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">
            Let's check the photo verification
            <br>
            </br>
            Upload Your Photo
          </h2>
          <div className="text-center mb-6">
            <div
              className={`w-32 h-32 flex items-center justify-center bg-gray-100 text-gray-400 rounded-full mx-auto ${
                file ? "bg-gray-200" : ""
              }`}
            >
              {file ? (
                <img
                  src={file}
                  alt="Uploaded preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-lg">No Image</span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="file-upload"
            >
              Choose a file
            </label>
            <input
              type="file"
              accept="image/*"
              id="file-upload"
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300  cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {file && (
            <div className="text-center mb-6">
              <span className="text-green-500 text-3xl">✔️</span>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={handleUpload}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-colors"
            >
              Upload Photo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoUploadComponent;
