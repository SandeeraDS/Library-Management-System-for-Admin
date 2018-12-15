import React, { Component } from "react";
import NavMain from "../../containers/Navigation-bar/NavMain";
import CreateUser from "./CreateUser/CreateUser";
import UserList from "./UserList/UserList";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="wrapper">
        <NavMain />
        <div id="page-wrapper">
          <div className="container-fluid">
            {/* !-- Page Heading --> */}
            <div className="row">
              <div className="col-lg-12">
              <br/>
                <h1 className="page-header">Customers</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <CreateUser />
                <br/>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <UserList />
              </div>
            </div>



          </div>
        </div>
      </div>
    );
  }
}

export default Users;
