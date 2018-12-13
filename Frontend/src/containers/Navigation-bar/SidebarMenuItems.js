import React from "react";
import { Link } from "react-router";

const SidebarMenuItems = () => {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li>
          <Link to="/">
            <i className="fa fa-fw fa-dashboard" /> Home
          </Link>
        </li>
        <li>
          <Link to="/Users">
            <i className="fa fa-fw fa-bar-chart-o" /> Users
          </Link>
        </li>
        <li>
          <Link to="/Book">
            <i className="fa fa-fw fa-table" /> Books
          </Link>
        </li>
        <li>
          <Link to="/Assign">
            <i className="fa fa-fw fa-edit" /> Assign
          </Link>
        </li>
        <li>
          <Link to="/Overdue">
            <i className="fa fa-fw fa-desktop" /> Over Due
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenuItems;
