import * as TYPES from "./types";

const initialState = {
  loading: true,
  payload: [],
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.getAllCategories.SUCCESS: {
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    }

    case TYPES.getAllCategories.FAILURE: {
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
