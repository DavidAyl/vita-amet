import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const styles = {
  container: {
    marginTop: "100px",
  },
  main: {
    height: "750px"
  }
}



const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
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

  return (
    <>
      <main style={styles.main}>
        <div style={styles.container}>
          <h5 className='text-center text-uppercase'>Sign Up</h5>

          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6'>
                <div className="tab-content">

                  {renderForm()}
                  {error && <div>{error.message}</div>}
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
