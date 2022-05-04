import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <main>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1 className="my-5 text-success display-3">
          Uh oh, this page is unavailable!
        </h1>
        <Link className="btn btn-success my-5"
          to="/"> Return Home?</Link>

      </div>
    </main>
  );
};

export default NotFound;
