import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Building, Ship, MapPin, Users, Award, ArrowRight } from 'lucide-react';

const AboutHero = () => {
  const features = [
    {
      icon: Plane,
      label: 'Flights'
    },
    {
      icon: Building,
      label: 'Hotels'
    },
    {
      icon: Ship,
      label: 'Cruises'
    }
  ];

  const stats = [
    {
      number: '2M+',
      label: 'Happy Travelers'
    },
    {
      number: '50+',
      label: 'Countries'
    },
    {
      number: '24/7',
      label: 'Support'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-blue-50 overflow-hidden">
      {/* Background Map Silhouette */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          {/* Simplified world map silhouette */}
          <path d="M200,300 Q300,250 400,300 L500,280 Q600,300 700,290 L800,310 Q900,280 1000,300 L1100,290" 
                stroke="currentColor" strokeWidth="2" fill="none" className="text-sky-600"/>
          <path d="M150,400 Q250,380 350,400 L450,390 Q550,410 650,400 L750,420 Q850,390 950,410" 
                stroke="currentColor" strokeWidth="2" fill="none" className="text-sky-600"/>
          <circle cx="300" cy="350" r="3" fill="currentColor" className="text-sky-400"/>
          <circle cx="600" cy="320" r="3" fill="currentColor" className="text-sky-400"/>
          <circle cx="850" cy="380" r="3" fill="currentColor" className="text-sky-400"/>
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-20 w-16 h-16 bg-sky-200/30 rounded-full"
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-32 w-12 h-12 bg-blue-200/30 rounded-full"
      />
      <motion.div 
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-40 left-32 w-20 h-20 bg-sky-300/20 rounded-full"
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Main Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight">
                Making Travel{' '}
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Simple
                </span>
                ,{' '}
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Affordable
                </span>
                , and{' '}
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Trustworthy
                </span>
                .
              </h1>

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We're your all-in-one U.S.-based travel booking partner for flights, hotels, and cruises.
              </p>
            </motion.div>

            {/* Service Icons */}
            <motion.div variants={itemVariants} className="flex justify-center items-center gap-12 py-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                      <IconComponent className="w-8 h-8 text-sky-500" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats Section */}
            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-extrabold text-sky-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-200"
              >
                Start Planning
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-full shadow-lg border border-gray-200 transition-all duration-200"
              >
                <Users className="w-5 h-5" />
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-24 text-white fill-current">
          <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
};

export default AboutHero;