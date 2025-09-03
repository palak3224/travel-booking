import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, Globe, Zap, Tag, Clock } from "lucide-react";
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
           style={{ backgroundImage: `url(${HeroImgBg})` }}>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Sky Blue Offer Banner */}
            <motion.div
              className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 text-white p-6 rounded-2xl shadow-2xl border-2 border-sky-300 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
              </div>
              
              {/* Floating Zap Icon */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-white to-sky-100 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Zap className="w-4 h-4 text-sky-600" />
              </motion.div>

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="bg-gradient-to-r from-white to-sky-100 text-sky-700 p-2 rounded-full shadow-md"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Tag className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-black text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      GRAB NOW! 30% OFF
                    </motion.h3>
                    <p className="text-sky-100 font-semibold flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Limited Time Offer - Ends Soon!
                    </p>
                  </div>
                </div>
                
                <motion.div
                  className="text-right"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-xs text-sky-200 uppercase tracking-wider">Save Up To</div>
                  <div className="text-3xl font-black text-white">$500</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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

            {/* Sky Blue Call-to-Action */}
            {/* <motion.div
              className="bg-gradient-to-r from-sky-50 via-sky-100 to-blue-50 border-2 border-sky-200 rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-2 rounded-full shadow-md">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sky-800 font-semibold">Book Today & Travel Tomorrow</p>
                    <p className="text-sky-600 text-sm">Free cancellation • No hidden fees</p>
                  </div>
                </div>
                <motion.div
                  className="bg-gradient-to-r from-sky-500 to-sky-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  BEST DEAL
                </motion.div>
              </div>
            </motion.div> */}

            {/* Search Tab Section */}
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl border border-sky-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                
                {/* Enhanced Search Button */}
                <motion.button
                  className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 px-6 sm:px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Start Booking Now</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Capsule Images Side by Side */}
          <div className="flex relative h-full items-center justify-center lg:justify-end lg:pr-8 mt-8 lg:mt-0">
            {/* First Capsule Image */}
            <motion.div 
              className="w-40 h-60 sm:w-60 sm:h-80 lg:w-80 lg:h-[70vh] rounded-full overflow-hidden shadow-2xl border-4 border-white mr-2 sm:mr-4"
              style={{ y: firstImageY }}
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=600&fit=crop"
                alt="City skyline with Central Park"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Second Capsule Image */}
            <motion.div 
              className="w-40 h-60 sm:w-60 sm:h-80 lg:w-80 lg:h-[70vh] rounded-full overflow-hidden shadow-2xl border-4 border-white mt-12 sm:mt-16 lg:mt-24"
              style={{ y: secondImageY }}
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=600&fit=crop"
                alt="Travelers exploring temple"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Sky Blue Decorative Elements */}
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
              className="absolute top-20 right-20 w-3 h-3 bg-sky-400 rounded-full opacity-70"
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
            
            {/* Sky Blue Floating Deal Indicator */}
            <motion.div 
              className="absolute bottom-20 left-10 bg-gradient-to-r from-sky-500 to-sky-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-sky-300"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              HOT DEAL! ⚡
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;