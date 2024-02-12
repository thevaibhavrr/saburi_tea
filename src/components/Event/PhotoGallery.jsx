import React from "react";
import "../../style/event/PhotoGallery.css";
import left_Leaf from "../../images/our-product-img/leaf_left.png";
import Right_Leaf from "../../images/our-product-img/leaf_right.png";
import FirstImg from "../../images/Photo_Gallery/1.png";
import secondImg from "../../images/Photo_Gallery/2.png";
import thirdImg from "../../images/Photo_Gallery/3.png";
import fourtImg from "../../images/Photo_Gallery/4.png";
import fiftImg from "../../images/Photo_Gallery/5.png";
import sixImg from "../../images/Photo_Gallery/6.png";
import sevenImg from "../../images/Photo_Gallery/7.png";
import eightImg from "../../images/Photo_Gallery/8.png";
import nineImg from "../../images/Photo_Gallery/9.png";
import tanImg from "../../images/Photo_Gallery/10.png";
import evlelvenImg from "../../images/Photo_Gallery/11.png";
import twowalvImg from "../../images/Photo_Gallery/12.png";
import thirtinImg from "../../images/Photo_Gallery/13.png";
function PhotoGallery() {
  const AllImages = [
    FirstImg,
    secondImg,
    thirdImg,
    fourtImg,
    fiftImg,
    sixImg,
    sevenImg,
    eightImg,
    nineImg,
    tanImg,
    evlelvenImg,
    twowalvImg,
    thirtinImg,
  ];
  return (
    <div>
      <div className="main_about_saburi_bg_image">
        {/* side images Leafs */}
        <div className=" d-flex justify-content-between">
          <div>
            <img src={left_Leaf} alt="Icon" className="" srcset="" />
          </div>

          <div>
            <img src={Right_Leaf} alt="Icon" className="" srcset="" />
          </div>
        </div>
        {/* side images Leafs end */}

        <div className=" text-center  ">
          <div>
            <div className="main_About_saburi_section">
              <h2 className="main_tales_of_tea_heading">Photo Gallery</h2>
            </div>
          </div>
        </div>

        {/* card  */}

        {/* 1  for small screen*/}
        <div className="photo_gallery_card_for_small_screen">
          {AllImages.map((data, index) => (
            <div key={index} className=" event_image_parent_div pb-2">
              <img src={data} alt="Event_image" className="event_images" />
            </div>
          ))}
        </div>

        {/* 2  for big screen*/}
        <div className="photo_gallery_card_for_big_screen">
          {/* top */}
          <div className="top_photo_gallery_section">
            {/* left */}
            <div className="top_photo_gallery_section_left">
              {/* big */}
              <div>
                <img
                  src={secondImg}
                  alt=""
                  srcset=""
                  className=" img-fluid second_image"
                />
              </div>
              {/* small */}
              <div className="d-flex gap-5 pt-3">
                <div>
                  <img src={fiftImg} alt="" srcset="" className="img-fluid" />
                </div>
                <div>
                  <img src={FirstImg} alt="" srcset="" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="top_photo_gallery_section_right">
              {/* top */}
              <div>
                <img
                  className="img-fluid top_photo_gallery_section_right_image"
                  src={fourtImg}
                  alt=""
                  srcset=""
                />
              </div>
              {/* bottom */}
              <div>
                <img
                  className="img-fluid top_photo_gallery_section_right_image"
                  src={thirdImg}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          {/* center */}
          <div className="d-flex gap-5 pt-4">
            {/* left side */}
            <div className="d-flex flex-column gap-4">
              <div>
                <img className="img-fluid" src={sixImg} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={eightImg} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={tanImg} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={thirtinImg} alt="" />
              </div>
            </div>
            {/* right */}
            <div className="d-flex flex-column gap-4">
              <div>
                <img className="img-fluid" src={sevenImg} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={twowalvImg} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={evlelvenImg} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={nineImg} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* side images Leafs */}
        <div className=" d-flex justify-content-between">
          <div>
            <img src={left_Leaf} alt="Icon" className="corner_icon" srcset="" />
          </div>
          <div>
            <img
              src={Right_Leaf}
              alt="Icon"
              className="corner_icon"
              srcset=""
            />
          </div>
        </div>
        {/* side images Leafs end */}
      </div>
    </div>
  );
}

export default PhotoGallery;
