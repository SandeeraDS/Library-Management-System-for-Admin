import React, { Component } from "react";
import NavMain from "../../containers/Navigation-bar/NavMain";

class Home extends Component {
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
                <h1 className="page-header">
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
