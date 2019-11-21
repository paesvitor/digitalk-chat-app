import * as TYPES from "./types";

const initialState = {
  loading: true,
  payload: {},
  error: false,
  authenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.signin.REQUEST: {
      return {
        ...state,
        loading: true,
        error: true
      };
    }
    case TYPES.signin.SUCCESS: {
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    }

    case TYPES.signin.FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    default:
      return state;
  }
};
