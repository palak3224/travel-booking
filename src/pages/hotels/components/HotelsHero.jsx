import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Bed, 
  MapPin, 
  Star,
  Wifi,
  Car,
  Coffee,
  Utensils
} from "lucide-react";
import HeroImg from "@/assets/hotels/hero.png";

const HotelsHero = () => {
  return (
    <div className="w-full h-[80vh] bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Hotel Icons */}
        <motion.div
          className="absolute top-20 left-0"
          animate={{
            x: ['-100px', '100vw'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Building2 className="w-8 h-8 text-sky-400 opacity-60" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 left-0"
          animate={{
            x: ['-100px', '100vw'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 12,
          }}
        >
          <Bed className="w-6 h-6 text-blue-400 opacity-40" />
        </motion.div>

        {/* Floating Location Pins */}
        <motion.div
          className="absolute top-16 right-1/4"
          animate={{
            y: [0, -20, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MapPin className="w-12 h-12 text-sky-500 opacity-70" />
        </motion.div>
        
        <motion.div
          className="absolute top-32 left-1/3"
          animate={{
            y: [0, 15, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Star className="w-10 h-10 text-yellow-400 opacity-60" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-1/4"
          animate={{
            y: [0, -25, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        >
          <Building2 className="w-14 h-14 text-blue-400 opacity-50" />
        </motion.div>

        {/* Decorative Dots */}
        <motion.div 
          className="absolute top-24 left-16 w-3 h-3 bg-sky-400 rounded-full opacity-60"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-60 left-32 w-2 h-2 bg-blue-300 rounded-full opacity-50"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.5, 0.9, 0.5] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-4 h-4 bg-sky-300 rounded-full opacity-40"
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.4, 0.8, 0.4] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4 
          }}
        />
      </div>

      {/* Main Grid Layout */}
      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content - Text Section */}
        <div className="flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0">
          <motion.div 
            className="text-center lg:text-left space-y-6 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hotel Icon */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-sky-500 p-4 rounded-full shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find Your{" "}
              <span className="text-sky-500">Perfect</span>
              <br />
              <span className="text-sky-600">Stay</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Compare thousands of hotels with the best prices and flexible options.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 flex items-center gap-3 mx-auto lg:mx-0"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bed className="w-6 h-6" />
                Search Hotels Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Hotel Image with Overlay Elements */}
        <div className="relative h-64 lg:h-full">
          {/* Hotel Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${HeroImg})`
              }}
            />
            
            {/* Gradient Overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
          </motion.div>

          {/* Floating Hotel Feature Cards */}
          <motion.div 
            className="absolute top-20 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-32"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <div className="text-center">
              <Star className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
              <div className="text-sm font-bold text-gray-800">5-Star</div>
              <div className="text-xs text-gray-600">Luxury</div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-32 right-12 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -2, 0] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2 
            }}
          >
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-sky-500" />
              <div>
                <div className="text-sm font-bold text-gray-800">Free WiFi</div>
                <div className="text-xs text-gray-600">High Speed</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-1/2 left-12 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg"
            animate={{ 
              y: [0, -8, 0],
              x: [0, 8, 0] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4 
            }}
          >
            <div className="flex items-center space-x-2">
              <Car className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-medium text-gray-700">Parking</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-28 right-16 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg"
            animate={{ 
              y: [0, 12, 0],
              rotate: [0, 3, 0] 
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
          >
            <div className="flex items-center space-x-2">
              <Coffee className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium text-gray-700">Breakfast</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-16 left-20 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg"
            animate={{ 
              y: [0, -10, 0],
              x: [0, -5, 0] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3 
            }}
          >
            <div className="flex items-center space-x-2">
              <Utensils className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium text-gray-700">Restaurant</span>
            </div>
          </motion.div>

          {/* Price Badge */}
          <motion.div 
            className="absolute top-12 right-8 bg-green-500 text-white p-3 rounded-2xl shadow-xl"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, -2, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <div className="text-center">
              <div className="text-lg font-bold">From $89</div>
              <div className="text-xs opacity-90">per night</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Hotel Amenity Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-32 right-1/3"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="w-12 h-12 bg-sky-200 rounded-xl opacity-40 flex items-center justify-center">
            <Bed className="w-6 h-6 text-sky-600" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-28 right-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <div className="w-10 h-10 bg-blue-200 rounded-lg opacity-50 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-48 left-1/2"
          animate={{
            y: [0, -12, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-8 h-8 bg-yellow-200 rounded-full opacity-60 flex items-center justify-center">
            <Star className="w-4 h-4 text-yellow-600" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HotelsHero;