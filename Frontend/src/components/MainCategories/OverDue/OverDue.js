import React, { Component } from "react";
import Layout from "../../../containers/Layout/Layout"
import HeadWrapper from '../../UI/HeadWrapper/HeadWrapper'
import PageRaw from '../../UI/PageRaw/PageRaw'

class OverDue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <HeadWrapper>
          <PageRaw>
            <br />
            <h1 className="page-header">Over Due Page</h1>
            <p>This Contain Over Due Details</p>
          </PageRaw>
        </HeadWrapper>
      </Layout>

    );
  }
}

export default OverDue;
