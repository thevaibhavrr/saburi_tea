import React, { useState } from "react";
import "../style/header.css";
import mainIcon from "../images/S-logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [showVerticalNavbar, setShowVerticalNavbar] = useState(false);

  const toggleVerticalNavbar = () => {
    setShowVerticalNavbar(!showVerticalNavbar);
  };

  return ( 
    <>
      <div>
        {/* navbar for small screen */}
        <div className="card_for_small_screen" >

        <div className="back-ground-tea-image">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div
              className="d-flex justify-content-around w-100"
              data-aos="zoom-out"
              data-aos-offset="200"
              data-aos-delay="1000"
              data-aos-duration="5000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="">
                {/* <img src={mainIcon} alt="" srcset="" className="header-logo" /> */}
              </div>
              <div className="">
                <img src={mainIcon} alt="" srcset="" className="header-logo" />
              </div>
              <div className="" onClick={toggleVerticalNavbar}>
                {/* <i className="bi bi-grip-horizontal" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-filter-right"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5" />
                </svg>
                {/* <span>Icon</span> */}
              </div>
            </div>

            {/* Vertical Navbar */}
            {showVerticalNavbar && (
              <div className="vertical-navbar">
                <ul>
                <NavLink
                  className=" text-decoration-none text-white"
                  to={"/"}
                >
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
                  <li>Event</li>

                  <NavLink
                    className=" text-decoration-none text-white"
                    to={"/contact-us"}
                  >
                  <li>Contact US</li>
                  </NavLink>
                </ul>
              </div>
            )}
          </nav>
        </div>
        </div>

        {/* for big screen navbar */}
        <div className="card_for_big_screen back-ground-tea-image" >
        <div className="main_navbar_for_big_screen " >
          {/* left */}
          <div className="navbar_for_big_screen_left_side_div" >
          <img src={mainIcon} alt="" srcset="" className="Header_logo_for_big_screen" />
          </div>
          {/* right */}
          <div className="navbar_for_big_screen_right_side_div" >
            <ul className="big_screen_navbar_ul">
                <NavLink
                  className=" text-decoration-none text-white"
                  to={"/"}
                >
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
                  <li>Event</li>

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

      </div>
    </>
  );
}

export default Header;
