import { combineReducers } from "redux";

import auth from "./modules/auth/reducer";
import chat from "./modules/chat/reducer";

const rootReducer = combineReducers({
  auth,
  chat
});

export default rootReducer;
