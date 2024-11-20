import React from "react";

const PropertyCardHorizontal = ({
  image,
  title,
  location,
  price,
  area,
  highlights,
  address,
  dealer,
}) => {
  return (
    <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden border flex mb-4">
      {/* Left Section: Image */}
      <div className="relative w-1/3">
        <img
          src={image}
          alt="Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          FEATURED
        </div>
        <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-75 text-white text-sm px-2 py-1 rounded">
          +6 more
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        {/* Property Details */}
        <div>
          <h2 className="text-gray-800 font-bold text-lg">{location}</h2>
          <p className="text-gray-600 text-sm">{title}</p>

          <div className="mt-2">
            <span className="text-lg font-semibold text-gray-800">{price}</span>
            <span className="text-sm text-gray-500"> + Deposit 4 months rent</span>
          </div>

          <div className="mt-1 text-sm text-gray-700">
            <strong>{area}</strong> | Carpet Area
          </div>

          <div className="mt-2">
            <span className="text-gray-600 text-sm font-semibold">
              Highlights:
            </span>
            <span className="ml-1 text-blue-600 text-sm">{highlights}</span>
          </div>

          <div className="mt-2 text-sm text-gray-600">{address}</div>
        </div>

        {/* Dealer and Buttons */}
        <div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              3w ago | <span className="text-yellow-500">FEATURED DEALER</span>
            </div>
            <span className="text-sm font-medium text-gray-800">{dealer}</span>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 bg-blue-600 text-white text-sm font-semibold py-2 rounded hover:bg-blue-700">
              View Number
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 text-sm font-semibold py-2 rounded hover:bg-blue-600 hover:text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyList = () => {
  const properties = [
    {
      image: "https://via.placeholder.com/400x200",
      location: "Wakad, Pune, Pune West",
      title: "Ready to move Office Space in Wakad, Pune",
      price: "₹2.85 Lac/month",
      area: "2,145 sqft (199 sqm)",
      highlights: "Power Back-up",
      address: "Address: Wakad Pune It is a spacious and thoughtfully designed...",
      dealer: "Ankit Khandel...",
    },
    {
      image: "https://via.placeholder.com/400x200",
      location: "Kothrud, Pune, Maharashtra",
      title: "Furnished Office Space in Kothrud",
      price: "₹1.50 Lac/month",
      area: "1,500 sqft (140 sqm)",
      highlights: "Parking Available",
      address: "Address: Kothrud Pune, near main road...",
      dealer: "Rahul Sharma",
    },
    {
      image: "https://via.placeholder.com/400x200",
      location: "Baner, Pune",
      title: "Spacious Office Space in Baner",
      price: "₹3.00 Lac/month",
      area: "3,000 sqft (278 sqm)",
      highlights: "CCTV Security",
      address: "Address: Baner Pune, near IT park...",
      dealer: "Nisha Jain",
    },
    {
      image: "https://via.placeholder.com/400x200",
      location: "Hinjewadi, Pune",
      title: "Modern Office in Hinjewadi",
      price: "₹4.20 Lac/month",
      area: "4,500 sqft (418 sqm)",
      highlights: "24/7 Power",
      address: "Address: Hinjewadi, near tech park...",
      dealer: "Sanjay Gupta",
    },
    {
      image: "https://via.placeholder.com/400x200",
      location: "Magarpatta, Pune",
      title: "Premium Office in Magarpatta City",
      price: "₹5.00 Lac/month",
      area: "5,000 sqft (465 sqm)",
      highlights: "Furnished & Ready to Use",
      address: "Address: Magarpatta Pune, premium location...",
      dealer: "Priya Desai",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-100 py-6">
      <div className="space-y-4 w-full max-w-5xl">
        {properties.map((property, index) => (
          <PropertyCardHorizontal key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
