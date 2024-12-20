import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img width={100} height={100}
            src="https://template.getbazaar.io/assets/images/logo.svg"
            alt="Bazaar Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
            Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
          </p>
          <div className="footer-app-buttons">
            <div>
                <img style={{objectFit:'contain'}}  width={100} height={100}
                src="./src/assets/playstore.png"
                alt="Google Play"
                className="app-button"
                />
            </div>
            <div>
                <img style={{objectFit:'contain'}}  width={100} height={100}
                src="./src/assets/appstore.png"
                alt="App Store"
                className="app-button"
                />
            </div>
          </div>
        </div>

        <div className="footer-links-section">
          <div>
            <h3 className="footer-heading">About Us</h3>
            <ul className="footer-links">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Customer Care</h3>
            <ul className="footer-links">
              <li>Help Center</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact-info">
              <li>70 Washington Square South, New York, NY 10012, United States</li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
            <div className="footer-social-icons">
              <span className="social-icon">T</span>
              <span className="social-icon">F</span>
              <span className="social-icon">I</span>
              <span className="social-icon">Y</span>
              <span className="social-icon">G</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
