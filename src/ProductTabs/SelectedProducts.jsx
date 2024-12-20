import React, { useState } from "react";
import ProductCard from "../ProductCardComponent/ProductCardComponent";
import "./SelectedProducts.css";

const SelectedProducts = () => {
  const [activeTab, setActiveTab] = useState("New Arrivals");

  const tabs = ["New Arrivals", "Best Seller", "Most Popular", "View All"];

  return (
    <>
    <div className="selected-products d-flex w-95 mx-auto my-3">
      <div className="header">
        <h2>Selected Products</h2>
        <p className="m-0">All our new arrivals in an exclusive brand selection</p>
      </div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
    <div className="w-95 mx-auto d-flex justify-content-between">
              {[<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>,<ProductCard individualWidth={24}/>]}
    </div>
    </>
  );
};

export default SelectedProducts;
