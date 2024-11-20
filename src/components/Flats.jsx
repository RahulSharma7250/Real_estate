import React from 'react';
import { Link } from 'react-router-dom'; 

const BhkChoice = () => {
  const propertyTypes = [
    { bhk: 1, properties: "1,400+ Properties", path: "/1bhk" },
    { bhk: 2, properties: "1,400+ Properties", path: "/2bhk" },
    { bhk: 3, properties: "2,300+ Properties", path: "/3bhk" },
    { bhk: 4, properties: "1,400+ Properties", path: "/4bhk" },
  ];

  return (
    <div className="w-full bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-blue-100 rounded-full">
            <span className="text-4xl" role="img" aria-label="House">🏠</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">BHK choice in mind?</h2>
            <p className="text-xl text-gray-600">Browse by no. of bedrooms in the house</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type) => (
            <Link to={type.path} key={type.bhk} className="flex flex-col bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-blue-100 h-full">
              <div>
                <div className="mb-4">
                  <span className="text-5xl" role="img" aria-label="House">🏠</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-blue-800">{type.bhk} BHK</h3>
              </div>
              <p className="text-blue-600">{type.properties}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BhkChoice;
