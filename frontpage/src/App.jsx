import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#fdf7f4] flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-orange-500 text-white px-3 py-1 rounded-lg">RH</div>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-black font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">Projects</a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center text-center lg:text-left mt-10 w-full max-w-6xl">
        <div className="max-w-lg">
          <p className="text-sm text-orange-500 uppercase font-semibold">Full-Stack & App Developer</p>
          <h1 className="text-5xl font-bold text-gray-900 mt-2 leading-tight">Hii, <br /> <span className="text-gray-800">Sanket Chaudhari</span></h1>
          <p className="mt-4 text-gray-700 text-lg">
            A full stack developer and student from South Africa currently based in Manchester studying towards a BSc (Hons) Computer Science.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600">Contact Me</button>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800">Download CV</button>
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0">
          <div className="relative w-64 h-64">
            {/* Your Image Added Here */}
            <img
              src="frontpage/src/assets/profile.png"  // Make sure profile.png is inside the public folder
              alt="Sanket Chaudhari"
              className="rounded-xl w-full h-full object-cover shadow-lg border-4 border-orange-500"
            />
            <div className="absolute -top-3 -right-3 bg-white px-3 py-2 rounded-lg shadow-md text-center border border-gray-300">
              <p className="text-xl font-bold text-orange-500">6</p>
              <p className="text-gray-700 text-sm">Years of Experience</p>
            </div>
            <div className="absolute bottom-0 left-0 bg-white px-3 py-2 rounded-lg shadow-md text-center border border-gray-300">
              <p className="text-xl font-bold text-orange-500">15</p>
              <p className="text-gray-700 text-sm">Technologies & Languages</p>
            </div>
            <div className="absolute -bottom-3 right-0 bg-white px-3 py-2 rounded-lg shadow-md text-center border border-gray-300">
              <p className="text-xl font-bold text-orange-500">5th</p>
              <p className="text-gray-700 text-sm">on App Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
