import React from "react";
import "../../style/aboutus.css";
import image2 from "../../images/Red Shape.png";
import image3 from "../../images/Shweta Tiwari.png";
import TextBootomIcon from "../../images/Shape.png";
// import NewImage1 from "../images/New_1.jpg";
// import NewImage2 from "../images/new_about_2.png";
// import NewImage3 from "../images/new_3.jpg";

function AboutUs() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     requestAnimationFrame(() => {
  //       setScrollPosition(window.scrollY);
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const calculateZoom = () => {
  //   return `scale(${1 + scrollPosition * 0.0005})`;
  // };
  return (
    <>
      <div className="main-about-page">
        {/* content */}
        <div className="main-text-content-div-about" >
          <div className="second-text-content-div-about">
            <h3
              className="heading-text"
              data-aos="flip-up"
              data-aos-offset="200"
              data-aos-duration="500"
            >
              About US
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
                className="text-icon-bottom"
              />
            </div>
            <p
              className="about-use-paregraph"
              data-aos="zoom-in-down"
              data-aos-offset="200"
              data-aos-duration="700"
            >
             we are a team of experts working towards providing the best of products to the market. Our products are branded as ‘SABURI’ which is synonymous with perseverance to provide best quality forever.We make every effort to give you an experience of the highest standards.We have been striving with dedication to bring the best of blends to the customers. Our products are safe to consume, produced under the most hygienic conditions and are going to bring on the ultimate taste to your palette.Our production team is highly qualified and experienced to deliver excellent products,which are packed and sealed perfectly for you to savour.
            </p>
          </div>
        </div>
        <div className="about-us-images">
          <div className="about-us-red-angel-image">
            <img
              src={image2}
              alt="tea"
              srcset=""
              className="red-shape-about-us"
              data-aos="flip-left"
              data-aos-offset="200"
              data-aos-duration="1000"
            />
            <div
              className="about-us-girl-image-div"
              data-aos="zoom-out-down"
              data-aos-offset="200"
              data-aos-duration="1500"
            >
              <img src={image3} alt="tea" srcset="" className="girl-image " />
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center second-about-us-image">
        {/* <img src={NewImage2} alt="style" className="w-100 h-50 img-fluid" /> */}
        {/* our collection text */}
        {/* <div className="our-collection-about-page  text-center">
          <h3
            className="heading-text"
            data-aos="flip-up"
            data-aos-offset="200"
            //  data-aos-delay="200"
            data-aos-duration="1700"
          >
            Our Collection
          </h3>
          <div
            className="text-style-icon-div"
            data-aos="flip-down"
            data-aos-offset="200"
            //  data-aos-delay="200"
            data-aos-duration="1700"
          >
            <img
              src={TextBootomIcon}
              alt="style"
              className="text-icon-bottom our-collection-icons"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default AboutUs;
