import React from 'react';
import { motion } from 'framer-motion';
import house from "../assets/images/house.jpg";

function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${house})` }}>
    <div className="absolute inset-0 bg-black/40 z-10" />
    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold mb-4 text-white"
      >
        MODERN
        <br />
        <span className="text-amber-500">LUXURY</span>
        HOMES
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl text-lg mb-8 mx-auto text-gray-300"
      >
        Where life seamlessly blends luxury with comfort, creating a sense of unparalleled sophistication.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-amber-500 text-black px-8 py-3 rounded-sm text-lg font-semibold hover:bg-amber-400 transition-colors w-fit"
      >
        EXPLORE MORE
      </motion.button>
    </div>
  </section>
  );
}

export default HeroSection;
