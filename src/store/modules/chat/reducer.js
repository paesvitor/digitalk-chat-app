import * as TYPES from "./types";

const initialState = {
  loading: false,
  payload: [],
  error: null,
  sending: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.index.REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case TYPES.index.SUCCESS: {
      return {
        ...state,
        payload: action.payload,
        loading: false
      };
    }

    case TYPES.index.FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    case TYPES.store.REQUEST: {
      return {
        ...state,
        sending: true
      };
    }

    case TYPES.store.SUCCESS: {
      return {
        ...state,
        sending: false,
        payload: [...state.payload, action.payload]
      };
    }

    case TYPES.store.FAILURE: {
      return {
        ...state,
        sending: false
      };
    }

    default:
      return state;
  }
};
