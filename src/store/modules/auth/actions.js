import * as TYPES from "./types";

export function signinRequest(username, password) {
  return {
    type: TYPES.signin.REQUEST,
    payload: {
      username,
      password
    }
  };
}
