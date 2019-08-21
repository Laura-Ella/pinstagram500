import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/reactComponents/App/App";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store";

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
