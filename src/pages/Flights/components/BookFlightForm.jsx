import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plane, 
  Calendar, 
  Users, 
  Search, 
  ArrowUpDown,
  MapPin,
  User,
  Baby,
  Plus,
  Minus,
  X,
  ChevronDown
} from "lucide-react";

const BookFlightForm = () => {
  const [tripType, setTripType] = useState("roundtrip");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerDropdown, setPassengerDropdown] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });
  const [classType, setClassType] = useState("Economy");

  const handleSwapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const updatePassengers = (type, operation) => {
    setPassengers(prev => ({
      ...prev,
      [type]: operation === 'add' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const getTotalPassengers = () => {
    return passengers.adults + passengers.children + passengers.infants;
  };

  const popularCities = [
    "New York (NYC)", "Los Angeles (LAX)", "Chicago (ORD)", "Miami (MIA)",
    "San Francisco (SFO)", "Las Vegas (LAS)", "Boston (BOS)", "Seattle (SEA)"
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
                <Plane className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Flight</h2>
            </div>
            <p className="text-gray-600 text-sm">Find and compare the best flight deals worldwide</p>
          </div>

          {/* Trip Type Selection */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-gray-100 rounded-xl p-1">
              {[
                { key: "roundtrip", label: "Round Trip" },
                { key: "oneway", label: "One Way" },
                { key: "multicity", label: "Multi City" }
              ].map((type) => (
                <button
                  key={type.key}
                  onClick={() => setTripType(type.key)}
                  className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                    tripType === type.key
                      ? "bg-sky-500 text-white shadow-md"
                      : "text-gray-600 hover:text-sky-500"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Form Grid */}
          <div className="space-y-4">
            {/* From → To Row */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-3 items-end">
              {/* From City */}
              <div className="lg:col-span-5">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    placeholder="Departure city or airport"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                    list="from-cities"
                  />
                  <datalist id="from-cities">
                    {popularCities.map(city => (
                      <option key={city} value={city} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Swap Button */}
              <div className="lg:col-span-1 flex justify-center pb-0 lg:pb-3">
                <motion.button
                  onClick={handleSwapCities}
                  className="bg-sky-100 hover:bg-sky-200 p-2.5 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpDown className="w-4 h-4 text-sky-600" />
                </motion.button>
              </div>

              {/* To City */}
              <div className="lg:col-span-5">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    placeholder="Destination city or airport"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                    list="to-cities"
                  />
                  <datalist id="to-cities">
                    {popularCities.map(city => (
                      <option key={city} value={city} />
                    ))}
                  </datalist>
                </div>
              </div>
            </div>

            {/* Dates Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Departure Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Departure Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className={tripType === "oneway" ? "opacity-50 pointer-events-none" : ""}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Return Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    disabled={tripType === "oneway"}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 disabled:bg-gray-50"
                  />
                </div>
              </div>
            </div>

            {/* Passengers and Class Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Passengers Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Passengers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <button
                    onClick={() => setPassengerDropdown(!passengerDropdown)}
                    className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 text-left bg-white flex items-center justify-between"
                  >
                    <span>{getTotalPassengers()} Passenger{getTotalPassengers() > 1 ? 's' : ''}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${passengerDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Passenger Dropdown */}
                  {passengerDropdown && (
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
                          <div className="text-xs text-gray-500">12+ years</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updatePassengers('adults', 'subtract')}
                            disabled={passengers.adults <= 1}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-medium text-sm">{passengers.adults}</span>
                          <button
                            onClick={() => updatePassengers('adults', 'add')}
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
                          <div className="text-xs text-gray-500">2-11 years</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updatePassengers('children', 'subtract')}
                            disabled={passengers.children <= 0}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-medium text-sm">{passengers.children}</span>
                          <button
                            onClick={() => updatePassengers('children', 'add')}
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
                          <div className="text-xs text-gray-500">Under 2 years</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updatePassengers('infants', 'subtract')}
                            disabled={passengers.infants <= 0}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-medium text-sm">{passengers.infants}</span>
                          <button
                            onClick={() => updatePassengers('infants', 'add')}
                            className="w-7 h-7 rounded-full bg-sky-100 hover:bg-sky-200 flex items-center justify-center"
                          >
                            <Plus className="w-3 h-3 text-sky-600" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => setPassengerDropdown(false)}
                          className="text-sky-500 text-sm font-medium hover:text-sky-600"
                        >
                          Done
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Class Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Class</label>
                <div className="relative">
                  <select
                    value={classType}
                    onChange={(e) => setClassType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-gray-700 bg-white appearance-none"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First Class">First Class</option>
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
                Search Flights
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookFlightForm;