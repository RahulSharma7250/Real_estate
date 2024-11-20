// PropertyCarousel.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import apartment from "../assets/images/apartment.jpg";
import land from "../assets/images/land.jpg";
import apar from "../assets/images/apar.jpg";
import rk from "../assets/images/rk.jpg";

function PropertyCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const properties = [
      {
        name: "residential-apartment",
        title: "Residential Apartment",
        count: "1,900+ Properties",
        image: apartment,
        backgroundColor: "bg-blue-50",
      },
      {
        name: "residential-land",
        title: "Residential Land",
        count: "1,900+ Properties",
        image: land,
        backgroundColor: "bg-blue-50",
      },
      {
        name: "1rk-apartment",
        title: "1RK Apartment",
        count: "1,900+ Properties",
        image: rk,
        backgroundColor: "bg-blue-50",
      },
      {
        name: "serviced-apartment",
        title: "Serviced Apartment",
        count: "1,900+ Properties",
        image: apar,
        backgroundColor: "bg-blue-50",
      },
      {
        name: "independent-house-villa",
        title: "Independent House/Villa",
        count: "1,100+ Properties",
        image: apar,
        backgroundColor: "bg-green-50",
      },
    ];

    const propertiesPerSlide = 3;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + propertiesPerSlide) % properties.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - propertiesPerSlide + properties.length) % properties.length);
    };

    return (
      <div className="w-full px-4 py-8">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Apartments, Villas and more</h1>
          <p className="text-slate-600 mb-8">in Pune</p>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${(currentSlide / properties.length) * 100}%)`,
                  width: `${(properties.length / propertiesPerSlide) * 100}%`,
                }}
              >
                {properties.map((property, index) => (
                  <Link
                    key={index}
                    to={`/properties/${property.name}`}
                    className="w-full px-2 md:w-1/3"
                    style={{ flex: `0 0 ${100 / propertiesPerSlide}%` }}
                  >
                    <div className={`card ${property.backgroundColor} h-full border-none`}>
                      <div className="card-content p-6">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-2">{property.title}</h2>
                        <p className="text-slate-600 mb-4">{property.count}</p>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-2 rounded-full" onClick={prevSlide}>
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-2 rounded-full" onClick={nextSlide}>
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default PropertyCarousel;
