import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_LOCATION, QUERY_ITEMS } from "../utils/queries";
import ItemCard from "../components/UserList/ItemCard";

const Rentals = () => {
  const { location } = useParams();

  const { data, loading } = useQuery(
    location ? QUERY_ITEMS_BY_LOCATION : QUERY_ITEMS,
    { variables: { location } }
  );

  const items = data?.items || data?.items_by_location || [];

  // console.log(loading)
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <main>
        <h2>Yay! This works, rentals page islinked.</h2>
        <div className="container">
          <div className="row">
            {items.map((item) => (
              <ItemCard {...item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Rentals;
