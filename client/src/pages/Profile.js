// Node Modules
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
// Utilities
import Auth from "../utils/auth";
import {
  // QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
  // QUERY_ORDER,
} from "../utils/queries";
// Components
// import UserList from "../components/UserList";
import Avatar from "../assets/avatar.png";
import { SpinnerDotted } from 'spinners-react'

const styles = {
  profile: {
    textAlign: "center",
    width: "150px",
    height: "150px",
  },
};

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  // const {
  //   data: orderData,
  // } = useQuery(QUERY_ORDER);

  // const orders = orderData?.order || [];

  // Get a list of all users
  // const { data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  // const users = usersData?.users || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return (
      <main className="text-center mt-5">
        <SpinnerDotted />
      </main>
    );
  }

  if (!user?.username) {
    return (
      <>
        <main>
          <Link
            className="btn btn-success"
            to="/Login">
            Login
          </Link>
        </main>
      </>
    );
  }


  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <>


        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <div className="card">
                <h3 className="card-header">Hi, {user.username}!</h3>
                <div className="card-body">
                  <img
                    className="rounded-circle img-fluid"
                    src={Avatar}
                    alt="avatar"
                    style={styles.profile}
                  />
                </div>
                <div className="card-footer">
                  <p className="fs-5">
                    user: {user.username}
                  </p>
                  <p className="fs-5">
                    email: {user.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <main className="text-center">
        <div className="container">
          {renderCurrentUserInfo()}
        </div>
        <div>
          {/* <h2>Previous Orders</h2>
          {orders.map((order) => (
            <div>
              <h4>{order.purchaseDate}</h4>
              {order.items.map((item) => (
                <ul>
                  <li>{item.name}</li>
                  <li>{item.price}</li>
                  <li>{item.image}</li>
                </ul>
              ))}
            </div>
          ))} */}
        </div>
      </main>
    </>
  );
};

export default Profile;
