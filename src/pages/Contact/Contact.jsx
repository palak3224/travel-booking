import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: "How can I modify or cancel my booking?",
      answer: "You can modify or cancel your booking up to 24 hours before departure through our website or by contacting our support team. Cancellation fees may apply depending on the airline's policy."
    },
    {
      question: "What is your refund policy?",
      answer: "Refunds are processed according to the airline's terms and conditions. Most refundable tickets can be cancelled for a full refund within 24 hours of booking. Our team will assist you with the refund process."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we partner with leading insurance providers to offer comprehensive travel insurance covering trip cancellation, medical emergencies, and baggage protection. You can add insurance during the booking process."
    },
    {
      question: "How do I check-in for my flight?",
      answer: "You can check-in online through the airline's website or mobile app, typically 24-48 hours before departure. We'll send you all necessary details and check-in links via email after booking."
    },
    {
      question: "What happens if my flight is delayed or cancelled?",
      answer: "We'll notify you immediately of any changes and help you rebook on the next available flight. Our 24/7 support team will assist with rebooking, hotel arrangements, and compensation claims if applicable."
    },
    {
      question: "Can I book group travel?",
      answer: "Absolutely! We offer special rates for group bookings of 10 or more passengers. Contact our group travel specialists for customized packages and additional benefits."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-400 bg-opacity-30 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-blue-300">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We're here to help you plan your perfect journey. Reach out to our travel experts today.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-blue-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Speak with our travel experts</p>
              <p className="text-blue-500 font-medium">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Get detailed information</p>
              <p className="text-blue-500 font-medium">info@travelwebsite.com</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Come to our office</p>
              <p className="text-blue-500 font-medium">123 Travel Street, NY 10001</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday</p>
              <p className="text-blue-500 font-medium">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Get in Touch Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600">Have questions about your travel plans? Our expert team is ready to help you create unforgettable experiences.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="flight-booking">Flight Booking</option>
                    <option value="hotel-reservation">Hotel Reservation</option>
                    <option value="cruise-inquiry">Cruise Inquiry</option>
                    <option value="general-support">General Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Our Office</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center relative overflow-hidden mb-6">
                {/* Simple map placeholder with some styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">123 Travel Street</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-6 right-8 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute top-12 right-12 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Located in the heart of Manhattan, easily accessible by subway and bus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find quick answers to common questions about our travel services.</p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="font-medium text-gray-900 text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-blue-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
            <p className="text-blue-700">
              <strong>Still have questions?</strong> Our support team is available 24/7 to help you with any travel-related inquiries.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15551234567" className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                <Phone className="w-4 h-4 mr-2" />
                Call Support
              </a>
              <a href="mailto:info@travelwebsite.com" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-medium">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;