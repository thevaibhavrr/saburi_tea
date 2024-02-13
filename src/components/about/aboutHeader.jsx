import React from "react";
import "../../style/about/about-header.css";
import SmallNavbar from "../smallnavbar";
import BigNavbar from "../bigNavbar";

function Aboutheader() {
  return (
    <>
      <div>
        {/* navbar */}
        <div className="card_for_small_screen">
          <div className="back-about-image">
            <SmallNavbar />
          </div>
        </div>

        {/* for big screen navbar */}
        <div className="card_for_big_screen back-about-image">
          <BigNavbar />
        </div>
      </div>
    </>
  );
}

export default Aboutheader;
