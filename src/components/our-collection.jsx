import React, { useEffect } from "react";
import "../style/ourcollection.css";
import image1 from "../images/our_collection_1.png";
import image2 from "../images/our_collection_2.png";
import image3 from "../images/our_collection_3.png";
function Ourcollection() {
  useEffect(() => {
    // Run animation on component mount or update
    const element = document.querySelector(".our-collection-card-text");
    if (element) {
      element.classList.add("animate");

      // Cleanup function to remove the 'animate' class when the component is unmounted or updated
      return () => {
        element.classList.remove("animate");
      };
    }
  }, []);

  return (
    <>
      <div className="main-our-product-section">
        {/*  main div*/}
        <div className="main-second-our-product-div">
          {/* left side */}
          <div className="main-card-div">
            {/* first card */}
            <div className="our-collection-cards">
              {/* image */}
              <div
                className="our-collection-card-images"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={image1}
                  alt="masala-tea"
                  className="tea-images tea-images-left"
                />
              </div>
              {/* text */}
              <div className="">
                <h3 className={"our-collection-card-text"}>Saburi Tea</h3>
                <button className="explore-more-button">Explore More</button>
              </div>
            </div>
            {/* second card */}
            <div className="our-collection-cards flex-row-reverse">
              {/* image */}
              <div
                className="our-collection-card-images"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2200"
              >
                <img
                  src={image2}
                  alt="masala-tea"
                  className="tea-images tea-images-right"
                />
              </div>
              {/* text */}
              <div className="">
                <h3 className={"our-collection-card-text"}>Saburi Mirch</h3>
                <button className="explore-more-button">Explore More</button>
              </div>
            </div>
            {/* third card */}
            <div className="our-collection-cards">
              {/* image */}
              <div
                className="our-collection-card-images"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2800"
              >
                <img
                  src={image3}
                  alt="masala-tea"
                  className="tea-images tea-images-left"
                />
              </div>
              {/* text */}
              <div className="">
                <h3 className={"our-collection-card-text"}>Saburi Chunks</h3>
                <button className="explore-more-button">Explore More</button>
              </div>
            </div>
          </div>

          {/* right side div */}
          <sapn className="right-side-our-product-div"></sapn>
          {/* right side div */}
          <sapn className="left-side-our-product-div"></sapn>
        </div>
      </div>
    </>
  );
}

export default Ourcollection;
