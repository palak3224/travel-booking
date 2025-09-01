import React from "react";
import { motion } from "framer-motion";
import { Plane, Shield, CreditCard, Clock, Star, Search } from "lucide-react";

const WhyBookWithUs = () => {
  const features = [
    {
      id: 1,
      title: "Compare 100+ airlines, hotels & cruise lines",
      description: "Access the world's largest travel inventory in one place",
      icon: Search,
      gradient: "from-sky-500 to-sky-600",
      size: "large" // Takes 2x2 grid space
    },
    {
      id: 2,
      title: "Best price guarantee",
      description: "Find it cheaper? We'll match it",
      icon: Shield,
      gradient: "from-sky-400 to-sky-500",
      size: "tall" // Takes 1x2 grid space
    },
    {
      id: 3,
      title: "Secure & fast payments",
      description: "Your data is protected with bank-level security",
      icon: CreditCard,
      gradient: "from-sky-600 to-blue-500",
      size: "wide" // Takes 2x1 grid space
    },
    {
      id: 4,
      title: "24/7 travel support",
      description: "Get help whenever you need it",
      icon: Clock,
      gradient: "from-blue-500 to-sky-500",
      size: "wide" // Takes 2x1 grid space
    },
    {
      id: 5,
      title: "Exclusive deals only on our site",
      description: "Access member-only discounts and offers",
      icon: Star,
      gradient: "from-sky-300 to-sky-400",
      size: "tall" // Takes 1x2 grid space
    }
  ];

  const getGridClasses = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-1";
      case "tall":
        return "md:col-span-1 md:row-span-1";
      case "wide":
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-black">Why Book</span>{" "}
            <span className="text-sky-500">With Us?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the benefits that make us your perfect travel companion
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                className={`${getGridClasses(feature.size)} group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer min-h-[120px] flex flex-col justify-between`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Background Icon */}
                <div className="absolute -right-4 -bottom-4 opacity-3 group-hover:opacity-8 transition-all duration-300">
                  <motion.div
                    className="transform group-hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent 
                      size={80} 
                      className="text-gray-200"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Icon and Title */}
                  <div className="space-y-3">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent size={20} className="text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mt-2 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Border Effect */}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;