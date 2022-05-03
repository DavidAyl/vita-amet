import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../utils/queries';
import ItemCard from '../components/ItemCard/ItemCard';

const Rentals = () => {
  const { data, loading } = useQuery(QUERY_ITEMS);
  const items = data?.items || [];

  console.log(items)
  // console.log(loading)
  if (loading) return <h1>Loading...</h1>
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {items.map(item => <ItemCard {...item} />)}
          </div>
        </div>
      </main>
    </>


  );
};

export default Rentals;
