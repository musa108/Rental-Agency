import React from "react";
import bedroom from '/src/images/BedRoom.png'
import Spray from '/src/images/Spray.png'
import image2 from '/src/images/image 2.png'
import Friends from '/src/images/Friends.png'
const PropertyDescription = () => {
  return (
    <section className="Property--description">
      <div className="Description">
        <div className="bedroom">
          <img src={bedroom} alt="" />
          <p>Flexible Leases</p>
        </div>
        <div className="happiness">
          <img src={image2} alt="" />
          <p>7-Day Happiness Guaranteed</p>
        </div>
        <div className="spray">
          <img src={Spray} alt="" />
          <p>Monthly House Cleaning</p>
        </div>
        <div className="friends">
          <img src={Friends} alt="" />
          <p>Choose Your Own Roommate</p>
        </div>
      </div>
      <div className="description--text">
        <h1>Flexibility and options to suit your lifestyle.</h1>
        <p>
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>
        <button>Search Rooms</button>
      </div>
    </section>
  );
};

export default PropertyDescription;
