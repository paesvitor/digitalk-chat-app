import * as TYPES from "./types";
import { call, takeLeading, put } from "redux-saga/effects";
import http from "../../../utils/http";

function* signinRequestSaga({ payload }) {
  let signType = "signin";

  payload.confirmPassword && (signType = "signup");

  try {
    const response = yield call(http.post, `/auth/${signType}`, payload);
    yield put({
      type: TYPES.signin.SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: TYPES.signin.FAILURE,
      payload: error.response.data.message
    });
  }
}

function* root() {
  yield takeLeading(TYPES.signin.REQUEST, signinRequestSaga);
}

export default root;
