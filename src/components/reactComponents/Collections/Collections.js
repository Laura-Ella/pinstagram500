import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Collections.css";

class Collections extends Component {
  addCollection(id) {
    this.props.addFavorite(id);
  }
  render() {
    let collection = this.props.collectionData.map((collection, index) => {
      return (
        <div>
          <div
            className="driverDivs"
            key={index}
            style={{
              backgroundImage: `url(${collection.url[0]})`,
              backgroundPosition: "center",
              backgroundSize: "250px 250px",
              backgroundRepeat: "no-repeat",
              position: "relative",
              textAlign: "center"
            }}
          >
            <div className="textContainer">
              <div className="text">
                <p>
                  <span className="description">Title: </span>
                  {collection.title}
                </p>
                <p>
                  <span className="description">Tags: </span>
                  {}
                </p>
              </div>
            </div>
            <button
              className="delete"
              onClick={() => this.addCollection(collection._id)}
            >
              Add To Favorite
            </button>
          </div>
          <div
            className="driverDivs"
            key={index}
            style={{
              backgroundImage: `url(${collection.url[1]})`,
              backgroundPosition: "center",
              backgroundSize: "250px 250px",
              backgroundRepeat: "no-repeat",
              position: "relative",
              textAlign: "center"
            }}
          >
            <div className="textContainer">
              <div className="text">
                <p>
                  <span className="description">Title: </span>
                  {collection.title}
                </p>
                <p>
                  <span className="description">Tags: </span>
                  {}
                </p>
              </div>
            </div>
            <button
              className="delete"
              onClick={() => this.addCollection(collection._id)}
            >
              Add To Favorite
            </button>
          </div>
        </div>
      );

      // });
    });
    return (
      <div>
        <div>
          {/* <div className="edits">
            <Link to="/drivers/remove">
              <div className="editDivs3">
                <p>Remove</p>
              </div>
            </Link>
            <Link to="/drivers/update">
              <div className="editDivs2">
                <p>Update</p>
              </div>
            </Link>
            <Link to="/drivers/add">
              <div className="editDivs1">
                <p>Add</p>
              </div>
            </Link>
          </div> */}
          <p>{collection.title}</p>
          <div className="driverGrid">{collection[0]}</div>
        </div>
      </div>
    );
  }
}

export default Collections;
