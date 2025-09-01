import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const quickLinks = [
        { name: "Flights", href: "#flights" },
        { name: "Hotels", href: "#hotels" },
        { name: "Cruises", href: "#cruises" },
        { name: "Deals", href: "#deals" },
        { name: "Support", href: "#support" }
    ];

    const policies = [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms & Conditions", href: "#terms" },
        { name: "Refund Policy", href: "#refund" }
    ];

    const socialLinks = [
        { name: "Facebook", href: "#facebook" },
        { name: "Twitter", href: "#twitter" },
        { name: "Instagram", href: "#instagram" },
        { name: "YouTube", href: "#youtube" },
        { name: "LinkedIn", href: "#linkedin" }
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
                            <h2 className="text-3xl font-black tracking-tight">
                                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
                                    Traveling
                                </span>
                                <br />
                                <span className="text-white">Website</span>
                            </h2>
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
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm font-medium hover:translate-x-1 inline-block transform transition-transform"
                                        >
                                            {link.name}
                                        </a>
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
                            <h3 className="text-xl font-bold mb-6 text-sky-400">Policies</h3>
                            <ul className="space-y-3">
                                {policies.map((policy, index) => (
                                    <li key={index}>
                                        <a
                                            href={policy.href}
                                            className="text-gray-300 hover:text-sky-400 transition-colors duration-300 text-sm font-medium hover:translate-x-1 inline-block transform transition-transform"
                                        >
                                            {policy.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Social Media & Contact */}
                    {/* Social Media & Contact */}
<div className="md:col-span-1">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="space-y-6"
  >
    <h3 className="text-xl font-bold text-yellow-400">Connect With Us</h3>

    {/* Social Media Links */}
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          className="w-12 h-12 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-sky-400/25 hover:scale-110"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* SVG icons unchanged */}
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
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-8">
                            <p className="text-gray-400 text-sm">
                                © 2025 Traveling Website. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-4 text-gray-500 text-xs">
                                <span>🌍 Available in 50+ Countries</span>
                                <span>•</span>
                                <span>🛡️ Secure Booking</span>
                                <span>•</span>
                                <span>📞 24/7 Support</span>
                            </div>
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