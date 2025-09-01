import React from "react";
import { motion } from "framer-motion";
import {
    Plane,
    Calendar,
    Heart,
    ArrowRight,
    Star,
    TrendingUp
} from "lucide-react";

const PopularFlights = () => {
    const flightData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
            airline: "✈️",
            from: "New York",
            to: "Los Angeles",
            dates: "Aug 01, 2025 - Aug 30, 2025",
            price: 300,
            badge: null
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
            airline: "🛫",
            from: "Miami",
            to: "Las Vegas",
            dates: "Aug 15, 2025 - Aug 25, 2025",
            price: 450,
            badge: "FEATURED"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
            airline: "🛩️",
            from: "Chicago",
            to: "San Francisco",
            dates: "Sep 05, 2025 - Sep 15, 2025",
            price: 520,
            badge: null
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=250&fit=crop",
            airline: "🔺",
            from: "Boston",
            to: "Seattle",
            dates: "Aug 20, 2025 - Aug 28, 2025",
            price: 630,
            badge: null
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
            airline: "🌟",
            from: "Dallas",
            to: "Denver",
            dates: "Sep 10, 2025 - Sep 20, 2025",
            price: 280,
            badge: "POPULAR"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1502780402662-acc01917ac4b?w=400&h=250&fit=crop",
            airline: "✈️",
            from: "Atlanta",
            to: "Phoenix",
            dates: "Aug 25, 2025 - Sep 02, 2025",
            price: 390,
            badge: null
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop",
            airline: "🛫",
            from: "Orlando",
            to: "Nashville",
            dates: "Sep 12, 2025 - Sep 18, 2025",
            price: 220,
            badge: null
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
            airline: "🛩️",
            from: "Portland",
            to: "Austin",
            dates: "Aug 30, 2025 - Sep 08, 2025",
            price: 480,
            badge: "FEATURED"
        }
    ];

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
                            <Plane className="w-3 h-3" />
                            FLIGHTS
                        </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">
                        Our Most Popular <span className="text-sky-600">Flights</span>
                    </h2>
                    <p className="text-gray-600 text-base max-w-xl mx-auto">
                        Discover the most booked destinations and find amazing deals.
                    </p>
                </motion.div>

                {/* Flight Cards Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {flightData.map((flight, index) => (
                            <motion.div
                                key={flight.id}
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
                                        src={flight.image}
                                        alt={`${flight.from} to ${flight.to}`}
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
                                    {flight.badge && (
                                        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold text-white ${flight.badge === "FEATURED"
                                                ? "bg-gradient-to-r from-sky-400 to-blue-500"
                                                : "bg-gradient-to-r from-orange-400 to-red-500"
                                            }`}>
                                            {flight.badge === "FEATURED" && <Star className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {flight.badge === "POPULAR" && <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" />}
                                            {flight.badge}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-3">
                                    {/* Route */}
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <span className="text-sm">{flight.airline}</span>
                                        <span className="font-bold text-gray-900 text-sm">{flight.from}</span>
                                        <div className="flex items-center text-sky-500">
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                        <span className="font-bold text-sky-600 text-sm">{flight.to}</span>
                                    </div>

                                    {/* Dates */}
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <Calendar className="w-3 h-3 text-sky-500" />
                                        <span className="text-xs text-gray-600">{flight.dates}</span>
                                    </div>

                                    {/* Price and Button */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-gray-500">From</span>
                                            <div className="text-lg font-bold text-coral-500" style={{ color: '#ff6b6b' }}>
                                                ${flight.price}
                                            </div>
                                        </div>
                                        <motion.button
                                            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-2.5 py-1.5 rounded-md font-semibold text-xs hover:shadow-md transition-all duration-300 flex items-center gap-1"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Details
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
                        View All Flights
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default PopularFlights;