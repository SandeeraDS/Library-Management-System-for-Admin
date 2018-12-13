import React from "react";
import TopMenuItems from "./TopMenuItems";
import SidebarMenuItems from "./SidebarMenuItems";
import NavHeader from "./NavHeader";

const NavMain = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <NavHeader />
      {/* <!-- Top Menu Items --> */}
      <TopMenuItems />
      {/* <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens --> */}
      <SidebarMenuItems />
      {/* <!-- /.navbar-collapse --> */}
    </nav>
  );
};

export default NavMain;
