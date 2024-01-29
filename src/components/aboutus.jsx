import React from "react";
import "../style/aboutus.css";
import image2 from "../images/Red Shape.png";
import image3 from "../images/Shweta Tiwari.png";
import TextBootomIcon from "../images/Shape.png";
// import NewImage1 from "../images/New_1.jpg";
import NewImage2 from "../images/about_new_image.png";
// import NewImage3 from "../images/new_3.jpg";

function AboutUs() {
  return (
    <>
      <div className="main-about-page">
        {/* content */}
        <div className="main-text-content-div-about">
          <div className="second-text-content-div-about">
            <h3
              className="heading-text"
              data-aos="flip-up"
              data-aos-offset="200"
              //  data-aos-delay="200"
              data-aos-duration="500"
            >
              About US
            </h3>
            <div
              className="text-center"
              data-aos="flip-down"
              data-aos-offset="200"
              //  data-aos-delay="200"
              data-aos-duration="500"
            >
              <img
                src={TextBootomIcon}
                alt="style"
                className="text-icon-bottom"
              />
            </div>
            {/* text */}
            <p
              className="about-use-paregraph"
              data-aos="zoom-out-down"
              data-aos-offset="200"
              //  data-aos-delay="200"
              data-aos-duration="700"
            >
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
              data-aos="flip-left"
              data-aos-offset="200"
              //  data-aos-delay="200"
              data-aos-duration="1000"
            />
            <div
              className="about-us-girl-image-div"
              data-aos="zoom-out-down"
              data-aos-offset="200"
              //  data-aos-delay="200"
              data-aos-duration="1500"
            >
              <img src={image3} alt="tea" srcset="" className="girl-image" />
            </div>
            
          </div>
          <div className=" text-center" >
            <img src={NewImage2} alt="style" className="w-100 h-50 img-fluid" />
          </div>
        </div>
        {/* our collection text */}
        <div className="our-collection-about-page  text-center">
          <h3
            className="heading-text"
            data-aos="flip-up"
            data-aos-offset="200"
            //  data-aos-delay="200"
            data-aos-duration="1700"
          >
            Our Collection
          </h3>
          <div
            className="text-style-icon-div"
            data-aos="flip-down"
            data-aos-offset="200"
            //  data-aos-delay="200"
            data-aos-duration="1700"
          >
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
