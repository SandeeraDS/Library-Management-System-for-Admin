import React, { Component } from "react";
import Layout from "../../../containers/Layout/Layout"
import HeadWrapper from '../../UI/HeadWrapper/HeadWrapper'
import PageRaw from '../../UI/PageRaw/PageRaw'

class Books extends Component {
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
            <h1 className="page-header">Books Page</h1>
            <p>This Contain All the books</p>
            <p>can Edit,Delete,Add books</p>
          </PageRaw>
        </HeadWrapper>
      </Layout>

    );
  }
}

export default Books;
