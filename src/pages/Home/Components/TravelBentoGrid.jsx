import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Shield, 
  CreditCard, 
  Clock, 
  Star 
} from 'lucide-react';

const TravelBentoGrid = () => {
  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-sky-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Why Book <span className="text-sky-500">With Us?</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg px-4">
          Discover the benefits that make us your perfect travel companion
        </p>
      </div>
      
      {/* Desktop Grid - Hidden on mobile */}
      <div className='hidden lg:block'>

      <div className="max-w-7xl mx-auto grid grid-cols-5 grid-rows-4 gap-4 h-[600px]">
        
        {/* Main Card - Compare Airlines - 4 columns, 3 rows */}
        <motion.div 
          className="col-span-4 row-span-3 bg-white rounded-2xl shadow-lg p-8 flex items-center overflow-hidden"
          whileHover="hover"
          initial="initial"
          variants={{
            initial: {},
            hover: {}
          }}
        >
          <div className="flex-1 pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Compare 100+ airlines, hotels & cruise lines
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Find the best deals across all major travel providers in one place. We search through hundreds of airlines, thousands of hotels, and premium cruise lines to bring you unbeatable prices and options.
            </p>
            <div className="mt-6">
              <motion.button 
                className="bg-sky-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Comparing
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
        </motion.div>

        {/* Best Price Guarantee - 1 column, 2 rows */}
        <motion.div 
          className="col-span-1 row-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center"
          whileHover="hover"
          initial="initial"
        >
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
          <p className="text-gray-600 text-sm">We match any lower price you find elsewhere</p>
        </motion.div>

        {/* Secure Payments - 1 column, 2 rows */}
        <motion.div 
          className="col-span-1 row-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center"
          whileHover="hover"
          initial="initial"
        >
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
          <p className="text-gray-600 text-sm">Your transactions are protected with bank-level security</p>
        </motion.div>

        {/* 24/7 Support - 2 columns */}
        <motion.div 
          className="col-span-2 row-span-1 bg-white rounded-2xl shadow-lg p-6 flex items-center"
          whileHover="hover"
          initial="initial"
        >
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
            <h3 className="text-xl font-bold text-gray-800 mb-1">24/7 travel support</h3>
            <p className="text-gray-600">Round-the-clock assistance for all your travel needs</p>
          </div>
        </motion.div>

        {/* Exclusive Deals - 2 columns */}
        <motion.div 
          className="col-span-2 row-span-1 bg-white rounded-2xl shadow-lg p-6 flex items-center"
          whileHover="hover"
          initial="initial"
        >
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
            <h3 className="text-xl font-bold text-gray-800 mb-1">Exclusive deals only on our site</h3>
            <p className="text-gray-600">Special offers and discounts you won't find anywhere else</p>
          </div>
        </motion.div>

        {/* Spacer for last card */}
        <div className="col-span-1 row-span-1"></div>
      </div>
      </div>

      {/* Mobile & Tablet Layout - Stacked cards */}
      <div className="xl:hidden max-w-2xl mx-auto space-y-6">
        
        {/* Main Card - Compare Airlines */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden"
          whileHover="hover"
          initial="initial"
          variants={{
            initial: {},
            hover: {}
          }}
        >
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
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Find the best deals across all major travel providers in one place. We search through hundreds of airlines, thousands of hotels, and premium cruise lines to bring you unbeatable prices and options.
            </p>
            <motion.button 
              className="bg-sky-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Comparing
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Cards Grid - 2x2 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Best Price Guarantee */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center"
            whileHover="hover"
            initial="initial"
          >
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
            <p className="text-gray-600 text-sm">We match any lower price you find elsewhere</p>
          </motion.div>

          {/* Secure Payments */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center"
            whileHover="hover"
            initial="initial"
          >
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
            <p className="text-gray-600 text-sm">Your transactions are protected with bank-level security</p>
          </motion.div>

          {/* 24/7 Support */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center"
            whileHover="hover"
            initial="initial"
          >
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
              <p className="text-gray-600 text-sm md:text-base">Round-the-clock assistance for all your travel needs</p>
            </div>
          </motion.div>

          {/* Exclusive Deals */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center"
            whileHover="hover"
            initial="initial"
          >
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
              <p className="text-gray-600 text-sm md:text-base">Special offers and discounts you won't find anywhere else</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TravelBentoGrid;