import React, { Component } from "react";
import NavMain from "../../containers/Navigation-bar/NavMain";

class Books extends Component {
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
                <h1 class="page-header">
                  Books Page
                </h1>
                <p>This Contain All the books</p>
                <p>can Edit,Delete,Add books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
