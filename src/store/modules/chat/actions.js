import * as TYPES from "./types";

export function chatIndexRequest() {
  return {
    type: TYPES.index.REQUEST
  };
}

export function chatStoreRequest(text) {
  return {
    type: TYPES.store.REQUEST,
    text
  };
}

export function chatStoreSuccess(payload) {
  return {
    type: TYPES.store.SUCCESS,
    payload
  };
}
