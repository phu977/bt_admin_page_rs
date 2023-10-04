import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="pb-5 border-bottom">
        <NavLink className="mx-3 btn btn-warning" to="/">
          HOMEPAGE
        </NavLink>
        <NavLink className="mx-3 btn btn-warning" to="/AdminPage">
          AdminPage
        </NavLink>
      </div>
    );
  }
}
