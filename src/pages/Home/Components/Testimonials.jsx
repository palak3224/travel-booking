import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I booked my Florida trip here – got cheaper flights than anywhere else!",
      author: "Sarah M.",
      rating: 5,
      verified: true,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format&face=center"
    },
    {
      id: 2,
      text: "Loved the cruise booking process – easy and secure.",
      author: "James T.",
      rating: 5,
      verified: true,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&face=center"
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const quoteVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers around the world
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100 relative overflow-hidden">
                
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-6 right-6 text-gray-200"
                  variants={quoteVariants}
                >
                  <Quote className="w-12 h-12" />
                </motion.div>

                {/* Stars */}
                <motion.div 
                  className="flex items-center space-x-1 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: 0.6 + index * 0.2 + i * 0.1, 
                        duration: 0.3,
                        ease: "backOut"
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote 
                  className="text-xl text-gray-700 leading-relaxed mb-8 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
                >
                  "{testimonial.text}"
                </motion.blockquote>

                {/* Author Section */}
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                >
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {testimonial.verified && (
                      <motion.div 
                        className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 + index * 0.2, duration: 0.4 }}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 flex items-center space-x-1">
                      <span>Verified Customer</span>
                    </p>
                  </div>
                </motion.div>

                {/* Subtle hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">4.8/5 Average Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">50,000+ Happy Travelers</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Planning Your Trip</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;