import React from 'react';
import './index.css'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetails';  // PropertyDetails component
import Home from './components/Home';  // Home component import
import Residential from './components/Residential';
//import PropertyCarousel from './components/PropertyCarousel';
import ResidentialLand from './components/ResidentialLand';
import OneRKApartment from './components/OneRKApartment';
import ServicedApartment from './components/ServicedApartment';
import IndependentHouseVilla from './components/IndependentHouseVilla';
import Onebhk from './components/Onebhk';
import Commercial from './components/Commercial';
import Apartment from './components/Apartment'

function App() {
  const location = useLocation();

  return (
    <>
      {/* Only render Home component on the root path */}
      {location.pathname === "/" && <Home />}

      <Routes>
        <Route path="/property/:id" element={<PropertyDetails />} />  {/* Property details route */}
        <Route path="/properties/:propertyName" element={<Residential />} />
        <Route path="/properties/residential-land" element={<ResidentialLand />} />
        <Route path="/properties/1rk-apartment" element={<OneRKApartment />} />
        <Route path="/properties/serviced-apartment" element={<ServicedApartment />} />
        <Route path="/properties/independent-house-villa" element={<IndependentHouseVilla />} />
        <Route path="/:bhk" element={<Onebhk />} /> {/* Dynamic routing */}
        <Route path="/buy/commercial" element={< Commercial />} />
        <Route path="/:bhk" element={< Apartment />} />
      </Routes>
    </>
  );
}

export default App;
