import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Collections.css";

class Collections extends Component {
  render() {
    let collection = this.props.collectionData.map((collection, index) => {
      return (
        <div
          className="driverDivs"
          key={index}
          style={{
            backgroundImage: `url(${collection.url})`,
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
                <span className="description">User: </span>
                {collection.username}
              </p>
              <p>
                <span className="description">Description: </span>
                {collection.description}
              </p>
              <p>
                <span className="description">Tag: </span>
                {collection.team}
              </p>
            </div>
          </div>
        </div>
      );
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
          <div className="driverGrid">{collection}</div>
        </div>
      </div>
    );
  }
}

export default Collections;
