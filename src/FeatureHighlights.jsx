import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faPiggyBank, faClock, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const FeatureHighlights = () => {
  return (
    <div className="features-container">
      {/* Fast Delivery */}
      <div className="feature">
        <FontAwesomeIcon icon={faTruckFast} className="featurehighlightsIcon" />
        <div>
          <h3>Fast Delivery</h3>
          <p>Start from $10</p>
        </div>
      </div>

      {/* Separator */}
      <div className="separator"></div>

      {/* Money Guarantee */}
      <div className="feature">
        <FontAwesomeIcon icon={faPiggyBank} className="featurehighlightsIcon" />
        <div>
          <h3>Money Guarantee</h3>
          <p>7 Days Back</p>
        </div>
      </div>

      {/* Separator */}
      <div className="separator"></div>

      {/* 365 Days */}
      <div className="feature">
        <FontAwesomeIcon icon={faClock} className="featurehighlightsIcon" />
        <div>
          <h3>365 Days</h3>
          <p>For free return</p>
        </div>
      </div>

      {/* Separator */}
      <div className="separator"></div>

      {/* Payment */}
      <div className="feature">
        <FontAwesomeIcon icon={faCreditCard} className="featurehighlightsIcon" />
        <div>
          <h3>Payment</h3>
          <p>Secure system</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;