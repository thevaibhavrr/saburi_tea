import React from 'react'
import Header from '../components/header'
import AboutUs from '../components/Home/aboutus'
import Ourcollection from '../components/Home/our-collection'
import YTVideo from '../components/Home/video'
import OurProduct from '../components/Home/our-product'
import InstaLive from '../components/Home/instaLive'
import LiveEvent from '../components/Home/liveEvent'
import Testimonial from '../components/Home/testimonials'
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