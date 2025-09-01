import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Target, Heart, Shield, Zap } from 'lucide-react';

const OurMission = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselItems = [
        {
            id: 1,
            image: 'https://www.holidaymonk.com/wp-content/uploads/2023/05/Travel-Guide-to-Vietnam.jpg',
            title: 'Simple Booking',
            description: 'Intuitive platform that makes travel planning effortless'
        },
        {
            id: 2,
            image: 'https://www.ytravelblog.com/wp-content/uploads/2019/04/monument-valley-utah-9.jpg',
            title: 'Best Prices',
            description: 'Competitive rates that fit every budget and travel style'
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeQEfsuNFN30EObu3WOA9cSl6Qo6FBOGz8A&s',
            title: 'Reliable Service',
            description: '24/7 support ensuring your journey goes smoothly'
        }
    ];

    const missionPoints = [
        {
            icon: Target,
            title: 'Our Focus',
            description: 'Making travel accessible to everyone with transparent pricing and easy booking'
        },
        {
            icon: Heart,
            title: 'Our Passion',
            description: 'Creating memorable experiences that connect people with the world'
        },
        {
            icon: Shield,
            title: 'Our Promise',
            description: 'Reliable service and secure transactions you can trust completely'
        },
        {
            icon: Zap,
            title: 'Our Innovation',
            description: 'Constantly improving our platform to serve you better every day'
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
        }
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
        }
    };

    const slideVariants = {
        enter: { opacity: 0, x: 50 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    return (
        <div className="relative h-[70vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/008/063/100/small_2x/rear-view-portrait-of-young-man-traveler-with-backpack-standing-on-a-mountain-with-arms-spread-open-travel-life-style-and-adventure-concept-free-photo.jpg"
                    alt="Nature background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 via-sky-800/60 to-blue-900/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 items-center">
                {/* Left Side - Carousel */}
                <motion.div
                    variants={leftVariants}
                    initial="hidden"
                    animate="visible"
                    className="px-8 md:px-16 py-8"
                >
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5 }}
                                    >
                                        {/* Carousel Image (height increased) */}
                                        <div className="rounded-xl overflow-hidden shadow-lg">
                                            <img
                                                src={carouselItems[currentSlide].image}
                                                alt={carouselItems[currentSlide].title}
                                                className="w-full h-64 object-cover"  
                                            />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Controls */}
                                <div className="flex items-center justify-between mt-4">
                                    <motion.button
                                        onClick={prevSlide}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </motion.button>

                                    <div className="flex gap-2">
                                        {carouselItems.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-white/40'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <motion.button
                                        onClick={nextSlide}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Mission Text */}
                <motion.div
                    variants={rightVariants}
                    initial="hidden"
                    animate="visible"
                    className="px-8 md:px-16 py-8"
                >
                    <div className="max-w-xl space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base font-semibold">
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                            OUR MISSION
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            To make travel booking{' '}
                            <span className="bg-gradient-to-r from-sky-300 to-sky-100 bg-clip-text text-transparent">
                                simple
                            </span>
                            ,{' '}
                            <span className="bg-gradient-to-r from-sky-300 to-sky-100 bg-clip-text text-transparent">
                                affordable
                            </span>
                            , and{' '}
                            <span className="bg-gradient-to-r from-sky-300 to-sky-100 bg-clip-text text-transparent">
                                reliable
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-sky-100 leading-relaxed">
                            So you can focus on enjoying your journey, not worrying about planning.
                        </p>

                        {/* Mission Points (larger) */}
                        {missionPoints.map((point, index) => {
                            const IconComponent = point.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
                                >
                                    <IconComponent className="w-6 h-6 text-sky-200 flex-shrink-0" />
                                    <span className="text-base font-semibold text-white">{point.title}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OurMission;
