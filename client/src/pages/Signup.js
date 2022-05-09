import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Logo from "../assets/logo192.png";


const styles = {
  container: {
    marginTop: "100px",
  },
  logo: {
    height: "100px",
    width: "100px"
  }
}



const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (

      <>
        <form onSubmit={handleFormSubmit}>

          {/* <!-- Username input --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder='Username'
              value={formState.name}
              onChange={handleChange} />
          </div>

          {/* <!-- Username input --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder='Phone'
              value={formState.phone}
              onChange={handleChange} />
          </div>

          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              placeholder='Email'
              name="email"
              type="email"
              className="form-control"
              value={formState.email}
              onChange={handleChange} />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password"
              className="form-control"
              name="password"
              placeholder='Password'
              value={formState.password}
              onChange={handleChange} />
          </div>

          {/* <!-- Submit button --> */}
          <div className='text-center'>
            <button type="submit" className="btn btn-success btn-block mb-4">Sign Up</button>
          </div>

        </form>
      </>


    );
  };
  
  const errorAlert = () => {
    if (error) {
      return (
        <>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Uh Oh!</strong> Please make your password longer than 5 characters.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
          </button>
        </div>
        </>
      )
    }
  }

  return (
    <>
      <main style={styles.main}>
        <div className="text-center"style={styles.container}>
          <img src={Logo} alt="Vita Amet" style={styles.logo} className="mb-5" />
          <h1 className='text-center text-uppercase titles'>sign up</h1>

          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6'>
                <div className="tab-content">
                  {errorAlert()}

                  {renderForm()}
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >


    </>
  );
};

export default Signup;
