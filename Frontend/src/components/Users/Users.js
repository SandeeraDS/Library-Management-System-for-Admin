import React, { Component } from "react";
import NavMain from "../../containers/Navigation-bar/NavMain";

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
          <div class="container-fluid">
            {/* !-- Page Heading --> */}
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">Users Page</h1>
                <p>This Contain All the users</p>
                <p>can Edit,Delete,Add users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
