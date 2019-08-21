import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Photos.css";
import axios from "axios";

class Photos extends Component {
  deleteContact(id) {
    // <-- declare id parameter
    axios.delete(`https://pinstagram500-api.herokuapp.com/${id}`).then(res => {
      const photos = res.data;
      this.setState({ photos });
    });
  }
  onClick = () => {
    const apiUrl = "https://pinstagram500-api.herokuapp.com/";
    const id = this.photo._id;
    const url = `${apiUrl}${id}`;

    axios
      .delete(url)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  };
  onChange = () => {};
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
                <span className="description">Name: </span>
                {photo.name}
              </p>
              <p>
                <span className="description">ID: </span>
                {photo._id}
              </p>
              <p>
                <span className="description">Birthplace: </span>
                {photo.birthplace}
              </p>
              <p>
                <span className="description">Team: </span>
                {photo.team}
              </p>
              <p>
                <span className="description">Rank: </span>
                {photo.rank}
              </p>
            </div>
          </div>
          <button
            className="delete"
            onClick={() => this.deleteContact(photo._id)}
          >
            X
          </button>
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
