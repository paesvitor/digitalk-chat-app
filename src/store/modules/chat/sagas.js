import * as TYPES from "./types";
import { call, takeLeading, put, select } from "redux-saga/effects";
import http from "utils/http";

function* chatIndexSaga() {
  try {
    const response = yield call(http.get, "/messages");
    yield put({
      type: TYPES.index.SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: TYPES.index.FAILURE,
      payload: error.response.data.message
    });
  }
}

function* chatStoreSaga({ text }) {
  try {
    const user = yield select(state => state.auth.user._id);

    const response = yield call(http.post, "/messages", {
      user,
      text
    });
    yield put({
      type: TYPES.store.SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: TYPES.store.FAILURE,
      payload: error.response.data.message
    });
  }
}

function* root() {
  yield takeLeading(TYPES.index.REQUEST, chatIndexSaga);
  yield takeLeading(TYPES.store.REQUEST, chatStoreSaga);
}

export default root;
