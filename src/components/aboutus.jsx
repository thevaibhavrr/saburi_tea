import React from "react";
import "../style/aboutus.css";
import image1 from "../images/Leaves.png";
import image2 from "../images/Red Shape.png";
import image3 from "../images/Shweta Tiwari.png";
import TextBootomIcon from "../images/Shape.png";

function AboutUs() {
  return (
    <>
      <div className="main-about-page">
        {/* content */}
        <div className="main-text-content-div-about">
          <div className="second-text-content-div-about">
            <h3 className="heading-text">About US</h3>
            <div className="text-center">
              <img
                src={TextBootomIcon}
                alt="style"
                className="text-icon-bottom"
              />
            </div>
            {/* text */}
            <p className="about-use-paregraph">
              In May 2002, Radha Krishna made its entry in the branded Atta
              segment and within a short period of time became the number one
              branded packaged atta across the country. ning.n May 2002, Radha
              Krishna made its entry in the branded Atta segment and within a
              short period of time became the number one branded packaged atta
              across the country.In May 2002, Radha Krishna made its entry in
              the branded Atta segment and within a short period of time became
              the number one branded packaged atta across the country. ning.n
              May 2002, Radha Krishna made its entry in the branded Atta segment
              and within a short period of time became the number one branded
              packaged atta across the country.
            </p>
          </div>
        </div>
        {/* images */}
        <div className="about-us-images">
          <div className="about-us-red-angel-image">
            <img
              src={image2}
              alt="tea"
              srcset=""
              className="red-shape-about-us"
            />
            <div className="about-us-girl-image-div">
              <img src={image3} alt="tea" srcset="" className="girl-image" />
            </div>
          </div>
        </div>
        {/* our collection text */}
        <div className="our-collection-about-page  text-center">
          <h3 className="heading-text">Our Collection</h3>
          <div className="text-style-icon-div">
            <img
              src={TextBootomIcon}
              alt="style"
              className="text-icon-bottom"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
