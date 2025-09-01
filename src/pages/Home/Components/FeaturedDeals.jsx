import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Building, Ship, Star, Clock, MapPin } from 'lucide-react';

const FeaturedDeals = () => {
  const deals = [
    {
      id: 1,
      type: 'Flights',
      icon: Plane,
      title: 'New York → Miami',
      price: '$129',
      originalPrice: '$199',
      rating: 4.2,
      reviews: '3.2k Reviews',
      duration: '3h 20m',
      details: 'Round Trip',
      image: 'https://picsum.photos/400/600?random=1',
      bgGradient: 'from-sky-400 to-blue-500'
    },
    {
      id: 2,
      type: 'Hotels',
      icon: Building,
      title: 'Las Vegas 4★',
      price: '$89',
      originalPrice: '$149',
      rating: 4.5,
      reviews: '1.8k Reviews',
      duration: 'per night',
      details: 'Premium Room',
      image: 'https://picsum.photos/400/600?random=2',
      bgGradient: 'from-blue-500 to-sky-600'
    },
    {
      id: 3,
      type: 'Cruises',
      icon: Ship,
      title: 'Caribbean 5-Night',
      price: '$499',
      originalPrice: '$699',
      rating: 4.7,
      reviews: '2.1k Reviews',
      duration: '5 Days',
      details: 'All Inclusive',
      image: 'https://picsum.photos/400/600?random=3',
      bgGradient: 'from-sky-500 to-blue-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold text-gray-800 mb-4">
            FEATURED DEALS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing deals on flights, hotels, and cruises to your dream destinations
          </p>
        </div>

        {/* Deals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {deals.map((deal) => {
            const IconComponent = deal.icon;
            return (
              <motion.div
                key={deal.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                {/* Main Card Container - Vertical Capsule Shape */}
                <div className="relative h-96 w-72 mx-auto">
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <img 
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br`}></div>
                  </div>
                  
                  {/* Content Overlay - Positioned at bottom with overlap */}
                  <div className="absolute bottom-0 left-0 right-0 px-6">
                    {/* White Information Card - Minimized */}
                    <motion.div 
                      className="bg-white rounded-xl p-3 text-gray-800 shadow-lg transform translate-y-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Deal Type Badge */}
                      <div className="flex items-center justify-center mb-2">
                        <div className="inline-flex items-center gap-1 bg-sky-100 text-sky-600 px-2 py-1 rounded-full text-xs font-medium">
                          <IconComponent className="w-3 h-3" />
                          <span>{deal.type}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-bold text-center mb-2 text-gray-800">{deal.title}</h3>

                      {/* Price Section */}
                      <div className="text-center mb-2">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg font-bold text-sky-600">{deal.price}</span>
                          <span className="text-xs text-gray-500 line-through">{deal.originalPrice}</span>
                        </div>
                      </div>

                      {/* Rating Section */}
                      <div className="flex items-center justify-center gap-1">
                        {renderStars(deal.rating)}
                        <span className="text-xs font-medium text-gray-700">{deal.rating}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200"
          >
            View All Deals
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeals;