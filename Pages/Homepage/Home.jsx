import React from 'react'
import Header from '../../src/components/Homecomponents/Header'
import Subscription from '../../src/components/Homecomponents/Subscription'
import About from '../../src/components/Homecomponents/About'
import Banner from '../../src/components/Homecomponents/Banner'
import Testimonial from '../../src/components/Homecomponents/Testimonials'
import Faq from '../../src/components/Homecomponents/Faq'
import Footer from '../../src/components/Homecomponents/Footer'
import Modalroute from './Modalroute'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Subscription />
      <About />
      <Testimonial />
      <Faq />
      <Footer />
      <Modalroute />
    </div>
  )
}

export default Home