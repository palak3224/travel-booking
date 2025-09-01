import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ship, 
  Clock, 
  Shield, 
  Zap,
  ArrowRight,
  MapPin,
  Star,
  Utensils,
  Waves,
  Anchor,
  Compass,
  Sun,
  Music
} from 'lucide-react';

const CruiseCTABanner = () => {
  return (
    <motion.div 
      className="relative w-full max-w-6xl mx-auto h-[50vh] rounded-3xl overflow-hidden shadow-2xl my-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600" />
      
      {/* Animated Wave Patterns */}
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
      
      {/* Floating Cruise Icons */}
      <motion.div
        className="absolute top-16 left-0 w-full"
        animate={{ x: ['-100px', 'calc(100vw + 100px)'] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Ship className="w-6 h-6 text-white/30" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-24 left-0 w-full"
        animate={{ x: ['calc(100vw + 100px)', '-100px'] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear",
          delay: 8
        }}
      >
        <Anchor className="w-5 h-5 text-white/25" />
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
              <span className="text-sm font-semibold">Exclusive Cruise Deals</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Set Sail on Your
            <br />
            <span className="text-yellow-300">Dream Cruise</span>
          </motion.h1>
          
          <motion.p 
            className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Explore exotic destinations aboard luxury cruise ships. From Caribbean 
            adventures to Mediterranean voyages with all-inclusive packages.
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
              <span className="text-sm font-medium">Best Price Guarantee</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
              <Clock className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium">Flexible Booking</span>
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
            Find Cruises Now
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
            {/* Main Cruise Card */}
            <motion.div 
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30 w-80"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Cruise Ship Image */}
              <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=200&fit=crop"
                  alt="Luxury Cruise Ship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-sky-500 text-white rounded-full px-2 py-1">
                  <span className="text-xs font-bold">7 NIGHTS</span>
                </div>
              </div>
              
              {/* Cruise Details */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Royal Caribbean</h3>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <Compass className="w-3 h-3 mr-1" />
                  <span>Miami → Cozumel → Jamaica</span>
                </div>
                
                {/* Amenities */}
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Utensils className="w-3 h-3 mr-1" />
                    <span>All Meals</span>
                  </div>
                  <div className="flex items-center">
                    <Music className="w-3 h-3 mr-1" />
                    <span>Entertainment</span>
                  </div>
                  <div className="flex items-center">
                    <Sun className="w-3 h-3 mr-1" />
                    <span>Pool Deck</span>
                  </div>
                </div>
              </div>
              
              {/* Price and Booking */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <div>
                  <div className="text-sm text-gray-500">From per person</div>
                  <div className="text-xl font-bold text-sky-600">$899</div>
                </div>
                <motion.button
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">30% OFF</div>
                <div className="text-xs text-gray-600">Early Bird Special</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Waves className="w-4 h-4 text-sky-500" />
                <span className="text-xs font-medium text-gray-700">Ocean View</span>
              </div>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-xs font-medium text-gray-700">All Inclusive</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Floating Ocean Particles */}
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

      {/* Additional Wave Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-8 opacity-20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          backgroundSize: '200% 100%'
        }}
      />
    </motion.div>
  );
};

export default CruiseCTABanner;