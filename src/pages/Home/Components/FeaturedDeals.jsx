import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Building2, Ship, ArrowRight, Clock, Star } from 'lucide-react';

const FeaturedDeals = () => {
  const deals = [
    {
      id: 1,
      type: 'Flights',
      icon: Plane,
      route: 'New York → Miami',
      price: '$129',
      originalPrice: '$299',
      savings: '57% off',
      timeLeft: '2 days left',
      rating: 4.8,
      reviews: 2847,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop&auto=format'
    },
    {
      id: 2,
      type: 'Hotels',
      icon: Building2,
      route: 'Las Vegas 4★',
      price: '$89',
      originalPrice: '$189',
      savings: '53% off',
      timeLeft: '/night',
      rating: 4.6,
      reviews: 1923,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop&auto=format'
    },
    {
      id: 3,
      type: 'Cruises',
      icon: Ship,
      route: 'Caribbean 5-Night',
      price: '$499',
      originalPrice: '$899',
      savings: '44% off',
      timeLeft: '5 spots left',
      rating: 4.9,
      reviews: 1156,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format'
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
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -12,
      transition: {
        duration: 0.4,
        ease: "easeOut"
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
            Featured Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exclusive offers curated for discerning travelers
          </p>
        </motion.div>

        {/* Deals Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {deals.map((deal, index) => {
            const Icon = deal.icon;
            return (
              <motion.div
                key={deal.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-gray-100">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={deal.image} 
                      alt={deal.route}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Type badge */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold px-4 py-2 rounded-full flex items-center space-x-2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{deal.type}</span>
                    </motion.div>

                    {/* Savings badge */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-2 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    >
                      {deal.savings}
                    </motion.div>

                    {/* Time left indicator */}
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white text-sm font-medium px-3 py-2 rounded-full border border-white/20 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{deal.timeLeft}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{deal.route}</h3>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-700 text-sm ml-1 font-medium">{deal.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({deal.reviews.toLocaleString()} reviews)</span>
                    </div>

                    <div className="flex items-baseline justify-between mb-6">
                      <div className="flex items-baseline space-x-3">
                        <span className="text-4xl font-bold text-gray-900">{deal.price}</span>
                        <span className="text-lg text-gray-400 line-through">{deal.originalPrice}</span>
                      </div>
                    </div>

                    <motion.button
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 inline-flex items-center space-x-3 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">View All Deals</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDeals;