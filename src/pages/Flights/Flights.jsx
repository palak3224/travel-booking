import React from 'react'
import FlightsHero from './components/FlightsHero'
import BookFlightForm from './components/BookFlightForm'
import PopularFlights from './components/PopularFlights'
import FlightBookingSteps from './components/FlightBookingSteps'
import FlightsCTABanner from './components/FlightsCTABanner'

const Flights = () => {
  return (
    <div>
        <FlightsHero />
        <BookFlightForm />
        <PopularFlights />
        <FlightBookingSteps />
        <FlightsCTABanner />
    </div>
  )
}

export default Flights