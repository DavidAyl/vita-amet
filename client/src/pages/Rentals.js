import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_LOCATION, QUERY_ITEMS } from "../utils/queries";
import ItemCard from "../components/ItemCard/ItemCard";
import { SpinnerDotted } from 'spinners-react'

const Rentals = () => {

  const { location } = useParams();

  const { data, loading } = useQuery(
    location ? QUERY_ITEMS_BY_LOCATION : QUERY_ITEMS,
    { variables: { location } }
  );

  const items = data?.items || data?.items_by_location || [];

  if (loading) return <main className="text-center mt-5 pt-5"> <SpinnerDotted /> </main>
  return (
    <>
      <main>
        <div className="container">
          <h1 className="card-text mx-3 mb-5 titles text-center">rentals</h1>
          <div className="row">
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Rentals;
