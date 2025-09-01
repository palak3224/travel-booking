import React from "react";
import { motion } from "framer-motion";
import {
    Building2,
    Calendar,
    Heart,
    ArrowRight,
    Star,
    TrendingUp,
    MapPin
} from "lucide-react";

const PopularCities = () => {
    const cityData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
            city: "New York",
            country: "USA",
            hotels: "2,500+ hotels",
            avgPrice: 180,
            rating: 4.5,
            badge: "FEATURED"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=250&fit=crop",
            city: "Paris",
            country: "France",
            hotels: "1,800+ hotels",
            avgPrice: 220,
            rating: 4.7,
            badge: "POPULAR"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop",
            city: "London",
            country: "UK",
            hotels: "2,200+ hotels",
            avgPrice: 195,
            rating: 4.4,
            badge: null
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
            city: "Dubai",
            country: "UAE",
            hotels: "1,200+ hotels",
            avgPrice: 350,
            rating: 4.8,
            badge: "FEATURED"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
            city: "Tokyo",
            country: "Japan",
            hotels: "1,900+ hotels",
            avgPrice: 275,
            rating: 4.6,
            badge: null
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop",
            city: "Singapore",
            country: "Singapore",
            hotels: "800+ hotels",
            avgPrice: 320,
            rating: 4.7,
            badge: "POPULAR"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1539650116574-75c0c6d9f0de?w=400&h=250&fit=crop",
            city: "Barcelona",
            country: "Spain",
            hotels: "1,400+ hotels",
            avgPrice: 165,
            rating: 4.3,
            badge: null
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop",
            city: "Rome",
            country: "Italy",
            hotels: "1,600+ hotels",
            avgPrice: 210,
            rating: 4.5,
            badge: null
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<Star key="half" className="w-3 h-3 fill-yellow-400/50 text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div className="w-full bg-gradient-to-br from-sky-50 to-blue-50 py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center mb-3">
                        <div className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                            <Building2 className="w-3 h-3" />
                            HOTELS
                        </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">
                        Most Popular <span className="text-sky-600">Destinations</span>
                    </h2>
                    <p className="text-gray-600 text-base max-w-xl mx-auto">
                        Explore trending cities and find the perfect hotel for your stay.
                    </p>
                </motion.div>

                {/* City Cards Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cityData.map((city, index) => (
                            <motion.div
                                key={city.id}
                                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-80"
                                style={{
                                    borderRadius: '25px 25px 25px 0px'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -3 }}
                            >
                                {/* Image Section */}
                                <div className="relative h-1/2 overflow-hidden m-2"
                                    style={{
                                        borderRadius: '25px 25px 25px 0px'
                                    }}
                                >
                                    <img
                                        src={city.image}
                                        alt={`${city.city}, ${city.country}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Heart Icon */}
                                    <motion.button
                                        className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm hover:bg-white transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Heart className="w-3 h-3 text-gray-400 hover:text-red-500 transition-colors duration-300" />
                                    </motion.button>

                                    {/* Badge */}
                                    {city.badge && (
                                        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold text-white ${city.badge === "FEATURED"
                                                ? "bg-gradient-to-r from-sky-400 to-blue-500"
                                                : "bg-gradient-to-r from-orange-400 to-red-500"
                                            }`}>
                                            {city.badge === "FEATURED" && <Star className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {city.badge === "POPULAR" && <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {city.badge}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-3">
                                    {/* City and Country */}
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <MapPin className="w-3 h-3 text-sky-500" />
                                        <span className="font-bold text-gray-900 text-sm">{city.city}</span>
                                        <span className="text-gray-500 text-sm">{city.country}</span>
                                    </div>

                                    {/* Hotel Count and Rating */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-gray-600">{city.hotels}</span>
                                        <div className="flex items-center gap-1">
                                            {renderStars(city.rating)}
                                            <span className="text-xs text-gray-600 ml-1">{city.rating}</span>
                                        </div>
                                    </div>

                                    {/* Price and Button */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500">Avg. per night</span>
                                            <div className="text-lg font-bold text-coral-500" style={{ color: '#ff6b6b' }}>
                                                ${city.avgPrice}
                                            </div>
                                        </div>
                                        <motion.button
                                            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-2.5 py-1.5 rounded-md font-semibold text-xs hover:shadow-md transition-all duration-300 flex items-center gap-1"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Explore
                                            <ArrowRight className="w-3 h-3" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.button
                        className="bg-white text-sky-600 border-2 border-sky-500 px-6 py-3 rounded-lg font-bold text-base hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Destinations
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default PopularCities;