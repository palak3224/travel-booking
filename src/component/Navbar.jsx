import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('homepage');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = navLinks.find(link => link.href === currentPath);
    if (currentLink) {
      setActiveLink(currentLink.id);
    }
  }, [location]);

  const navLinks = [
    { name: "Homepage", href: "/", id: "homepage" },
    { name: "Flights", href: "/flights", id: "flights" },
    { name: "Hotels", href: "/hotels", id: "hotels" },
    { name: "Cruises", href: "/cruises", id: "cruises" },
    { name: "About Us", href: "/about", id: "about" },
    { name: "Contact", href: "/contact", id: "contact" }
  ];

  return (
    <nav className="relative bg-black shadow-lg border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-black/95">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '300px 300px, 200px 200px, 250px 250px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            <motion.h1 
              className="text-2xl font-black tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Travel
              </span>
              <span className="text-white ml-1">Website</span>
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                to={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeLink === link.id
                    ? 'text-sky-400 bg-gray-900'
                    : 'text-gray-300 hover:text-sky-400 hover:bg-gray-900'
                }`}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}>
                  {link.name}
                  {activeLink === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <motion.span
                  className="block w-5 h-0.5 bg-gray-300 rounded-full"
                  animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-gray-300 rounded-full my-1"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-5 h-0.5 bg-gray-300 rounded-full"
                  animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 space-y-2 border-t border-gray-800">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeLink === link.id
                    ? 'text-sky-400 bg-gray-900 border-l-4 border-sky-500'
                    : 'text-gray-300 hover:text-sky-400 hover:bg-gray-900'
                }`}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}>
                  {link.name}
                </motion.div>
              </Link>
            ))}
            
            <motion.div 
              className="pt-4 border-t border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg">
                Book Now →
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border Animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </nav>
  );
};

export default Navbar;
