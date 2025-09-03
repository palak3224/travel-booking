import React, { useEffect } from 'react'
import FlightsHero from './components/FlightsHero'
import BookFlightForm from './components/BookFlightForm'
import PopularFlights from './components/PopularFlights'
import FlightBookingSteps from './components/FlightBookingSteps'
import FlightsCTABanner from './components/FlightsCTABanner'

const Flights = () => {

    useEffect(() => {
      window.scrollTo({
        top: window.innerHeight * 0.8,
      });
    }, []);

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