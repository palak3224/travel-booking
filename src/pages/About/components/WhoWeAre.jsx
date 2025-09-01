import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Heart, Award } from 'lucide-react';

const WhoWeAre = () => {
    const features = [
        {
            icon: Shield,
            title: 'Secure Booking',
            description: 'Your data and payments are protected with industry-leading security'
        },
        {
            icon: Globe,
            title: 'Trusted Partners',
            description: 'We work with verified airlines, hotels, and cruise lines worldwide'
        },
        {
            icon: Heart,
            title: 'Customer First',
            description: 'Every decision we make puts your travel experience first'
        },
        {
            icon: Award,
            title: 'Best Rates',
            description: 'We guarantee competitive prices on all your travel bookings'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="w-full bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen ">
                {/* Left Side - Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-center px-8 md:px-16 py-16 lg:py-24"
                >
                    <div className="max-w-xl space-y-8">
                        {/* Section Badge */}
                        <motion.div variants={textVariants}>
                            <div className="inline-flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                WHO WE ARE
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            variants={textVariants}
                            className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
                        >
                            Your Trusted Travel{' '}
                            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                                Partner
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={textVariants}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            We are a U.S.-based online travel booking platform that connects travelers with flights, hotels, and cruises at the best possible rates. With trusted partners worldwide, we make booking your next trip easy, secure, and stress-free.
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div variants={textVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={featureVariants}
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                        <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-5 h-5 text-sky-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                                            {/* <p className="text-sm text-gray-600">{feature.description}</p> */}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>

{/* Right Side - Image */}
<motion.div
  variants={imageVariants}
  initial="hidden"
  animate="visible"
  className="relative flex items-center justify-center"
>
  <div className="h-96 lg:h-[50vh] w-full rounded-l-3xl lg:rounded-l-full overflow-hidden">
    <img
      src="https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
      alt="Travel destination"
      className="w-full h-full object-cover"
    />

    {/* Gradient Overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-sky-500/10 to-sky-500/20"></div> */}

    
  </div>
</motion.div>

            </div>
        </div>
    );
};

export default WhoWeAre;