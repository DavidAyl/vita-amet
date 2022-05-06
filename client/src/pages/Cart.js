import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
// import ItemCard from "../components/ItemCard/ItemCard";
import CartItem from "../components/CartItem";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  //const { data } = useQuery(QUERY_CART);
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  //const items = data?.cart.items || [];

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const itemsIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        itemsIds.push(item._id);
      }
    });
    console.log(itemsIds);

    getCheckout({
      variables: { items: itemsIds },
    });
  }

  // console.log(loading)
  //if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {state.cart.length ? (
              <div>
                {state.cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
                <div className="flex-row space-between">
                  <strong>Total: ${calculateTotal()}</strong>

                  {Auth.loggedIn() ? (
                    <button onClick={submitCheckout}>Checkout</button>
                  ) : (
                    <span>(log in to check out)</span>
                  )}
                </div>
              </div>
            ) : (
              <h3>You haven't added anything to your cart yet!</h3>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
