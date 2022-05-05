// Node Modules
import React from 'react';
// import { useQuery } from '@apollo/client';
// Utilities
// import Auth from '../utils/auth';
// import { QUERY_USERS } from '../utils/queries';
// Components
// import UserList from '../components/UserList';
import { FaLocationArrow, FaRegCheckCircle, FaShoppingCart } from 'react-icons/fa';
import LocationCards from '../components/LocationCards';

import { Link } from 'react-router-dom';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  // const users = data?.users || [];

  // const renderUserList = () => {
  //   if (loading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return <UserList users={users} title="List of Users" />
  //   }
  // }

  // const renderUsername = () => {
  //   if (!Auth.loggedIn()) return null;
  //   return Auth.getProfile().data.username;
  // }

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row mx-5">
            {/* jumbotron */}
            <div className="col-md-6">
              <h2>
                For those who love adventure
              </h2>
              <p >
                Vita Amet is focused on those who love adventure. 
              </p>
              
              <p>Through our rental services you will be able to enjoy outdoor activities without the cost of purchasing equipment.</p>
              <Link to="/Location">
                <button type="button" className="btn btn-success mb-5">
                  Locations
                </button>
              </Link>
            </div>


            <div className="col-md-6">
              <img className="card-img-top" alt="Bootstrap Thumbnail First" src="https://grahamcreekpreserve.org/wp-content/uploads/2015/08/walkingbridgeside-600x200_c.jpg" />
            </div>
          </div>


          {/* 3 rows for location, rentals, checkout */}
          <div className="row my-5 mx-5">
            <div className="col-md-12">
              <div className="row">

                <Link
                  className="nav-link col-md-4 text-center text-secondary"
                  to="/Location">
                  <div className="card border-0">
                    <p className='text-center fs-1 text-secondary'>
                      <FaLocationArrow /></p>
                    <div className="card-block">
                      <h4 className="card-title">
                        Pick a Location
                      </h4>
                      <p className="card-text mx-3">
                        With our percisely placed rental locations, seamlessly rent equipment near you. Just select a location to get started.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  className="nav-link col-md-4 text-center text-secondary"
                  to="/Rentals"
                >
                  <div className="card border-0">
                    <p className='text-center fs-1 text-secondary'>
                      <FaRegCheckCircle /></p>

                    <div className="card-block">
                      <h4 className="card-title">
                        Select your Rentals
                      </h4>
                      <p className="card-text mx-3">
                        With our large selection of equipment, you can find anything you'll need on your adventure.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  className="nav-link col-md-4 text-center text-secondary"
                  to="/Cart"
                >
                  <div className="card border-0">
                    <p className='text-center fs-1 text-secondary'>
                      < FaShoppingCart /></p>


                    <div className="card-block">
                      <h4 className="card-title">
                        Checkout
                      </h4>
                      <p className="card-text mx-3">
                        Select a payment method that fits you best, we offer a 100% satisfaction guarantee. After payment, you can finally start your journey.
                      </p>
                    </div>
                  </div>
                </Link>

              </div>
            </div>
          </div>

          {/* Quotes for business */}
          <div className="row my-5 mx-5">
            <div className="col-md-6">
              <img className="card-img-top" alt="Bootstrap Thumbnail First" src="https://images.discerningassets.com/image/upload/c_limit,h_600,w_600/v1644186747/Hawaii-20220102-14190_alqzul.jpg" />
            </div>
            <div className="col-md-6">

              <blockquote className="blockquote">
                <p className="mb-0 text-center">
                  "Vita Amet always has what I need, where I need it. There truly is no better experience."
                </p>
                <footer className="blockquote-footer my-1 text-center">
                  Drew Peacock in <cite>Spooner Times</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          {/* 3 Locations */}
          <LocationCards />

        </div>
      </main>
{/* 
      <div>
        {renderUsername()}
      </div>
      <div>
        {renderUserList()}
      </div> */}

    </>

  );
};

export default Home;
