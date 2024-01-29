import "../style/live-event.css";
import React, {  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../images/Live event1.png";
import image2 from "../images/Live event2.png";

export default function LiveEvent() {
  const [swiperRef, setSwiperRef] = useState(null);

  const images = [
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
    image1,
    image2,
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
      <div className="live-event-main py-3 ">
        <div className="main-slider-div ">
          <div className="our-product-slider-start live-event-section ">
            <div className="mb-4">
              <h3 className="text-center text-uppercase our-product-text Live-event-text">
                Live events
              </h3>
            </div>
            <div>
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={2}
                centeredSlides={true}
                initialSlide={2}
                spaceBetween={20}
                pagination={{
                  type: "fraction",
                }}
                className="mySwiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt="images"
                      className="live-events-images"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-delay="400"
                      data-aos-duration="800"
                      data-aos-anchor-placement="top-center"
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
