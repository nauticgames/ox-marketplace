import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import root from "./reducers/root";

const middleware = [thunk];

const store = createStore(
  root,
  compose(
    applyMiddleware(...middleware),

    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
