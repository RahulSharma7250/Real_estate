import React from 'react';

function Component() {
  const apartmentData = [
    { name: "South Bopal", searches: 7 },
    { name: "Shela", searches: 6 },
    { name: "Satellite", searches: 5 },
    { name: "Bopal", searches: 5 },
    { name: "Naranpura", searches: 4 },
  ];

  const plotsData = [
    { name: "Sanand", searches: 12 },
    { name: "Rancharda", searches: 7 },
    { name: "Shilaj", searches: 5 },
    { name: "Greater Thol", searches: 4 },
    { name: "South Bopal", searches: 4 },
  ];

  const builderData = [
    { name: "Shela", searches: 8 },
    { name: "Naranpura", searches: 6 },
    { name: "South Bopal", searches: 5 },
    { name: "SG Highway", searches: 4 },
    { name: "Juhapura", searches: 4 },
  ];

  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-full flex flex-col justify-between p-8">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-gray-800">Demand in Ahmedabad</h1>
          <p className="text-gray-600 text-lg mt-2">Where are buyers searching in Ahmedabad?</p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mb-10">
          <button className="py-3 px-6 rounded-full text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            Ahmedabad West
          </button>
          <button className="py-3 px-6 rounded-full text-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300">
            Ahmedabad East
          </button>
          <button className="py-3 px-6 rounded-full text-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300">
            Ahmedabad North
          </button>
          <button className="py-3 px-6 rounded-full text-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300">
            Ahmedabad South
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LocationCard
            title="Apartment"
            subtitle="Most searched localities for Flat/Apartment"
            data={apartmentData}
          />
          <LocationCard
            title="Plots"
            subtitle="Most searched societies for Plots"
            data={plotsData}
          />
          <LocationCard
            title="Builder Floor"
            subtitle="Most searched societies"
            data={builderData}
          />
        </div>
      </div>
    </div>
  );
}

function LocationCard({ title, subtitle, data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex flex-col gap-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                #{index + 1} {item.name}
              </span>
              <span>{item.searches}% Searches</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-teal-400"
                style={{ width: `${item.searches * 8}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component;
