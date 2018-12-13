import React, { Component } from "react";
import NavMain from "../../containers/Navigation-bar/NavMain";

class Assign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="wrapper">
        <NavMain/>
        <div id="page-wrapper">
          <div class="container-fluid">
            {/* !-- Page Heading --> */}
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">Book Assign Page</h1>
                <p>This used to Assign books to users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Assign;
