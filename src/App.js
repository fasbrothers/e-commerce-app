import React from "react";
import CategoriesSec from "./HomePage/CategoriesSec";
import Home from "./HomePage/Home";
import Nav from "./HomePage/Nav";
import "./styles/main.scss";
import "./styles/responsive.scss";
import SmartWatches from "./Recommendation/SmartWatches";
import Advertisement from "./Ads/Advertisement";
import NewCollection from "./NewCollection/NewCollection";
import Trending from "./Trend/Trending";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <CategoriesSec />
      <Home />
      <SmartWatches />
      <Advertisement />
      <NewCollection />
      <Advertisement />
      <Trending />
      <Advertisement />
      <Footer />
    </div>
  );
}

export default App;
