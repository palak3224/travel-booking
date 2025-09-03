import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Shield, 
  CreditCard, 
  Clock, 
  Star,
  Tag,
  Percent,
  Gift,
  Zap
} from 'lucide-react';

const TravelBentoGrid = () => {
  const [currentDeal, setCurrentDeal] = useState(0);

  // Rotating deals for the header
  const deals = [
    { discount: "40%", text: "OFF FLIGHTS", subtext: "Today Only" },
    { discount: "60%", text: "OFF HOTELS", subtext: "Limited Time" },
    { discount: "35%", text: "OFF PACKAGES", subtext: "Book Now" }
  ];

  // Auto-rotate deals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % deals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-sky-50 min-h-screen relative overflow-hidden">
      {/* Floating Deal Elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Tag size={60} className="text-sky-400" />
        </motion.div>
      </div>
      
      {/* Header Section with Rotating Deal Banner */}
      <div className="text-center mb-8 md:mb-12">
        {/* Rotating Deal Banner */}
        <motion.div 
          className="inline-flex items-center bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-white text-sky-600 w-8 h-8 rounded-full flex items-center justify-center mr-3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap size={16} />
          </motion.div>
          <motion.div
            key={currentDeal}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-black">{deals[currentDeal].discount}</span>
            <div className="text-left">
              <div className="text-sm font-bold">{deals[currentDeal].text}</div>
              <div className="text-xs text-sky-100">{deals[currentDeal].subtext}</div>
            </div>
          </motion.div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Why Book <span className="text-sky-500">With Us?</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg px-4">
          Discover exclusive deals and benefits that make us your perfect travel companion
        </p>
      </div>
      
      {/* Desktop Grid - Hidden on mobile */}
      <div className='hidden lg:block'>
        <div className="max-w-7xl mx-auto grid grid-cols-5 grid-rows-4 gap-4 h-[600px]">
          
          {/* Main Card - Compare Airlines - 4 columns, 3 rows */}
          <motion.div 
            className="col-span-4 row-span-3 bg-white rounded-2xl shadow-lg p-8 flex items-center overflow-hidden relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
            variants={{
              initial: {},
              hover: {}
            }}
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-4 right-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              COMPARE & SAVE UP TO 40%
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <div className="flex-1 pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Compare 100+ airlines, hotels & cruise lines
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Find the best deals across all major travel providers in one place. We search through hundreds of airlines, thousands of hotels, and premium cruise lines to bring you unbeatable prices and options.
              </p>
              
              {/* Deal Savings Info */}
              <motion.div 
                className="mb-6 flex items-center text-sky-600 font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Percent size={18} className="mr-2" />
                Average savings of 40% compared to booking directly
              </motion.div>

              <div className="mt-6">
                <motion.button 
                  className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Comparing Now
                </motion.button>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <motion.div
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="flex flex-col items-center">
                    <Plane className="w-16 h-16 text-white mb-2 transform rotate-12" />
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-sky-500 font-bold text-xs">H</span>
                      </div>
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-xs">C</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-sky-300 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-50"></div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Best Price Guarantee - 1 column, 2 rows */}
          <motion.div 
            className="col-span-1 row-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              +10% EXTRA
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-4"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-sky-500" />
              </div>
            </motion.div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
            <p className="text-gray-600 text-sm mb-3">We match any lower price you find elsewhere</p>
            
            {/* Deal Info */}
            <motion.div 
              className="flex items-center text-sky-600 font-semibold text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Gift size={14} className="mr-1" />
              Plus 10% extra off
            </motion.div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Secure Payments - 1 column, 2 rows */}
          <motion.div 
            className="col-span-1 row-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SECURE +5%
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-4"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-blue-500" />
              </div>
            </motion.div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Secure & Fast Payments</h3>
            <p className="text-gray-600 text-sm mb-3">Your transactions are protected with bank-level security</p>
            
            {/* Deal Info */}
            <motion.div 
              className="flex items-center text-blue-600 font-semibold text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Percent size={14} className="mr-1" />
              Extra 5% with cards
            </motion.div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* 24/7 Support - 2 columns */}
          <motion.div 
            className="col-span-2 row-span-1 bg-white rounded-2xl shadow-lg p-6 flex items-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              VIP SUPPORT
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mr-4"
            >
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-sky-500" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">24/7 travel support</h3>
              <p className="text-gray-600 mb-2">Round-the-clock assistance for all your travel needs</p>
              <motion.div 
                className="flex items-center text-sky-600 font-semibold text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Star size={14} className="mr-1" />
                Priority member support
              </motion.div>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Exclusive Deals - 2 columns */}
          <motion.div 
            className="col-span-2 row-span-1 bg-white rounded-2xl shadow-lg p-6 flex items-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-sky-300 to-sky-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              SAVE UP TO 60%
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mr-4"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-blue-500" />
              </div>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Exclusive deals on our site</h3>
              <p className="text-gray-600 mb-2">Special offers and discounts you won't find anywhere else</p>
              <motion.div 
                className="flex items-center text-blue-600 font-semibold text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Tag size={14} className="mr-1" />
                Early bird & flash deals
              </motion.div>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Spacer for last card */}
          <div className="col-span-1 row-span-1"></div>
        </div>
      </div>

      {/* Mobile & Tablet Layout - Stacked cards */}
      <div className="xl:hidden max-w-2xl mx-auto space-y-6">
        
        {/* Main Card - Compare Airlines */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden relative group border border-sky-100 hover:border-sky-300"
          whileHover="hover"
          initial="initial"
          variants={{
            initial: {},
            hover: {}
          }}
        >
          {/* Offer Badge */}
          <motion.div 
            className="absolute top-4 right-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md z-20"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            SAVE UP TO 40%
          </motion.div>

          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

          <div className="text-center mb-6">
            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-6"
            >
              <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="flex flex-col items-center">
                  <Plane className="w-12 h-12 md:w-16 md:h-16 text-white mb-2 transform rotate-12" />
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-sky-500 font-bold text-xs">H</span>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-xs">C</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-sky-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-blue-400 rounded-full opacity-50"></div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Compare 100+ airlines, hotels & cruise lines
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Find the best deals across all major travel providers in one place. We search through hundreds of airlines, thousands of hotels, and premium cruise lines to bring you unbeatable prices and options.
            </p>
            
            {/* Deal Savings Info */}
            <motion.div 
              className="mb-6 flex items-center justify-center text-sky-600 font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Percent size={18} className="mr-2" />
              Average 40% savings vs direct booking
            </motion.div>

            <motion.button 
              className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Comparing Now
            </motion.button>
          </div>

          {/* Bottom Border Effect */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </motion.div>

        {/* Feature Cards Grid - 2x2 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Best Price Guarantee */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              +10% EXTRA
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-4"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-sky-500" />
              </div>
            </motion.div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Best Price Guarantee</h3>
            <p className="text-gray-600 text-sm mb-3">We match any lower price you find elsewhere</p>
            
            {/* Deal Info */}
            <motion.div 
              className="flex items-center text-sky-600 font-semibold text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Gift size={14} className="mr-1" />
              Plus 10% extra off
            </motion.div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Secure Payments */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SECURE +5%
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-4"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-blue-500" />
              </div>
            </motion.div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Secure & Fast Payments</h3>
            <p className="text-gray-600 text-sm mb-3">Your transactions are protected with bank-level security</p>
            
            {/* Deal Info */}
            <motion.div 
              className="flex items-center text-blue-600 font-semibold text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Percent size={14} className="mr-1" />
              Extra 5% with cards
            </motion.div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* 24/7 Support */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              VIP SUPPORT
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mr-4"
            >
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-sky-500" />
              </div>
            </motion.div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">24/7 travel support</h3>
              <p className="text-gray-600 text-sm md:text-base mb-2">Round-the-clock assistance for all your travel needs</p>
              <motion.div 
                className="flex items-center text-sky-600 font-semibold text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Star size={14} className="mr-1" />
                Priority member support
              </motion.div>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>

          {/* Exclusive Deals */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center relative group border border-sky-100 hover:border-sky-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Offer Badge */}
            <motion.div 
              className="absolute top-3 right-3 bg-gradient-to-r from-sky-300 to-sky-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              SAVE UP TO 60%
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mr-4"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-blue-500" />
              </div>
            </motion.div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Exclusive deals only on our site</h3>
              <p className="text-gray-600 text-sm md:text-base mb-2">Special offers and discounts you won't find anywhere else</p>
              <motion.div 
                className="flex items-center text-blue-600 font-semibold text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Tag size={14} className="mr-1" />
                Early bird & flash deals
              </motion.div>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-300 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </div>

      {/* Enhanced CTA Section with Deal Information */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Deal Summary Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.div 
            className="bg-white rounded-xl p-4 shadow-md border border-sky-200 flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-800">Free Cancellation</div>
              <div className="text-sm text-gray-600">On most bookings</div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-4 shadow-md border border-sky-200 flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center">
              <Tag className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-800">Price Alerts</div>
              <div className="text-sm text-gray-600">Never miss a deal</div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-4 shadow-md border border-sky-200 flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-800">Reward Points</div>
              <div className="text-sm text-gray-600">Earn with every booking</div>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Claim Your Deals Now - Save Big!</span>
        </motion.button>

        <p className="text-sm text-gray-500 mt-4">
          🔥 Limited time offers • No hidden fees • Instant confirmation
        </p>
      </motion.div>
    </div>
  );
};

export default TravelBentoGrid;