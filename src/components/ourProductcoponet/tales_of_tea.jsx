import React from "react";
import "../../style/our-product/our-product/tales_of_tea.css";
import image1 from "../../images/our-product-img/our-product-1.png";
import image2 from "../../images/our-product-img/our-product-2.png";
import image3 from "../../images/our-product-img/our-product-3.png";
import image4 from "../../images/our-product-img/our-product-4.png";
import image5 from "../../images/our-product-img/our-product-5.png";
import left_Leaf from "../../images/our-product-img/leaf_left.png";
import Right_Leaf from "../../images/our-product-img/leaf_right.png";

function Tales_of_tea() {
  const AllImages = [
    {
      src: image2,
      message:
        "Exquisite teas, .Exquisite teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Elaichi Chai",
    },
    {
      src: image1,
      message:
        "Exquisite teas, exceptional  teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Gold Chai",
    },
    {
      src: image5,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Masala Chai",
    },
    {
      src: image4,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Premium Chai",
    },
    {
      src: image3,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Super Chai",
    },
  ];
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
      src: image5,
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
      src: image3,
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
              <img src={left_Leaf} alt="Icon" className="corner_icon" srcset="" />
            </div>
            <div>
              <img src={Right_Leaf} alt="Icon" className="corner_icon" srcset="" />
            </div>
          </div>
          {/* side images Leafs end */}
          {/* 1 */}
          <div className="card_for_small_screen">
            <div className="main_tales_text_section">
              {/* tales of tea text */}
              <div className="main_tales_of_tea_section">
                <h2 className="main_tales_of_tea_heading">Tales of Tea</h2>
              </div>

              {/* tales of tea card section */}
              <div className="main_tales_card_div">
                {/* card */}
                {images.map((data, index) => (
                  <div
                    className="tales_of_tea_card"
                    key={index}
                    data-aos="flip-right"
                    data-aos-offset="200"
                    // data-aos-delay="1000"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                  >
                    <div className="tales_of_tea_card_text_data">
                      {/* card image */}
                      <div className="tales_of_tea_image_div">
                        <img
                          src={data.src}
                          alt="tea"
                          className="tales_of_tea_image"
                          data-aos="flip-left"
                          data-aos-offset="200"
                          // data-aos-delay="1300"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                        />
                      </div>
                      {/* card text */}
                      <div className="tales_of_tea_card_text">
                        {/* card heading */}
                        <div className=" text-center">
                          <h5 className=" text-white Tales_second_heading">
                            {data.name}
                          </h5>
                        </div>
                        {/* card paregraph */}
                        <div>
                          <p className="tales_of_tea_card_paregraph">
                            {data.message}
                          </p>
                        </div>
                      </div>
                    </div>
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
              {images2.map((data, index) => (
                <div
                  className="tales_of_tea_card"
                  key={index}
                  data-aos="flip-right"
                  data-aos-offset="200"
                  // data-aos-delay="1000"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                >
                  <div className="tales_of_tea_card_text_data">
                    {/* card image */}
                    <div className="tales_of_tea_image_div">
                      <img
                        src={data.src}
                        alt="tea"
                        className="tales_of_tea_image"
                        data-aos="flip-left"
                        data-aos-offset="200"
                        // data-aos-delay="1300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                      />
                    </div>
                    {/* card text */}
                    <div className="tales_of_tea_card_text">
                      {/* card heading */}
                      <div className=" text-center">
                        <h5 className=" text-white Tales_second_heading">
                          {data.name}
                        </h5>
                      </div>
                      {/* card paregraph */}
                      <div>
                        <p className="tales_of_tea_card_paregraph">
                          {data.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              {images3.map((data, index) => (
                <div
                  className="tales_of_tea_card"
                  key={index}
                  data-aos="flip-right"
                  data-aos-offset="200"
                  // data-aos-delay="1000"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                >
                  <div className="tales_of_tea_card_text_data">
                    {/* card image */}
                    <div className="tales_of_tea_image_div">
                      <img
                        src={data.src}
                        alt="tea"
                        className="tales_of_tea_image"
                        data-aos="flip-left"
                        data-aos-offset="200"
                        // data-aos-delay="1300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                      />
                    </div>
                    {/* card text */}
                    <div className="tales_of_tea_card_text">
                      {/* card heading */}
                      <div className=" text-center">
                        <h5 className=" text-white Tales_second_heading">
                          {data.name}
                        </h5>
                      </div>
                      {/* card paregraph */}
                      <div>
                        <p className="tales_of_tea_card_paregraph">
                          {data.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2 */}
          <div className="card_for_big_screen">
            <div className="main_tales_text_section">
              {/* tales of tea text */}
              <div className="main_tales_of_tea_section">
                <h2 className="main_tales_of_tea_heading">Tales of Tea</h2>
              </div>

              {/* tales of tea card section */}
              <div className="main_tales_card_div">
                {/* card */}
                {AllImages.map((data, index) => (
                  <div
                    className="tales_of_tea_card"
                    key={index}
                    data-aos="flip-right"
                    data-aos-offset="200"
                    // data-aos-delay="1000"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                  >
                    <div className="tales_of_tea_card_text_data">
                      {/* card image */}
                      <div className="tales_of_tea_image_div">
                        <img
                          src={data.src}
                          alt="tea"
                          className="tales_of_tea_image"
                          data-aos="flip-left"
                          data-aos-offset="200"
                          // data-aos-delay="1300"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                        />
                      </div>
                      {/* card text */}
                      <div className="tales_of_tea_card_text">
                        {/* card heading */}
                        <div className=" text-center">
                          <h5 className=" text-white Tales_second_heading">
                            {data.name}
                          </h5>
                        </div>
                        {/* card paregraph */}
                        <div>
                          <p className="tales_of_tea_card_paregraph">
                            {data.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* side images Leafs */}
          <div className=" d-flex justify-content-between">
            <div>
              <img src={left_Leaf} alt="Icon" className="corner_icon" srcset="" />
            </div>
            <div>
              <img src={Right_Leaf} alt="Icon" className="corner_icon" srcset="" />
            </div>
          </div>
          {/* side images Leafs end */}
        </div>
      </div>
    </>
  );
}

export default Tales_of_tea;
