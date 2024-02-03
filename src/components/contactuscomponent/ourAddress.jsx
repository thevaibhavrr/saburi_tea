import React from "react";
import "../../style/contact-us/Our-address.css";

function OurAddress() {
  return (
    <>
      <div className="our-address-contact-us" >
        {/* main address */}
        <div className="main-address-upper-side d-flex justify-content-center align-items-center flex-column" >
          <h3>Our Address:</h3>
          <h5 className="main-address-upper-side-paregraph" >Digital Avenue 42,Borough,LDN GX1 7HG,Virtual, London</h5>
        </div>
        {/* mail */}
        <div className="main-address-bottom-side">
          <h2>Mail us at:</h2>
          <h5 className="main-address-upper-side-paregraph" >abc@gmail.com</h5>
        </div>
      </div>
    </>
  );
}

export default OurAddress;
