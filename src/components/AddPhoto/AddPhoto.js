import React, { Component } from "react";
import "./AddPhoto.css";
import { createNewPhoto } from "../../actions/photosAndCollections";

export default class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birthplace: "",
      team: "",
      rank: 1,
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    let name = evt.target[0].value;
    let birthplace = evt.target[1].value;
    let team = evt.target[2].value;
    let rank = evt.target[3].value;
    let image = evt.target[4].value;

    this.props.dispatch(createNewPhoto(name, birthplace, team, rank, image));

    evt.target[0].value = "";
    evt.target[1].value = "";
    evt.target[2].value = "";
    evt.target[3].value = "";
    evt.target[4].value = "";
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div classname="centerFlex">
          <div className="formGrid">
            <div className="driverTitle">Add a Photo</div>
            <div className="name">
              <label>Name:</label>
              <input className="inputField" type="text" />
            </div>
            <div className="birthplace">
              <label>Birthplace:</label>
              <input className="inputField" type="text" />
            </div>
            <div className="team">
              <label>Team:</label>
              <input className="inputField" type="text" />
            </div>
            <div className="rank">
              <label>Rank:</label>
              <input className="inputField" type="number" />
            </div>
            <div className="image">
              <label>Image:</label>
              <input className="inputField" type="text" />
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}
