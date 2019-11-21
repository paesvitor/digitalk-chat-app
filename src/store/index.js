import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import sagas from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});
const middlewares = [logger, sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;
