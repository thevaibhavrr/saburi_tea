import React from "react";
import "../../style/event/event-header.css";

import SmallNavbar from "../smallnavbar";
import BigNavbar from "../bigNavbar";

function Eventheader() {
 
  return (
    <>
      <div>
        {/* navbar */}
        <div className="card_for_small_screen">
          <div className="back-event-image">
           <SmallNavbar/>
            {/* contact us image */}
            <div className="Event_logo_div">
            <h6  className="typing-animation">Events</h6>
          </div>
          </div>
        </div>

        {/* for big screen navbar */}
        <div className="card_for_big_screen back-event-image">
         <BigNavbar/>
          {/* contact us image */}
          <div className="Event_logo_div">
            <h1  className="typing-animation">Events</h1>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventheader;
