import React from 'react';
import { Link } from 'react-router-dom';


const LocationCards = () => {
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
                <img className="card-img-top" alt="Bootstrap Thumbnail Third" src="https://images.fineartamerica.com/images/artworkimages/medium/3/idyllic-beach-az-jackson.jpg" />
                <div className="card-block">
                  <h4 className="card-title">
                    Beach
                  </h4>
                  <p className="card-text">
                    At the beach you can find items like Water Skiis, Jet Skiis, Goggles, Life Jackets, and more. All these will enhance the experience you normally get while relaxing at the beach.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              className='nav-link col-md-4 text-secondary text-center'
              to="">

              <div className="card border-0">
                <img className="card-img-top" alt="Bootstrap Thumbnail Third" src="https://panoramic.jason.photography/wp-content/uploads/2022/01/Aiguille-du-midi-chamonix-alps-mountains-france-600x200.jpg" />
                <div className="card-block">
                  <h4 className="card-title">
                    Mountains
                  </h4>
                  <p className="card-text">
                    In the Mountains you can find items like Snow Jackets, Snowboards, Skiis, Helmets, and more. All these will enhance the experience you normally get while staying in the mountains.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              className='nav-link col-md-4 text-secondary text-center'
              to="">

              <div className="card border-0">
                <img className="card-img-top" alt="Bootstrap Thumbnail Third" src="https://envato-shoebox-0.imgix.net/0223/e4c5-3c46-4bd3-99e5-9d8811c8a867/DSC03562-Edit-2.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=600&s=95cd70f24dba0099af0261dfb4be920b" />
                <div className="card-block">
                  <h4 className="card-title">
                    Forest
                  </h4>
                  <p className="card-text">
                    In the Forest you can find items like Trekking Poles, Compasses, Backpacks, Solar chargers, and more. All these will enhance the experience you normally get while hiking in the forest.
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
