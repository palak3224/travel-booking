import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState("flights");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy travel images
  const travelImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop"
  ];

  // Auto-slide images every 4 seconds (slower for mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % travelImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    console.log(`Searching for ${selectedOption}: ${searchQuery}`);
  };

  // Navigate to specific image
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Navigate to previous/next image
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? travelImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % travelImages.length);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image - Hidden on mobile, replaced with carousel */}
      <div className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop)` }}>
      </div>
      
      {/* Mobile Background Carousel */}
      <div className="lg:hidden absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={travelImages[currentImageIndex]}
              alt={`Travel destination ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/50 lg:to-black/30"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Mobile-First Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between h-full space-y-8 lg:space-y-0">
            
            {/* Text Content */}
            <div className="w-full lg:w-[55%] text-center lg:text-left space-y-6 lg:space-y-10">
              {/* Hero Text with Mobile Optimization */}
              <div className="space-y-4 lg:space-y-8">
                <div className="space-y-3 lg:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block"
                  >
                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-2 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                      ✈️ Best Travel Deals
                    </span>
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-white"
                    style={{ 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}
                  >
                    Your All-in-One
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                      Travel Booking
                    </span>
                    <br />
                    Partner
                  </motion.h1>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-100 font-light px-4 lg:px-0"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                >
                  Flights, Cruises, and Hotels – Find the best deals in seconds. 
                  Plan your perfect trip with trusted partners and instant confirmations.
                </motion.p>
                
                {/* Mobile Optimized CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 px-4 lg:px-0"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-6 sm:px-10 py-4 lg:py-5 text-lg lg:text-xl font-bold rounded-2xl transition-all duration-300 text-black shadow-2xl relative overflow-hidden group"
                    style={{ 
                      backgroundColor: '#FFC300',
                      boxShadow: '0 10px 30px rgba(255, 195, 0, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#FFB100';
                      e.target.style.transform = 'translateY(-4px)';
                      e.target.style.boxShadow = '0 15px 40px rgba(255, 195, 0, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#FFC300';
                      e.target.style.transform = 'translateY(0px)';
                      e.target.style.boxShadow = '0 10px 30px rgba(255, 195, 0, 0.4)';
                    }}
                  >
                    <span className="relative z-10">Start Booking Now</span>
                  </motion.button>
                  
                  <div className="text-gray-200 text-center lg:text-left">
                    <p className="text-sm font-semibold">Trusted by 10M+ travelers</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-base lg:text-lg">⭐</span>
                      ))}
                      <span className="text-sm ml-2">4.9/5 Rating</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile-Optimized Search Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-2xl p-4 lg:p-6 mx-4 lg:mx-0 max-w-3xl border border-white/20 mt-6 lg:mt-8"
                style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}
              >
                {/* Mobile: Stacked Layout, Desktop: Horizontal */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                  {/* Service Type Selector */}
                  <div className="relative w-full sm:w-auto">
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-full appearance-none bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg cursor-pointer min-w-[120px] sm:min-w-[140px] shadow-lg"
                      style={{ outline: 'none' }}
                    >
                      <option value="flights">✈️ Flights</option>
                      <option value="hotels">🏨 Hotels</option>
                      <option value="cruises">🚢 Cruises</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Search Input */}
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        selectedOption === 'flights' ? 'NYC ✈️ Paris' :
                        selectedOption === 'hotels' ? 'Enter destination' :
                        'Cruise destinations'
                      }
                      className="w-full px-4 py-3 lg:px-6 lg:py-4 text-base lg:text-lg bg-gray-50 border-2 border-gray-200 rounded-xl lg:rounded-2xl focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium text-gray-800"
                      style={{ outline: 'none' }}
                    />
                  </div>

                  {/* Search Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSearch}
                    className="w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base lg:text-lg rounded-xl lg:rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search</span>
                  </motion.button>
                </div>

                {/* Quick Service Tabs - Better Mobile Layout */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                  {[
                    { key: 'flights', label: '✈️ Flights', icon: '✈️' },
                    { key: 'hotels', label: '🏨 Hotels', icon: '🏨' }, 
                    { key: 'cruises', label: '🚢 Cruises', icon: '🚢' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setSelectedOption(tab.key)}
                      className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg lg:rounded-xl text-sm font-semibold transition-all duration-300 ${
                        selectedOption === tab.key
                          ? 'bg-blue-100 text-blue-700 shadow-md'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side Carousel - Desktop Only, Mobile has background carousel */}
            <div className="hidden lg:block w-[45%] relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Carousel Container */}
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={travelImages[currentImageIndex]}
                        alt={`Travel destination ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Image label */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg"
                        >
                          <p className="text-black text-lg font-bold">
                            Amazing Destination {currentImageIndex + 1}
                          </p>
                          <p className="text-gray-600 text-sm">
                            Discover breathtaking views and unforgettable experiences
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-6 space-x-3">
                  {travelImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-500 border-2 border-white shadow-lg ${
                        index === currentImageIndex 
                          ? 'scale-125 shadow-2xl' 
                          : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                      }`}
                      style={{
                        backgroundColor: index === currentImageIndex ? '#FFC300' : 'transparent',
                        boxShadow: index === currentImageIndex ? '0 0 20px rgba(255, 195, 0, 0.6)' : '0 2px 10px rgba(0,0,0,0.3)'
                      }}
                    />
                  ))}
                </div>

                {/* Thumbnail Preview */}
                <div className="flex justify-center mt-4 space-x-2 opacity-70">
                  {travelImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'border-yellow-400 shadow-lg scale-110' 
                          : 'border-white/50 hover:border-white hover:scale-105'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Carousel Info */}
                <div className="text-center mt-4">
                  <p className="text-white/80 text-sm">
                    {currentImageIndex + 1} of {travelImages.length} destinations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel Indicators - Only visible on mobile */}
          <div className="lg:hidden flex justify-center mt-8 space-x-3">
            {travelImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 border border-white/50 ${
                  index === currentImageIndex 
                    ? 'scale-125 shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                style={{
                  backgroundColor: index === currentImageIndex ? '#FFC300' : 'transparent',
                  boxShadow: index === currentImageIndex ? '0 0 15px rgba(255, 195, 0, 0.6)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;