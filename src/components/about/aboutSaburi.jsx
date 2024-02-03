import React from "react";
import "../../style/about/AboutSaburi.css";
import image1 from "../../images/our-product-img/our-product-1.png";
import image2 from "../../images/our-product-img/our-product-2.png";
import image3 from "../../images/our-product-img/our-product-3.png";
import image4 from "../../images/our-product-img/our-product-4.png";
import image5 from "../../images/our-product-img/our-product-5.png";
import left_Leaf from "../../images/our-product-img/leaf_left.png";
import Right_Leaf from "../../images/our-product-img/leaf_right.png";

function AboutSaburi() {
  const images = [
    {
      src: image1,
      message:
        "Exquisite teas, exceptional  teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Gold Chai",
    },
  ];
  const images2 = [
    {
      src: image2,
      message:
        "Exquisite teas, .Exquisite teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Elaichi Chai",
    },
    {
      src: image3,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Masala Chai",
    },
  ];
  const images3 = [
    {
      src: image4,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Premium Chai",
    },
    {
      src: image5,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Super Chai",
    },
  ];
  return (
    <>
      <div>
        <div className="main_tales_of_tea_bg_image">
          {/* side images Leafs */}
          <div className=" d-flex justify-content-between">
            <div>
              <img src={left_Leaf} alt="Icon" srcset="" />
            </div>
            <div>
              <img src={Right_Leaf} alt="Icon" srcset="" />
            </div>
          </div>
          {/* side images Leafs end */}

          <div className="main_tales_text_section">
            {/* tales of tea text */}
            <div className="main_About_saburi_section">
              <h2 className="main_tales_of_tea_heading">About Saburi</h2>
            </div>
              <div>

              <p className="About_saburi_section_message " >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas laudantium sed dolores libero, aliquam at, fugit illum
                amet possimus reiciendis commodi quae aliquid excepturi
                praesentium! Expedita iste ea sunt quas.
              </p>
              </div>

            {/* tales of tea card section */}
            <div className="main_tales_card_div mb-5">
              {/* card */}
              {images.map((data, index) => (
               <div className="about_saburi_card" >
                <div>Nature</div>
               </div>
              ))}
            </div>
          </div>

          {/* side images Leafs */}
          <div className=" d-flex justify-content-between">
            <div>
              <img src={left_Leaf} alt="Icon" srcset="" />
            </div>
            <div>
              <img src={Right_Leaf} alt="Icon" srcset="" />
            </div>
          </div>

          {/* tales of tea card section */}
          <div className="main_tales_card_div">
            {/* card */}
          
          </div>

          {/* side images Leafs */}
          <div className=" d-flex justify-content-between">
            <div>
              <img src={left_Leaf} alt="Icon" srcset="" />
            </div>
            <div>
              <img src={Right_Leaf} alt="Icon" srcset="" />
            </div>
          </div>
          {/* side images Leafs end */}

          {/* tales of tea card section */}
          <div className="main_tales_card_div">
            {/* card */}
       
          </div>

          {/* side images Leafs */}
          <div className=" d-flex justify-content-between">
            <div>
              <img src={left_Leaf} alt="Icon" srcset="" />
            </div>
            <div>
              <img src={Right_Leaf} alt="Icon" srcset="" />
            </div>
          </div>
          {/* side images Leafs end */}
        </div>
      </div>
    </>
  );
}

export default AboutSaburi;
