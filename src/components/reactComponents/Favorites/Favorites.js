import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

class Favorites extends Component {
  render() {
    let favorite = this.props.favoriteData.map((favorite, index) => {
      return (
        <div
          className="driverDivs"
          key={index}
          style={{
            backgroundImage: `url(${favorite})`,
            backgroundPosition: "center",
            backgroundSize: "250px 250px",
            backgroundRepeat: "no-repeat",
            position: "relative",
            textAlign: "center"
          }}
        >
          {/* <div className="textContainer">
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
          </div> */}
        </div>
      );
    });

    return (
      <div>
        <div style={{ backgroundImage: `url(${this.props.favoriteData})` }}>
          {this.props.favoriteData}
        </div>
        <div>{favorite}</div>
      </div>
    );
  }
}

export default Favorites;
