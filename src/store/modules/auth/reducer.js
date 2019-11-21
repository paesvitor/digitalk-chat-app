import * as TYPES from "./types";

const initialState = {
  loading: false,
  authenticated: false,
  user: {},
  error: null
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
        loading: false,
        error: null
      };
    }

    case TYPES.signin.FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    case TYPES.signout.REQUEST: {
      return {
        ...state,
        loading: false,
        authenticated: false,
        user: {}
      };
    }

    default:
      return state;
  }
};
