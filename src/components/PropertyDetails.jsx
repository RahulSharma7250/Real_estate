// import React, { useState } from 'react';
// import { Phone, ArrowLeft, Building, MapPin, Heart, Maximize2, ChevronRight, Car, Trees, Activity, WifiIcon, Shield, Sparkles, Share2 } from 'lucide-react';



// // Simple Tooltip component
// const Tooltip = ({ children, content }) => (
//   <div className="relative group">
//     {children}
//     <div className="absolute hidden group-hover:block bg-black text-white text-sm p-2 rounded shadow-lg z-10">
//       {content}
//     </div>
//   </div>
// );

// // Simple Badge component
// const Badge = ({ children, className }) => (
//   <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded ${className}`}>
//     {children}
//   </span>
// );

// // Simple Progress component
// const Progress = ({ value }) => (
//   <div className="relative w-full h-2 bg-gray-200 rounded">
//     <div
//       style={{ width: `${value}%` }}
//       className="absolute top-0 left-0 h-full bg-blue-600 rounded"
//     ></div>
//   </div>
// );

// export default function PropertyDetails({ id = "1" }) {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [liked, setLiked] = useState(false);

//   // Enhanced property data
//   const properties = {
//     1: {
//       name: "Kosmic Kourtyard Phase 2",
//       location: "Wagholi, Pune",
//       priceRange: "63.84 - 91.69",
//       type: "2, 3 BHK Apartments",
//       priceIncrease: "18.9%",
//       images: [
//         "/api/placeholder/800/600",
//         "/api/placeholder/800/600",
//         "/api/placeholder/800/600",
//         "/api/placeholder/800/600"
//       ],
//       description: "Luxurious apartments with modern amenities in the heart of Wagholi. Experience the perfect blend of comfort and contemporary living with our thoughtfully designed spaces.",
//       features: [
//         { icon: Shield, name: "24/7 Security", details: "Advanced surveillance systems" },
//         { icon: Activity, name: "Swimming Pool", details: "Temperature controlled" },
//         { icon: Building, name: "Club House", details: "5000 sq ft facility" },
//         { icon: Sparkles, name: "Gym", details: "State-of-the-art equipment" },
//         { icon: Trees, name: "Children's Play Area", details: "Safe and monitored" },
//         { icon: Car, name: "Parking", details: "2 per apartment" },
//         { icon: WifiIcon, name: "Smart Home", details: "IoT enabled" }
//       ],
//       configurations: [
//         { 
//           type: "2 BHK", 
//           size: "1050 sq ft", 
//           price: "63.84L",
//           bedrooms: 2,
//           bathrooms: 2,
//           balconies: 1,
//           facing: "East",
//           floorPlan: "/api/placeholder/400/300"
//         },
//         { 
//           type: "3 BHK", 
//           size: "1350 sq ft", 
//           price: "91.69L",
//           bedrooms: 3,
//           bathrooms: 3,
//           balconies: 2,
//           facing: "West",
//           floorPlan: "/api/placeholder/400/300"
//         }
//       ],
//       highlights: [
//         "IGBC Green Building Certified",
//         "Smart Home Technology",
//         "Zero Maintenance for 1 Year",
//         "Vastu Compliant Design"
//       ],
//       completion: {
//         status: "Under Construction",
//         progress: 65,
//         possession: "Dec 2025"
//       },
//       nearby: [
//         { type: "Schools", distance: "0.5 km" },
//         { type: "Hospitals", distance: "1.2 km" },
//         { type: "Metro Station", distance: "2 km" },
//         { type: "Shopping Mall", distance: "1.5 km" }
//       ]
//     }
//     // ... other properties
//   };

//   const property = properties[id];

