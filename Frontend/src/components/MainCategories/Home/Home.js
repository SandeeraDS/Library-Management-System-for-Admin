import React, { Component } from "react";
import Layout from "../../../containers/Layout/Layout"
import HeadWrapper from '../../UI/HeadWrapper/HeadWrapper'
import PageRaw from '../../UI/PageRaw/PageRaw'

class Home extends Component {
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
            <h1 className="page-header">Home Page of Library Management System</h1>
            <p>This Contain important info for the admin</p>
          </PageRaw>
        </HeadWrapper>
      </Layout>
    );
  }
}

export default Home;
