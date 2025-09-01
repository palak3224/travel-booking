import React from "react";
import { motion } from "framer-motion";
import {
    Anchor,
    Calendar,
    Heart,
    ArrowRight,
    Star,
    TrendingUp,
    MapPin,
    Users,
    Clock,
    Waves,
    Music
} from "lucide-react";

const PopularCruisesParty = () => {
    const cruisePartyData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
            name: "Caribbean Party",
            destination: "Caribbean Sea",
            duration: "7 nights",
            avgPrice: 890,
            rating: 4.8,
            badge: "FEATURED",
            partyType: "DJ & Live Music"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=250&fit=crop",
            name: "Mediterranean Gala",
            destination: "Mediterranean",
            duration: "10 nights",
            avgPrice: 1250,
            rating: 4.7,
            badge: "POPULAR",
            partyType: "Themed Parties"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
            name: "Bahamas Bash",
            destination: "Bahamas",
            duration: "5 nights",
            avgPrice: 650,
            rating: 4.5,
            badge: null,
            partyType: "Pool Parties"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
            name: "Alaska Adventure",
            destination: "Alaska",
            duration: "12 nights",
            avgPrice: 1580,
            rating: 4.9,
            badge: "FEATURED",
            partyType: "Scenic Views"
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
                            <Music className="w-3 h-3" />
                            CRUISE PARTIES
                        </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">
                        Popular <span className="text-sky-600">Cruise Parties</span>
                    </h2>
                    <p className="text-gray-600 text-base max-w-xl mx-auto">
                        Experience unforgettable party cruises with entertainment, music, and celebration.
                    </p>
                </motion.div>

                {/* Cruise Cards Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cruisePartyData.map((cruise, index) => (
                            <motion.div
                                key={cruise.id}
                                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-[22rem]"
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
                                        src={cruise.image}
                                        alt={`${cruise.name} cruise party`}
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
                                    {cruise.badge && (
                                        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold text-white ${cruise.badge === "FEATURED"
                                                ? "bg-gradient-to-r from-sky-400 to-blue-500"
                                                : "bg-gradient-to-r from-orange-400 to-red-500"
                                            }`}>
                                            {cruise.badge === "FEATURED" && <Star className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {cruise.badge === "POPULAR" && <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {cruise.badge}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-3">
                                    {/* Cruise Name and Destination */}
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <Anchor className="w-3 h-3 text-sky-500" />
                                        <span className="font-bold text-gray-900 text-sm">{cruise.name}</span>
                                    </div>

                                    {/* Destination and Duration */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-gray-600">{cruise.destination}</span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs text-gray-600">{cruise.duration}</span>
                                        </div>
                                    </div>

                                    {/* Party Type and Rating */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">{cruise.partyType}</span>
                                        <div className="flex items-center gap-1">
                                            {renderStars(cruise.rating)}
                                            <span className="text-xs text-gray-600 ml-1">{cruise.rating}</span>
                                        </div>
                                    </div>

                                    {/* Price and Button */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500">From</span>
                                            <div className="text-lg font-bold text-coral-500" style={{ color: '#ff6b6b' }}>
                                                ${cruise.avgPrice}
                                            </div>
                                        </div>
                                        <motion.button
                                            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-2.5 py-1.5 rounded-md font-semibold text-xs hover:shadow-md transition-all duration-300 flex items-center gap-1"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book Now
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
                        View All Party Cruises
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

const PopularCruisesRide = () => {
    const cruiseRideData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1570821365026-498d0a5ba4ac?w=400&h=250&fit=crop",
            name: "Royal Caribbean",
            route: "Miami → Cozumel",
            duration: "8 days",
            avgPrice: 1200,
            rating: 4.6,
            badge: "FEATURED",
            shipType: "Mega Ship"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=400&h=250&fit=crop",
            name: "Norwegian Bliss",
            route: "Seattle → Alaska",
            duration: "14 days",
            avgPrice: 1850,
            rating: 4.8,
            badge: "POPULAR",
            shipType: "Luxury Liner"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
            name: "Celebrity Edge",
            route: "Barcelona → Rome",
            duration: "11 days",
            avgPrice: 1450,
            rating: 4.7,
            badge: null,
            shipType: "Modern Cruise"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=250&fit=crop",
            name: "Princess Cruises",
            route: "Sydney → Fiji",
            duration: "9 days",
            avgPrice: 1100,
            rating: 4.5,
            badge: "FEATURED",
            shipType: "Ocean Liner"
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
                            <Waves className="w-3 h-3" />
                            CRUISE RIDES
                        </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">
                        Popular <span className="text-sky-600">Cruise Rides</span>
                    </h2>
                    <p className="text-gray-600 text-base max-w-xl mx-auto">
                        Discover amazing cruise adventures across the world's most beautiful waters.
                    </p>
                </motion.div>

                {/* Cruise Cards Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cruiseRideData.map((cruise, index) => (
                            <motion.div
                                key={cruise.id}
                                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer h-[22rem]"
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
                                        src={cruise.image}
                                        alt={`${cruise.name} cruise ride`}
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
                                    {cruise.badge && (
                                        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold text-white ${cruise.badge === "FEATURED"
                                                ? "bg-gradient-to-r from-sky-400 to-blue-500"
                                                : "bg-gradient-to-r from-orange-400 to-red-500"
                                            }`}>
                                            {cruise.badge === "FEATURED" && <Star className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {cruise.badge === "POPULAR" && <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {cruise.badge}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-3">
                                    {/* Cruise Name */}
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <Anchor className="w-3 h-3 text-sky-500" />
                                        <span className="font-bold text-gray-900 text-sm">{cruise.name}</span>
                                    </div>

                                    {/* Route and Duration */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-gray-600">{cruise.route}</span>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs text-gray-600">{cruise.duration}</span>
                                        </div>
                                    </div>

                                    {/* Ship Type and Rating */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{cruise.shipType}</span>
                                        <div className="flex items-center gap-1">
                                            {renderStars(cruise.rating)}
                                            <span className="text-xs text-gray-600 ml-1">{cruise.rating}</span>
                                        </div>
                                    </div>

                                    {/* Price and Button */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500">From</span>
                                            <div className="text-lg font-bold text-coral-500" style={{ color: '#ff6b6b' }}>
                                                ${cruise.avgPrice}
                                            </div>
                                        </div>
                                        <motion.button
                                            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-2.5 py-1.5 rounded-md font-semibold text-xs hover:shadow-md transition-all duration-300 flex items-center gap-1"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book Now
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
                        View All Cruise Rides
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

// Demo Component to show both
const CruiseComponents = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <PopularCruisesParty />
            <div className="py-8"></div>
            <PopularCruisesRide />
        </div>
    );
};

export default CruiseComponents;