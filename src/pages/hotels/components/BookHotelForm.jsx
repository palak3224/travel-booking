import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
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
  Star
} from "lucide-react";

const BookHotelForm = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestDropdown, setGuestDropdown] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    infants: 0
  });
  const [rooms, setRooms] = useState(1);
  const [starRating, setStarRating] = useState("");

  const updateGuests = (type, operation) => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'add' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const updateRooms = (operation) => {
    setRooms(prev => operation === 'add' ? prev + 1 : Math.max(1, prev - 1));
  };

  const getTotalGuests = () => {
    return guests.adults + guests.children + guests.infants;
  };

  const popularDestinations = [
    "New York, NY", "Paris, France", "London, UK", "Dubai, UAE",
    "Tokyo, Japan", "Singapore", "Los Angeles, CA", "Barcelona, Spain",
    "Rome, Italy", "Bangkok, Thailand", "Sydney, Australia", "Mumbai, India"
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
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Hotel</h2>
            </div>
            <p className="text-gray-600 text-sm">Find and compare the best hotel deals worldwide</p>
          </div>

          {/* Main Form Grid */}
          <div className="space-y-4">
            {/* Destination Row */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where are you going?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                  list="destinations"
                />
                <datalist id="destinations">
                  {popularDestinations.map(dest => (
                    <option key={dest} value={dest} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Dates Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Check-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Check-out Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Check-out Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Guests, Rooms, and Rating Row */}
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

              {/* Rooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Rooms</label>
                <div className="relative">
                  <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={rooms}
                      onChange={(e) => setRooms(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      className="w-full pl-10 pr-16 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                    />
                    <div className="absolute right-2 flex flex-col">
                      <button
                        onClick={() => updateRooms('add')}
                        className="w-6 h-3 bg-sky-100 hover:bg-sky-200 rounded-t flex items-center justify-center"
                      >
                        <Plus className="w-2.5 h-2.5 text-sky-600" />
                      </button>
                      <button
                        onClick={() => updateRooms('subtract')}
                        disabled={rooms <= 1}
                        className="w-6 h-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-b flex items-center justify-center"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Star Rating</label>
                <div className="relative">
                  <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={starRating}
                    onChange={(e) => setStarRating(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 bg-white appearance-none"
                  >
                    <option value="">Any Rating</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="2">2+ Stars</option>
                    <option value="1">1+ Stars</option>
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
                Search Hotels
              </motion.button>
            </div>

            {/* Quick Filters */}
            <div className="pt-2 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Filters</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Free WiFi",
                  "Swimming Pool",
                  "Spa & Wellness",
                  "Pet Friendly",
                  "Business Center",
                  "Fitness Center",
                  "Restaurant",
                  "Free Parking"
                ].map((filter) => (
                  <motion.button
                    key={filter}
                    className="px-3 py-1.5 text-xs rounded-full bg-gray-100 text-gray-700 hover:bg-sky-100 hover:text-sky-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter}
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

export default BookHotelForm;