//   if (!property) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h2>
//           <button 
//             onClick={() => window.history.back()} 
//             className="text-blue-600 hover:text-blue-800"
//           >
//             Return to Listings
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-6">
//           <button 
//             onClick={() => window.history.back()} 
//             className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Listings
//           </button>
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div>
//               <div className="flex items-center gap-3">
//                 <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
//                 <Badge className="bg-green-500">{property.completion.status}</Badge>
//               </div>
//               <div className="flex items-center text-gray-600 mt-2">
//                 <MapPin className="w-4 h-4 mr-2" />
//                 <span>{property.location}</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <Tooltip content={liked ? 'Remove from favorites' : 'Add to favorites'}>
//                 <button 
//                   onClick={() => setLiked(!liked)}
//                   className={`p-3 rounded-full border transition-all ${
//                     liked ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
//                   }`}
//                 >
//                   <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'}`} />
//                 </button>
//               </Tooltip>
              
//               <Tooltip content="Share property">
//                 <button className="p-3 rounded-full bg-gray-50 border border-gray-200">
//                   <Share2 className="w-5 h-5 stroke-gray-600" />
//                 </button>
//               </Tooltip>

//               <button className="flex items-center bg-amber-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-amber-400 transition-all duration-200">
//                 <Phone className="w-5 h-5 mr-2" />
//                 Contact Builder
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Image Gallery */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
//                 <img 
//                   src={property.images[selectedImage]} 
//                   alt={`${property.name} view ${selectedImage + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
//                   <Maximize2 className="w-5 h-5" />
//                 </button>
//               </div>
//               <div className="grid grid-cols-4 gap-4">
//                 {property.images.map((img, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedImage(idx)}
//                     className={`relative aspect-video rounded-lg overflow-hidden ${
//                       selectedImage === idx ? 'ring-2 ring-blue-500' : ''
//                     }`}
//                   >
//                     <img 
//                       src={img} 
//                       alt={`${property.name} thumbnail ${idx + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* About */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-2xl font-semibold mb-4">About the Property</h2>
//               <p className="text-gray-600 mb-6">{property.description}</p>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                 {property.highlights.map((highlight, idx) => (
//                   <div key={idx} className="bg-blue-50 px-4 py-2 rounded-md text-sm font-medium text-blue-700">
//                     {highlight}
//                   </div>
//                 ))}
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Completion Status</h3>
//                 <Progress value={property.completion.progress} />
//                 <p className="text-gray-500 text-sm mt-2">Expected possession: {property.completion.possession}</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             {/* Property Details */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {property.features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-3 text-gray-700">
//                     <feature.icon className="w-5 h-5" />
//                     <span>{feature.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Nearby Locations */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-2xl font-semibold mb-4">Nearby Locations</h2>
//               <ul className="space-y-2">
//                 {property.nearby.map((place, idx) => (
//                   <li key={idx} className="flex items-center gap-3">
//                     <ChevronRight className="w-5 h-5 text-gray-400" />
//                     <span className="text-gray-600">{place.type} - {place.distance}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Phone, ArrowLeft, Building, MapPin, Heart, Maximize2, ChevronRight, Car, Trees, Activity, WifiIcon, Shield, Sparkles, Share2 } from 'lucide-react';
import Navbar from './Navbar'; // Import the Header component
import build1 from "../assets/images/build1.jpg";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";
// Simple Tooltip component
const Tooltip = ({ children, content }) => (
  <div className="relative group">
    {children}
    <div className="absolute hidden group-hover:block bg-black text-white text-sm p-2 rounded shadow-lg z-10">
      {content}
    </div>
  </div>
);

