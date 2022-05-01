import React from 'react';
import { Link } from 'react-router-dom';


const LocationCards= () => {
  return (
   <>
      {/* 3 Locations */}
      <div className="row my-5 mx-5">
        <div className="col-md-12">
          <div className="row ">
            <Link
              className='nav-link col-md-4 text-secondary text-center'
              to="">

              <div className="card border-0">
                <img className="card-img-top" alt="Bootstrap Thumbnail Third" src="https://www.layoutit.com/img/sports-q-c-600-200-1.jpg" />
                <div className="card-block">
                  <h4 className="card-title">
                    Location 1
                  </h4>
                  <p className="card-text">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              className='nav-link col-md-4 text-secondary text-center'
              to="">

              <div className="card border-0">
                <img className="card-img-top" alt="Bootstrap Thumbnail Third" src="https://www.layoutit.com/img/sports-q-c-600-200-1.jpg" />
                <div className="card-block">
                  <h4 className="card-title">
                    Location 2
                  </h4>
                  <p className="card-text">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              className='nav-link col-md-4 text-secondary text-center'
              to="">

              <div className="card border-0">
                <img className="card-img-top" alt="Bootstrap Thumbnail Third" src="https://www.layoutit.com/img/sports-q-c-600-200-1.jpg" />
                <div className="card-block">
                  <h4 className="card-title">
                    Location 3
                  </h4>
                  <p className="card-text">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>

                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
   </> 
  )
};

export default LocationCards;
