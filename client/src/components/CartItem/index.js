// import { useMutation } from "@apollo/client";
import React from "react";
// import { ADD_CART_ITEM } from "../../utils/mutations";
// Import Link component for all internal application hyperlinks
// import { Link } from 'react-router-dom';
// const styles = {
//   desc: {
//     height: "120px",
//     overflow: "scroll",
//   },
// };

const CartItem = (item) => {
  // const id = item._id;

  // const [addItemToCart, { error }] = useMutation(ADD_CART_ITEM);

  // const addToCart = async (event) => {
  //   console.log("addtocart");
  //   event.preventDefault();
  //   try {
  //     const { data } = await addItemToCart({ variables: { itemId: id } });
  //     console.log(data);
  //   } catch (err) {
  //     console.error(error);
  //   }
  // };

  return (
<>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 card mb-5 pt-5 mx-3 px-2">
            <div class="row">
              <div class="col-lg-3">
                <img 
                alt={item.name} 
                src= "http://via.placeholder.com/200" />
                <div class="row">
                  <div class="col-lg-12">
                    <p>{item.name}</p>        
                    <p className="text-success fw-bold px-1">${item.price}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
              <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* <div className="card col-12 text-center mb-3 rounded border-0" > */}
      {/* <img alt="Bootstrap Image Preview" src={item.image} /> */}
      {/* <img
        className="img-fluid mt-3 rounded mx-3 col-3"
        src="http://via.placeholder.com/200"
        alt=""
        style={styles.desc}
      ></img>
      <h4 className="text-uppercase fs-5 mt-4">{item.name}</h4>
      <div className=" my-2 px-2">
        <p className="text-success fw-bold px-1">${item.price}</p>
      </div>
  
    </div> */}
    </>
  );
};

export default CartItem;
