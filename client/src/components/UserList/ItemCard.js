import React from 'react';
// Import Link component for all internal application hyperlinks
// import { Link } from 'react-router-dom';

const ItemCard = (item) => {

  return (

        <div className="col-3">
          {/* <img alt="Bootstrap Image Preview" src={item.image} /> */}
        <div className='mx-5 my-2 text-center'>
          <img src='http://via.placeholder.com/200' alt=''></img>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>

        </div>
  )

};

export default ItemCard;
