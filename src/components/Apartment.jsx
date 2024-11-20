import React, { useState } from "react";
import Navbar from './Navbar';
import { Heart, ChevronRight, X } from "lucide-react"; // Import the X icon for closing the popup

export default function Residential() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null); // Manage the selected property for the popup

  const openPopup = (property) => {
    setSelectedProperty(property);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProperty(null);
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* The rest of your page content */}
      <div className="w-full max-w-6xl mx-auto p-4">
        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 border-b border-gray-300">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-3 py-1 rounded-full hover:scale-105 transition-transform">
            <span className="mr-1">🔥</span> NEW LAUNCH
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors">Owner</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors">Verified</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors">Under construction</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors">Ready To Move</span>
          <span className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors">With Photos</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort By</span>
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </div>
        </div>

        {/* Property Cards */}
        <div className="space-y-6">
          {/* Property Card 1 */}
          <PropertyCard
            imageSrc="/placeholder.svg"
            altText="Vaichal Vastu KalpaVruksha"
            badges={["RERA", "ZERO BROKERAGE", "3D"]}
            name="Vaichal Vastu KalpaVruksha"
            location="1, 2 BHK Flat in Pirangut, Pune"
            prices={[{ type: "1 BHK", price: "₹31 L" }, { type: "2 BHK", price: "₹35 - 36 L" }]}
            description="Spacious 1,2 BHK apartments in Pirangut are available for..."
            builder="Vaichal Constructions"
            openPopup={openPopup} // Pass openPopup function to PropertyCard
          />

         <PropertyCard
            imageSrc="/placeholder.svg"
            altText="Vaichal Vastu KalpaVruksha"
            badges={["RERA", "ZERO BROKERAGE", "3D"]}
            name="Vaichal Vastu KalpaVruksha"
            location="1, 2 BHK Flat in Pirangut, Pune"
            prices={[{ type: "1 BHK", price: "₹31 L" }, { type: "2 BHK", price: "₹35 - 36 L" }]}
            description="Spacious 1,2 BHK apartments in Pirangut are available for..."
            builder="Vaichal Constructions"
            openPopup={openPopup} // Pass openPopup function to PropertyCard
          />

          <PropertyCard
            imageSrc="/placeholder.svg"
            altText="Vaichal Vastu KalpaVruksha"
            badges={["RERA", "ZERO BROKERAGE", "3D"]}
            name="Vaichal Vastu KalpaVruksha"
            location="1, 2 BHK Flat in Pirangut, Pune"
            prices={[{ type: "1 BHK", price: "₹31 L" }, { type: "2 BHK", price: "₹35 - 36 L" }]}
            description="Spacious 1,2 BHK apartments in Pirangut are available for..."
            builder="Vaichal Constructions"
            openPopup={openPopup} // Pass openPopup function to PropertyCard
          />

          

          {/* Other Property Cards */}
          {/* Add similar PropertyCard components for other properties here */}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button onClick={closePopup} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProperty.name}</h2>
            <p className="text-lg text-gray-700 mb-4">Contact Number: {selectedProperty.phoneNumber}</p>
            <button onClick={closePopup} className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-400 transition duration-200">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Property Card Component
function PropertyCard({ imageSrc, altText, badges, name, location, prices, description, builder, openPopup }) {
  return (
    <div className="flex border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
      {/* Image on the left */}
      <div className="relative w-1/2">
        <button className="absolute right-3 top-3 z-10 bg-white/80 hover:bg-white/90 rounded-full p-1 transition">
          <Heart className="h-6 w-6 text-pink-500 hover:scale-110" />
        </button>
        <div className="absolute left-3 top-3 z-10 flex gap-1">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full ${badge === "RERA" ? "bg-blue-500 text-white" : badge === "ZERO BROKERAGE" ? "bg-green-500 text-white" : badge === "3D" ? "bg-purple-500 text-white" : "bg-gray-300 text-black"}`}
            >
              {badge}
            </span>
          ))}
        </div>
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Text on the right */}
      <div className="w-1/2 p-6 bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full">NEW BOOKING</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {prices.map((price, index) => (
            <div key={index}>
              <p className="font-semibold text-gray-600">{price.type} Apartment</p>
              <p className="text-2xl font-bold text-gray-900">{price.price}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <p className="text-sm text-gray-500">Builder</p>
            <p className="font-semibold text-gray-700">{builder}</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
              Brochure
            </button>
            <button onClick={() => openPopup({ name, phoneNumber: "9876543210" })} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded hover:scale-105 transition-transform">
              View Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
