import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Photos.css";

class Photos extends Component {
  render() {
    let photo = this.props.photoData.map((photo, index) => {
      return (
        <div
          className="driverDivs"
          key={index}
          style={{
            backgroundImage: `url(${photo.url})`,
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
                {photo.username}
              </p>
              <p>
                <span className="description">Description: </span>
                {photo.description}
              </p>
              <p>
                <span className="description">Tag: </span>
                {photo.team}
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
          <div className="driverGrid">{photo}</div>
        </div>
      </div>
    );
  }
}

export default Photos;
