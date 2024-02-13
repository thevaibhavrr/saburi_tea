import React from "react";
import "../style/header.css";
import SmallNavbar from "./smallnavbar";
import BigNavbar from "./bigNavbar";

function Header() {
  return (
    <>
      <div>
        {/* navbar for small screen */}
        <div className="card_for_small_screen">
          <div className="back-ground-tea-image">
            <SmallNavbar />
          </div>
        </div>

        {/* for big screen navbar */}
        <div className="card_for_big_screen back-ground-tea-image">
          <BigNavbar/>
        </div>
      </div>
    </>
  );
}

export default Header;
