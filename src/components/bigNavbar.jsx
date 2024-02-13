import React from "react";
import "../style/header.css";
import mainIcon from "../images/S-logo.png";
import { NavLink } from "react-router-dom";

function BigNavbar() {
  return (
    <div>
      <div className="main_navbar_for_big_screen ">
        {/* left */}
        <div className="navbar_for_big_screen_left_side_div">
          <NavLink className=" text-decoration-none text-white" to={"/"}>
            <img
              src={mainIcon}
              alt=""
              srcset=""
              className="Header_logo_for_big_screen"
            />
          </NavLink>
        </div>
        {/* right */}
        <div className="navbar_for_big_screen_right_side_div">
          <ul className="big_screen_navbar_ul">
            <NavLink className=" text-decoration-none text-white" to={"/"}>
              <li>HOME</li>
            </NavLink>
            <NavLink
              className=" text-decoration-none text-white"
              to={"/about-us"}
            >
              <li>ABOUT</li>
            </NavLink>
            <NavLink
              className=" text-decoration-none text-white"
              to={"/our-product"}
            >
              <li>PRODUCT</li>
            </NavLink>

            <li>E-CATALOG</li>
            <NavLink className=" text-decoration-none text-white" to={"/event"}>
              <li>Event</li>
            </NavLink>

            <NavLink
              className=" text-decoration-none text-white"
              to={"/contact-us"}
            >
              <li>Contact US</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BigNavbar;
