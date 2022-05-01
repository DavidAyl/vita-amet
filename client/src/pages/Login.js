import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const styles = {
  container: {
    // marginTop: "100px",
  },
  main: {
    height: "750px"
  }
}

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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

          {/* <!-- Email input --> */}
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
            <button type="submit" className="btn btn-success btn-block mb-4">Sign in</button>

            {/* <!-- Register buttons --> */}
            <p>Not a member? <Link
              className='text-decoration-none fw-bold text-success'
              to="/Signup">
              Sign up </Link>
              instead!
            </p>
          </div>
        </form>
      </>
    );
  };

  return (
    <>
      <main style={styles.main}>
        <div style={styles.container}>
          <h5 className='text-center text-uppercase'>Login</h5>

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

export default Login;
