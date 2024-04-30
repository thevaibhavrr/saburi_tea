import React from "react";
import "../../style/event/PhotoGallery.css";
import left_Leaf from "../../images/our-product-img/leaf_left.png";
import Right_Leaf from "../../images/our-product-img/leaf_right.png";
import FirstImg from "../../images/Photo_Gallery/1.png";
// import secondImg from "../../images/Photo_Gallery/2.png";
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
import fourtingImg from "../../images/Photo_Gallery/14.JPG";
import fiftenImg from "../../images/Photo_Gallery/15.JPG";
import sixtenImg from "../../images/Photo_Gallery/16.JPG";
import seventenImg from "../../images/Photo_Gallery/17.JPG";
import eightenImg from "../../images/Photo_Gallery/18.JPG";
import ninetenImg from "../../images/Photo_Gallery/19.JPG";
import twentImg from "../../images/Photo_Gallery/20.JPG";
import twentoneImg from "../../images/Photo_Gallery/21.JPG";
import twentwoImg from "../../images/Photo_Gallery/22.JPG";
import twentthreeImg from "../../images/Photo_Gallery/23.JPG";
import twentfourImg from "../../images/Photo_Gallery/24.JPG";
import twentfiveImg from "../../images/Photo_Gallery/25.JPG";
import twentysixImg from "../../images/Photo_Gallery/26.JPG";
import twentysevenImg from "../../images/Photo_Gallery/27.JPG";
import twentyeightImg from "../../images/Photo_Gallery/28.JPG";
import twentyNineImg from "../../images/Photo_Gallery/29.jpg";
import thirtyImg from "../../images/Photo_Gallery/30.jpg";
import thirtyoneImg from "../../images/Photo_Gallery/31.jpg";
import thirtytwoImg from "../../images/Photo_Gallery/32.jpg";
import thirtythreeImg from "../../images/Photo_Gallery/33.jpg";
import thirtyfourImg from "../../images/Photo_Gallery/34.jpg";
import thirtyfiveImg from "../../images/Photo_Gallery/35.jpg";
import thirtysixImg from "../../images/Photo_Gallery/36.jpg";
import thirtysevenImg from "../../images/Photo_Gallery/37.jpg";
import thirtyeightImg from "../../images/Photo_Gallery/38.jpg";
import thirtynineImg from "../../images/Photo_Gallery/39.jpg";


