import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Ship, 
  Calendar, 
  Users, 
  Search, 
  MapPin,
  User,
  Baby,
  Plus,
  Minus,
  ChevronDown,
  Bed,
  Anchor
} from "lucide-react";

const BookCruiseForm = () => {
  const [destination, setDestination] = useState("");
  const [departurePort, setDeparturePort] = useState("");
  const [sailDate, setSailDate] = useState("");
  const [duration, setDuration] = useState("");
  const [guestDropdown, setGuestDropdown] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0
  });
  const [cabins, setCabins] = useState(1);
  const [cabinType, setCabinType] = useState("");

  const updateGuests = (type, operation) => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'add' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const updateCabins = (operation) => {
    setCabins(prev => operation === 'add' ? prev + 1 : Math.max(1, prev - 1));
  };

  const getTotalGuests = () => {
    return guests.adults + guests.children + guests.infants;
  };

  const cruiseDestinations = [
    "Caribbean", "Mediterranean", "Alaska", "Northern Europe",
    "Asia", "Australia & New Zealand", "Hawaii", "Panama Canal",
    "Transatlantic", "Mexican Riviera", "Bermuda", "Norwegian Fjords"
  ];

  const departurePorts = [
    "Miami, FL", "Fort Lauderdale, FL", "Barcelona, Spain", "Rome, Italy",
    "Seattle, WA", "Venice, Italy", "New York, NY", "Southampton, UK",
    "Vancouver, Canada", "Los Angeles, CA", "Copenhagen, Denmark", "Singapore"
  ];

  const cruiseDurations = [
    "3-4 days", "5-7 days", "8-10 days", "11-14 days", "15-21 days", "22+ days"
  ];

  return (
    <div className="w-full bg-gradient-to-br from-sky-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="bg-sky-500 p-2.5 rounded-full">
                <Ship className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Cruise</h2>
            </div>
            <p className="text-gray-600 text-sm">Discover amazing cruise deals and unforgettable voyages</p>
          </div>

          {/* Main Form Grid */}
          <div className="space-y-4">
            {/* Destination and Departure Port Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Cruise Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 bg-white appearance-none"
                  >
                    <option value="">Select destination</option>
                    {cruiseDestinations.map(dest => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Departure Port */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Departure Port</label>
                <div className="relative">
                  <Anchor className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={departurePort}
                    onChange={(e) => setDeparturePort(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 bg-white appearance-none"
                  >
                    <option value="">Select departure port</option>
                    {departurePorts.map(port => (
                      <option key={port} value={port}>{port}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Sail Date and Duration Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Sail Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Sail Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    value={sailDate}
                    onChange={(e) => setSailDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Cruise Duration</label>
                <div className="relative">
                  <Ship className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 bg-white appearance-none"
                  >
                    <option value="">Select duration</option>
                    {cruiseDurations.map(dur => (
                      <option key={dur} value={dur}>{dur}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Guests, Cabins, and Cabin Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Guests Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <button
                    onClick={() => setGuestDropdown(!guestDropdown)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 text-left bg-white flex items-center justify-between"
                  >
                    <span>{getTotalGuests()} Guest{getTotalGuests() > 1 ? 's' : ''}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${guestDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Guest Dropdown */}
                  {guestDropdown && (
                    <motion.div
                      className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-4 mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Adults */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div>
                          <div className="font-medium text-gray-700 flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Adults
                          </div>
                          <div className="text-xs text-gray-500">18+ years</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateGuests('adults', 'subtract')}
                            disabled={guests.adults <= 1}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-medium text-sm">{guests.adults}</span>
                          <button
                            onClick={() => updateGuests('adults', 'add')}
                            className="w-7 h-7 rounded-full bg-sky-100 hover:bg-sky-200 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3 text-sky-600" />
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div>
                          <div className="font-medium text-gray-700">Children</div>
                          <div className="text-xs text-gray-500">3-17 years</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateGuests('children', 'subtract')}
                            disabled={guests.children <= 0}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-medium text-sm">{guests.children}</span>
                          <button
                            onClick={() => updateGuests('children', 'add')}
                            className="w-7 h-7 rounded-full bg-sky-100 hover:bg-sky-200 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3 text-sky-600" />
                          </button>
                        </div>
                      </div>

                      {/* Infants */}
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <div className="font-medium text-gray-700 flex items-center gap-2">
                            <Baby className="w-4 h-4" />
                            Infants
                          </div>
                          <div className="text-xs text-gray-500">0-2 years</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateGuests('infants', 'subtract')}
                            disabled={guests.infants <= 0}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-medium text-sm">{guests.infants}</span>
                          <button
                            onClick={() => updateGuests('infants', 'add')}
                            className="w-7 h-7 rounded-full bg-sky-100 hover:bg-sky-200 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3 text-sky-600" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => setGuestDropdown(false)}
                          className="text-sky-500 text-sm font-medium hover:text-sky-600"
                        >
                          Done
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Cabins */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Cabins</label>
                <div className="relative">
                  <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={cabins}
                      onChange={(e) => setCabins(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      className="w-full pl-10 pr-16 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                    />
                    <div className="absolute right-2 flex flex-col">
                      <button
                        onClick={() => updateCabins('add')}
                        className="w-6 h-3 bg-sky-100 hover:bg-sky-200 rounded-t flex items-center justify-center"
                      >
                        <Plus className="w-2.5 h-2.5 text-sky-600" />
                      </button>
                      <button
                        onClick={() => updateCabins('subtract')}
                        disabled={cabins <= 1}
                        className="w-6 h-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-b flex items-center justify-center"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cabin Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Cabin Type</label>
                <div className="relative">
                  <Ship className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={cabinType}
                    onChange={(e) => setCabinType(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 bg-white appearance-none"
                  >
                    <option value="">Any Cabin</option>
                    <option value="Interior">Interior</option>
                    <option value="Ocean View">Ocean View</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Suite">Suite</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-4">
              <motion.button
                className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <Search className="w-5 h-5" />
                Search Cruises
              </motion.button>
            </div>

            {/* Quick Filters */}
            <div className="pt-2 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Cruise Lines</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Royal Caribbean",
                  "Norwegian",
                  "Carnival",
                  "Princess",
                  "Celebrity",
                  "Holland America",
                  "MSC Cruises",
                  "Disney Cruise"
                ].map((line) => (
                  <motion.button
                    key={line}
                    className="px-3 py-1.5 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-sky-100 hover:text-sky-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {line}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Cruise Features */}
            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "All Inclusive",
                  "Kids Club",
                  "Spa & Wellness",
                  "Water Slides",
                  "Casino",
                  "Live Entertainment",
                  "Specialty Dining",
                  "Rock Climbing"
                ].map((feature) => (
                  <motion.button
                    key={feature}
                    className="px-3 py-1.5 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-sky-100 hover:text-sky-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {feature}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookCruiseForm;