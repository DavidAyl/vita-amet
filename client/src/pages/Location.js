import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LOCATION } from "../utils/queries";
import LocationCard from "../components/LocationCard/index";

const Locations = () => {
  const { data } = useQuery(QUERY_LOCATION);
  const locations = data?.locations || [];

  return (
    <>
      <main className="col-12 text-center ">
        <h2 className="card-text mx-3 mb-5">Location</h2>
        <div className="container">
          <div className="row mb-5">
            {locations.map((location) => (
              <LocationCard key={location._id} location={location} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Locations;
