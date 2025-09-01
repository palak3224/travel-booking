import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    const quickLinks = [
        { name: "Flights", href: "/flights" },
        { name: "Hotels", href: "/hotels" },
        { name: "Cruises", href: "/cruises" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];

    const policies = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Refund Policy", href: "/terms-and-conditions" } // Points to terms page as it contains refund policy
    ];

    const socialLinks = [
        { 
            name: "Facebook", 
            href: "https://facebook.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        { 
            name: "Twitter", 
            href: "https://twitter.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            )
        },
        { 
            name: "Instagram", 
            href: "https://instagram.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 20.25c-2.219 0-4.017-1.797-4.017-4.017s1.798-4.017 4.017-4.017 4.017 1.797 4.017 4.017-1.798 4.017-4.017 4.017zm7.138 0c-2.219 0-4.017-1.797-4.017-4.017s1.798-4.017 4.017-4.017 4.017 1.797 4.017 4.017-1.798 4.017-4.017 4.017z"/>
                </svg>
            )
        },
        { 
            name: "YouTube", 
            href: "https://youtube.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        },
        { 
            name: "LinkedIn", 
            href: "https://linkedin.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="relative bg-black text-white overflow-hidden border-t-4 border-sky-500">
            {/* Background Texture Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.02) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.02) 75%)
          `,
                    backgroundSize: '60px 60px, 80px 80px, 20px 20px, 20px 20px, 20px 20px, 20px 20px',
                    backgroundPosition: '0 0, 40px 40px, 0 0, 10px 10px, 10px 10px, 0 0'
                }}
            ></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                        style={{
                            width: `${Math.random() * 100 + 50}px`,
                            height: `${Math.random() * 100 + 50}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Logo/Brand Section */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <Link to="/" className="block">
                                <h2 className="text-3xl font-black tracking-tight">
                                    <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
                                        Traveling
                                    </span>
                                    <br />
                                    <span className="text-white">Website</span>
                                </h2>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Your trusted partner for unforgettable journeys. Discover amazing destinations with the best deals on flights, hotels, and cruises.
                            </p>
                            <div className="flex items-center space-x-2 text-sky-400">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-lg">⭐</span>
                                ))}
                                <span className="text-gray-400 text-sm ml-2">10M+ Happy Travelers</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-sky-400">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm font-medium hover:translate-x-1 inline-block transform transition-transform"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Policies */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-sky-400">Legal</h3>
                            <ul className="space-y-3">
                                {policies.map((policy, index) => (
                                    <li key={index}>
                                        <Link
                                            to={policy.href}
                                            className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm font-medium hover:translate-x-1 inline-block transform transition-transform"
                                        >
                                            {policy.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Social Media & Contact */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-bold text-sky-400">Connect With Us</h3>

                            {/* Social Media Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-sky-400/25 hover:scale-110 text-gray-300 hover:text-white"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Newsletter Signup */}
                            <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-white">Get Travel Updates</h4>
                                <div className="flex space-x-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:outline-none transition-colors duration-300"
                                    />
                                    <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-sky-400/25">
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-gray-500 text-xs">
                                    Get exclusive deals and travel inspiration delivered to your inbox.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-800 pt-8"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                            <p className="text-gray-400 text-sm">
                                © 2025 Traveling Website. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-4 text-gray-500 text-xs">
                                <span>🌍 Available in 50+ Countries</span>
                                <span className="hidden md:inline">•</span>
                                <span>🛡️ Secure Booking</span>
                                <span className="hidden md:inline">•</span>
                                <span>📞 24/7 Support</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-gray-400 text-sm">
                            <Link 
                                to="/terms-and-conditions" 
                                className="hover:text-sky-400 transition-colors duration-300"
                            >
                                Terms
                            </Link>
                            <Link 
                                to="/privacy-policy" 
                                className="hover:text-sky-400 transition-colors duration-300"
                            >
                                Privacy
                            </Link>
                            <Link 
                                to="/contact" 
                                className="hover:text-sky-400 transition-colors duration-300"
                            >
                                Support
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50"></div>
        </footer>
    );
};

export default Footer;