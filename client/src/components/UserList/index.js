import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ _id, username }) => {
  return (
    <div key={_id}>
      <h4>
        <Link to={`/users/${_id}`}>
          {username}
        </Link>
      </h4>
    </div>
  );
};

const UserList = ({ users, title }) => {

  const renderUsers = () => {
    if (!users) return null;
    return users.map(user => <User key={user._id} {...user} />);
  }

  return (
    <>
      {/* <h3>{title}</h3> */}
      {renderUsers()}
    </>
  );
};

export default UserList;
