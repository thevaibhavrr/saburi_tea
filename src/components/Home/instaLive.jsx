import "../../style/instaLive.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TextBootomIcon from "../../images/Shape.png";
import InstaImage3 from "../../images/insta_3.jpg"
import InstaImage4 from "../../images/InstaImage_2.jpg"

export default function InstaLive() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = () => {
    if (swiperRef) {
      setActiveIndex(swiperRef.activeIndex);
    }
  };

  const s5= "https://scontent.cdninstagram.com/v/t39.30808-6/423240295_859814299488201_5478663236070619792_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=dCv6hYmbFc4AX9x4P9y&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5MjE3MzgwNDgwNDA4MjcxOQ%3D%3D.2-ccb7-5&oh=00_AfAZol5Sy0ndm2HyfKE-5ydHRX9PYXpiz_wZVSvbelj8pQ&oe=65CAA303&_nc_sid=10d13b"
  const s4 = "https://scontent.cdninstagram.com/v/t39.30808-6/425504385_864786115657686_5451331287171049383_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=McgCpWAFRPkAX_zHrkD&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5NzMwMjEzOTc0NjkwNDEzMw%3D%3D.2-ccb7-5&oh=00_AfAHcK_xRvRRM_RzNqHg9b3YKL3eowpxKs7ijwZ73zq3Ug&oe=65C9C305&_nc_sid=10d13b"
  const s1 =
    "https://scontent.cdninstagram.com/v/t39.30808-6/426519309_866156158854015_6802541905004229679_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=GQbnScsLyWYAX_MDMm8&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI5ODcwMjQ4NzA4Mjk1MjUzOA%3D%3D.2-ccb7-5&oh=00_AfAq14N4aNK1VjOhvOmnoZCg0jMohgliEi6RA5tXl0h6Tg&oe=65CAF070&_nc_sid=10d13b";
  const images = [s4,s5,InstaImage3,InstaImage4,s4,s5, s1, InstaImage3,InstaImage4];

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
          <h3
            className="heading-text"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            Inst Live Feeds
          </h3>
          <div
            className="text-center"
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <img
              src={TextBootomIcon}
              alt="style"
              srcset=""
              className="text-icon-bottom"
            />
          </div>
          <div className="our-product-slider-start ">
            <Swiper
              onSwiper={setSwiperRef}
              onSlideChange={handleSlideChange}
              slidesPerView={2}
              centeredSlides={true}
              spaceBetween={30}
              initialSlide={2}
              pagination={{
                type: "fraction",
              }}
              //   navigation={false}
              //   modules={[Navigation]}
              className="mySwiper mySwiper-for-instagram"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}
                // data-aos="fade-down"
                // data-aos-offset="400"
                // data-aos-delay="400"
                // data-aos-duration="1000"
                // data-aos-anchor-placement="top-center"
                >
                  <img
                    src={image}
                    alt=""
                    style={{
                      transform: `scale(${activeIndex === index ? 1 : 0.8})`,
                      transition: "transform 0.3s ease-in-out",
                    }}
                    className="slider_images"

                    // data-aos="fade-down"
                    // data-aos-offset="100"
                    // data-aos-delay="400"
                    // data-aos-duration="1000"
                    // data-aos-anchor-placement="top-center"
                  />
                  {/* <iframe src='https://widgets.sociablekit.com/instagram-hashtag-feed/iframe/25355350' frameborder='0' width='100%' height='1000'></iframe> */}
                </SwiperSlide>
              ))}
            </Swiper>
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
      {/* <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/CApEgmblFLP/embed/captioned/?cr=1&amp;v=14&amp;wp=326&amp;rd=http%3A%2F%2Flocalhost&amp;rp=%2Fmadhvik%2F#%7B%22ci%22%3A0%2C%22os%22%3A1082.6999999999534%2C%22ls%22%3A38.39999999990687%2C%22le%22%3A364.30000000004657%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="300" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" ></iframe> */}
    </>
  );
}
