import React from "react";
import logo from "/src/images/rental-logo.png";
import landingImage from "/src/images/landingImage.png";
import HeroMap from "/src/images/Hero-map.png";
import ArrowDown from "/src/images/Arrow-down.png";
import SearchBtn from "/src/images/search.png";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <img
          className="Landing--image"
          src={landingImage}
          alt="Landing-image"
        />
        <nav className="nav--bar">
          <img className="nav--logo" src={logo} alt="logo" />
          <ul className="nav--menu">
            <li>Home</li>
            <li>LandLord</li>
            <li>Tenants</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="hero">
          <h1 className="hero--text">
            The Most Affortable Place To Stay in the San Franciso Bay Area
          </h1>
          <div className="hero--box">
            <img className="hero--map" src={HeroMap} alt="" />
            <div className="hero--buttons">
              <div className="type">
                <p>All Type</p>
                <img className="arrow--down" src={ArrowDown} alt="" />
              </div>
              <div className="neighborhood">
                <p>Neighborhood</p>
                <img className="arrow--down" src={ArrowDown} alt="" /> 
              </div>
              <div className="Search">
               <img src={SearchBtn} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
