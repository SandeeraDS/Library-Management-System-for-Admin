import React, { Component } from "react";
import CreateUser from "./CreateUser/CreateUser";
import UserList from "./UserList/UserList";
import Layout from "../../../containers/Layout/Layout"
import HeadWrapper from '../../UI/HeadWrapper/HeadWrapper'
import PageRaw from '../../UI/PageRaw/PageRaw'
import Modal from "../../UI/Modal/Modal";
import FormFill from './CreateUser/AddUserForm/AddUserForm'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  openFormHandler = () => {
    this.setState((prevState) => { return { showForm: !prevState.showForm } })
  }

  formCancellingHandler = () => {
    this.setState((prevState) => { return { showForm: !prevState.showForm } })
  }

  formSaveHandler = () => {

    this.setState((prevState) => { return { showForm: !prevState.showForm } })
    alert("Adding Successfull")
    window.location.reload();
  }



  render() {

    let form = null;
    if (this.state.showForm) {
      form = <Modal><FormFill cancelAdding={this.formCancellingHandler} userAdded={this.formSaveHandler}></FormFill></Modal>
    }

    return (
      <Layout>
        <HeadWrapper>
          {form}
          <PageRaw>
            <br />
            <h1 className="page-header">Customers</h1>
          </PageRaw>

          <PageRaw>
            <CreateUser clicked={this.openFormHandler} />
            <br />
          </PageRaw>

          <PageRaw>
            <UserList />
          </PageRaw>

        </HeadWrapper>
      </Layout>

    );
  }
}

export default Users;
