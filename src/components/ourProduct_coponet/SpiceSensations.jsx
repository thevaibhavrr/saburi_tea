import React from "react";
import "../../style/our-product/our-product/tales_of_tea.css";
// import image6 from "../../images/our-product-img/our-product-6.png";
import image7 from "../../images/our-product-img/our-product-7.png";
// import image8 from "../../images/our-product-img/our-product-8.png";
import image9 from "../../images/our-product-img/our-product-9.png";
import image10 from "../../images/our-product-img/our-product-10.png";
import left_clove from "../../images/our-product-img/clove_left.png";
import Right_clove from "../../images/our-product-img/clove_right.png";
import left_clove_2 from "../../images/our-product-img/clove2_left.png";
import Right_clove_2 from "../../images/our-product-img/clove2_right.png";

function SpiceSensations() {
  const AllImages = [
    {
      src: image9,
      message:
        "Exquisite teas, exceptional  teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Jeera",
    },
    {
      src: image9,
      message:
        "Exquisite teas, exceptional  teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Jeera",
    },
    {
      src: image7,
      message:
        "Exquisite teas, .Exquisite teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Elaichi ",
    },
    {
      src: image10,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Kali Mirch",
    },
    {
      src: image7,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Clove",
    },
    {
      src: image7,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Ajwain",
    },
  ];
  const images = [
    {
      src: image9,
      message:
        "Exquisite teas, exceptional  teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Jeera",
    },
  ];
  const images2 = [
    {
      src: image7,
      message:
        "Exquisite teas, .Exquisite teas, Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Elaichi ",
    },
    {
      src: image10,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Kali Mirch",
    },
  ];
  const images3 = [
    {
      src: image7,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Clove",
    },
    {
      src: image7,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Ajwain",
    },
  ];
  return (
    <>
      <div  >
        <div className="main_tales_of_tea_bg_image">
          {/* side images Leafs */}
          <div className=" d-flex justify-content-between">
            <div>
              <img src={left_clove} alt="Icon" className="corner_icon" srcset="" />
            </div>
            <div>
              <img src={Right_clove} alt="Icon" className="corner_icon" srcset="" />
            </div>
          </div>
          {/* side images Leafs end */}
          {/*1  */}
          <div className="card_for_small_screen">
            <div className="main_tales_text_section">
              {/* tales of tea text */}
              <div className="main_tales_of_tea_section">
                <h2 className="main_tales_of_tea_heading">Spice Sensations</h2>
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
                <img src={left_clove_2} alt="Icon" srcset="" />
              </div>
              <div>
                <img src={Right_clove_2} alt="Icon" srcset="" />
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
                <img src={left_clove_2} alt="Icon" srcset="" />
              </div>
              <div>
                <img src={Right_clove_2} alt="Icon" srcset="" />
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
                <h2 className="main_tales_of_tea_heading">Spice Sensations</h2>
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
              <img
                src={left_clove}
                alt="Icon"
                srcset=""
                className="rotate- corner_icon"
              />
            </div>
            <div>
              <img
                src={Right_clove}
                alt="Icon"
                srcset=""
                className="rotate-180 corner_icon"
              />
            </div>
          </div>
          {/* side images Leafs end */}
        </div>
      </div>
    </>
  );
}

export default SpiceSensations;
