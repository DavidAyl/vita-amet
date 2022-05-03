import React from 'react';
import LocationCards from '../components/LocationCards';


const About = () => {


  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row mx-5">
            <div className="col-12 text-center">
              <h2>About Us</h2>
              <p>
              Here at Vita Amet we are a company that values the excitement and adventure of any activity you may be partaking in. Our goal is to provide a painless, smooth, renting service to meet any of your activity needs. Our renting service includes a wide variety of activewear, outdoor activity equipment, and other useful equipment and tools that fit your activity needs. As a company we value all our customers and do our best to put the customer's needs first. 
              </p>
            </div>
          </div>
        <LocationCards />
        </div>
      </main>


    </>


  );
};

export default About;
