import React from "react";
import { Link } from "react-router";

const SidebarMenuItems = () => {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li>
          <Link to="/" activeStyle={{ color: '#fff', backgroundColor: '#080808' }}>
            <i className="fa fa-fw fa-dashboard" /> Home
          </Link>
        </li>
        <li>
          <Link to="/Users" activeStyle={{ color: '#fff', backgroundColor: '#080808' }}>
            <i className="fa fa-fw fa-bar-chart-o" /> Users
          </Link>
        </li>
        <li>
          <Link to="/Book" activeStyle={{ color: '#fff', backgroundColor: '#080808' }}>
            <i className="fa fa-fw fa-table" /> Books
          </Link>
        </li>
        <li>
          <Link to="/Assign" activeStyle={{ color: '#fff', backgroundColor: '#080808' }}>
            <i className="fa fa-fw fa-edit" /> Assign
          </Link>
        </li>
        <li>
          <Link to="/Overdue" activeStyle={{ color: '#fff', backgroundColor: '#080808' }}>
            <i className="fa fa-fw fa-desktop" /> Over Due
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenuItems;
