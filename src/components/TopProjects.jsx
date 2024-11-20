import React from 'react';
import { motion } from 'framer-motion';
import { Bath, Home, Square } from 'lucide-react'; // Now using lucide-react icons
import house from "../assets/images/house.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";
import house9 from "../assets/images/house9.jpg";
import house11 from "../assets/images/house11.jpg";

function TopProjects() {
  const properties = [
    { id: 1, name: 'Uptown Residences', image: house, price: '$546,000', beds: 3, baths: 2, sqft: '1,456' },
    { id: 2, name: 'Downtown Estates', image: house2, price: '$646,000', beds: 4, baths: 3, sqft: '1,856' },
    { id: 3, name: 'Downtown Estates', image: house4, price: '$646,000', beds: 4, baths: 3, sqft: '1,856' },
    { id: 4, name: 'Downtown Estates', image: house3, price: '$646,000', beds: 4, baths: 3, sqft: '1,856' },
    { id: 5, name: 'Downtown Estates', image: house9, price: '$646,000', beds: 4, baths: 3, sqft: '1,856' },
    { id: 6, name: 'Downtown Estates', image: house11, price: '$646,000', beds: 4, baths: 3, sqft: '1,856' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">OUR TOP PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, type: 'spring', damping: 20, stiffness: 150 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{property.name}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-gray-700">
                    <Home className="w-5 h-5" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-700">
                    <Bath className="w-5 h-5" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-700">
                    <Square className="w-5 h-5" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 font-semibold">{property.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopProjects;
    