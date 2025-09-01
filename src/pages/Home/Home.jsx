import React from 'react'
import HeroSection from './Components/Hero'
import FeaturedDeals from './Components/FeaturedDeals'
import Testimonials from './Components/Testimonials'
import WhyBookWithUs from './Components/WhyBookWithUs'
import TravelBentoGrid from './Components/TravelBentoGrid'
import BlogSection from './Components/BlogSection'

function Home() {
  return (
    <div>
      <HeroSection />
      <TravelBentoGrid />
      <FeaturedDeals />
      <Testimonials />
      <BlogSection />
    </div>
  )
}

export default Home