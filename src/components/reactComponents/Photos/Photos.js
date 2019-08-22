import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  heartClick = (event, props) => {
    this.setState({ checked: !this.state.checked });
  };

  incrementLikes = id => {
    console.log(this.props.photoData);
    axios
      .put(
        `https://pinstagram500-api.herokuapp.com/${id}`,
        this.state.likes + 1
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });

    // this.setState({
    //   counters: this.state.counters + 1
    // });
  };
  // votePost = async (id, index) => {
  //   axios.put(`https://pinstagram500-api.herokuapp.com/${id}`);

  //   // Update your state like this:
  //   this.setState(({ posts }) => {
  //     posts[index] = newPostData;
  //     return posts;
  //   });
  // };
  render() {
    const { checked } = this.state;
    let photo = this.props.photoData.map((photo, index) => {
      return (
        <div className="cardContainer">
          <div
            className="photoDivs"
            key={index}
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
              <div className="text">
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
                <p>
                  <span className="description">Likes: </span>
                  {photo.likes}
                </p>
                <br />
                <div
                  className="clicker"
                  onClick={() => this.incrementLikes(photo._id, index)}
                >
                  XXX
                </div>
                <div>
                  <HeartCheckbox
                    className="heart"
                    checked={checked}
                    onClick={() => this.heartClick(photo._id, index)}
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
              <Link to="/">
                <input
                  className="submit"
                  type="submit"
                  value="Submit"
                  onClick={() => this.handleSubmit(photo._id)}
                />
              </Link>
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
        <div className="photoGrid">
          {photo[0]}
          {photo[1]}
          {photo[2]}
        </div>
      </div>
    );
  }
}

export default Photos;
