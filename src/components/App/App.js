import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import Home from "../Home/Home.js";
import About from "../About/About.js";
import NewPhotoForm from "../../containers/NewPhotoForm";
import PhotoDisplay from "../../containers/PhotoDisplay";

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
                  <p className="navHeaderFont">Pinstagram500</p>
                </div>
              </Link>
              <div className="navBottomLinks">
                <Link className="hoverable" to="/collections">
                  <div>
                    <p>[ Collections ]</p>
                  </div>
                </Link>
                <Link className="hoverable" to="/upload">
                  <div>
                    <p>[ Upload ]</p>
                  </div>
                </Link>
                <Link className="hoverable" to="/sign-in">
                  <div>
                    <p>[ Sign-In ]</p>
                  </div>
                </Link>
                <Link className="hoverable" to="/about">
                  <div>
                    <p>[ About ]</p>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </fieldset>
        <main>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact component={PhotoDisplay} />
          {/* {/* <Route path="/collections" exact component={Collections} /> */}

          <div>
            <Route path="/upload" exact component={NewPhotoForm} />
          </div>
          <Route path="/about" exact component={About} />
          {/* <div className="appCenter">
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
