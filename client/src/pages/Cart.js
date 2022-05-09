import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QUERY_CHECKOUT, QUERY_LOCATION } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "../components/CartItem";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { Link } from "react-router-dom";
import LocationCard from '../components/LocationCard'
import Logo from "../assets/logo192.png";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const styles = {
  base: {
    paddingTop: "250px"
  },
  logo: {
    height: "100px",
    width: "100px"
  }
}


const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const { data: locationData } = useQuery(QUERY_LOCATION);
  const locations = locationData?.locations || [];
  // console.log(locationData)

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
    // console.log(itemsIds);

    getCheckout({
      variables: { items: itemsIds },
    });
  }

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

                <div className="flex-row space-between text-end">
                  <strong>Total: ${calculateTotal()}</strong>
                  {Auth.loggedIn() ? (

                    <div>
                      <button
                        className="text-end btn btn-success text-white mb-5 px-4 my-3"
                        onClick={submitCheckout}>Checkout</button>
                    </div>
                  ) : (
                    <div className="flex-row space-between text-end">
                      <Link to="/Login">
                        <button
                          type="click"
                          className="text-end btn btn-success text-white mb-5  my-3 px-2">
                          Login to checkout
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="text-small text-center mb-5">
                  <p>*Items are priced per day, and will incur additional fees until returned. Items must be returned by closing hours each day. Contact us for specifics.</p>
                  <p className="text-small text-center">*After ordering, please expect an email confirmation providing steps for pickup and disclosure/signing agreements.</p>
                  <p className="text-small text-center">*All items must be returned in original condition and will be subject to inspection. Any damage to items will incur additional fees charged to the credit card on file. Thank you!</p>
                </div>

              </div>
              
            ) : (
              <>
                <div className="text-center">
                <img src={Logo} alt="Vita Amet" style={styles.logo} className="mb-5"/>
                  <h2 className="text-success fw-light mb-5">
                    <strong>Uh oh!</strong> You haven't added anything to your cart.
                  </h2>
                  <Link
                    to="/Rentals">
                    <button className="mb-5  px-5 mx-5 btn btn-success text-uppercase" >
                      Shop Rentals
                    </button>
                  </Link>
                  <div className="row" style={styles.base}>
                    {locations.map((location) => (
                      <LocationCard key={location._id} location={location} />
                    ))}
                  </div>
                  
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
