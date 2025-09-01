import React from 'react';
import { motion } from 'framer-motion';

const TravelBookingBanner = () => {
  return (
    <motion.div 
      className="relative w-full max-w-6xl mx-auto h-96 rounded-3xl overflow-hidden shadow-2xl my-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://st.depositphotos.com/1500858/4082/i/950/depositphotos_40827443-stock-photo-travel-the-world-concept.jpg')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      
      {/* Content Overlay */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-4 text-center shadow-lg border border-white/20">
          <motion.h1 
            className="text-3xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-blue-900">First Booking</span>{' '}
            <span className="text-cyan-500">Get 70%</span>{' '}
            <span className="text-blue-900">Discount!</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-sm leading-relaxed mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            It is a long established fact that a reader will be distracted by the readable content
            web page editors now use of a page when looking at its layout.
          </motion.p>
          
          <motion.button
            className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Book Now
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>
        </div>
      </motion.div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-400/20 rounded-full backdrop-blur-sm"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
};

export default TravelBookingBanner;