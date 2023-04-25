import { Input } from "postcss";
import React from "react";

const PropertyAdditon = () => {
  return (
    <section className="Property--addition">
      <h1>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h1>
      <div className="input--section">
        <h3>Add A New Property</h3>
        <div className="input--selection">
          <div className="input--text">
            <label>Name<span>*</span></label> <br/>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="input--text">
            <label>Address<span>*</span></label> <br/>
            <input type="text" placeholder="Enter Address " />
          </div>

          <div className="input--text">
            <label>Unit Number<span>*</span></label> <br/>
            <input type="text" placeholder="Enter Unit" />
          </div>
          <div className="input--select">
            <label>City<span>*</span></label> <br/>
            <select>
              <option>Select City</option>
            </select>
          </div>
          <div className="input--select">
            <label>State<span>*</span></label> <br/>
            <select>
              <option>Select State</option>
            </select>
          </div>
          <div className="input--select">
            <label>Room Type<span>*</span></label> <br/>
            <select>
              <option>Select Room Type</option>
            </select>
          </div>
          <div className="input--text">
            <label>Price<span>*</span></label> <br/>
            <input type="text" placeholder="Enter Unit" />
          </div>
          <div className="input--select">
            <label>Room Type<span>*</span></label> <br/>
            <select>
              <option>Select Room Type</option>
            </select>
          </div>
        </div>
        <div className="input--description">
          <label>Description<span>*</span></label> <br/>
          <textarea placeholder="Enter Description" />
        </div>
        <div className="input--upload">
          <label>Upload Photos</label> <br/>
          <div className="upload--box">
             <h4>Drag your images here, or <span>browse</span></h4>
             <p>Supported:  JPG, JPEG, PNG</p>
          </div>
        </div>
        <button className="input--button">Add New Property</button>
      </div>
    </section>
  );
};

export default PropertyAdditon;
