import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, CreditCard, Clock, Star, Search, Tag, Percent, Gift, Zap } from "lucide-react";

const WhyBookWithUs = () => {
  const [currentDeal, setCurrentDeal] = useState(0);

  // Rotating deals
  const deals = [
    { discount: "30%", text: "OFF FLIGHTS", subtext: "Limited Time" },
    { discount: "50%", text: "OFF HOTELS", subtext: "This Week Only" },
    { discount: "25%", text: "OFF CRUISES", subtext: "Book Now" }
  ];

  // Auto-rotate deals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % deals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      title: "Compare 100+ airlines, hotels & cruise lines",
      description: "Access the world's largest travel inventory in one place",
      icon: Search,
      gradient: "from-sky-500 to-sky-600",
      size: "large",
      deal: {
        badge: "COMPARE & SAVE",
        savings: "Up to 40% savings"
      }
    },
    {
      id: 2,
      title: "Best price guarantee",
      description: "Find it cheaper? We'll match it + give you 10% extra off",
      icon: Shield,
      gradient: "from-sky-400 to-sky-500",
      size: "tall",
      deal: {
        badge: "PRICE MATCH +10%",
        savings: "Guaranteed best price"
      }
    },
    {
      id: 3,
      title: "Flash Sale: Secure payments + instant discounts",
      description: "Bank-level security with exclusive payment bonuses",
      icon: CreditCard,
      gradient: "from-sky-600 to-blue-500",
      size: "wide",
      deal: {
        badge: "FLASH DEAL",
        savings: "Extra 5% with card payments"
      }
    },
    {
      id: 4,
      title: "24/7 support + exclusive member deals",
      description: "Get help anytime plus access to member-only offers",
      icon: Clock,
      gradient: "from-blue-500 to-sky-500",
      size: "wide",
      deal: {
        badge: "MEMBER EXCLUSIVE",
        savings: "VIP deals daily"
      }
    },
    {
      id: 5,
      title: "Early bird specials & last-minute deals",
      description: "Book early or grab last-minute steals with huge discounts",
      icon: Star,
      gradient: "from-sky-300 to-sky-400",
      size: "tall",
      deal: {
        badge: "EARLY BIRD",
        savings: "Save up to 60%"
      }
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
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden">
      {/* Floating Deal Elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Tag size={60} className="text-sky-400" />
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header with Rotating Deal */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Deal Banner */}
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-white text-sky-600 w-8 h-8 rounded-full flex items-center justify-center mr-3"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={16} />
            </motion.div>
            <motion.div
              key={currentDeal}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-black">{deals[currentDeal].discount}</span>
              <div className="text-left">
                <div className="text-sm font-bold">{deals[currentDeal].text}</div>
                <div className="text-xs text-sky-100">{deals[currentDeal].subtext}</div>
              </div>
            </motion.div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-black">Why Book</span>{" "}
            <span className="text-sky-500">With Us?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover exclusive deals and benefits that make us your perfect travel companion
          </p>
        </motion.div>

        {/* Enhanced Bento Grid with Deal Overlays */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                className={`${getGridClasses(feature.size)} group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer min-h-[120px] flex flex-col justify-between border border-sky-100 hover:border-sky-300`}
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
                {/* Deal Badge */}
                <motion.div 
                  className="absolute top-3 right-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md z-20"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {feature.deal.badge}
                </motion.div>

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

                  {/* Deal Savings Info */}
                  <motion.div 
                    className="mt-3 flex items-center text-sky-600 font-semibold text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    <Percent size={14} className="mr-1" />
                    {feature.deal.savings}
                  </motion.div>

                  {/* Bottom Border Effect */}
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section with Deal Information */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Deal Summary Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div 
              className="bg-white rounded-xl p-4 shadow-md border border-sky-200 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">Free Cancellation</div>
                <div className="text-sm text-gray-600">On most bookings</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-4 shadow-md border border-sky-200 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center">
                <Tag className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">Price Alerts</div>
                <div className="text-sm text-gray-600">Never miss a deal</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-4 shadow-md border border-sky-200 flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">Reward Points</div>
                <div className="text-sm text-gray-600">Earn with every booking</div>
              </div>
            </motion.div>
          </div>

          <motion.button
            className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Claim Your Deals Now - Save Big!</span>
          </motion.button>

          <p className="text-sm text-gray-500 mt-4">
            🔥 Limited time offers • No hidden fees • Instant confirmation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;