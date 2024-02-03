import React from 'react'
import Contactuseheader from '../components/contactuscomponent/contactuse_header'
import Haveaquestion from '../components/contactuscomponent/haveaquestion'
import OurAddress from '../components/contactuscomponent/ourAddress'
import Footer from '../components/footer'
// import Mylocation from '../components/contactuscomponent/mylocation'


function Contactus() {
  return (
    <div>
        <Contactuseheader/>
        {/* <Mylocation/> */}
        <Haveaquestion/>
        <OurAddress/>
        <Footer/>
        
    </div>
  )
}

export default Contactus