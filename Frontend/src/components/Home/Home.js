import React, { Component } from "react";
import NavMain from "../../containers/Navigation-bar/NavMain";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavMain />
        <div id="page-wrapper">
          <div class="container-fluid">
          {/* !-- Page Heading --> */}
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Home Page of Library Management System
                        </h1>
                        <p>This Contain important info for the admin</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
