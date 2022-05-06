import React, { useEffect, useState } from "react";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

// Import Link component for all internal application hyperlinks
// import { Link } from 'react-router-dom';
const styles = {
  desc: {
    height: "120px",
    overflow: "scroll",
  },
};

const ItemCard = ({ item }) => {
  const [state, dispatch] = useStoreContext();
  const { _id } = item;
  const { cart } = state;

  const [hasBeenAdded, setHasBeenAdded] = useState(false);
  useEffect(() => {});
  const itemAdded = () => ({ display: hasBeenAdded ? "block" : "none" });

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {  
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
      setHasBeenAdded(true);
    }
  };

  return (
    <div className="card col-lg-3 text-center mb-3 rounded border-0">
      {/* <img alt="Bootstrap Image Preview" src={item.image} /> */}
      <img
        className="img-fluid mt-3 rounded mx-3"
        src="http://via.placeholder.com/200"
        alt="item"
      ></img>
      <h4 className="text-uppercase fs-5 mt-4">{item.name}</h4>
      <div className=" my-2 px-2">
        <p className="text-success fw-bold px-1">${item.price}</p>
        <div className="" style={styles.desc}>
          <p>{item.description}</p>
        </div>
        <button className="btn btn-success mb-5" onClick={addToCart}>
          Add to cart
        </button>

        <div className="alert alert-success alert-dismissible fade show" role="alert" style={itemAdded()} onClick={() => setHasBeenAdded(false)}>
          <strong>Yay! {item.name}</strong> added to cart!
          <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close">
            {/* <span aria-hidden="true">&times;</span> */}

          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
