import React from "react";
import { motion } from "framer-motion";
import { Plane, PlaneTakeoff, PlaneLanding, Cloud } from "lucide-react";
import HeroImg from "@/assets/flights/hero-bg.png";

const FlightsHero = () => {
  return (
    <div className="w-full h-[80vh] bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flying Planes */}
        <motion.div
          className="absolute top-20 left-0"
          animate={{
            x: ['-100px', '100vw'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Plane className="w-8 h-8 text-sky-400 opacity-60" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 left-0"
          animate={{
            x: ['-100px', '100vw'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 10,
          }}
        >
          <PlaneTakeoff className="w-6 h-6 text-blue-400 opacity-40" />
        </motion.div>

        {/* Floating Clouds */}
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
          <Cloud className="w-16 h-16 text-white opacity-80" />
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
          <Cloud className="w-12 h-12 text-white opacity-60" />
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
          <Cloud className="w-20 h-20 text-white opacity-70" />
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
            {/* Airplane Icon */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-sky-500 p-4 rounded-full shadow-lg">
                <PlaneTakeoff className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Book Cheap{" "}
              <span className="text-sky-500">Flights</span>
              <br />
              <span className="text-sky-600">USA & Worldwide</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Compare fares from 100+ airlines and get instant e-ticket confirmation.
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
                <PlaneTakeoff className="w-6 h-6" />
                Search Flights Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Full Width Image */}
        <div className="relative h-64 lg:h-full">
          {/* Full width image without margins */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <img
              src={HeroImg}
              alt="Airplane flying above clouds"
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
          </motion.div>

          {/* Floating Flight Icons on Image */}
          <motion.div 
            className="absolute top-20 left-8 bg-white/90 p-3 rounded-full shadow-lg"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <Plane className="w-6 h-6 text-sky-500" />
          </motion.div>

          <motion.div 
            className="absolute bottom-32 right-12 bg-white/90 p-3 rounded-full shadow-lg"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2 
            }}
          >
            <PlaneLanding className="w-6 h-6 text-blue-500" />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 left-12 bg-white/90 p-2 rounded-full shadow-lg"
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
            <Cloud className="w-5 h-5 text-sky-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FlightsHero;