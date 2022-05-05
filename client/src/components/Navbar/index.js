import React from "react";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo192.png"
import Auth from "../../utils/auth";
// import Alert from 'react-bootstrap/Alert'


  
function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <Link to="/me">{Auth.getProfile().data.username}'s profile</Link>
        <button onClick={logout}>Logout</button>

        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top py-5">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Navbar brand --> */}
            <Link className="navbar-brand logo"  to="/">
            <span className="navBrand ms-3 fs-2">Vita Amet</span> 

            </Link>

            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars />
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

              {/* <!-- Icons --> */}
              <ul className="navbar-nav d-flex flex-row me-1">
                {/* <!-- Link --> */}
                <li className="nav-item me-4">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                  {/* <a className="nav-link" href="#">About</a> */}
                </li>

                <li className="nav-item me-4">
                  <Link to="/location" className="nav-link">
                    Location
                  </Link>
                </li>

                <li className="nav-item me-4">
                  <Link to="/rentals" className="nav-link">
                    Rentals
                  </Link>
                </li>

                <li className="nav-item me-4">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>

                <li className="nav-item me-4">
                  <button className="nav-link btn" onClick={logout}>
                    Logout
                  </button>
                </li>

                <li className="nav-item me-4 fs-5">
                  <Link to="/me" className="nav-link">
                    <FaUserCircle />
                  </Link>
                </li>

                <li className="nav-item me-4 me-lg-0 fs-5">
                  <Link to="/cart" className="nav-link">
                    <FaShoppingCart />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>

      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top py-5">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar brand --> */}
          <img src={Logo}/>
          <Link className="navbar-brand " to="/">
           <span className="navBrand ms-3 fs-2">Vita Amet</span> 
          </Link>
          {/* <!-- Hamburger button --> */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
                    
            <FaBars />
          </button>
          

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            {/* <!-- Icons --> */}
            <ul className="navbar-nav d-flex flex-row me-1">
              {/* <!-- Link --> */}
              <li className="nav-item me-4">
                <Link to="/about" className="nav-link">
                  About
                </Link>
                {/* <a className="nav-link" href="#">About</a> */}
              </li>

              <li className="nav-item me-4">
                <Link to="/location" className="nav-link">
                  Location
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link to="/rentals" className="nav-link">
                  Rentals
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link
                  className="nav-link btn btn-success text-white px-4"
                  to="/login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item me-5 me-lg-0">
                <Link to="/cart" className="nav-link">
                  <FaShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
}

export default Navbar;
