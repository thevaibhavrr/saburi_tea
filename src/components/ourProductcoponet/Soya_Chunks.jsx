import React from "react";
import "../../style/our-product/our-product/tales_of_tea.css";
import image11 from "../../images/our-product-img/chunks 1.png";
import SaburiMackroni from "../../images/our-product-img/Saburi Mackroni Rs 10-Front.png";
import left_chunk from "../../images/our-product-img/chunk_left.png";
import Right_chunk from "../../images/our-product-img/chunk_right.png";


function SoyaChunk() {
  const AllImages = [
    {
      src: image11,
      message:
        "Soya chunks are protein-rich, textured soybean products often used as a meat substitute. They absorb flavors are popular in vegetarian.",
      name: "Soya Chunks",
    },
    {
      src: SaburiMackroni,
      message:"Macaroni is a type of short, curved pasta that is typically used in dishes like macaroni. Its smooth texture makes it ideal for holding sauces and ingredients.",
      name: "Mackroni",
    }
  ];
  const images = [
    {
      src: image11,
      message:
        "Soya chunks are protein-rich, textured soybean products often used as a meat substitute. They absorb flavors are popular in vegetarian.",
      name: "Soya Chunks",
    },
    {
      src: SaburiMackroni,
      message:"Macaroni is a type of short, curved pasta that is typically used in dishes like macaroni. Its smooth texture makes it ideal for holding sauces and ingredients.",
      name: "Mackroni",
    }
  ];
  return (
    <>
      <div className="">
        <div className="main_tales_of_tea_bg_image ">
          {/* side images Clove */}
          <div className=" d-flex justify-content-between">
            <div>
              <img src={left_chunk} alt="Icon" srcset="" />
            </div>
            <div>
              <img src={Right_chunk} alt="Icon" srcset="" />
            </div>
          </div>
          {/* side images Clove end */}

          {/* 1 */}
          <div className="card_for_small_screen pb-2">
            <div className="main_tales_text_section">
              {/* tales of tea text */}
              <div className="main_tales_of_tea_section">
                <h2 className="main_tales_of_tea_heading">Mackroni</h2>
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
                          className="tales_of_tea_image Tales_second_heading"
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
          {/* 2 */}
          <div className="card_for_big_screen pb-2">
            <div className="main_tales_text_section">
              {/* tales of tea text */}
              <div className="main_tales_of_tea_section">
                <h2 className="main_tales_of_tea_heading">Soya Chunks</h2>
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
        </div>
      </div>
    </>
  );
}

export default SoyaChunk;
