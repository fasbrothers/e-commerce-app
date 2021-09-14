import React from "react";
import SmartWatch from "../JSON/smartWatches.json";

function SmartWatches() {
  return (
    <div className="smartwatch">
      <div className="titles">
        <p>Explore Awesome Products</p>
        <h4>Recommended For You</h4>
      </div>
      <div className="cards">
        {SmartWatch.map((post) => {
          return (
            <div className="productCard" key={post.id}>
              <img src={post.img} alt="infoBrand" />
              <p>{post.name}</p>
              <div className="price">{post.price}</div>
            </div>
          );
        })}
      </div>
      <span className="btn-area">
        <a href="#" className="exploreBtn">
          Explore other products
        </a>
      </span>
    </div>
  );
}

export default SmartWatches;
