import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ADD_CART_ITEM } from "../../utils/mutations";
// Import Link component for all internal application hyperlinks
// import { Link } from 'react-router-dom';
const styles = {
  desc: {
    height: "120px",
    overflow: "scroll",
  },
};

const ItemCard = (item) => {
  const id = item._id;
  const [hasBeenAdded, setHasBeenAdded] = useState(false);
  const [addItemToCart, { error }] = useMutation(ADD_CART_ITEM);
  useEffect(() => {

  })
  const itemAdded = () => ({ display: hasBeenAdded ? "block" : "none" });
  const addToCart = async (event) => {

    console.log("addtocart");
    event.preventDefault();
    try {
      const { data } = await addItemToCart({ variables: { itemId: id } });
      setHasBeenAdded(true);
      console.log(data);
    } catch (err) {
      console.error(error);
    }
  };

  return (
    <div className="card col-lg-3 text-center mb-3 rounded border-0">
      {/* <img alt="Bootstrap Image Preview" src={item.image} /> */}
      <img
        className="img-fluid mt-3 rounded mx-3"
        src="http://via.placeholder.com/200"
        alt=""
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
          <strong>Yay!</strong> Your object was added to cart!
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
