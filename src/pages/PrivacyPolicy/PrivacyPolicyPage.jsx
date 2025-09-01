import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Globe, 
  Settings,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  UserCheck,
  AlertCircle,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const lastUpdated = "September 2, 2025";

  const privacySections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Users,
      summary: 'Personal details, booking information, and usage data',
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-sky-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <UserCheck className="w-5 h-5 text-sky-600 mr-2" />
                <span className="font-medium text-gray-800">Account Information</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Full name and contact details</li>
                <li>• Email address and phone number</li>
                <li>• Date of birth and nationality</li>
                <li>• Password and security preferences</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-gray-800">Travel Information</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Destination preferences</li>
                <li>• Travel dates and duration</li>
                <li>• Passenger details</li>
                <li>• Special accommodation needs</li>
              </ul>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Payment & Booking Data</h4>
          <div className="bg-amber-50 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <CreditCard className="w-5 h-5 text-amber-600 mr-2" />
              <span className="font-medium text-gray-800">Financial Information</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              We collect payment information necessary to process your bookings, including:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Credit/debit card details (securely encrypted)</li>
              <li>• Billing address and contact information</li>
              <li>• Transaction history and booking records</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical Data</h4>
          <p className="text-gray-600 mb-2">
            We automatically collect certain technical information when you use our services:
          </p>
          <ul className="text-gray-600 space-y-1">
            <li>• IP address and device information</li>
            <li>• Browser type and operating system</li>
            <li>• Usage patterns and click behavior</li>
            <li>• Cookies and similar tracking technologies</li>
          </ul>
        </div>
      )
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Settings,
      summary: 'Service delivery, personalization, and security purposes',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-medium text-gray-800">Service Delivery</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Process bookings and reservations</li>
                <li>• Communicate booking confirmations</li>
                <li>• Provide customer support</li>
                <li>• Handle cancellations and refunds</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Eye className="w-5 h-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-800">Personalization</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Recommend relevant travel options</li>
                <li>• Customize your user experience</li>
                <li>• Send personalized offers</li>
                <li>• Improve our services</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-red-600 mr-2" />
                <span className="font-medium text-gray-800">Security & Legal</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prevent fraud and abuse</li>
                <li>• Comply with legal requirements</li>
                <li>• Protect user safety</li>
                <li>• Resolve disputes</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Marketing Communications</h4>
            <p className="text-blue-700 mb-3">
              With your consent, we may use your information to send you:
            </p>
            <ul className="text-blue-700 space-y-1">
              <li>• Travel deals and promotional offers</li>
              <li>• Newsletter with travel tips and destinations</li>
              <li>• Updates about new features and services</li>
            </ul>
            <p className="text-sm text-blue-600 mt-3 font-medium">
              You can opt-out of marketing communications at any time.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Globe,
      summary: 'When and with whom we share your data',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
            <div className="flex items-center mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-yellow-800">Important Notice</span>
            </div>
            <p className="text-yellow-700">
              We never sell your personal information to third parties for their marketing purposes.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">We May Share Information With:</h4>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-800 mb-2">Travel Partners</h5>
              <p className="text-gray-600 text-sm mb-2">
                Hotels, airlines, cruise lines, and other travel service providers to complete your bookings.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Purpose:</strong> Service delivery and booking confirmation
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-800 mb-2">Payment Processors</h5>
              <p className="text-gray-600 text-sm mb-2">
                Secure payment gateways to process transactions and prevent fraud.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Purpose:</strong> Payment processing and security
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-800 mb-2">Service Providers</h5>
              <p className="text-gray-600 text-sm mb-2">
                Technology partners who help us operate our platform and provide customer support.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Purpose:</strong> Platform operation and customer service
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-800 mb-2">Legal Requirements</h5>
              <p className="text-gray-600 text-sm mb-2">
                Government authorities when required by law or to protect our rights and safety.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Purpose:</strong> Legal compliance and safety
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      summary: 'How we protect your personal information',
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
            <div className="flex items-center mb-2">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold text-green-800">Security Commitment</span>
            </div>
            <p className="text-green-700">
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Security Measures</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Technical Safeguards</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• SSL/TLS encryption for data transmission</li>
                <li>• Advanced encryption for stored data</li>
                <li>• Secure data centers with 24/7 monitoring</li>
                <li>• Regular security audits and testing</li>
                <li>• Multi-factor authentication options</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">Operational Safeguards</h5>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Employee background checks</li>
                <li>• Access controls and permissions</li>
                <li>• Data minimization practices</li>
                <li>• Regular staff security training</li>
                <li>• Incident response procedures</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-gray-800 mb-2">Data Breach Response</h5>
            <p className="text-gray-600 text-sm">
              In the unlikely event of a data breach, we will notify affected users and relevant authorities within 72 hours, as required by applicable laws.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'user-rights',
      title: 'Your Rights & Choices',
      icon: UserCheck,
      summary: 'Control over your personal information',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">
            You have several rights regarding your personal information. Here's what you can do:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-sky-50 p-4 rounded-lg">
                <h5 className="font-semibold text-sky-800 mb-2">Access & Portability</h5>
                <ul className="text-sm text-sky-700 space-y-1">
                  <li>• Request a copy of your data</li>
                  <li>• Download your information</li>
                  <li>• View your booking history</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Correction & Updates</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Update your profile information</li>
                  <li>• Correct inaccurate data</li>
                  <li>• Add missing information</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">Deletion & Restriction</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Delete your account</li>
                  <li>• Request data deletion</li>
                  <li>• Limit data processing</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">Communication Preferences</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Opt-out of marketing emails</li>
                  <li>• Manage notification settings</li>
                  <li>• Control cookie preferences</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mt-6">
            <h5 className="font-semibold text-blue-800 mb-2">How to Exercise Your Rights</h5>
            <p className="text-blue-700 mb-3">
              To exercise any of these rights, please contact us using the information provided in the "Contact Us" section. We'll respond to your request within 30 days.
            </p>
            <p className="text-sm text-blue-600">
              Note: Some rights may be limited by applicable laws or legitimate business interests.
            </p>
          </div>
        </div>
      )
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'details', label: 'Detailed Policy', icon: Settings },
    { id: 'contact', label: 'Contact Us', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Header */}
      <motion.div 
        className="bg-white shadow-sm border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-3 rounded-xl mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">How we collect, use, and protect your information</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm p-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex space-x-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Content */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Users className="w-8 h-8 text-sky-500 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">What We Collect</h3>
                <p className="text-sm text-gray-600">Personal info, booking data, and usage analytics to provide our services</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Lock className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">How We Protect</h3>
                <p className="text-sm text-gray-600">Industry-standard encryption and security measures keep your data safe</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <UserCheck className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Your Control</h3>
                <p className="text-sm text-gray-600">Access, update, or delete your information anytime through your account</p>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Privacy Points</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">We never sell your data</h4>
                    <p className="text-gray-600">Your personal information is never sold to third parties for marketing purposes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bank-level security</h4>
                    <p className="text-gray-600">We use the same security standards as major financial institutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4 mt-1">
                    <Settings className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">You're in control</h4>
                    <p className="text-gray-600">Manage your privacy preferences and data sharing settings anytime.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'details' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {privacySections.map((section, index) => {
              const IconComponent = section.icon;
              const isExpanded = expandedSections[section.id];
              
              return (
                <motion.div
                  key={section.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-sky-100 to-blue-100 p-3 rounded-lg mr-4">
                          <IconComponent className="w-6 h-6 text-sky-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{section.summary}</p>
                        </div>
                      </div>
                      <div className="ml-4">
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-gray-100"
                    >
                      <div className="pt-4">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Privacy Team</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-sky-100 p-2 rounded-lg mr-3">
                        <Mail className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600">privacy@travelbook.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <p className="text-gray-600">1-800-PRIVACY (1-800-774-8229)</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Address</p>
                        <p className="text-gray-600">123 Travel Plaza<br />San Francisco, CA 94102</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white p-3 rounded-lg font-medium hover:shadow-md transition-all duration-300 flex items-center justify-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Privacy Settings
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Download My Data
                    </button>
                    <button className="w-full bg-red-50 text-red-700 p-3 rounded-lg font-medium hover:bg-red-100 transition-colors duration-300 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Report Privacy Concern
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 text-sm">
                  <strong>Response Time:</strong> We typically respond to privacy inquiries within 5 business days. For urgent matters, please call our privacy hotline.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;