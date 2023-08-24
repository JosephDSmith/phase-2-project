import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);

  return (
    <div className="navWrapper">
      <div
        className="burger"
        id="burger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo">
        <Link to="/">My Bonsai Garden</Link>
      </div>

      <div className={`navigation ${isMenuOpen ? "show" : ""}`}>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/bonsaicollection"
        >
          Bonsai Collection
        </NavLink>
        <NavLink
          className={(navClass) => (navClass.isActive ? "active_link" : "")}
          to="/addbonsai"
        >
          Add a Bonsai
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
