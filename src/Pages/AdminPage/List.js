import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserAction } from "./action/user";
import { SET_FORM } from "./user";
import { message } from "antd";
class List extends Component {
  componentDidMount() {
    this.props.handleSetUser();
  }
  renderUserList = () => {
    return this.props.users.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.account}</td>
          <td>{user.password}</td>
          <td>
            <button
              className="btn btn-danger mx-3"
              onClick={() => {
                this.handleDelete(user.id);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-info mx-3"
              onClick={() => {
                this.handleEdit(user.id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };
  handleDelete = (id) => {
    axios({
      url: `https://64c62b56c853c26efadb28af.mockapi.io/user/${id}`,
      method: "DELETE",
    })
      .then((res) => {
        console.log("🚀 ~ file: List.js:32 ~ List ~ .then ~ res:", res);
        message.success("xóa thành công");
        this.props.handleSetUser();
      })
      .catch((err) => {
        console.log("🚀 ~ file: List.js:36 ~ List ~ handleDelete ~ err:", err);
      });
  };

  handleEdit = (id) => {
    axios({
      url: `https://64c62b56c853c26efadb28af.mockapi.io/user/${id}`,
      method: "GET",
    })
      .then((res) => {
        console.log("🚀 ~ file: List.js:55 ~ List ~ .then ~ res:", res);
        this.props.handleSetForm(res.data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: List.js:59 ~ List ~ err:", err);
      });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ACCOUNT</th>
              <th>PASSWORD</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>{this.renderUserList()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.UserReducer.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: () => {
      dispatch(setUserAction());
    },
    handleSetForm: (user) => {
      dispatch({
        type: SET_FORM,
        payload: user,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
