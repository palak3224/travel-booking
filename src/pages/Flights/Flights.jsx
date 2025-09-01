import React from 'react'
import FlightsHero from './components/FlightsHero'
import BookFlightForm from './components/BookFlightForm'
import PopularFlights from './components/PopularFlights'

const Flights = () => {
  return (
    <div>
        <FlightsHero />
        <BookFlightForm />
        <PopularFlights />
    </div>
  )
}

export default Flights