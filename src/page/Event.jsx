import React from 'react'
import Eventheader from '../components/Event/event_header'
import Footer from '../components/footer'
import PhotoGallery from '../components/Event/PhotoGallery'
function Event() {
  return (
    <div>
        <Eventheader/>
    <PhotoGallery/>
        <Footer/>
    </div>
  )
}

export default Event