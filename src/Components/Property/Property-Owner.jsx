import React from "react";
import quote from "/src/images/quote.png";
import owner_image from "/src/images/owner-image.png";
import cover from "/src/images/cover.jpg";

const PropertyOwner = () => {
  return (
    <section className="Property-owner">
      <div className="Quote--section">
        <img className="quote" src={quote} alt="quote" />
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </h1>
        <div className="owner--section">
          <img src={owner_image} alt=""/>
          <div className="owner--details">
          <h3>Harry Wilson</h3>
          <p>Property Owner</p>
          </div>
        </div>
        <div className="circle">
            <div className="colored"></div>
            <div className="none-colored"></div>
            <div className="none-colored"></div>
        </div>
      </div>
      <div className="Video--section">
      <img src={cover} alt=''/>
      </div>
    </section>
  );
};

export default PropertyOwner;
