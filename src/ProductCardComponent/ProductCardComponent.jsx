import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faHeart,faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import './ProductCardComponent.css'
export default function ProductCard({individualWidth}) {
  return (
    <div className="card" style={{width:`${individualWidth}%`}}>
    <div className="icons">
      <div className="icon"><FontAwesomeIcon icon={faEye} /></div>
      <div className="icon"><FontAwesomeIcon icon={faHeart} /></div>
    </div> 
    <img
      src="https://via.placeholder.com/200x200.png?text=Yellow+Sweater"
      alt="Yellow Casual Sweater"
    /> 
    <div className="product-details">
      <div className="product-title">Yellow Casual Sweater</div>
      <div className="product-price">$110.00</div>
      <div className="rating">
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={fasStar} />
        <FontAwesomeIcon icon={farStar} /> 
        <span style={{color:'grey',marginLeft:'5px'}}>(0)</span></div>
    </div> 
    <button className="add-to-cart">Add to Cart</button>
  </div>
  );
}