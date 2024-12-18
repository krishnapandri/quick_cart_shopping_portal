import React from "react";
import "./BlackFridayBanner.css";

const BlackFridayBanner = () => {
  return (
    <div className="black-friday-banner">
      {/* Left Section */}
      <div className="sale-text">
        <h2>BLACK FRIDAY SALE!</h2>
      </div>

      {/* Right Section */}
      <div className="promo-container">
        <div className="promo-text">
          <em>
            PAY ONLY FOR <strong>YOUR LOVING ELECTRONICS</strong>
          </em>
        </div>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
