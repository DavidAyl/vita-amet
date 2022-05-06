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
  QUERY_ORDER,
} from "../utils/queries";
// Components
// import UserList from "../components/UserList";
import Avatar from "../assets/avatar.png";

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

  const {
    data: orderData,
  } = useQuery(QUERY_ORDER);

  const orders = orderData?.order || [];

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
      <main>
        <h4>Loading...</h4>
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
      <div className="container text-center">
        <h2>Hi, {user.username}!</h2>
        <div className="row text-center mx-5">
          <div className="img-fluid">
            <img
              className="rounded-circle img-fluid"
              src={Avatar}
              alt="avatar"
              style={styles.profile}
            />
          </div>

          <ul className="nav-link text-center">
            <li
              className="list-group-item col-12 text-center border-0"
              style={styles.profile}
            >
              {" "}
              username: {user.username}
            </li>
            <li
              className="list-group-item col-12 text-center border-0"
              style={styles.profile}
            >
              {" "}
              email: {user.email}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <main>
        <div>
          {renderCurrentUserInfo()}
        </div>
        <div>
          <h2>Previous Orders</h2>
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
          ))}
        </div>
      </main>
    </>
  );
};

export default Profile;
