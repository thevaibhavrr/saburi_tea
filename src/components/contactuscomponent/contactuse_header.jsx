import React from "react";
import "../../style/contact-us/contact-us-header.css";
import Contact_us_image_icon from "../../images/contact_us_img/contact-us.png";
import SmallNavbar from "../smallnavbar";
import BigNavbar from "../bigNavbar";

function Contactuseheader() {
 

  return (
    <>
      <div>
        {/* navbar */}
        <div className="card_for_small_screen">
          <div className="back-contact-us-image">
            <SmallNavbar />
            {/* contact us image */}
            <div className="contact-us-icon-header-logo">
              <img
                src={Contact_us_image_icon}
                alt="contact-us"
                className="contact-us-icon"
              />
            </div>
          </div>
        </div>

        {/* for big screen navbar */}
        <div className="card_for_big_screen back-contact-us-image">
          <BigNavbar/>
          {/* contact us image */}
          <div className="contact-us-icon-header-logo">
            <img
              src={Contact_us_image_icon}
              alt="contact-us"
              className="contact-us-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactuseheader;
