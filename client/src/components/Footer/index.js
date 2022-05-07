import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa'

const styles = {
  footer: {
    // position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0b3008"
    
  },
  rightBtn: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  h5: {
    letterSpacing: "10px"
}

}

const Footer = () => {
  return (
    <>
      <footer className="text-white text-center text-lg-start" style={styles.footer}>



        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <p className="text-uppercase mb-4 text-center h5" style={styles.h5}>Vita Amet</p>

              <p className='text-center'>
                Vita Amet is focused on those who love adventure. We have been making adventures more enjoyable since 2022.
              </p>

              {/* <div className="form-outline form-white mb-4">
                <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder='Search' />
                {/* <label className="form-label" for="formControlLg">Search</label> */}
              {/* </div> */}

              <div className="mt-1 mb-2 fs-5 text-center">

                <a
                  className='text-decoration-none text-white mx-2'
                  href='https://www.facebook.com/'
                  target="_blank"
                  rel="noreferrer">
                  <FaFacebook />
                </a>

                <a
                  className='text-decoration-none text-white mx-2'
                  href='https://github.com/DavidAyl/vita-amet'
                  target="_blank"
                  rel="noreferrer">
                  <FaGithub />
                </a>

                <a
                  className='text-decoration-none text-white mx-2'
                  href='https://www.instagram.com/'
                  target="_blank"
                  rel="noreferrer">
                  <FaInstagram />
                </a>

              </div>

            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase mb-4 pb-1 text-center fs-5" style={styles.h5}>Contact</p>
              <div className=''>

                <ul className="list-group list-group-horizontal bg-transparent">
                  <li className="list-group-item bg-transparent text-white border-0 col-4" style={styles.rightBtn}>
                    <span className="fa-li me-2 bg-transparent border-0 "><FaMapMarkerAlt /></span>
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0 col" style={styles.textLeft}>
                    <span className="fa-li me-2 bg-transparent ">
                      <strong>Vita Amet</strong> Headquarters<br></br>
                      123 Vita Amet Blvd<br></br>
                      Charlotte, NC, 28227<br></br>
                    </span>
                  </li>
                </ul>

                <ul className="list-group list-group-horizontal bg-transparent">

                  <li className="list-group-item bg-transparent text-white border-0 col-4 rightBtn" style={styles.rightBtn}>
                    <span className="fa-li me-2 bg-transparent border-0"><FaEnvelope /></span>
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0 col" style={styles.textLeft}>
                    <span className="bg-transparent">
                      <a  className="text-decoration-none text-white"href="mailto:customer@vita-amet.com">customer@vita-amet.com</a>
                      </span>
                  </li>
                </ul>
                <ul className="list-group list-group-horizontal bg-transparent">
                  <li className="list-group-item bg-transparent text-white border-0 col-4" style={styles.rightBtn}>
                    <span className="fa-li me-2 bg-transparent"><FaPhone /></span>
                  </li>
                  <li className="list-group-item bg-transparent text-white border-0 col" style={styles.textLeft}>
                    <span className="bg-transparent">
                      <a className="text-decoration-none text-white"href="tel:+1800-848-2268">1-800-VITA-AMT</a>
                      </span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase mb-4 text-center h5" style={styles.h5}>Hours</p>

              <table className="table text-center text-white">
                <tbody className="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>9am - 6pm</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>10am - 6pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

       
      </footer>
    </>
  );
};

export default Footer;
