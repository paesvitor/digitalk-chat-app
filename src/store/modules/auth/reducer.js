import * as TYPES from "./types";

const initialState = {
  loading: false,
  payload: {},
  error: null,
  authenticated: false
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
