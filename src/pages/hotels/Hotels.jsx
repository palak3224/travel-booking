import React, { useEffect } from 'react'
import HotelsHero from './components/HotelsHero'
import BookHotelForm from './components/BookHotelForm'
import PopularCities from './components/PopularCities'
import HotelBookingSteps from './components/HotelBookingSteps'
import HotelCTABanner from './components/HotelCTABanner'

const Hotels = () => {

    useEffect(() => {
      window.scrollTo({
        top: window.innerHeight * 0.8,
      });
    }, []);

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