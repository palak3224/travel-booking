import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, MapPin, Package, Plane } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 U.S. Cities to Visit in 2025',
      excerpt: 'Explore the most exciting American destinations that should be on your travel bucket list this year.',
      image: 'https://picsum.photos/400/300?random=10',
      author: 'Sarah Johnson',
      date: 'March 15, 2025',
      readTime: '8 min read',
      category: 'Travel Guide',
      icon: MapPin
    },
    {
      id: 2,
      title: 'Cruise Packing List',
      excerpt: 'Essential items and smart packing tips to make your cruise vacation smooth and enjoyable.',
      image: 'https://picsum.photos/400/300?random=11',
      author: 'Mike Chen',
      date: 'March 12, 2025',
      readTime: '6 min read',
      category: 'Packing Tips',
      icon: Package
    },
    {
      id: 3,
      title: 'Cheapest Flight Deals',
      excerpt: 'Insider secrets and proven strategies to find the best flight deals and save money on your next trip.',
      image: 'https://picsum.photos/400/300?random=12',
      author: 'Emma Davis',
      date: 'March 10, 2025',
      readTime: '5 min read',
      category: 'Money Saving',
      icon: Plane
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
    hidden: { opacity: 0, y: 30 },
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

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold text-gray-800 mb-4">
            TRAVEL BLOG
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get inspired with expert travel tips, destination guides, and insider secrets
          </p>
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <motion.article
                key={post.id}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-sky-600 px-3 py-1 rounded-full text-sm font-medium">
                        <IconComponent className="w-4 h-4" />
                        <span>{post.category}</span>
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                        {post.readTime}
                      </span>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-sky-600 text-sm font-medium group-hover:gap-3 transition-all duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.article>
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
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;