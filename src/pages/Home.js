import React from "react";
import TestSkull from "../img/TestSkull.png"
import "../styles/Home.css";
import { Link } from "react-router-dom";


function Home() {
  
  return (
    <div className="background">
      <div className="home">
        <div className="title">
          <h1 className="MainText">
            What happens when you combine<br/>
            Luxury Ai and Robotics
          </h1>

          <h4>
            Find the perfect Home Assistant / Companion to fit their<br/>
            leaving room
          </h4>

          <Link className="exploreButton" to="/market"> Explore Now </Link>


        </div>

        <div className="interactiveModel">
          <img src={TestSkull} alt="Interactive 3d Model"/>

        </div>

      </div>
    </div>
  );
}

export default Home;
