import React from "react";
import { Link } from "react-router-dom";
import FirstBackground from "../img/FirstBackground.jpg";
import SecondBackground from "../img/SecondBackground.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${FirstBackground})` }}>
        <div className="headerContainer">
          <h1> Curious to see what you get when you combine </h1>
          <p> Luxury & AI & Robotics </p>
        </div>
        

      </div>
      {/* Second image */}
      <div className="home2" style={{ backgroundImage: `url(${SecondBackground})` }}>
        <div className="headerContainer">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1> We present to you </h1>
          <p> Epsilon </p>
          <p> The first Luxury AI powered assistance Bot </p>
          <br/>
          <br/>
          <br/>
          <br/>

          <Link to="/market">
            <button> Preorder Now </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
