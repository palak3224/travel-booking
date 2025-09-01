import React, { useState } from 'react';
import { 
  FileText, 
  Shield, 
  CreditCard, 
  RefreshCw, 
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
  Calendar,
  Users,
  Plane,
  Ship,
  Building2,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  ExternalLink,
  Info,
  DollarSign,
  Ban,
  Eye,
  Settings,
  UserCheck
} from 'lucide-react';

const TermsConditionsPage = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState('terms');

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const lastUpdated = "September 2, 2025";

  const termsSections = [
    {
      id: 'acceptance-use',
      title: 'Acceptance and Use of Services',
      icon: UserCheck,
      summary: 'Agreement to terms and proper use of our platform',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Agreement to Terms</h4>
            <p className="text-blue-700 mb-3">
              By accessing and using our travel booking services, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you may not use our services.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Permitted Use</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-medium text-gray-800">You May:</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Search and book travel services</li>
                <li>• Create and manage your account</li>
                <li>• Leave reviews and ratings</li>
                <li>• Contact customer support</li>
                <li>• Access booking confirmations</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <XCircle className="w-5 h-5 text-red-600 mr-2" />
                <span className="font-medium text-gray-800">You May Not:</span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use automated booking systems</li>
                <li>• Submit false information</li>
                <li>• Violate any laws or regulations</li>
                <li>• Interfere with our systems</li>
                <li>• Resell our services without permission</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Account Responsibilities</h4>
          <div className="bg-amber-50 p-4 rounded-lg">
            <ul className="text-gray-700 space-y-2">
              <li>• You are responsible for maintaining account security</li>
              <li>• All information provided must be accurate and up-to-date</li>
              <li>• You must be 18 years or older to create an account</li>
              <li>• One account per person - sharing accounts is prohibited</li>
              <li>• Notify us immediately of any unauthorized access</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'booking-payment',
      title: 'Booking and Payment Terms',
      icon: CreditCard,
      summary: 'How bookings work and payment requirements',
      content: (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Booking Process</h4>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-sky-50 p-4 rounded-lg text-center">
              <Building2 className="w-8 h-8 text-sky-600 mx-auto mb-2" />
              <h5 className="font-medium text-gray-800 mb-1">Hotels</h5>
              <p className="text-xs text-gray-600">Instant confirmation for most properties</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Plane className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h5 className="font-medium text-gray-800 mb-1">Flights</h5>
              <p className="text-xs text-gray-600">Subject to availability and airline confirmation</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Ship className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h5 className="font-medium text-gray-800 mb-1">Cruises</h5>
              <p className="text-xs text-gray-600">Cabin assignment upon confirmation</p>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Payment Terms</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-800 mb-2">Accepted Payment Methods</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Credit Cards:</p>
                  <p className="text-sm text-gray-600">Visa, MasterCard, American Express, Discover</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Digital Payments:</p>
                  <p className="text-sm text-gray-600">PayPal, Apple Pay, Google Pay</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h5 className="font-semibold text-yellow-800 mb-2">Payment Authorization</h5>
              <p className="text-yellow-700 text-sm">
                By providing payment information, you authorize us to charge your payment method for the full amount 
                of your booking, including taxes and fees. Pre-authorization may occur to verify payment method validity.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h5 className="font-semibold text-red-800 mb-2">Currency and Exchange Rates</h5>
              <p className="text-red-700 text-sm">
                All prices are displayed in USD unless otherwise specified. For international bookings, 
                currency conversion rates are determined at the time of payment and may include conversion fees.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'return-policy',
      title: 'Cancellation and Refund Policy',
      icon: RefreshCw,
      summary: 'Detailed return, cancellation, and refund procedures',
      content: (
        <div className="space-y-6">
          {/* Policy Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-3">
              <RefreshCw className="w-6 h-6 text-blue-600 mr-2" />
              <h4 className="text-xl font-semibold text-blue-800">Our Return Policy Promise</h4>
            </div>
            <p className="text-blue-700 mb-3">
              We understand that travel plans can change. Our flexible cancellation policy is designed to give you peace of mind 
              when booking your next adventure.
            </p>
            <div className="bg-blue-100 p-3 rounded-lg">
              <p className="text-blue-800 text-sm font-medium">
                📞 24/7 Cancellation Support: 1-800-CANCEL-1 (1-800-226-2351)
              </p>
            </div>
          </div>

          {/* Hotel Cancellation Policy */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-sky-500 text-white p-4">
              <div className="flex items-center">
                <Building2 className="w-6 h-6 mr-2" />
                <h4 className="text-lg font-semibold">Hotel Reservations</h4>
              </div>
            </div>
            <div className="p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Free Cancellation</span>
                  </div>
                  <p className="text-sm text-green-700 mb-2">Most hotels offer free cancellation</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Up to 24-48 hours before check-in</li>
                    <li>• Full refund within 5-7 business days</li>
                    <li>• No cancellation fees</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-amber-600 mr-2" />
                    <span className="font-medium text-amber-800">Partial Refund</span>
                  </div>
                  <p className="text-sm text-amber-700 mb-2">Late cancellations</p>
                  <ul className="text-xs text-amber-600 space-y-1">
                    <li>• Less than 24 hours before check-in</li>
                    <li>• First night charge may apply</li>
                    <li>• Remaining amount refunded</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <XCircle className="w-5 h-5 text-red-600 mr-2" />
                    <span className="font-medium text-red-800">Non-Refundable</span>
                  </div>
                  <p className="text-sm text-red-700 mb-2">Special rate bookings</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Advance purchase rates</li>
                    <li>• Package deals</li>
                    <li>• No refund available</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Specific cancellation terms vary by property and rate type. 
                  Always check your booking confirmation for exact cancellation deadlines.
                </p>
              </div>
            </div>
          </div>

          {/* Cruise Cancellation Policy */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <div className="flex items-center">
                <Ship className="w-6 h-6 mr-2" />
                <h4 className="text-lg font-semibold">Cruise Bookings</h4>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h5 className="font-semibold text-gray-800 mb-3">Cancellation Timeline & Penalties</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                    <div>
                      <span className="font-medium text-green-800">90+ days before departure</span>
                      <p className="text-sm text-green-600">Full refund minus $100 processing fee</p>
                    </div>
                    <div className="text-green-600 font-bold">$100 fee</div>
                  </div>
                  <div className="flex items-center justify-between bg-yellow-50 p-3 rounded-lg">
                    <div>
                      <span className="font-medium text-yellow-800">60-89 days before departure</span>
                      <p className="text-sm text-yellow-600">75% refund of total amount</p>
                    </div>
                    <div className="text-yellow-600 font-bold">25% penalty</div>
                  </div>
                  <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                    <div>
                      <span className="font-medium text-orange-800">30-59 days before departure</span>
                      <p className="text-sm text-orange-600">50% refund of total amount</p>
                    </div>
                    <div className="text-orange-600 font-bold">50% penalty</div>
                  </div>
                  <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg">
                    <div>
                      <span className="font-medium text-red-800">Less than 30 days before departure</span>
                      <p className="text-sm text-red-600">No refund available</p>
                    </div>
                    <div className="text-red-600 font-bold">100% penalty</div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">Cruise Insurance Recommendation</h5>
                <p className="text-blue-700 text-sm">
                  We strongly recommend purchasing travel insurance to protect against unexpected cancellations 
                  due to illness, emergencies, or other covered reasons.
                </p>
              </div>
            </div>
          </div>

          {/* Flight Cancellation Policy */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-purple-500 text-white p-4">
              <div className="flex items-center">
                <Plane className="w-6 h-6 mr-2" />
                <h4 className="text-lg font-semibold">Flight Bookings</h4>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mb-4">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                  <span className="font-semibold text-amber-800">Important Notice</span>
                </div>
                <p className="text-amber-700 text-sm">
                  Flight cancellations are subject to airline policies and fare rules. Refund eligibility varies significantly by airline and ticket type.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Refundable Tickets</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Full refund available anytime</li>
                    <li>• Small processing fee may apply</li>
                    <li>• Refund to original payment method</li>
                    <li>• Processing time: 7-21 business days</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Non-Refundable Tickets</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• No refund for voluntary cancellation</li>
                    <li>• Credit for future travel may be available</li>
                    <li>• Change fees apply for modifications</li>
                    <li>• 24-hour free cancellation (US flights)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">How to Request a Refund</h4>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-sky-600">1</span>
                </div>
                <h5 className="font-medium text-gray-800 mb-1">Log In</h5>
                <p className="text-xs text-gray-600">Access your account and find your booking</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-sky-600">2</span>
                </div>
                <h5 className="font-medium text-gray-800 mb-1">Request</h5>
                <p className="text-xs text-gray-600">Click "Cancel" and select refund option</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-sky-600">3</span>
                </div>
                <h5 className="font-medium text-gray-800 mb-1">Review</h5>
                <p className="text-xs text-gray-600">We review your request within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-sky-600">4</span>
                </div>
                <h5 className="font-medium text-gray-800 mb-1">Refund</h5>
                <p className="text-xs text-gray-600">Refund processed within 5-10 business days</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Need Help with Cancellations?</h5>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-green-700">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>Call: 1-800-CANCEL-1</span>
                </div>
                <div className="flex items-center text-green-700">
                  <Mail className="w-4 h-4 mr-1" />
                  <span>Email: cancellations@travelbook.com</span>
                </div>
                <div className="flex items-center text-green-700">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'liability-limitations',
      title: 'Liability and Limitations',
      icon: Shield,
      summary: 'Service limitations and liability disclaimers',
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-6">
            <div className="flex items-center mb-2">
              <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
              <h4 className="text-lg font-semibold text-red-800">Important Disclaimers</h4>
            </div>
            <p className="text-red-700">
              Please read these limitations carefully as they affect your rights and our responsibilities.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Service Limitations</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">Booking Agent Role</h5>
              <p className="text-sm text-yellow-700 mb-2">
                We act as a booking agent connecting you with travel service providers. We are not responsible for:
              </p>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Quality of accommodations or services</li>
                <li>• Changes made by hotels, airlines, or cruise lines</li>
                <li>• Overbooking by service providers</li>
                <li>• Travel delays or cancellations</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold text-orange-800 mb-2">Information Accuracy</h5>
              <p className="text-sm text-orange-700 mb-2">
                While we strive for accuracy, we cannot guarantee that all information is always current:
              </p>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Prices may change between search and booking</li>
                <li>• Amenities and services may vary</li>
                <li>• Photos may not reflect current conditions</li>
                <li>• Availability is subject to real-time confirmation</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Liability Limitations</h4>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-800 mb-2">Maximum Liability</h5>
              <p className="text-sm text-gray-700">
                Our total liability for any claim is limited to the amount you paid for the specific booking in question. 
                We are not liable for indirect, consequential, or punitive damages.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">Travel Insurance Recommendation</h5>
              <p className="text-sm text-purple-700">
                We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances 
                including trip cancellation, medical emergencies, and travel delays.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Force Majeure</h5>
            <p className="text-sm text-blue-700">
              We are not responsible for failure to perform due to circumstances beyond our control, including but not limited to: 
              natural disasters, pandemics, government actions, strikes, or technical failures.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      icon: Users,
      summary: 'How disputes are handled and resolved',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Our Commitment to Resolution</h4>
            <p className="text-blue-700">
              We're committed to resolving any issues quickly and fairly. Most disputes can be resolved through our customer service team.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">Resolution Process</h4>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-green-600">1</span>
              </div>
              <h5 className="font-medium text-gray-800 mb-1">Contact Support</h5>
              <p className="text-xs text-gray-600">Reach out to our customer service team first</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-yellow-600">2</span>
              </div>
              <h5 className="font-medium text-gray-800 mb-1">Mediation</h5>
              <p className="text-xs text-gray-600">Independent mediation if support cannot resolve</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="font-bold text-purple-600">3</span>
              </div>
              <h5 className="font-medium text-gray-800 mb-1">Arbitration</h5>
              <p className="text-xs text-gray-600">Binding arbitration as final resolution</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-semibold text-gray-800 mb-2">Customer Service</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone Support:</p>
                  <p className="text-sm font-medium text-gray-800">1-800-SUPPORT (1-800-787-7678)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email Support:</p>
                  <p className="text-sm font-medium text-gray-800">support@travelbook.com</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Available 24/7 for urgent booking issues</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-800 mb-2">Arbitration Agreement</h5>
              <p className="text-sm text-gray-700">
                Any disputes that cannot be resolved through customer service will be settled through binding arbitration 
                rather than court proceedings. This agreement is governed by the laws of the State of California.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const tabs = [
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'policies', label: 'Policies Overview', icon: Shield },
    { id: 'contact', label: 'Legal Contact', icon: Mail }
  ];

  const PolicyOverviewTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-lg border border-sky-200">
        <div className="flex items-center mb-4">
          <Shield className="w-8 h-8 text-sky-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Policy Overview</h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our policies are designed to protect both travelers and service providers while ensuring transparent, fair, and reliable travel booking experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4">
            <DollarSign className="w-6 h-6 text-green-600 mr-3" />
            <h4 className="text-xl font-semibold text-gray-900">Pricing & Payment</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Transparent pricing with no hidden fees</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Secure payment processing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Multiple payment methods accepted</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Real-time currency conversion</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4">
            <RefreshCw className="w-6 h-6 text-blue-600 mr-3" />
            <h4 className="text-xl font-semibold text-gray-900">Cancellation Policy</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Flexible cancellation options</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Free cancellation for most hotels</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>24/7 cancellation support</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Fast refund processing</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-purple-600 mr-3" />
            <h4 className="text-xl font-semibold text-gray-900">Privacy & Security</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Advanced data encryption</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>GDPR compliant data handling</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>No sharing of personal data</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Secure account management</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-orange-600 mr-3" />
            <h4 className="text-xl font-semibold text-gray-900">Customer Support</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>24/7 multilingual support</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Multiple contact channels</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Expert travel assistance</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Emergency travel support</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
        <div className="flex items-center mb-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 mr-2" />
          <h4 className="text-lg font-semibold text-yellow-800">Important Reminders</h4>
        </div>
        <div className="space-y-2 text-yellow-700">
          <p>• Always review specific booking terms before confirming your reservation</p>
          <p>• Consider purchasing travel insurance for additional protection</p>
          <p>• Keep your booking confirmation and contact information updated</p>
          <p>• Contact us immediately if you encounter any issues with your booking</p>
        </div>
      </div>
    </div>
  );

  const ContactTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-lg border border-blue-200">
        <div className="flex items-center mb-4">
          <Mail className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Legal Contact Information</h3>
        </div>
        <p className="text-gray-700 text-lg">
          For legal inquiries, terms clarification, or formal correspondence, please use the contact information below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Legal Department</h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <Building2 className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">TravelBook Legal Division</p>
                <p className="text-gray-600 text-sm">123 Travel Plaza, Suite 500</p>
                <p className="text-gray-600 text-sm">San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-900">legal@travelbook.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-gray-900">1-800-LEGAL-TB (1-800-534-2582)</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Response Times</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">General Inquiries</span>
              <span className="font-medium text-blue-600">24-48 hours</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Terms Questions</span>
              <span className="font-medium text-blue-600">2-3 business days</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Legal Notices</span>
              <span className="font-medium text-blue-600">3-5 business days</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Urgent Matters</span>
              <span className="font-medium text-red-600">Same day</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Information</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Registration</h5>
            <p className="text-sm text-gray-600 mb-1">California Seller of Travel</p>
            <p className="text-sm font-mono text-gray-800">CST-2108444-40</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Insurance</h5>
            <p className="text-sm text-gray-600 mb-1">Professional Liability</p>
            <p className="text-sm font-mono text-gray-800">Policy #PL-2024-TB</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">Compliance</h5>
            <p className="text-sm text-gray-600 mb-1">GDPR & CCPA</p>
            <p className="text-sm font-mono text-gray-800">Certified Compliant</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
        <div className="flex items-center mb-3">
          <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
          <h4 className="text-lg font-semibold text-red-800">Legal Notice Requirements</h4>
        </div>
        <div className="text-red-700 space-y-2">
          <p>For formal legal notices, please send certified mail to our legal department address above.</p>
          <p>Electronic notices should include "LEGAL NOTICE" in the subject line.</p>
          <p>All legal correspondence will be acknowledged within 48 hours of receipt.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-3 rounded-xl mr-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
              <p className="text-gray-600 text-lg mt-2">Your guide to using our travel booking services</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'terms' && (
          <div className="space-y-6">
            {termsSections.map((section, index) => {
              const Icon = section.icon;
              const isExpanded = expandedSections[section.id];
              
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {section.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {section.summary}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400">
                        {isExpanded ? (
                          <ChevronDown className="w-6 h-6" />
                        ) : (
                          <ChevronRight className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <div className="pt-4">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'policies' && <PolicyOverviewTab />}
        {activeTab === 'contact' && <ContactTab />}
      </div>

    </div>
  );
};

export default TermsConditionsPage;