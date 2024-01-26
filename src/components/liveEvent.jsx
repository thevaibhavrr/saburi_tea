import "../style/live-event.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../images/SABURI ELAICHI 10RS.png";
import image2 from "../images/SABURI CLOVE 10RS.png";
import image3 from "../images/Saburi Ajwain 10 RS.png";
import TextBootomIcon from "../images/Shape.png";

// import { Pagination, Navigation } from "swiper/modules";

export default function LiveEvent() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = () => {
    if (swiperRef) {
      setActiveIndex(swiperRef.activeIndex);
    }
  };
  const s1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnLS6TCGxy6w8J_Jr8tjIsPjrhvwni7UlNmYilbouqk0Zn-vy7HnVukzGSWdgCP_1jy0&usqp=CAU";
  const s2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlthTZSnpupyK9pX0qxnzAwsEbqmZQj0NVuxSILOHuVeGMGIiTSVI3yoNZ5m7nJTl-gh0&usqp=CAU";

  const images = [s1, s2, s1, s2, s1, s2, s1, s2];

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
      <div className="live-event-main py-3 ">
        <div className="main-slider-div ">
          <div className="our-product-slider-start live-event-section ">
            <div className="mb-4">
              <h3 className="text-center text-uppercase our-product-text">
                Live events
              </h3>
            </div>
            <div>
              <Swiper
                onSwiper={setSwiperRef}
                onSlideChange={handleSlideChange}
                slidesPerView={2}
                centeredSlides={true}
                initialSlide={2}
                spaceBetween={20}
                pagination={{
                  type: "fraction",
                }}
                //   navigation={false}
                //   modules={[Navigation]}
                className="mySwiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt="images"
                      // style={{
                      //   transform: `scale(${activeIndex === index ? 1 : 0.8})`,
                      //   transition: "transform 0.3s ease-in-out",
                      // }}
                    />
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
                    className="prev-button-live-event"
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
                    className="next-button-live-event"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
