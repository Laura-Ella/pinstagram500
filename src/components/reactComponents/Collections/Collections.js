import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Collections.css";
import HeartCheckbox from "react-heart-checkbox";

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClick = (event, props) => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    const { checked } = this.state;
    let collection = this.props.collectionData.map((collection, index) => {
      return (
        <div className="collectionContainer">
          <p className="collectionTitle">
            <span>Collection: </span>
            {collection.title}
          </p>
          <p className="collectionTags">
            <span>Tags: </span>
            {`${collection.tags}`}
          </p>
          <div>
            <div
              className="collectionDivs"
              key={index}
              style={{
                backgroundImage: `url(${collection.url[0]})`,
                backgroundPosition: "center",
                backgroundSize: "600px 500px",
                backgroundRepeat: "no-repeat",
                position: "relative",
                textAlign: "center"
              }}
            >
              <div className="textContainer">
                <div className="text">
                  <div>
                    <HeartCheckbox
                      className="heart"
                      checked={checked}
                      onClick={this.onClick}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="collectionDivs"
              key={index}
              style={{
                backgroundImage: `url(${collection.url[1]})`,
                backgroundPosition: "center",
                backgroundSize: "600px 500px",
                backgroundRepeat: "no-repeat",
                position: "relative",
                textAlign: "center"
              }}
            >
              <div className="textContainer">
                <div className="text">
                  <div>
                    <HeartCheckbox
                      className="heart"
                      checked={checked}
                      onClick={this.onClick}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="collectionDivs"
              key={index}
              style={{
                backgroundImage: `url(${collection.url[3]})`,
                backgroundPosition: "center",
                backgroundSize: "600px 500px",
                backgroundRepeat: "no-repeat",
                position: "relative",
                textAlign: "center"
              }}
            >
              {" "}
              <div className="textContainer">
                <div className="text">
                  <div>
                    <HeartCheckbox
                      className="heart"
                      checked={checked}
                      onClick={this.onClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      // });
    });
    return (
      <div className="collectionFlex">
        <div className="collectionGrid">
          {collection[0]}
          {collection[1]}
          {/* {collection[3]}
          {collection[4]} */}
        </div>
      </div>
    );
  }
}

export default Collections;
