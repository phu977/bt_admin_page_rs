import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class AdminPage extends Component {
  render() {
    return (
      <div className="container">
        <Form />
        <List />
      </div>
    );
  }
}
