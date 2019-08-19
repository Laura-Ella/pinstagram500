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
        <fieldset>
          <nav>
            <div>
              <Link to="/">
                <div className="pinstagramTitleDiv">
                  <p className="navFonts">Pinstagram500</p>
                </div>
              </Link>
              <div className="navBottomLinks">
                <Link className="hoverable" to="/collections">
                  <div>
                    <p className="navFonts">[Collections]</p>
                  </div>
                </Link>
                <Link className="hoverable" to="/sign-in">
                  <div>
                    <p className="navFonts">[Sign-In]</p>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </fieldset>
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
