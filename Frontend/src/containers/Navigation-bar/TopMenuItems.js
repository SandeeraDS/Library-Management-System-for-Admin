import React from "react";

const TopMenuItems = () => {
  return (
    <ul className="nav navbar-right top-nav">
      <li className="dropdown">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-user" /> Sandeera <b className="caret" />
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="/">
              <i className="fa fa-fw fa-power-off" /> Log Out
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default TopMenuItems;
