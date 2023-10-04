import axios from "axios";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { setUserAction } from "./action/user";
import { message } from "antd";
import { SET_FORM } from "./user";
class Form extends Component {
  formRef = createRef();
  handleChangeForm = (event) => {
    let { value, name } = event.target;
    let user = { ...this.props.user, [name]: value };
    this.props.handleSetForm(user);
  };
  handleAddUser = () => {
    axios({
      url: "https://64c62b56c853c26efadb28af.mockapi.io/user",
      method: "POST",
      data: this.props.user,
    })
      .then((res) => {
        console.log(res);
        this.props.handleSetUser();
        this.formRef.current.reset();
        message.success("Thêm thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleGetEdit = (id) => {
    axios({
      url: `https://64c62b56c853c26efadb28af.mockapi.io/user/${id}`,
      method: "PUT",
      data: this.props.user,
    })
      .then((res) => {
        console.log("🚀 ~ file: Form.js:33 ~ Form ~ .then ~ res:", res);
        this.props.handleSetUser();
        message.success("cập nhật thành công");
      })
      .catch((err) => {
        console.log("🚀 ~ file: Form.js:37 ~ Form ~ err:", err);
      });
  };
  render() {
    return (
      <div>
        <form className="form-inline" ref={this.formRef}>
          <input
            onChange={this.handleChangeForm}
            value={this.props.user.name}
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={this.handleChangeForm}
            value={this.props.user.account}
            type="text"
            class="form-control"
            name="account"
            placeholder="Account"
          />
          <input
            onChange={this.handleChangeForm}
            value={this.props.user.password}
            type="text"
            class="form-control"
            name="password"
            placeholder="Passowrd"
          />
          <button
            className="btn btn-dark"
            type="button"
            onClick={this.handleAddUser}
          >
            Thêm
          </button>
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => {
              this.handleGetEdit(this.props.user.id);
            }}
          >
            Chỉnh sửa
          </button>
        </form>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
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
export default connect(mapStateToProps, mapDispatchToProps)(Form);
