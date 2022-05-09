// THIS CODE IS COPIED STRAIGHT FROM ANTHONY AS A TEST


import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';


function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  // const [clearCart] = useMutation(CLEAR_CART);
  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        // const { data } = await addOrder({ variables: { items: products } });
        // const productData = data.addOrder.items;

        // await clearCart()
        idbPromise('cart', 'clear');

      }

      setTimeout(() => {
        window.location.assign('/');
      }, 1000000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <main>
      <div className='container text-center mt-5'>
        <h1 className='text-success mb-5 text-lowercase titles'>... Your order was placed</h1>
        <h2 className='mb-5 text-success fw-light'>Now pack your bags and get ready for an <strong> adventure</strong>.</h2> 
        <p className='mt-5'>Please expect a phone call and email with confirmation to coordinate pickup and return for rental items.</p>
      </div>
    </main>
  );
}

export default Success;
