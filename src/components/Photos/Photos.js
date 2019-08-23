import React, { Component } from "react";
import "./Photos.css";
import axios from "axios";
import HeartCheckbox from "react-heart-checkbox";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      checked: false,
      tag: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(id) {
    axios
      .put(`https://pinstagram500-api.herokuapp.com/${id}`, this.state)
      .then(response => {
        console.log(response);
        this.setState({
          photos: response.data
        });
      })
      .catch(err => {
        console.error(err);
      });
    this.props.getMorePhotos();
  }
  heartClick = (event, props) => {
    this.setState({ checked: !this.state.checked });
    if (this.state.checked == false) {
      setTimeout(
        function() {
          this.setState({ checked: false });
        }.bind(this),
        400
      );
    }
  };
  incrementLikes(id) {
    axios
      .put(`https://pinstagram500-api.herokuapp.com/photo/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    this.props.getMorePhotos();
  }
  deletePhoto(id) {
    axios
      .delete(`https://pinstagram500-api.herokuapp.com/${id}`)

      .then(res => {
        console.log(res);
        this.setState({ photos: res.data });
      });
    this.props.getMorePhotos();
  }

  render() {
    const { checked } = this.state;
    let photo = this.props.photoData.map((photo, index) => {
      return (
        <div key={photo._id} className="cardContainer">
          <div
            className="photoDivs"
            style={{
              backgroundImage: `url(${photo.url})`,
              backgroundPosition: "center",
              backgroundSize: "450px 650px",
              backgroundRepeat: "no-repeat",
              position: "relative",
              textAlign: "center"
            }}
          >
            <div className="textContainer">
              <div className="textGrid">
                <p className="descriptionValue">
                  <span className="descriptionTitle">User: </span>
                  {photo.username}
                </p>
                <p className="descriptionValue">
                  <span className="descriptionTitle">Tag: </span>
                  {photo.tag}
                </p>
                <p className="descriptionValue">
                  <span className="descriptionTitle">Description: </span>
                  {photo.description}
                </p>
                <p className="descriptionValue">
                  <span className="descriptionTitle">Likes: </span>
                  {photo.likes}
                </p>
                <br />
                <div className="heartContainer">
                  <HeartCheckbox
                    className="heart"
                    checked={checked}
                    onClick={e => {
                      e.preventDefault();
                      this.incrementLikes(photo._id, index);
                      this.heartClick(photo._id, index);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottomContain">
            <div className="giveTag">
              <input
                className="tagInputBox"
                type="text"
                name="tag"
                placeholder="Add a Tag"
                onChange={this.handleChange}
              />
              <input
                className="submit"
                type="submit"
                value="Submit"
                onClick={() => this.handleSubmit(photo._id)}
              />
            </div>
            <button
              className="delete"
              onClick={() => this.deletePhoto(photo._id)}
            >
              Delete Photo
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="photoFlex">{photo}</div>
      </div>
    );
  }
}

export default Photos;
