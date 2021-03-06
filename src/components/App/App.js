import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Photos from "../Photos/Photos";
import Collections from "../Collections/Collections";
import AddNewPhoto from "../Add/Add";
import About from "../About/About";
import "./App.css";

const searchUrl = "https://pinstagram500-api.herokuapp.com";
const searchUrlCollection =
  "https://pinstagram500-api.herokuapp.com/collection";

let collections2 = [];
console.log(collections2);
async function getDataCollections() {
  try {
    let res = await axios({
      url: searchUrlCollection,
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

getDataCollections().then(res => {
  let databaseCollections = res.map(list => {
    let x = {
      title: list.title,
      tags: list.tags,
      urls: list.preview_photos
    };
    return x;
  });

  let databaseCollectionsTitle = databaseCollections.map(list => {
    return list.title;
  });

  let databaseCollectionsUrls = databaseCollections.map(list => {
    let databaseRaw = list.urls.map(elements => {
      return elements.urls.raw;
    });
    return databaseRaw;
  });

  let databaseCollectionsTags = databaseCollections.map(list => {
    let databaseTags = list.tags.map(elements => {
      return elements.title;
    });
    return databaseTags;
  });
  for (let i = 0; i < databaseCollections.length; i++) {
    collections2.push({
      title: databaseCollectionsTitle[i],
      tags: databaseCollectionsTags[i],
      url: databaseCollectionsUrls[i]
    });
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      collections2
    };
  }

  componentDidMount() {
    console.log(this.state.favorites);
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
  }

  getMorePhotos = () => {
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
  };

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
              <Link className="hoverable" to="/upload">
                <div className="navLinks">
                  <p>[ Upload ]</p>
                </div>
              </Link>
              <Link className="hoverable" to="/collections">
                <div className="navLinks">
                  <p>[ Collections ]</p>
                </div>
              </Link>

              <Link className="hoverable" to="/about">
                <div className="navLinks">
                  <p>[ About ]</p>
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <main>
          <Route
            path="/"
            exact
            render={routerProps => (
              <Photos
                getMorePhotos={this.getMorePhotos}
                photoData={this.state.photos}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/collections"
            exact
            render={routerProps => (
              <Collections
                addFavorite={this.addFavorite}
                collectionData={this.state.collections2}
                {...routerProps}
              />
            )}
          />
          <Route
            path="/upload"
            exact
            render={routerProps => (
              <AddNewPhoto
                getMorePhotos={this.getMorePhotos}
                {...routerProps}
              />
            )}
          />
          <Route path="/about" exact component={About} />
        </main>
      </div>
    );
  }
}

export default App;
