import React from 'react';
import PropertyData from './Property-Data';
import room_one from "/src/images/Room-one.png";
import room_two from "/src/images/Room-two.png";
import room_three from "/src/images/Room-three.png";
import room_four from "/src/images/Room-four.png";
import room_five from "/src/images/Room-five.png";
import room_six from "/src/images/Room-six.png";

const Property = () => {
    return (
        <section className='property'>
            <div className="property--list">
                  <div className="list--text">
                     <h1 className='Heading'>
                     List Of Properties
                     </h1>
                     <hr/>
                  </div>
                  <button>View All Property</button>
            </div>
            <div className="properties">
                <PropertyData
                img={room_one}
                />
                <PropertyData
                img={room_two}
                />
                <PropertyData
                img={room_three}
                />
                <PropertyData
                img={room_four}
                />
                <PropertyData
                img={room_five}
                />
                <PropertyData
                img={room_six}
                />
            </div>
        </section>
    );
}

export default Property;
