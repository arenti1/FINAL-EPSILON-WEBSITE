import React from "react";
import EpsilonLogo from "../img/EpsilonLogo.png";
import ProfileIcon from "../img/ProfileIcon.png"
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  return (
    <div className="menu">
      <Link to="/"> <img src={EpsilonLogo} alt="Epsilon Logo"/> </Link>
      <Link to="/store"> Store </Link>
      <Link to="/epsibot"> EpsiBot </Link>
      <Link to="/epsiplus"> Epsi+ </Link>
      <Link to="/accessories"> Accessories </Link>
      <Link to="/support"> Support </Link>
      <Link to="/profile"> <img src={ProfileIcon} width="50" height="30" alt="Profile Icon"/> </Link>
    </div>
  );
}

export default Navbar;
