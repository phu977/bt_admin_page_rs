import axios from "axios";
import { SET_USER } from "../user";

export let setUserAction = () => {
  return (dispatch) => {
    axios({
      url: "https://64c62b56c853c26efadb28af.mockapi.io/user",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        let action = {
          type: SET_USER,
          payload: res.data,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log("🚀 ~ file: user.js:14 ~ return ~ err:", err);
      });
  };
};
