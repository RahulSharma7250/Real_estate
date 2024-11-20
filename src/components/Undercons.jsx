import React from "react";
import { Link } from "react-router-dom";
import apartment from "../assets/images/apartment.jpg";
import cons1 from "../assets/images/cons1.jpg";
import cons2 from "../assets/images/cons2.jpg";

export default function Component() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white p-8">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Find Your Future Home
        </h1>
        <p className="text-gray-600">
          Explore projects available now or in the near future
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl">
        {/* Ready to move */}
        <Link to="/ready-to-move" className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 bg-white border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 group-hover:from-yellow-100 transition-colors" />
          <div className="relative h-80 p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Ready to Move
              </h2>
              <p className="text-lg text-gray-600">20,000+ Properties</p>
            </div>
            <div className="relative h-40 mt-auto">
              <img
                src={apartment} // Using imported image
                alt="Ready to move properties"
                width="320"
                height="160"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Link>

        {/* Possession in 2024 */}
        <Link to="/possession-in-2024" className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 bg-white border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 group-hover:from-blue-100 transition-colors" />
          <div className="relative h-80 p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Possession in 2024
              </h2>
              <p className="text-lg text-gray-600">450+ Properties</p>
            </div>
            <div className="relative h-40 mt-auto">
              <img
                src={cons1} // Using imported image
                alt="2024 possession properties"
                width="320"
                height="160"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Link>

        {/* Possession in 2025 */}
        <Link to="/possession-in-2025" className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 bg-white border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-200 group-hover:from-green-100 transition-colors" />
          <div className="relative h-80 p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Possession in 2025
              </h2>
              <p className="text-lg text-gray-600">1,700+ Properties</p>
            </div>
            <div className="relative h-40 mt-auto">
              <img
                src={cons2} // Using imported image
                alt="2025 possession properties"
                width="320"
                height="160"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
