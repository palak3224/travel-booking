import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Clock, 
  Shield, 
  Zap,
  ArrowRight 
} from 'lucide-react';

const FlightsCTABanner = () => {
  return (
    <motion.div 
      className="relative w-full max-w-6xl mx-auto h-[50vh] rounded-3xl overflow-hidden shadow-2xl my-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600" />
      
      {/* Animated Cloud Patterns */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-20 w-32 h-16 bg-white/10 rounded-full blur-sm"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-32 right-16 w-24 h-12 bg-white/8 rounded-full blur-sm"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 left-32 w-40 h-20 bg-white/6 rounded-full blur-sm"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      
      {/* Flying Planes */}
      <motion.div
        className="absolute top-16 left-0 w-full"
        animate={{ x: ['-100px', 'calc(100vw + 100px)'] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Plane className="w-6 h-6 text-white/30 transform rotate-45" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-24 left-0 w-full"
        animate={{ x: ['calc(100vw + 100px)', '-100px'] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear",
          delay: 5
        }}
      >
        <Plane className="w-4 h-4 text-white/20 transform -rotate-45" />
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-between px-6 md:px-12 py-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Left Content */}
        <div className="flex-1 text-white max-w-lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4"
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-yellow-300 mr-2" />
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Find Your Perfect
            <br />
            <span className="text-yellow-300">Flight Deal</span>
          </motion.h1>
          
          <motion.p 
            className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Compare prices from 100+ airlines and book with confidence. 
            Best deals, instant confirmation, and 24/7 support.
          </motion.p>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
              <Shield className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium">Price Match</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
              <Clock className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium">Instant Booking</span>
            </div>
          </motion.div>
          
          <motion.button
            className="bg-white text-blue-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center group text-sm md:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Search Flights Now
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right Visual Element */}
        <motion.div 
          className="hidden md:block flex-1 flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            {/* Main Flight Card */}
            <motion.div 
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 w-80"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Flight Route */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">NYC</div>
                  <div className="text-sm text-gray-500">New York</div>
                  <div className="text-lg font-semibold text-gray-700">10:30 AM</div>
                </div>
                
                <div className="flex-1 mx-4 relative">
                  <div className="h-0.5 bg-gray-300 relative">
                    <motion.div
                      className="absolute top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 120, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Plane className="w-5 h-5 text-sky-500 transform rotate-90" />
                    </motion.div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      5h 45m
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">LAX</div>
                  <div className="text-sm text-gray-500">Los Angeles</div>
                  <div className="text-lg font-semibold text-gray-700">4:15 PM</div>
                </div>
              </div>
              
              {/* Price and Airline */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">American Airlines</div>
                  <div className="text-sm text-green-600 font-medium">Non-stop</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-sky-600">$299</div>
                  <div className="text-sm text-gray-500 line-through">$499</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">40% OFF</div>
                <div className="text-xs text-gray-600">Today Only</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-sky-500" />
                <span className="text-xs font-medium text-gray-700">Secured</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </motion.div>
  );
};

export default FlightsCTABanner;