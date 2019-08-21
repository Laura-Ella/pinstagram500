import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Photos from "../Photos/Photos";
import Collections from "../Collections/Collections";
import Favorites from "../Favorites/Favorites";
import AddNewPhoto from "../Add/Add";
import About from "../About/About";
import "./App.css";

const searchUrl = "https://pinstagram500-api.herokuapp.com";
const searchUrlCollections =
  "https://pinstagram500-api.herokuapp.com/collection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      collections: []
    };
  }
  componentDidMount() {
    axios
      .get(searchUrl)
      .then(response => {
        this.setState({
          photos: response.data
        });
        console.log(this.state.photos);
      })
      .catch(err => {
        console.error(err);
      });
    axios
      .get(searchUrlCollections)
      .then(response => {
        this.setState({
          collections: response.data
        });
        console.log(this.state.collections);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
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
              <Link className="hoverable" to="/favorites">
                <div>
                  <p>[ Favorites ]</p>
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
        <main>
          {/* <Route path="/" exact component={Home} /> */}

          <Route
            path="/"
            exact
            render={routerProps => (
              <Photos photoData={this.state.photos} {...routerProps} />
            )}
          />

          {/* {/* <Route path="/collections" exact component={Collections} /> */}
          <Route
            path="/collections"
            exact
            render={routerProps => (
              <Collections
                collectionData={this.state.collections}
                {...routerProps}
              />
            )}
          />
          <Route path="/favorites" exact component={Favorites} />

          <div>
            <Route path="/upload" exact component={AddNewPhoto} />
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
