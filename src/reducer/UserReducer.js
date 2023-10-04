import { SET_FORM, SET_USER } from "../Pages/AdminPage/user";

const initialState = {
  users: [],
  user: {
    name: "",
    account: "",
    password: "",
  },
};

export let UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER: {
      state.users = payload;
      return { ...state };
    }
    case SET_FORM: {
      state.user = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
