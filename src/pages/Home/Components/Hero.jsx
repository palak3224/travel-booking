import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Globe } from "lucide-react";
import HeroImgBg from "@/assets/home/bg-01.png";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  
  // Scroll animations
  const { scrollY } = useScroll();
  const firstImageY = useTransform(scrollY, [0, 1000], [0, -100]);
  const secondImageY = useTransform(scrollY, [0, 1000], [0, 100]);
  
  const tabs = ["Flights", "Hotels", "Cruises"];

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image - Globe pattern - Now shows on all devices */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
           style={{ backgroundImage: `url('${HeroImgBg}')` }}>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-500 uppercase tracking-wider text-sm font-medium bg-white rounded-2xl shadow-2xl p-2 inline border-2 border-sky-500">
                LOVE TRAVEL
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-black">Your All-in-One</span><br />
                <span className="text-sky-500">Travel Booking</span><br />
                <span className="text-black">Partner</span>
              </h1>
            </motion.div>

            {/* Search Tab Section - Same for all devices */}
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Tab Navigation with Search Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-gray-100 rounded-xl p-1">
                {/* Tabs with sliding animation */}
                <div className="flex flex-1 relative">
                  {/* Sliding background */}
                  <motion.div
                    className="absolute top-1 bottom-1 bg-sky-500 rounded-lg shadow-md"
                    initial={false}
                    animate={{
                      left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
                      width: `${100 / tabs.length}%`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                  
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3 px-2 sm:px-4 text-sm font-semibold rounded-lg transition-colors duration-300 relative z-10 ${
                        activeTab === tab
                          ? "text-white"
                          : "text-gray-600 hover:text-sky-500"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                {/* Search Button aligned with tabs */}
                <motion.button
                  className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 px-6 sm:px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Booking Now
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Capsule Images Side by Side - Now responsive */}
          <div className="flex relative h-full items-center justify-center lg:justify-end lg:pr-8 mt-8 lg:mt-0">
            {/* First Capsule Image - Left position with scroll animation */}
            <motion.div 
              className="w-40 h-60 sm:w-60 sm:h-80 lg:w-80 lg:h-[70vh] rounded-full overflow-hidden shadow-2xl border-4 border-white mr-2 sm:mr-4"
              style={{ y: firstImageY }}
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=600&fit=crop"
                alt="City skyline with Central Park"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Second Capsule Image - Right position, positioned lower with scroll animation */}
            <motion.div 
              className="w-40 h-60 sm:w-60 sm:h-80 lg:w-80 lg:h-[70vh] rounded-full overflow-hidden shadow-2xl border-4 border-white mt-12 sm:mt-16 lg:mt-24"
              style={{ y: secondImageY }}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=600&fit=crop"
                alt="Travelers exploring temple"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Elements - Now visible on all devices */}
            <motion.div 
              className="absolute -top-10 -left-20 w-4 h-4 bg-sky-400 rounded-full opacity-60"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute top-32 -left-32 w-6 h-6 bg-sky-300 rounded-full opacity-40"
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.4, 0.8, 0.4] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            />
            <motion.div 
              className="absolute top-20 right-20 w-3 h-3 bg-yellow-400 rounded-full opacity-70"
              animate={{ 
                y: [0, -10, 0],
                x: [0, 10, 0],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;