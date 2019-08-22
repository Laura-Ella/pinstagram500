import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Photos.css";
import axios from "axios";
import HeartCheckbox from "react-heart-checkbox";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      tag: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deletePhoto(id) {
    axios
      .delete(`https://pinstagram500-api.herokuapp.com/${id}`)
      .then(() => {
        return axios.get(`https://pinstagram500-api.herokuapp.com/`);
      })
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
      });
  }
  // updatePhoto(id) {
  //   axios
  //     .put(`https://pinstagram500-api.herokuapp.com/${id}`)
  //     .then(() => {
  //       return axios.get(`https://pinstagram500-api.herokuapp.com/`);
  //     })
  //     .then(res => {
  //       const photos = res.data;
  //       this.setState({ photos });
  //     });
  // }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(id) {
    axios
      .put(`https://pinstagram500-api.herokuapp.com/${id}`, this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }
  onClick = (event, props) => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    const { checked } = this.state;
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
                <span className="description">Likes: </span>
                {photo.likes}
              </p>
              <HeartCheckbox checked={checked} onClick={this.onClick} />
            </div>
          </div>
          {/* <select
            className="teamChanger"
            onChange={() => this.updatePhoto(photo._id)}
            name="tag"
            value={photo.tag}
          >
            <option value={" "}>{photo.tag}</option>
            <option value={"Earth"}>#Earth</option>
            <option value={"Computers"}>#Computers</option>
          </select> */}
          <input
            className="extend"
            type="text"
            name="tag"
            placeholder="Enter a Tag"
            onChange={this.handleChange}
          />
          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={() => this.handleSubmit(photo._id)}
          />
          <button
            className="delete"
            onClick={() => this.deletePhoto(photo._id)}
          >
            Remove Photo
          </button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <div className="driverGrid">{photo[0]}</div>
        </div>
      </div>
    );
  }
}

export default Photos;
