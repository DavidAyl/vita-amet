import React, { useEffect, useState } from "react";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";

const styles = {
  desc: {
    height: "120px",
    overflow: "scroll",
  },
  title: {
    height: "50px"
  },
  image: {
    height: "175px"
  }
};

const ItemCard = ({ item }) => {
  const [state, dispatch] = useStoreContext();
  const { _id } = item;
  const { cart } = state;

  const [hasBeenAdded, setHasBeenAdded] = useState(false);
  useEffect(() => { });
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
    <>
      <div className="col-md-3 text-center rounded card mb-5 pb-5">
        <img
          className="mt-3 rounded mx-3"
          src={`http://drive.google.com/uc?export=view&id=${item.image}`}
          alt={item.name}
          style={styles.image}

        ></img>
        <h4 className="text-uppercase fs-5 mt-4" style={styles.title}>{item.name}</h4>
        <div className="px-2">
          <p className="text-success fw-bold px-1">${item.price}</p>
          <div className="" style={styles.desc}>
            <p>{item.description}</p>
          </div>
          <button className="btn btn-success mt-3" onClick={addToCart}>
            Add to cart
          </button>

          <div className="alert alert-success alert-dismissible fade show mt-5" role="alert" style={itemAdded()} onClick={() => setHasBeenAdded(false)}>
            <p><strong>{item.name}</strong>  added to cart!</p>

            <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close">

            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
