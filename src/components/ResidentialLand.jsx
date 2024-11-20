import { Heart, MapPin, ChevronRight } from "lucide-react";
import Navbar from './Navbar';

export default function Component() {
  return (
    <div>
        <Navbar />
    <div className="w-full max-w-5xl mx-auto p-4 bg-white text-gray-900">
      {/* Filter Navigation */}
      <nav className="flex items-center gap-3 overflow-x-auto pb-4 mb-6">
        <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full">
          <span className="mr-1">🔥</span> NEW LAUNCH
        </span>
        <span className="px-4 py-2 border border-gray-300 rounded-full">Owner</span>
        <span className="px-4 py-2 border border-gray-300 rounded-full">Corner Property</span>
        <span className="px-4 py-2 border border-gray-300 rounded-full">East-Facing</span>
        <span className="px-4 py-2 border border-gray-300 rounded-full">Gated</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort By</span>
          <ChevronRight className="h-4 w-4 text-gray-500" />
        </div>
      </nav>

      {/* Property Listings */}
      <div className="space-y-6">
        {/* Property Card */}
        {propertyData.map((property, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex p-6 space-x-6"
          >
            {/* Image */}
            <div className="w-1/3">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{property.name}</h2>
                <p className="text-md text-gray-500 flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-1" />
                  {property.location}
                </p>
                <p className="text-xl font-semibold text-gray-800">{property.price}</p>
                <p className="text-md text-gray-500">{property.nearby}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
                  Brochure
                </button>
                <button className="flex-1 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700">
                  View Number
                </button>
              </div>
            </div>

            {/* Favorite Icon */}
            <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white shadow">
              <Heart className="h-5 w-5 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

// Sample Property Data
const propertyData = [
  {
    image: "/placeholder.svg",
    name: "Paranjape Samara Hills",
    location: "Khed Shivapur, Pune",
    price: "₹54 - 87.51 L",
    nearby: "Nearby: Vikarao Bandal School, Destination Centre",
  },
  {
    image: "/placeholder.svg",
    name: "Paranjape Misty Greens",
    location: "Bhugaon, Bavdhan",
    price: "₹1.23 - 2.86 Cr",
    nearby: "Nearby: Ride N Joy, NMHS",
  },
  {
    image: "/placeholder.svg",
    name: "Island of Bliss",
    location: "Theur, Pune",
    price: "₹40.5 L",
    nearby: "Nearby: Chintamani School, MIT",
  },
];
