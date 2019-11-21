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
