import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CART } from "../utils/queries";
import ItemCard from "../components/ItemCard/ItemCard";

const Cart = () => {
  const { data } = useQuery(QUERY_CART);

  const items = data?.cart.items || [];

  // console.log(loading)
  //if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <main>
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

export default Cart;
