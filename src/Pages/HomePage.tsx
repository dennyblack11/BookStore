import React from "react";
import Hero from "./Hero";
import Popular from "./Popular";
import CardScreen from "./CardScreen";
import Globalbutton from "./Globalbutton";
import Features from "./Features";
import CardText from "./CardText";

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <CardScreen/>
      <Globalbutton/>
      <Features/> 
      <CardText/>
    </div>
  );
};

export default HomePage;
