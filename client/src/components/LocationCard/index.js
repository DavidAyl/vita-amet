import React from "react";
import { Link } from "react-router-dom";

const LocationCard = ({ location }) => {
  return (
    <>
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
            <p className="card-text">Explore items</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LocationCard;
