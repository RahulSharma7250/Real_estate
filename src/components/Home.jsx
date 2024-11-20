import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import PropertyCarousel from './PropertyCarousel';
import TopProjects from './TopProjects';
import FAQSection from './FAQSection';
import NewsletterSection from './NewsletterSection';
import Listing from './Listing';
import Searching from './Searching';
import Flats from './Flats';
import Undercons from './Undercons';
import LoginPopup from './LoginPopup'; // Import LoginPopup here

function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for controlling login popup

  return (
    <div className="min-h-screen bg-gray-100 text-white">
      <Navbar setIsLoginOpen={setIsLoginOpen} /> {/* Pass the state to Navbar */}
      <HeroSection />
      <section className="py-20 bg-white">
        <PropertyCarousel />
      </section>
      <Listing />
      <Searching />
      <Flats />
      <Undercons />
      <TopProjects />
      <FAQSection />
      <NewsletterSection />

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default Home;
