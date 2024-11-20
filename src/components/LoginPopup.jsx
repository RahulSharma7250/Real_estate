import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, X } from 'lucide-react';

function LoginPopup({ isOpen, onClose }) {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex justify-center items-center bg-black/50 z-50"
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full sm:max-w-md transition-transform transform hover:scale-105">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {isPhoneLogin ? 'Login / Register' : 'Login'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        {isPhoneLogin ? (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <p className="text-base text-gray-600">Please enter your Phone Number</p>
              <div className="flex gap-2">
                <input
                  disabled
                  value="+91"
                  className="w-16 p-2 border border-gray-300 rounded-lg bg-gray-100 text-center text-gray-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white py-2 rounded-lg transition-transform transform hover:scale-105 shadow-md">
              Continue
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            <button
              onClick={() => setIsPhoneLogin(false)}
              className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              <Mail className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">Continue with Email/Username</span>
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
              By clicking you agree to{' '}
              <button
                onClick={() => alert("Terms and Conditions")} // Replace with appropriate action
                className="text-sky-500 hover:underline transition-colors"
              >
                Terms and Conditions
              </button>
            </p>
          </div>
        ) : (
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-lg hover:from-amber-500 hover:to-amber-600 transition-transform transform hover:scale-105 shadow-md"
            >
              Login
            </button>
            <button
              onClick={() => setIsPhoneLogin(true)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full text-center transition-colors"
            >
              Back to Phone Number Login
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default LoginPopup;
