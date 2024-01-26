import React from "react";
import "../style/ourcollection.css";
import MasalaTea from "../images/Saburi-Super-Chai-4.png";
import Chunk from "../images/chunks.png";
function Ourcollection() {
  return (
    <>
      <div className="main-our-product-section">
        {/*  main div*/}
        <div className="main-second-our-product-div" >
          {/* left side */}
          <div className="main-card-div" >
            {/* first card */}
            <div className="our-collection-cards">
              {/* image */}
              <div className="our-collection-card-images">
                <img src={MasalaTea} alt="masala-tea" className="tea-images" />
              </div>
              {/* text */}
              <div>
                <h3 className="our-collection-card-text">Saburi Tea</h3>
                <button className="explore-more-button">Explore More</button>
              </div>
            </div>
            {/* second card */}
            <div className="our-collection-cards">
              {/* text */}
              <div>
                <h3 className="our-collection-card-text">Saburi Tea</h3>
                <button className="explore-more-button">Explore More</button>
              </div>
              {/* image */}
              <div className="our-collection-card-images">
                <img src={MasalaTea} alt="masala-tea" className="tea-images" />
              </div>
            </div>
            {/* third card */}
            <div className="our-collection-cards">
              {/* image */}
              <div className="our-collection-card-images">
                <img src={Chunk} alt="masala-tea" className="tea-images" />
              </div>
              {/* text */}
              <div>
                <h3 className="our-collection-card-text">Saburi Tea</h3>
                <button className="explore-more-button">Explore More</button>
              </div>
            </div>
          </div>

          {/* right side div */}
          <sapn className="right-side-our-product-div" >
          </sapn>
          {/* right side div */}
          <sapn className="left-side-our-product-div" >
          </sapn>
        </div>
      </div>
    </>
  );
}

export default Ourcollection;
