import React from 'react'
import CruisesHero from './components/CruisesHero'
import BookCruiseForm from './components/BookCruiseForm'
import CruiseComponents from './components/CruiseComponents'
import CruiseBookingSteps from './components/CruiseBookingSteps'
import CruiseCTABanner from './components/CruiseCTABanner'

const Cruises = () => {
  return (
    <div>
        <CruisesHero />
        <BookCruiseForm />
        <CruiseComponents />
        <CruiseBookingSteps />
        <CruiseCTABanner />
    </div>
  )
}

export default Cruises