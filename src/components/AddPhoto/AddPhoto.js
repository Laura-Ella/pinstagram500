import React, { Component } from "react";
import "./AddPhoto.css";
import { createNewPhoto } from "../../actions/photosAndCollections";
import axios from "axios";

export default class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // birthplace: "",
      // team: "",
      // rank: 1,
      description: "",
      username: "",
      url: "",
      tag: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    axios
      .post("https://pinstagram500-api.herokuapp.com/", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="form">
        <div className="driverGrid2">
          <div className="driverTitle">Add a Photo</div>
          <div className="name">
            <p>Images</p>
            <input
              className="extend"
              type="text"
              name="url"
              // name={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div className="user">
            <p>User</p>
            <input
              className="extend"
              type="text"
              name="username"
              // name={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div className="description">
            <p>Description</p>
            <input
              className="extend"
              type="text"
              name="description"
              // name={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div className="tag">
            <p>Tag</p>
            <input
              className="extend"
              type="text"
              name="tag"
              // name={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
