import React from 'react';
// Import Link component for all internal application hyperlinks
// import { Link } from 'react-router-dom';
const styles = {
  desc: {
    height: "120px",
    overflow: "scroll"
  }
}


const ItemCard = (item) => {
  return (
    

    <div className="card col-lg-3 text-center mb-3 rounded border-0">
          {/* <img alt="Bootstrap Image Preview" src={item.image} /> */}
          <img className="img-fluid mt-3 rounded mx-3" src='http://via.placeholder.com/200' alt=''></img>
          <h4 className="text-uppercase fs-5 mt-4">{item.name}</h4>
        <div className=' my-2 px-2'>
          <p className='text-success fw-bold px-1'>${item.price}</p>
        <div className="" style={styles.desc}><p>{item.description}</p></div>
        </div>

        </div>
  )

};

export default ItemCard;
