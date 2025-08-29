import React from 'react'
import HeroSection from './Components/Hero'
import FeaturedDeals from './Components/FeaturedDeals'
import Testimonials from './Components/Testimonials'
import WhyBookWithUs from './Components/WhyBookWithUs'

function Home() {
  return (
    <div>
      <HeroSection />
      <WhyBookWithUs />
      <FeaturedDeals />
      <Testimonials />
    </div>
  )
}

export default Home