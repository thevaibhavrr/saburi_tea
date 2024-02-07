import React from 'react'
import Our_Product_Header from '../components/ourProduct_coponet/our_product_Header'
// import Tales_of_tea from '../components/ourProduct_coponet/tales_of_tea'
// import SpiceSensations from '../components/ourProduct_coponet/SpiceSensations'
import Footer from '../components/footer'
// import SoyaChunk from '../components/ourProduct_coponet/Soya_Chunks'
import Main_out_product from '../components/ourProduct_coponet/main_out_product'

function Ourproduct() {
  return (
    <div>
      <Our_Product_Header/>
      {/* <Tales_of_tea/>
      <SpiceSensations/>
      <SoyaChunk/> */}
      <Main_out_product/>
      <Footer/>
      
    </div>
  )
}

export default Ourproduct