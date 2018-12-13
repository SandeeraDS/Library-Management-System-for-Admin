import React from "react";
import {Link} from 'react-router';

const NavHeader = () => {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target=".navbar-ex1-collapse"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>

      <Link className="navbar-brand" to="/">
        {" "}
        Library Admin
      </Link>
    </div>
  );
};

export default NavHeader;
