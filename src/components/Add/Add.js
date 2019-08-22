import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./Add.css";

class AddNewPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      .post("https://pinstagram500-api.herokuapp.com", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    this.props.getMorePhotos();
    this.props.getMorePhotos();
  }
  render() {
    return (
      <div className="formInput">
        <div className="formGrid">
          <div className="formTitle">Add a Photo</div>
          <div className="inputField">
            <p>Image</p>
            <input
              className="extend"
              type="text"
              name="url"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputField">
            <p>User</p>
            <input
              className="extend"
              type="text"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputField">
            <p>Description</p>
            <input
              className="extend"
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputField">
            <p>Tag</p>
            <input
              className="extend"
              type="text"
              name="tag"
              onChange={this.handleChange}
            />
          </div>
          <Link to="/">
            <input
              className="submit"
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default AddNewPhoto;
