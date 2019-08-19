// import thunkMiddleware from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
import photoReducer from "./reducers/racer";

// const store = createStore(racerReducer, applyMiddleware(thunkMiddleware));


export default createStore(
    photoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
