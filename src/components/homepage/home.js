import React from "react";
import "./home.css";

import Background from "../../assets/backg.jpg";
import Networking from "../../assets/network-2.png";

function home() {
  return (
    <div className="homepage">
      <div className="homenav">
        <div className="lefthomenav">
          <h3>Convene.</h3>
        </div>
        <div className="righthomenav">
          <ul>
            <li>Our Story</li>
            <li>Sign In</li>
            <li>Get started</li>
          </ul>
        </div>
      </div>
      <section className="homebody">
        <div className="backg">
          <img className="background" src={Background} alt="backg" />
          <div className="textcontainer">
            <h2>Make Group for Team Work!</h2>
          </div>
          <div className="imagecontainer">
            <img className="foreground" src={Networking} alt="network" />
          </div>
          <div className="imagecontainer2">
            <img className="foreground2" src={Networking} alt="network2" />
          </div>
          <div className="imagecontainer3">
            <img className="foreground3" src={Networking} alt="network3" />
          </div>
          <div className="imagecontainer4">
            <img className="foreground4" src={Networking} alt="network4" />
          </div>
        </div>
      </section>
      {/*<div className="homebody">
        <div className="backg">
            <img src={Background} alt="backg"/>
        </div>
        <div className="lefthomebody">
          <h2>Make Group for Team Work.</h2>
        </div>
        <div className="righthomebody">
          <img src={Networking} alt="networking" />
        </div>
  </div>*/}
    </div>
  );
}

export default home;
