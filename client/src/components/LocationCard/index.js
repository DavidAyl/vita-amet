import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (location) => {
  return (
    <>
      <div className="row my-5 mx-5">
        <div className="col-md-12">
          <div className="row ">
            <Link
              className="nav-link col-md-4 text-secondary text-center"
              to={"/rentals/" + location.name}
            >
              <div className="card border-0">
                <img
                  className="card-img-top"
                  alt="Bootstrap Thumbnail Third"
                  src={location.image}
                />
                <div className="card-block">
                  <h4 className="card-title">{location.name}</h4>
                  <p className="card-text">HERE is THE CARRRD</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCard;
