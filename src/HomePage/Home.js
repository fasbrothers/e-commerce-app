import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Iphones from "../images/iphones-removebg-preview.png";

function Home() {
  return (
    <div className="home">
      <div className="main">
        <div className="side1">
          <h3>GET THE NEW IPHONE 12 PRO</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            odit!
          </p>
          <div className="buttons">
            <a href="#" className="button1">
              Buy now
              <ShoppingBasketIcon />
            </a>
            <a href="#" className="button2">
              With $599 with trade-in
            </a>
          </div>
        </div>
        <div className="side2">
          <img src={Iphones} alt="iphones" />
        </div>
      </div>
    </div>
  );
}

export default Home;
