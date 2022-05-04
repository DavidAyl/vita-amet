import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LOCATION } from "../utils/queries";
import LocationCard from "../components/LocationCard/index";

const Locations = () => {
  const { data } = useQuery(QUERY_LOCATION);
  const locations = data?.locations || [];

  return (
    <>
      <main>
        <h2>Yay! This works, location page is linked.</h2>
        <div className="container">
          <div className="row">
            {locations.map((location) => (
              <LocationCard {...location} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Locations;
