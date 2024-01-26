import React from "react";
import "../style/footer.css";
import Icon from "../images/icon.png";
import bgImage from "../images/footer image.png";
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
              <ul>
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
              <ul>
                <h5>Service</h5>
                <li>How to Order</li>
                <li>Order Status</li>
                <li>Promo</li>
                <li>Payment Method</li>
              </ul>
            </div>
            {/* others */}
            <div>
              <ul>
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
