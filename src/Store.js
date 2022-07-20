import RootReducer from "./Rootreducer";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import { RootSaga } from "./Saga";

const saga=createSagaMiddleware()

const Store=createStore(RootReducer,applyMiddleware(saga))

saga.run(RootSaga)

export default Store