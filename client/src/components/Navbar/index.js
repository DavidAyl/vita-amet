import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo192.png";
import Auth from "../../utils/auth";


function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  if(navbarOpen) {
    
    
  }


  if (Auth.loggedIn()) {
    return (
      <>

        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top py-5">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Navbar brand --> */}

            <Link className="navbar-brand logo" to="/">
              <img src={Logo} alt="logo" height="50px" />
                
              <span className="navBrand ms-3 fs-2">Vita Amet</span>
            </Link>

            {/* <!-- Toggle button --> */}
            <button
              className={`navbar-toggler border-0${!navbarOpen && "collapsed"}`}
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation" onClick={handleToggle}
            >
              <FaBars />
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div
              className={`collapse navbar-collapse justify-content-end ${navbarOpen && "show"}`}
              id="navbarSupportedContent"
            >


              {/* <!-- Icons --> */}
              <div className="navbar-nav justify-content-end me-1">
                {/* <!-- Link --> */}
                <div className="nav-item me-4 block text-center">
                  <Link to="/about" className="nav-link ">
                    About
                  </Link>
                </div>

                <div className="nav-item me-4 inline-block text-center">
                  <Link to="/location" className="nav-link">
                    Location
                  </Link>
                </div>

                <div className="nav-item me-4 inline-block text-center">
                  <Link to="/rentals" className="nav-link">
                    Rentals
                  </Link>
                </div>

                <div className="nav-item me-4 inline-block text-center">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </div>

                <div className="nav-item me-4 inline-block text-center">
                  <p className="nav-link" onClick={logout}>
                    Logout
                  </p>
                </div>
              

                <div className="nav-item me-4 fs-5 text-center inline-block">
                  <Link to="/me" className="nav-link text-secondary">
                    <FaUserCircle />
                  </Link>
                </div>

              <div className="nav-item me-4 fs-5 text-center inline-block">
                <Link to="/cart" className="nav-link text-secondary">
                    <FaShoppingCart />
                  </Link>
                </div>
            </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>

      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top py-5">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar brand --> */}

          <Link className="navbar-brand " to="/">
            <img src={Logo} alt="logo" height="50px" />

            <span className="navBrand ms-3 fs-2">Vita Amet</span>
          </Link>
          {/* <!-- Hamburger button --> */}
          <button
            className={`navbar-toggler border-0 ${!navbarOpen && "collapsed"}`}
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" onClick={handleToggle}
          >

            <FaBars />
          </button>


          {/* <!-- Collapsible wrapper --> */}
          <div className={`collapse navbar-collapse justify-content-end ${navbarOpen && "show"}`}
          
          id="navbarSupportedContent">

            {/* <!-- Icons --> */}
            <div className="navbar-nav justify-content-end me-1">
              {/* <!-- Link --> */}
              <div className="nav-item me-4 inline-block text-center">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </div>

              <div className="nav-item me-4 inline-block text-center">
                <Link to="/location" className="nav-link">
                  Location
                </Link>
              </div>

              <div className="nav-item me-4 inline-block text-center">
                <Link to="/rentals" className="nav-link">
                  Rentals
                </Link>
              </div>


              <div className="nav-item me-4 inline-block text-center">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>


              <div className="nav-item me-4 inline-block text-center">
                <Link
                  className="nav-link btn btn-success text-white px-4"
                  to="/login"
                >
                  Login
                </Link>
              </div>

              <div className="nav-item me-4 fs-5 text-center inline-block">
                <Link to="/cart" className="nav-link">
                  <FaShoppingCart />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
