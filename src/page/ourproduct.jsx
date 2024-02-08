import React from 'react'
import OurProductHeader from '../components/ourProductcoponet/ourproductHeader'
// import Tales_of_tea from '../components/ourProduct_coponet/tales_of_tea'
// import SpiceSensations from '../components/ourProduct_coponet/SpiceSensations'
import Footer from '../components/footer'
// import SoyaChunk from '../components/ourProduct_coponet/Soya_Chunks'
import MainOurproduct from '../components/ourProductcoponet/mainourproduct'

function Ourproduct() {
  return (
    <div>
      <OurProductHeader/>
      {/* <Tales_of_tea/>
      <SpiceSensations/>
      <SoyaChunk/> */}
      <MainOurproduct/>
      <Footer/>
      
    </div>
  )
}

export default Ourproduct