import { all } from "redux-saga/effects";

import authSagas from "./modules/auth/sagas";
import chatSagas from "./modules/chat/sagas";

export default function* rootSaga() {
  yield all([authSagas(), chatSagas()]);
}
