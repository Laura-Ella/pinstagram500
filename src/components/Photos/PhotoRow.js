import React from "react";
import "./PhotoRow.css";
import { deletePhoto, updatePhoto } from "../../actions/photosAndCollections";
import axios from "axios";

const PhotoRow = ({
  _id = "",
  description = "",
  tag = "",
  url = "",
  username = "",

  onChange = () => {},
  onClick = () => {
    axios
      .delete(
        `${"https://pinstagram500-api.herokuapp.com/5d5db23bfe5c9a001701c3a6"}`
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }
}) => (
  <div>
    <div className="contain">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          border: "2px solid black",
          textAlign: "left"
        }}
      >
        <div className="textContainer">
          <div className="text">
            <p>
              <span className="tagDisplay">User: </span>
              {username}
            </p>
            <p>
              <span className="tagDisplay">ID: </span>
              {_id}
            </p>

            <p>
              <span className="tagDisplay">Description: </span>
              {description}
            </p>
            <p>
              <span className="tagDisplay">Tag: </span>
              {tag}
            </p>

            {/* <p>
              <span className="description">Birthplace: </span>
              {birthplace}
            </p>
            <p>
              <span className="description">Team: </span>
              {team}
            </p>
            <p>
              <span className="description">Rank: </span>
              {rank}
            </p> */}
          </div>
        </div>
      </div>
      <select
        className="teamChanger"
        onChange={onChange}
        name="url"
        value={url}
      >
        <option value={url} />
        <option value={url}>Add to Favorites</option>
      </select>

      <button className="delete" onClick={onClick}>
        X
      </button>
    </div>
  </div>
);

export default PhotoRow;
