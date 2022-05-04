import React from 'react';
import LocationCards from '../components/LocationCards';


const About = () => {


  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row mx-5">
            <div className="col-12 text-center">
              <img src='https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/27199/file-manager/adventure-tourism.jpg' alt='adventure'></img>
              <h2 className='py-3'>About Us</h2>
              <p>
              Here at Vita Amet we are a company that values the excitement and adventure of any activity you may be partaking in. Our goal is to provide a painless, smooth, renting service to meet any of your activity needs. Our renting service includes a wide variety of activewear, safety equipment, outdoor activity gear, and other useful and tools that fit your activity needs. As a company we value all our customers and do our best to put the customer's needs first. 
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
