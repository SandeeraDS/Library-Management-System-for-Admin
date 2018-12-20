import React, { Component } from "react";
import CreateUser from "./CreateUser/CreateUser";
import UserList from "./UserList/UserList";
import Layout from "../../../containers/Layout/Layout"
import HeadWrapper from '../../UI/HeadWrapper/HeadWrapper'
import PageRaw from '../../UI/PageRaw/PageRaw'


class Users extends Component {
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
            <h1 className="page-header">Customers</h1>
          </PageRaw>

          <pageRaw>
            <CreateUser />
            <br />
          </pageRaw>

          <pageRaw>
            <UserList />
          </pageRaw>

        </HeadWrapper>
      </Layout>

    );
  }
}

export default Users;
