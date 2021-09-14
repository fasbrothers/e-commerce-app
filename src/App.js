import React from "react";
import CategoriesSec from "./HomePage/CategoriesSec";
import Home from "./HomePage/Home";
import Nav from "./HomePage/Nav";
import "./styles/main.scss";
import SmartWatches from "./Recommendation/SmartWatches";
import Advertisement from "./Ads/Advertisement";

function App() {
  return (
    <div>
      <Nav />
      <CategoriesSec />
      <Home />
      <SmartWatches />
      <Advertisement />
    </div>
  );
}

export default App;
