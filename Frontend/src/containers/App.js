import React, { Component } from "react";
import "./App.css";
import Home from "../components/MainCategories/Home/Home";
import Layout from './Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>

    );
  }
}

export default App;
