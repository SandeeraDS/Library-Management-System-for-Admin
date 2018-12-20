import React, { Component } from "react";
import Layout from "../../../containers/Layout/Layout"
import HeadWrapper from '../../UI/HeadWrapper/HeadWrapper'
import PageRaw from '../../UI/PageRaw/PageRaw'


class Assign extends Component {
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
            <h1 className="page-header">Book Assign Page</h1>
            <p>This used to Assign books to users</p>
          </PageRaw>
        </HeadWrapper>
      </Layout>
    );
  }
}

export default Assign;
