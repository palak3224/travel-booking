import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  GitCompare, 
  CreditCard,
  Building2,
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  Bed,
  Star,
  Wifi
} from 'lucide-react';

const HotelBookingSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Search",
      subtitle: "your destination and dates",
      description: "Enter your destination city, select check-in and check-out dates, and choose the number of guests and rooms.",
      icon: Search,
      color: "sky",
      delay: 0.2
    },
    {
      number: 2,
      title: "Compare",
      subtitle: "hotel options",
      description: "Browse through thousands of hotels with real-time prices, amenities, ratings, and guest reviews.",
      icon: GitCompare,
      color: "blue",
      delay: 0.4
    },
    {
      number: 3,
      title: "Book",
      subtitle: "& get instant confirmation",
      description: "Complete your secure payment and receive instant booking confirmation via email. Your stay is guaranteed!",
      icon: CreditCard,
      color: "sky",
      delay: 0.6
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-sky-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            How It <span className="text-sky-500">Works</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Book your perfect hotel in just 3 simple steps
          </p>
        </motion.div>

        {/* Hotel Journey Visualization */}
        <div className="relative mb-20">
          {/* Journey Path Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-sky-200 via-blue-300 to-sky-200 rounded-full opacity-30"></div>
          </div>
          
          {/* Animated Hotel Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ x: -200, scale: 0.8 }}
            animate={{ x: 200, scale: 1 }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Building2 className="w-8 h-8 text-sky-500" />
          </motion.div>

          {/* Start and End Points */}
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-4 h-4 bg-sky-500 rounded-full mb-2"></div>
              <MapPin className="w-6 h-6 text-sky-600" />
              <span className="text-sm text-gray-600 mt-1">Check-in</span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full mb-2"></div>
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-gray-600 mt-1">Check-out</span>
            </motion.div>
          </div>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.number} className="relative">
                {/* Connection Line - Desktop only */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-24 left-full w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0">
                    <ChevronRight className="absolute -right-2 -top-2 w-4 h-4 text-gray-400" />
                  </div>
                )}
                
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: step.delay, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl shadow-xl p-8 text-center h-full border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    
                    {/* Step Number */}
                    <motion.div 
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${
                        step.color === 'sky' 
                          ? 'from-sky-400 to-sky-600' 
                          : 'from-blue-400 to-blue-600'
                      } flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${
                        step.color === 'sky' ? 'bg-sky-100' : 'bg-blue-100'
                      } flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className={`w-10 h-10 ${
                        step.color === 'sky' ? 'text-sky-500' : 'text-blue-500'
                      }`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      step.color === 'sky' ? 'text-sky-600' : 'text-blue-600'
                    }`}>
                      {step.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step-specific elements */}
                    {step.number === 1 && (
                      <div className="mt-6 flex justify-center space-x-4">
                        <div className="flex items-center space-x-2 bg-sky-50 px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-sky-500" />
                          <span className="text-xs text-sky-700 font-medium">Dates</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-sky-50 px-3 py-2 rounded-lg">
                          <Users className="w-4 h-4 text-sky-500" />
                          <span className="text-xs text-sky-700 font-medium">Guests</span>
                        </div>
                      </div>
                    )}

                    {step.number === 2 && (
                      <div className="mt-6">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-blue-700 font-medium">50K+ Hotels</span>
                            <span className="text-blue-700 font-medium">Best Prices</span>
                          </div>
                          <div className="flex justify-center space-x-3 mt-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <Wifi className="w-4 h-4 text-blue-500" />
                            <Bed className="w-4 h-4 text-blue-500" />
                          </div>
                        </div>
                      </div>
                    )}

                    {step.number === 3 && (
                      <div className="mt-6">
                        <div className="bg-sky-50 rounded-xl p-4 flex items-center justify-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                            <span className="text-sky-700 font-medium text-sm">Instant Confirmation</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Your Perfect Stay
          </motion.button>
          <p className="text-gray-500 text-sm mt-4">
            Join millions of satisfied guests
          </p>
        </motion.div>

        {/* Floating Hotel Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-10"
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
            <div className="w-12 h-12 bg-sky-200 rounded-xl opacity-20 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-sky-600" />
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-20"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-16 h-16 bg-blue-200 rounded-2xl opacity-15 flex items-center justify-center">
              <Bed className="w-8 h-8 text-blue-600" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-1/4"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="w-10 h-10 bg-sky-300 rounded-lg opacity-25 flex items-center justify-center">
              <Star className="w-5 h-5 text-sky-700 fill-sky-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingSteps;