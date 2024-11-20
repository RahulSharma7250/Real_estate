import React, { useState } from 'react';

function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Newsletter Signup Section */}
        <div className="text-center text-white w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">Sign up for our newsletter to receive the latest property updates!</p>
          <form onSubmit={handleNewsletterSignup} className="flex justify-center items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-black"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded-r-lg hover:bg-amber-400"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Dummy Contact Information Section (Right Side) */}
        <div className="text-white w-full md:w-1/3 mt-10 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">Address: 123 Real Estate St, Dream City, ABC 12345</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Email: contact@realestate.com</p>
          <p className="mb-2">Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
