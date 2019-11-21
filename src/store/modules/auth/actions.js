import * as TYPES from "./types";

export function authSigninRequest(username, password, confirmPassword) {
  return {
    type: TYPES.signin.REQUEST,
    payload: {
      username,
      password,
      confirmPassword
    }
  };
}

export function authSignoutRequest() {
  return {
    type: TYPES.signout.REQUEST
  };
}
