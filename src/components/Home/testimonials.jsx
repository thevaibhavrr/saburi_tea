import "../../style/instaLive.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../../images/Testimonial.png";
import TextBootomIcon from "../../images/Shape.png";
import UserImage from "../../images/User Img.png";

export default function Testimonial() {
  const [swiperRef, setSwiperRef] = useState(null);
  // const [activeIndex, setActiveIndex] = useState(2);

  // const handleSlideChange = () => {
  //   if (swiperRef) {
  //     setActiveIndex(swiperRef.activeIndex);
  //   }
  // };

  // const images = [image1, image1, image1, image1, image1, image1];
  const images = [
    {
      src: image1,
      message:
        "Exquisite teas, exceptional flavors. Saburi elevates my tea experience. Quality, taste, and packaging, all perfect!",
      name: "Vaibhav",
    },
    {
      src: image1,
      message:
        "Spice up your life with Saburi. Exceptional flavors and quality. My dishes have never tasted this better!",
      name: "Abhishek",
    },
    {
      src: image1,
      message:
        "Soya Chunks by Saburi: My secret to protein-packed, delicious meals. The best addition to my kitchen pantry!",
      name: "Rahul",
    },
  ];

  const handlePrevClick = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  return (
    <>
      <div className="main-slider-section-start">
        <div className="main-slider-div">
          <h3 className="heading-text">Testimonials</h3>
          <div className="text-center">
            <img
              src={TextBootomIcon}
              alt="style"
              srcset=""
              className="text-icon-bottom"
            />
          </div>
          <div className="our-product-slider-start ">
            {/* big screen */}
            <div className="testimonail_for_big_screen" >
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={2.2}
              initialSlide={1}
              centeredSlides={true}
              spaceBetween={100}
              pagination={{
                type: "fraction",
              }}
              className="mySwiper"
            >
              {images.map((testimonial, index) => (
                <SwiperSlide key={index} style={{ position: "relative" }}>
                  <img
                    src={testimonial.src}
                    alt=""
                    className="testiminal_image "
                  />
                  <div className="testiminal_user_image_div">
                    <img
                      src={UserImage}
                      alt="user_image"
                      className="testiminal_user_image"
                    />
                    <div className="user_info">
                      <div className="w-100 user_info-message">
                        {testimonial.message}
                      </div>
                      <h6>{testimonial.name}</h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            {/* small screen */}
            <div className="testimonail_for_small_screen" >
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1.2}
              initialSlide={1}
              centeredSlides={true}
              spaceBetween={20}
              pagination={{
                type: "fraction",
              }}
              className="mySwiper"
            >
              {images.map((testimonial, index) => (
                <SwiperSlide key={index} style={{ position: "relative" }}>
                  <img
                    src={testimonial.src}
                    alt=""
                    className="testiminal_image "
                  />
                  <div className="testiminal_user_image_div">
                    <img
                      src={UserImage}
                      alt="user_image"
                      className="testiminal_user_image"
                    />
                    <div className="user_info">
                      <div className="w-100 user_info-message">
                        {testimonial.message}
                      </div>
                      <h6>{testimonial.name}</h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            {/* left */}
            <div className="prev-next-buttons">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                  onClick={handlePrevClick}
                  className="prev-button"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </div>

              {/* right */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                  onClick={handleNextClick}
                  className="next-button"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
