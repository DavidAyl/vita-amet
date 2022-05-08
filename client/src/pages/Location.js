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
        <h1 className="card-text mx-3 mb-5 titles">location</h1>
        <div className="container">
          <p className="mb-5">At Vita Amet we offer a variety of different equipment for all environments. We are committed to making every adventure you have more enjoyable, by offering a large seleciton of equipment we will make sure you are always well equipped. Below you can find our most popular locations, by selecting a card below you can view the avalible rental equipment for that environment.</p>
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
