import React from 'react';
import { motion } from 'framer-motion';
import { Shield, DollarSign, Headphones, Star, CheckCircle, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: Award,
      title: 'Best Price Guarantee',
      description: 'We guarantee the lowest prices on flights, hotels, and cruises. Find a better deal elsewhere? We\'ll match it plus give you extra savings.',
      color: 'from-sky-400 to-sky-500'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Secure, Fast, and Flexible Payments',
      description: 'Your transactions are protected with bank-level security. Multiple payment options with instant confirmation and flexible booking policies.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 3,
      icon: Headphones,
      title: '24/7 Dedicated Support',
      description: 'Our expert travel consultants are available around the clock to assist you before, during, and after your trip. Real people, real help.',
      color: 'from-sky-500 to-blue-500'
    },
    {
      id: 4,
      icon: Star,
      title: 'Exclusive Deals Only on Our Platform',
      description: 'Access special rates and packages not available anywhere else. VIP perks, room upgrades, and exclusive experiences just for our customers.',
      color: 'from-blue-500 to-sky-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-sky-200/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-sky-300/20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={headerVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              WHY CHOOSE US
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
              Discover Beautiful Place{' '}
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                With Us
              </span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <motion.div
                    key={reason.id}
                    variants={cardVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side - Two Overlapping Images */}
            <motion.div 
              variants={imageVariants}
              className="relative flex justify-center items-center min-h-[600px]"
            >
              {/* Background Image - Much Larger Circle */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 50 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="relative w-96 h-[60vh]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://thumbs.dreamstime.com/b/planning-to-travel-1855405.jpg"
                    alt="Travel destination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Foreground Image - Smaller Circle with Better Spacing */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.6, x: -60, y: 30 }}
                animate={{ opacity: 1, scale: 1, x: -120, y: 80 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute w-64 h-[40vh] z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-sky-500/20 rounded-full"></div>
                <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://media.istockphoto.com/id/578795412/vector/travel-around-the-world-flat-design-illustration.jpg?s=612x612&w=0&k=20&c=jJlKiUepgwnSyeSB5mpwynihk1a8MpK97M0ogpZRn7c="
                    alt="Happy travelers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-12 h-12 bg-sky-400/30 rounded-full"
              />

              <motion.div 
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute bottom-12 right-16 w-8 h-8 bg-blue-400/30 rounded-full"
              />

              <motion.div 
                animate={{ 
                  y: [0, -8, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-20 left-4 w-6 h-6 bg-sky-300/40 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;