import React from "react";
import "./PhotoRow.css";

const PhotoRow = ({
  description = "",
  tag = "",
  url = "",
  username = "",

  onChange = () => {},
  onClick = () => {}
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
