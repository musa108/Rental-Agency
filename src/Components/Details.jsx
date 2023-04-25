import React from "react";
import detailsImage from "/src/images/details-image.png";
import dollar from "/src/images/money-dollar-circle-line 1.png";
import community from "/src/images/community-line 1.png";
import stackline from "/src/images/stack-line 1.png";
import plantline from "/src/images/plant-line.png";
import sheild from "/src/images/shield-star-line 1.png";
import eyeline from "/src/images/eye-2-line 1.png";

const Details = () => {
  return (
    <section className="details">
      <h1 className="Heading">Minimum Living Cost Takes Care Of Everything</h1>
      < hr/>
      <div className="detail-section">
        <img src={detailsImage} alt="" />
        <div className="house-detials">
          <div className="dollar-section">
            <img src={dollar} alt="" />
            <p>Pay as Little as possible!</p>
          </div>
          <div className="community-section">
            <img src={community} alt="" />
            <p>Enjoy wisdom of community!</p>
          </div>
          <div className="stackline-section">
            <img src={stackline} alt="" />
            <p>Let's somebody else take care of Landlord!</p>
          </div>
          <div className="plantline-section">
            <img src={plantline} alt="" />
            <p>Enjoy peaceful Environment!</p>
          </div>
          <div className="sheildline-section">
            <img src={sheild} alt="" />
            <p>Stay Safe! Save Money!</p>
          </div>
          <div className="eyeline-section">
            <img src={eyeline} alt="" />
            <p>Pay for what you use !</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
