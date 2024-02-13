import React from "react";
import "../../style/our-product/our-product/our-product-header.css";
import Our_product_Png from "../../images/our-product-img/our-product-png-removebg-preview.png";
import SmallNavbar from "../smallnavbar";
import BigNavbar from "../bigNavbar";

function OurProductHeader() {
 

  return (
    <>
      <div>
        {/* navbar */}
        <div className="card_for_small_screen">
          <div className="back-our-product-image">
            <SmallNavbar />
            <div className="contact-us-icon-header-logo">
              <img
                src={Our_product_Png}
                alt="contact-us"
                className="contact-us-icon"
              />
            </div>
          </div>
        </div>

        {/* for big screen navbar */}
        <div className="card_for_big_screen back-our-product-image">
          <BigNavbar />
          <div className="contact-us-icon-header-logo">
            <img
              src={Our_product_Png}
              alt="contact-us"
              className="contact-us-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProductHeader;
