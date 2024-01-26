import React from 'react'
import Header from '../components/header'
import AboutUs from '../components/aboutus'
import Ourcollection from '../components/our-collection'
import YTVideo from '../components/video'
import OurProduct from '../components/our-product'
import InstaLive from '../components/instaLive'
import LiveEvent from '../components/liveEvent'
import Testimonial from '../components/testimonials'
import Footer from '../components/footer'
function Home() {
  return (
    <div>
        <Header/>
        <AboutUs/>
        <Ourcollection/>
        <YTVideo/>
        <OurProduct/>
        <InstaLive/>
        <LiveEvent/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home