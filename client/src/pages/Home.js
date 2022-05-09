

import React from 'react';

import { FaLocationArrow, FaRegCheckCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

import Hikers from "../assets/hikers.jpg"
import Kayak from "../assets/kayak.jpg"

const styles = {
  h2: {
    letterSpacing: "2px",
  }
}

const Home = () => {

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row mx-4 pb-5">
            {/* heading jumbo */}
            <div className="col-lg-5">
              <h2 className="fw-normal fs-4 mt-2" style={styles.h2}>For those who seek adventure</h2>
              <span className='mb-3'>Vita Amet is focused on those who love adventure.</span>
              <br />
              <span className='me-5'>
                Through our rental services you will be able to enjoy outdoor
                activities without the cost of purchasing equipment.
              </span>
              <div className='text-start mt-3'>
                <Link to="/Location">
                  <button type="button" className="btn btn-warning mb-5 px-4 py-2 my-2 fs-5">
                    Begin your Adventure
                  </button>
                </Link>
                <blockquote className="blockquote text-end">
                  <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                  <p className="mb-0">
                    "Vita Amet always has what I need, where I need it. There
                    truly is no better experience."
                  </p>
                  <footer className="blockquote-footer my-1">
                    Chad Johnson in <cite>Outdoor Living</cite>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="col-lg-1">
              {/* styling spacing */}
            </div>

            <div className="col-lg-6">

              <img className="img-fluid" alt="Creek" src={Hikers} />

            </div>
          </div>

          {/* 3 rows for location, rentals, checkout */}
          <div className="row my-5 mx-4 bg-light mb-5 py-5">
            <div className="col-md-12 bg-light">
              <div className="row">
                <Link
                  className="nav-link col-md-4 text-center text-dark "
                  to="/Location">
                  <div className="card border-0 bg-light">
                    <p className='text-center fs-1 text-dark'>
                      <FaLocationArrow /></p>

                    <div className="card-block">
                      <h3 className="card-title fs-4">Pick a Location</h3>
                      <p className="card-text mx-3">
                        With our percisely placed rental locations, seamlessly
                        rent equipment near you. Just select a location to get
                        started.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  className="nav-link col-md-4 text-center text-dark"
                  to="/Rentals"
                >

                  <div className="card border-0 bg-light">
                    <p className='text-center fs-1 text-dark'>
                      <FaRegCheckCircle /></p>

                    <div className="card-block">
                      <h3 className="card-title fs-4">
                        Select your Rentals
                      </h3>
                      <p className="card-text mx-3 ">
                        With our large selection of equipment, you can find anything you'll need on your adventure.

                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  className="nav-link col-md-4 text-center text-dark"
                  to="/Cart">
                  <div className="card border-0 bg-light">
                    <p className='text-center fs-1 text-dark'>
                      < FaShoppingCart /></p>
                    <div className="card-block">
                      <h3 className="card-title fs-4">Checkout</h3>
                      <p className="card-text mx-3">
                        Select a payment method that fits you best, we offer a
                        100% satisfaction guarantee. After payment, you can
                        finally start your journey.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Quotes for business */}
          <div className="row my-5 mx-4 py-5">
            <div className="col-md-6">
              <img className="card-img-top img-fluid" alt="roadquote" src={Kayak} height="auto" />
            </div>
            <div className="col-md-1">
              {/* styling space */}
            </div>
            <div className="col-md-5 py-5">
              <blockquote className="blockquote text-center">
                <p>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                <p className="mb-0">
                  "Love the stress free renting experience."
                </p>
                <footer className="blockquote-footer my-1">
                  Drew Peacock in <cite>Spooner Times</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </main>



    </>
  );
};

export default Home;
