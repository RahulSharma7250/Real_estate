import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar({ setIsLoginOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const [searchQuery, setSearchQuery] = useState(''); // Define searchQuery state

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery); // Handle search logic here
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wide text-amber-500">
            <Link to="/">DreamLuxe</Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center w-full max-w-md mx-8">
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-white/10 text-gray-200 rounded-full placeholder-gray-400 focus:outline-none focus:ring focus:ring-amber-500"
                placeholder="Search properties, locations, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-500"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <Link to="/gallery" className="hover:text-amber-500 transition-colors">Gallery</Link>

            {/* Dropdown Menus */}
            {['buy', 'rent', 'services'].map((item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center space-x-2 hover:text-amber-500"
                  aria-expanded={activeDropdown === item}
                >
                  <span className="capitalize">{item}</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                <AnimatePresence>
                  {activeDropdown === item && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-48 py-2 text-gray-800"
                    >
                      {item === 'buy' && (
                        <>
                          <Link to="/properties/:propertyName" className="block px-4 py-2 hover:bg-gray-100">Residential</Link>
                          <Link to="/buy/commercial" className="block px-4 py-2 hover:bg-gray-100">Commercial</Link>
                          <Link to="/buy/plots" className="block px-4 py-2 hover:bg-gray-100">Plots/Land</Link>
                          <Link to="/buy/luxury" className="block px-4 py-2 hover:bg-gray-100">Luxury Properties</Link>
                        </>
                      )}
                      {item === 'rent' && (
                        <>
                          <Link to="/:bhk" className="block px-4 py-2 hover:bg-gray-100">Apartments</Link>
                          <Link to="/rent/villas" className="block px-4 py-2 hover:bg-gray-100">Villas/Houses</Link>
                          <Link to="/rent/offices" className="block px-4 py-2 hover:bg-gray-100">Offices</Link>
                        </>
                      )}
                      {item === 'services' && (
                        <>
                          <Link to="/services/valuation" className="block px-4 py-2 hover:bg-gray-100">Property Valuation</Link>
                          <Link to="/services/legal" className="block px-4 py-2 hover:bg-gray-100">Legal Services</Link>
                          <Link to="/services/loans" className="block px-4 py-2 hover:bg-gray-100">Home Loans</Link>
                          <Link to="/services/interior-design" className="block px-4 py-2 hover:bg-gray-100">Interior Design</Link>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
            <Link to="/contacts" className="hover:text-amber-500 transition-colors">Contacts</Link>
          </nav>

          {/* Login Button */}
          <button
            className="px-4 py-2 bg-amber-500 text-gray-900 rounded-full hover:bg-amber-600 transition-colors"
            onClick={() => setIsLoginOpen(true)}
          >
            LOG IN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
