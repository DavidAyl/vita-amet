import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <>


      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 my-4">
            <div class="row">
              <div class="col-md-6 flex-row space-between">
                <img
                  className="img-fluid " alt={item.name} src={"http://via.placeholder.com/300"} />
              </div>
              <div class="col-md-6">
                    <div className="flex-row space-between">
                  <p><strong className="text-success">{item.name}</strong></p>
                  <p>{item.description}</p>
                      <p><strong className="text-success">${item.price}</strong></p>
                      <span className=" border-0">
                        Qty:
                        <input
                          className=" col-3 mx-2"
                          type="number"
                          placeholder="1"
                          value={item.purchaseQuantity}
                          onChange={onChange}
                        />

                        <button
                          className="btn btn-warning mx-2"
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                  </span>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CartItem;
