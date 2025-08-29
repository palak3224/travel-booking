import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, CreditCard, Headphones, Gift, CheckCircle } from 'lucide-react';

const WhyBookWithUs = () => {
  const benefits = [
    {
      id: 1,
      icon: Search,
      title: "Compare 100+ airlines, hotels & cruise lines",
      description: "Access the world's largest inventory of travel options in one place",
      image: "https://images.unsplash.com/photo-1556388158-158dc651ce79?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 2,
      icon: Shield,
      title: "Best price guarantee",
      description: "Find a lower price elsewhere? We'll match it and give you extra credit",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 3,
      icon: CreditCard,
      title: "Secure & fast payments",
      description: "Bank-level security with instant booking confirmation",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 4,
      icon: Headphones,
      title: "24/7 travel support",
      description: "Expert assistance whenever you need it, anywhere in the world",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 5,
      icon: Gift,
      title: "Exclusive deals only on our site",
      description: "Special partnerships bring you offers you won't find anywhere else",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&auto=format"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why Book With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join millions of travelers who trust us for their perfect getaway
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-gray-100 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Icon */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl"
                      variants={iconVariants}
                    >
                      <Icon className="w-6 h-6 text-blue-600" />
                    </motion.div>

                    {/* Check mark for trust */}
                    <motion.div 
                      className="absolute bottom-4 right-4 bg-green-500 rounded-full p-2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    >
                      {benefit.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    >
                      {benefit.description}
                    </motion.p>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Bar */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
              <div className="text-gray-600 font-medium">Travelers Served</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600 font-medium">Customer Rating</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-10 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">Start Booking Today</span>
            <CheckCircle className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;