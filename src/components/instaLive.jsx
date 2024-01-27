import "../style/instaLive.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TextBootomIcon from "../images/Shape.png";

export default function InstaLive() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = () => {
    if (swiperRef) {
      setActiveIndex(swiperRef.activeIndex);
    }
  };
  const s1 =
    "https://scontent.cdninstagram.com/v/t39.30808-6/412034277_829163182553313_7801524505859840587_n.jpg?stp=dst-jpg_e15&efg=e30&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=iQ486wmR7skAX_9lKUD&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfDjEOg4QCb6NdhdP0aVdowJuplUgpUHOuX3R2xlWJAkQw&oe=65B8441F&_nc_sid=10d13b";
  const s2 =
    "https://scontent.cdninstagram.com/v/t39.30808-6/415088773_842178384585126_7151393333812846566_n.jpg?stp=dst-jpg_e15_s750x750&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=A-DyAenBIXAAX-j-r_5&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfDQU8t7baCxy1cCcUVTyHD9YI-IAo9It-xlDMVYpV9A6A&oe=65B6DA81&_nc_sid=10d13b";
  const s3 =
    "https://scontent.cdninstagram.com/v/t39.30808-6/415054086_841351844667780_7938624697302372151_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=xxWz4tOuodkAX8zsH9Z&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfBe5e4PS7v0q4XO2lLaoigq-M8tw8xD5dBt34HC9xfMwg&oe=65B7A4F8&_nc_sid=10d13b";
  const images = [s1, s3, s2, s1, s3, s2];

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
            //  data-aos-delay="200"
            data-aos-duration="500"
          >
            Inst Live Feeds
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
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt=""
                    style={{
                      transform: `scale(${activeIndex === index ? 1 : 0.8})`,
                      transition: "transform 0.3s ease-in-out",
                    }}
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
