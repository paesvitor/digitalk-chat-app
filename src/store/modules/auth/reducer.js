import * as TYPES from "./types";

const initialState = {
  loading: false,
  authenticated: true,
  user: {
    _id: "5dd629e629ab21006d1c675e",
    username: "vitor",
    password: "123",
    __v: 0
  },
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.signin.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case TYPES.signin.SUCCESS: {
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    }

    case TYPES.signin.FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
};