// Simple Badge component
const Badge = ({ children, className }) => (
  <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded ${className}`}>
    {children}
  </span>
);

// Simple Progress component
const Progress = ({ value }) => (
  <div className="relative w-full h-2 bg-gray-200 rounded">
    <div
      style={{ width: `${value}%` }}
      className="absolute top-0 left-0 h-full bg-blue-600 rounded"
    ></div>
  </div>
);

export default function PropertyDetails({ id = "1" }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  // Enhanced property data
  const properties = {
    1: {
      name: "Kosmic Kourtyard Phase 2",
      location: "Wagholi, Pune",
      priceRange: "63.84 - 91.69",
      type: "2, 3 BHK Apartments",
      priceIncrease: "18.9%",
      images: [
        build1,
        room1,
        room2,
        room3
      ],
      description: "Luxurious apartments with modern amenities in the heart of Wagholi. Experience the perfect blend of comfort and contemporary living with our thoughtfully designed spaces.",
      features: [
        { icon: Shield, name: "24/7 Security", details: "Advanced surveillance systems" },
        { icon: Activity, name: "Swimming Pool", details: "Temperature controlled" },
        { icon: Building, name: "Club House", details: "5000 sq ft facility" },
        { icon: Sparkles, name: "Gym", details: "State-of-the-art equipment" },
        { icon: Trees, name: "Children's Play Area", details: "Safe and monitored" },
        { icon: Car, name: "Parking", details: "2 per apartment" },
        { icon: WifiIcon, name: "Smart Home", details: "IoT enabled" }
      ],
      configurations: [
        { 
          type: "2 BHK", 
          size: "1050 sq ft", 
          price: "63.84L",
          bedrooms: 2,
          bathrooms: 2,
          balconies: 1,
          facing: "East",
          floorPlan: "/api/placeholder/400/300"
        },
        { 
          type: "3 BHK", 
          size: "1350 sq ft", 
          price: "91.69L",
          bedrooms: 3,
          bathrooms: 3,
          balconies: 2,
          facing: "West",
          floorPlan: "/api/placeholder/400/300"
        }
      ],
      highlights: [
        "IGBC Green Building Certified",
        "Smart Home Technology",
        "Zero Maintenance for 1 Year",
        "Vastu Compliant Design"
      ],
      completion: {
        status: "Under Construction",
        progress: 65,
        possession: "Dec 2025"
      },
      nearby: [
        { type: "Schools", distance: "0.5 km" },
        { type: "Hospitals", distance: "1.2 km" },
        { type: "Metro Station", distance: "2 km" },
        { type: "Shopping Mall", distance: "1.5 km" }
      ]
    }
    // ... other properties
  };

  const property = properties[id];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h2>
          <button 
            onClick={() => window.history.back()} 
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="bg-white shadow-md mt-16"> {/* Adjust margin if Header overlaps */}
        <div className="container mx-auto px-4 py-6">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </button>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
                <Badge className="bg-green-500">{property.completion.status}</Badge>
              </div>
              <div className="flex items-center text-gray-600 mt-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Tooltip content={liked ? 'Remove from favorites' : 'Add to favorites'}>
                <button 
                  onClick={() => setLiked(!liked)}
                  className={`p-3 rounded-full border transition-all ${
                    liked ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'}`} />
                </button>
              </Tooltip>
              
              <Tooltip content="Share property">
                <button className="p-3 rounded-full bg-gray-50 border border-gray-200">
                  <Share2 className="w-5 h-5 stroke-gray-600" />
                </button>
              </Tooltip>

              <button className="flex items-center bg-amber-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-amber-400 transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Contact Builder
              </button>
            </div>
          </div>
        </div>
      </div>    
{/* Main Content */}
<div className="container mx-auto px-4 py-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Left Column */}
  <div className="lg:col-span-2 space-y-8">
    {/* Image Gallery */}
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <img 
          src={property.images[selectedImage]} 
          alt={`${property.name} view ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {property.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative aspect-video rounded-lg overflow-hidden ${
              selectedImage === idx ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img 
              src={img} 
              alt={`${property.name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>

    {/* About */}
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">About the Property</h2>
      <p className="text-gray-600 mb-6">{property.description}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {property.highlights.map((highlight, idx) => (
          <div key={idx} className="bg-blue-50 px-4 py-2 rounded-md text-sm font-medium text-blue-700">
            {highlight}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Completion Status</h3>
        <Progress value={property.completion.progress} />
        <p className="text-gray-500 text-sm mt-2">Expected possession: {property.completion.possession}</p>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-8">
    {/* Property Details */}
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
      <div className="grid grid-cols-2 gap-4">
        {property.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 text-gray-700">
            <feature.icon className="w-5 h-5" />
            <span>{feature.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Nearby Locations */}
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Nearby Locations</h2>
      <ul className="space-y-2">
        {property.nearby.map((place, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600">{place.type} - {place.distance}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</div>
</div>
);
}
