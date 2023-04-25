import React from "react";
import bed from "/src/images/Bed.svg"
import Shower from "/src/images/Shower.svg"
import Size from "/src/images/Size.svg"


const PropertyData = (props) => {
  return (
    <div className="Room">
      <img src={props.img} alt="Rooms" />
      <div className="Room-description">
        <h1>2578 Folsom street, san francisco, CA, 94110</h1>
        <p>Private Room</p>
        <h3>$1200/month</h3>
      </div>
      <div className="room-icon">
        <div className="bed">
          <img src={bed} alt=""/>
          <p>4</p>
        </div>
        <div className="shower">
        <img src={Shower} alt=""/>
        <p>2</p>
        </div>
        <div className="size">
        <img src={Size} alt=""/>
        <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyData;
