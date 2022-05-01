// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import { FaLocationArrow, FaRegCheckCircle, FaShoppingCart } from 'react-icons/fa';
import LocationCards from '../components/LocationCards';

import { Link } from 'react-router-dom';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <UserList users={users} title="List of Users" />
    }
  }

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row mx-5">
            {/* jumbotron */}
            <div className="col-md-6">
              <h2>
                For those who like fun:
              </h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
              </p>

              <button type="button" className="btn btn-success mb-5">
                Locations
              </button>
            </div>


            <div className="col-md-6">
              <img className="card-img-top" alt="Bootstrap Thumbnail First" src="https://www.layoutit.com/img/people-q-c-600-200-1.jpg" />
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
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
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
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
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
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
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
              <img className="card-img-top" alt="Bootstrap Thumbnail First" src="https://www.layoutit.com/img/people-q-c-600-200-1.jpg" />
            </div>
            <div className="col-md-6">

              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer my-1">
                  Someone famous in <cite>Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* 3 Locations */}
          <LocationCards />

        </div>
      </main>

      <div>
        {renderUsername()}
      </div>
      <div>
        {renderUserList()}
      </div>

    </>

  );
};

export default Home;
