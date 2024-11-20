import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Listing() {
  const [currentSlide, setCurrentSlide] = useState(0);  // Handle slide changes
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false); // Loader state
  const [showContactNumber, setShowContactNumber] = useState(false); // Show contact message state

  const properties = [
    { id: 1, name: "Kosmic Kourtyard Phase 2", location: "Wagholi, Pune", priceRange: "63.84 - 91.69", type: "2, 3 BHK Apartments", priceIncrease: "18.9%", image: "/placeholder.svg?height=200&width=200", phoneNumber: "+91 9876543210" },
    { id: 2, name: "Sankalp Alyssum", location: "Dudulgaon, Pune", priceRange: "48 - 67.84", type: "2, 3 BHK Apartments", priceIncrease: "7.8%", image: "/placeholder.svg?height=200&width=200", phoneNumber: "+91 9123456789" },
    { id: 3, name: "Urban Skyline", location: "Ravet, Pune", priceRange: "85.5 - 150.3", type: "2, 3, 4 BHK Apartments", priceIncrease: "10.2%", image: "/placeholder.svg?height=200&width=200", phoneNumber: "+91 9012345678" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Construct WhatsApp message
    const phoneNumber = '919604902393';
    const message = `*New Lead from Property Listing*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nProperty Interested: ${selectedProperty.name}\nLocation: ${selectedProperty.location}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);

    // Simulate API call with setTimeout
    setTimeout(() => {
      setLoading(false); // Stop loading
      setShowContactNumber(true); // Show contact number message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  const openPopup = (property) => {
    setSelectedProperty(property);
    setShowPopup(true);
    setShowContactNumber(false); // Reset the contact number message display
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProperty(null);
    setFormData({ name: '', email: '', phone: '' }); // Reset form
    setLoading(false); // Reset loading state
    setShowContactNumber(false); // Reset contact number message
  };

  // Slide change functions
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + properties.length) % properties.length);
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100 px-4 py-12">
      <div className="container mx-auto">
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                width: `${(properties.length / 3) * 100}%`,
              }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/3"
                  style={{ flex: `0 0 ${100 / 3}%` }}
                >
                  <div className="bg-white shadow-2xl rounded-lg p-8 hover:shadow-blue-400/20 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-end mb-4">
                      <span className="text-xs font-semibold bg-amber-100 text-amber-700 py-1 px-3 rounded-full shadow-sm hover:bg-amber-200">
                        NEW LAUNCH
                      </span>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <Link to={`/property/${property.id}`} className="block">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-gray-100">
                          <img src={property.image} alt={property.name} className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
                        </div>
                      </Link>
                      <div>
                        <Link to={`/property/${property.id}`} className="block">
                          <h2 className="font-semibold text-xl text-gray-800">{property.name}</h2>
                          <p className="text-gray-500 text-sm">{property.location}</p>
                        </Link>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4 text-gray-600">
                      <div>
                        <Link to={`/property/${property.id}`} className="block">
                          <p className="text-lg font-semibold text-gray-700">₹ {property.priceRange} L</p>
                          <p className="text-sm">{property.type}</p>
                        </Link>
                      </div>
                      <div className="text-emerald-600 text-sm font-medium text-right">
                        {property.priceIncrease}
                        <div className="text-xs text-gray-500">price increase in 3 months</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-blue-700 font-medium">
                        Preferred options <br /> @zero brokerage
                      </p>
                      <button onClick={() => openPopup(property)} className="flex items-center bg-amber-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-amber-400 transition-all duration-200">
                        <Phone className="w-4 h-4 mr-2" />
                        View Number
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="flex justify-between mt-4">
          <button onClick={prevSlide} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
          <button onClick={nextSlide} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>

        {/* Popup */}
        {showPopup && selectedProperty && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg shadow-lg max-w-md w-full relative">
              <button onClick={closePopup} className="absolute top-3 right-3 text-white hover:text-gray-200">
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold text-white mb-6">{selectedProperty.name}</h2>

              {/* Show contact number message */}
              {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg shadow-lg max-w-md w-full relative">
      <button onClick={closePopup} className="absolute top-3 right-3 text-white hover:text-gray-200">
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-2xl font-bold text-white mb-6">Interested Property</h2>

      {showContactNumber ? (
        <p className="text-lg text-white mb-4">Contact Number: {selectedProperty?.phoneNumber}</p>
      ) : (
        <>
          {/* Dropdown for property selection */}
          <div className="flex flex-col mb-6">
            <label htmlFor="property" className="text-white text-sm mb-2">Select Property</label>
            <select
              id="property"
              className="px-4 py-2 rounded-md text-gray-800 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={selectedProperty?.id || ""}
              onChange={(e) => {
                const propertyId = parseInt(e.target.value, 10);
                const property = properties.find((p) => p.id === propertyId);
                setSelectedProperty(property || null);
              }}
              required
            >
              <option value="" disabled>
                Choose a property
              </option>
              {properties.map((property) => (
                <option key={property.id} value={property.id}>
                  {property.name} ({property.location})
                </option>
              ))}
            </select>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white text-sm">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-4 py-2 rounded-md text-gray-800 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white text-sm">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-2 rounded-md text-gray-800 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white text-sm">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-4 py-2 rounded-md text-gray-800 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            {/* Dropdown for time duration */}
          <div className="flex flex-col mb-6">
            <label htmlFor="duration" className="text-white text-sm mb-2">Select Time Duration</label>
            <select
              id="duration"
              className="px-4 py-2 rounded-md text-gray-800 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option value="" disabled>
                Choose duration
              </option>
              <option value="1-month">1 Month</option>
              <option value="3-months">3 Months</option>
              <option value="6-months">6 Months</option>
            </select>
          </div>


            <div className="flex justify-center">
              <button type="submit" className="bg-emerald-500 text-white px-8 py-2 rounded-lg shadow-md hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  </div>
)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
