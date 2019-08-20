import { createStore } from "redux";
import photoAndCollectionsReducer from "./reducers/photoAndCollections";

export default createStore(
  photoAndCollectionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
