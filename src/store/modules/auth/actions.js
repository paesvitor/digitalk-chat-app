import * as TYPES from "./types";

export function signinRequest(username, password, confirmPassword) {
  return {
    type: TYPES.signin.REQUEST,
    payload: {
      username,
      password,
      confirmPassword
    }
  };
}
