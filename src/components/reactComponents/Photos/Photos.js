import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Photos.css";
import axios from "axios";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // let photoTags = this.props.driverData.map(list => {
    //   return list.name;
    // });

    // let keyList = Object.keys(this.state);
    // let temp = {};
    // console.log(keyList);
    // keyList.forEach(key => {
    //   console.log(this.state[key]);
    //   if (!(this.state[key] === "")) {
    //     temp[key] = this.state[key];
    //   }
    // });
    // console.log(temp);

    // if (driverNames.includes(this.state.name)) {
    axios
      .put(`https://pinstagram500-api.herokuapp.com/${id}`, this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    // }
  }
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
              <p>
                <span className="description">Tag: </span>
                {photo.tag}
              </p>
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
