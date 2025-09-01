import React from 'react'
import HotelsHero from './components/HotelsHero'
import BookHotelForm from './components/BookHotelForm'
import PopularCities from './components/PopularCities'
import HotelBookingSteps from './components/HotelBookingSteps'
import HotelCTABanner from './components/HotelCTABanner'

const Hotels = () => {
  return (
    <div>
        <HotelsHero />
        <BookHotelForm />
        <PopularCities />
        <HotelBookingSteps />
        <HotelCTABanner />
    </div>
  )
}

export default Hotels