function PhotoGallery() {
  const AllImages = [
    FirstImg,
    thirtynineImg,
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
    fourtingImg
    ,
    fiftenImg,
    sixtenImg,
    seventenImg,
    eightenImg,
    ninetenImg,
    twentImg,
    twentoneImg,
    twentwoImg,
    twentthreeImg,
    twentfourImg,
    twentfiveImg,
    twentysixImg,
    twentysevenImg,
    twentyeightImg
    ,
  ];
  const delhiImages = [
    twentyNineImg,
    thirtyImg,
    thirtyoneImg,
    thirtytwoImg,
    thirtythreeImg,
    thirtyfourImg,
    thirtyfiveImg,
    thirtysixImg,
    thirtysevenImg,
    thirtyeightImg
    
  ]
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
              <img
                src={data}
                alt="Event_image"
                className="event_images"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              />
            </div>
          ))}
        </div>
        {/* 2  for small screen*/}
        <div className="photo_gallery_card_for_small_screen">
        <div className=" text-center mt-5  ">
          <div>
            <div className="main_About_saburi_section">
              <h2 className="main_tales_of_tea_heading">Aahar Exhibition Delhi 2024</h2>
            </div>
          </div>
        </div>
          {delhiImages.map((data, index) => (
            <div key={index} className=" event_image_parent_div pb-2">
              <img
                src={data}
                alt="Event_image"
                className="event_images"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              />
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
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
                className="text-center"
              >
                <img
                  src={thirtynineImg}
                  alt=""
                  srcset=""
                  className=" img-fluid second_image Event_image_self "
                  style={{ width: "60%" }}
                />
              </div>
              {/* small */}
              <div className="d-flex gap-3 pt-2">
                <div>
                  <img
                    src={fiftImg}
                    alt=""
                    srcset=""
                    className="img-fluid Event_image_self"
                  />
                </div>
                <div>
                  <img
                    src={FirstImg}
                    alt=""
                    srcset=""
                    className="img-fluid Event_image_self"
                  />
                </div>
              </div>
            </div>
            {/* right */}
            <div
              className="top_photo_gallery_section_right"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-duration="900"
            >
              {/* top */}
              <div>
                <img
                  className="img-fluid top_photo_gallery_section_right_image Event_image_self"
                  src={fourtImg}
                  alt=""
                  srcset=""
                />
              </div>
              {/* bottom */}
              <div>
                <img
                  className="img-fluid top_photo_gallery_section_right_image Event_image_self"
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
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={sixImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={eightImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={tanImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={thirtinImg}
                  alt=""
                />
              </div>
            </div>
            {/* right */}
            <div className="d-flex flex-column gap-4">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={sevenImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={twowalvImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={evlelvenImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={nineImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="photo_gallery_card_for_big_screen">
          {/* top */}
          <div className="top_photo_gallery_section">
            {/* left */}
            <div className="top_photo_gallery_section_left">
              {/* big */}
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  src={fourtingImg}
                  alt=""
                  srcset=""
                  className="img-fluid second_image Event_image_self"
                />
              </div>
              {/* small */}
              <div className="d-flex gap-3 pt-2">
                <div>
                  <img
                    src={fiftenImg}
                    alt=""
                    srcset=""
                    className="img-fluid Event_image_self"
                  />
                </div>
                <div>
                  <img
                    src={sixtenImg}
                    alt=""
                    srcset=""
                    className="img-fluid Event_image_self"
                  />
                </div>
              </div>
            </div>
            {/* right */}
            <div
              className="top_photo_gallery_section_right"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-duration="900"
            >
              {/* top */}
              <div>
                <img
                  className="img-fluid my-1 top_photo_gallery_section_right_image Event_image_self"
                  src={seventenImg}
                  alt=""
                  srcset=""
                />
              </div>
              {/* bottom */}
              <div>
                <img
                  className="img-fluid top_photo_gallery_section_right_image Event_image_self"
                  src={twentyeightImg}
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
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={sixtenImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={eightenImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={twentImg}
                  alt=""
                />
              </div>
            </div>
            {/* right */}
            <div className="d-flex flex-column gap-4">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={twentwoImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={twentthreeImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={twentfourImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={twentfiveImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* third */}

        <div className="photo_gallery_card_for_big_screen">
        
        <div className=" text-center  ">
          <div>
            <div className="main_About_saburi_section">
              <h2 className="main_tales_of_tea_heading">Aahar Exhibition Delhi 2024</h2>
            </div>
          </div>
        </div>
          {/* top */}
          <div className="top_photo_gallery_section">
            {/* left */}
            <div className="top_photo_gallery_section_left">
              {/* big */}
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  src={twentyNineImg}
                  alt=""
                  srcset=""
                  className="img-fluid second_image Event_image_self"
                />
              </div>
              {/* small */}
              <div className="d-flex gap-3 pt-2">
                <div>
                  <img
                    src={thirtyImg}
                    alt=""
                    srcset=""
                    className="img-fluid Event_image_self"
                  />
                </div>
                <div>
                  <img
                    src={ thirtyoneImg   }
                    alt=""
                    srcset=""
                    className="img-fluid Event_image_self"
                  />
                </div>
              </div>
            </div>
            {/* right */}
            <div
              className="top_photo_gallery_section_right"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-duration="900"
            >
              {/* top */}
              <div>
                <img
                  className="img-fluid my-1 top_photo_gallery_section_right_image Event_image_self"
                  src={thirtysevenImg  }
                  alt=""
                  srcset=""
                />
              </div>
              {/* bottom */}
              <div>
                <img
                  className="img-fluid top_photo_gallery_section_right_image Event_image_self"
                  src={thirtythreeImg}
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
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={thirtyfourImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={thirtyfiveImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={thirtysixImg}
                  alt=""
                />
              </div>
            </div>
            {/* right */}
            <div className="d-flex flex-column gap-4">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={thirtytwoImg}
                  alt=""
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="900"
              >
                <img
                  className="img-fluid Event_image_self"
                  src={thirtyeightImg}
                  alt=""
                />
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
