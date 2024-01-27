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
      </div>
    </>
  );
}

export default Footer;
