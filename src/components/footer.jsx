import React from "react";
import "../style/footer.css";
import Icon from "../images/S-logo.png";
import socialMedia from "../images/social media.png";

function Footer() {
  return (
    <>
      <div className="main-footer-div">
        {/* content */}
        <div className="footer-content-div">
          {/* icons and social media */}
          <div className="icons-social-media-main-div">
            {/* main logo */}
            <div>
              <img src={Icon} alt="logo" className="footer-icon-logo" />
            </div>
            {/* social media */}
            <div>
              <img
                src={socialMedia}
                alt="logo"
                className="footer-icon-social-media"
              />
            </div>
          </div>
          {/* company details and links */}
          <div className="company-details-links-main-div">
            {/* about */}
            <div>
              <ul
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h5>About</h5>
                <li>History</li>
                <li>Our Team</li>
                <li>Brand Guidelines</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            {/* service */}
            <div>
              <ul
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h5>Service</h5>
                <li>How to Order</li>
                <li>Order Status</li>
                <li>Promo</li>
                <li>Payment Method</li>
              </ul>
            </div>
            {/* others */}
            <div>
              <ul
              //  data-aos="fade-right"
              //  data-aos-offset="200"
              //  data-aos-delay="1300"
              //  data-aos-duration="1800"
              //  data-aos-easing="ease-in-out"
              >
                <h5> Others</h5>
                <li>Contact Us</li>
                <li>Help</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="designed-details">
          <div>Designed by Pitamaas Pvt.Ltd</div>
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className=" m-1 bi bi-c-circle"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
            </svg>
            2024 by Saburi Chai
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
