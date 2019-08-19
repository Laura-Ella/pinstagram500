import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "../Home/Home.js";
// import NewAddForm from "../../containers/NewAddForm";
// import RacerDisplay from "../../containers/RacerDisplay";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          {/* <Link to="/">
            <img
              src="https://i.ndtvimg.com/i/2017-11/f1-logo-2018_827x510_81511713381.png"
              alt=""
            />
          </Link>
          <Link to="/drivers">
            <h3>Drivers</h3>
          </Link> */}
          Hello
        </nav>
        <main>
          {/* <Route path="/" exact component={Home} />
          <div className="appCenter">
            <div className="appGrid">
              <div className="driversCenter">
                <Route path="/drivers" exact component={RacerDisplay} />
              </div>
              <div className="newDrivers">
                <Route path="/drivers" exact component={NewAddForm} />
              </div>
            </div>
          </div> */}
        </main>
      </div>
    );
  }
}

export default App;
